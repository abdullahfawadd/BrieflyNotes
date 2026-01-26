import { ContentType, SummaryMode } from '@/types';

export interface ValidationResult {
    valid: boolean;
    error?: string;
}

export function validateSummaryRequest(
    content: unknown,
    contentType: unknown,
    mode: unknown
): ValidationResult {
    // Validate content
    if (!content || typeof content !== 'string') {
        return { valid: false, error: 'Content is required' };
    }

    const trimmedContent = content.trim();
    if (trimmedContent.length === 0) {
        return { valid: false, error: 'Content cannot be empty' };
    }

    if (trimmedContent.length > 20000) {
        return { valid: false, error: 'Content is too long (max 20,000 characters)' };
    }

    // Validate content type
    const validContentTypes: ContentType[] = ['youtube', 'article', 'text'];
    if (!contentType || !validContentTypes.includes(contentType as ContentType)) {
        return { valid: false, error: 'Invalid content type. Must be: youtube, article, or text' };
    }

    // Validate mode
    const validModes: SummaryMode[] = ['quick', 'study', 'action'];
    if (!mode || !validModes.includes(mode as SummaryMode)) {
        return { valid: false, error: 'Invalid mode. Must be: quick, study, or action' };
    }

    // Content-type specific validation
    if (contentType === 'youtube') {
        const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)/;
        if (!youtubeRegex.test(trimmedContent)) {
            return { valid: false, error: 'Invalid YouTube URL' };
        }
    }

    if (contentType === 'article') {
        try {
            const url = new URL(trimmedContent);
            if (!['http:', 'https:'].includes(url.protocol)) {
                return { valid: false, error: 'Article URL must use HTTP or HTTPS' };
            }
        } catch {
            return { valid: false, error: 'Invalid article URL' };
        }
    }

    if (contentType === 'text' && trimmedContent.length < 100) {
        return { valid: false, error: 'Text content must be at least 100 characters' };
    }

    return { valid: true };
}
