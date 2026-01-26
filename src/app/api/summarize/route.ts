import { NextRequest, NextResponse } from 'next/server';
import { SummaryApiResponse, ContentType, SummaryMode } from '@/types';
import { validateSummaryRequest } from '@/lib/validation';
import { checkRateLimit, getClientIdentifier } from '@/lib/rate-limiter';
import { getAIProvider } from '@/services/ai/provider';
import { extractYouTubeTranscript } from '@/services/extractor/youtube';
import { extractArticleContent } from '@/services/extractor/article';

// Stable API Response Shape - locked contract
function successResponse(data: SummaryApiResponse['data']): NextResponse<SummaryApiResponse> {
    return NextResponse.json({
        success: true,
        data
    });
}

function errorResponse(
    code: string,
    message: string,
    status: number = 400
): NextResponse<SummaryApiResponse> {
    return NextResponse.json({
        success: false,
        error: { code, message }
    }, { status });
}

export async function POST(request: NextRequest) {
    try {
        // Rate limiting
        const clientId = getClientIdentifier(request);
        const rateLimit = checkRateLimit(clientId);

        if (!rateLimit.allowed) {
            return errorResponse(
                'RATE_LIMIT_EXCEEDED',
                `Too many requests. Please try again in ${Math.ceil((rateLimit.resetAt - Date.now()) / 1000)} seconds.`,
                429
            );
        }

        // Parse request body
        let body;
        try {
            body = await request.json();
        } catch {
            return errorResponse('INVALID_JSON', 'Invalid JSON in request body');
        }

        const { content, contentType, mode } = body;

        // Validate input
        const validation = validateSummaryRequest(content, contentType, mode);
        if (!validation.valid) {
            return errorResponse('VALIDATION_ERROR', validation.error!);
        }

        // Extract content based on type
        let textContent: string;
        let sourceUrl: string | undefined;

        if (contentType === 'youtube') {
            const result = await extractYouTubeTranscript(content);
            if (!result.success) {
                return errorResponse('EXTRACTION_ERROR', result.error!);
            }
            textContent = result.text!;
            sourceUrl = content;
        } else if (contentType === 'article') {
            const result = await extractArticleContent(content);
            if (!result.success) {
                return errorResponse('EXTRACTION_ERROR', result.error!);
            }
            textContent = result.text!;
            sourceUrl = content;
        } else {
            // Raw text
            textContent = content;
        }

        // Generate summary using AI
        const aiProvider = getAIProvider();
        const summary = await aiProvider.summarize(textContent, mode as SummaryMode);

        // Update metadata with actual content type and source
        summary.metadata.contentType = contentType as ContentType;
        summary.metadata.sourceUrl = sourceUrl;

        // Add rate limit headers
        const response = successResponse(summary);
        response.headers.set('X-RateLimit-Remaining', rateLimit.remaining.toString());
        response.headers.set('X-RateLimit-Reset', rateLimit.resetAt.toString());

        return response;

    } catch (error) {
        console.error('Summarization error:', error);

        const message = error instanceof Error ? error.message : 'Unknown error';

        // Handle specific errors
        if (message.includes('OPENAI_API_KEY')) {
            return errorResponse('CONFIG_ERROR', 'AI service not configured', 500);
        }

        return errorResponse(
            'INTERNAL_ERROR',
            'An error occurred while processing your request. Please try again.',
            500
        );
    }
}
