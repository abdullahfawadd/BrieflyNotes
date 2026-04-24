// Article content extraction
// Uses simple fetch + HTML parsing for MVP

import { JSDOM } from 'jsdom';
import { Readability } from '@mozilla/readability';

export interface ArticleResult {
    success: boolean;
    text?: string;
    title?: string;
    error?: string;
}

export async function extractArticleContent(url: string): Promise<ArticleResult> {
    try {
        // Validate URL
        const parsedUrl = new URL(url);
        if (!['http:', 'https:'].includes(parsedUrl.protocol)) {
            return {
                success: false,
                error: 'Invalid URL. Please provide an HTTP or HTTPS link.'
            };
        }

        // Fetch the article HTML
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (compatible; BrieflyNotes/1.0; +https://brieflynotes.app)',
                'Accept': 'text/html,application/xhtml+xml'
            },
            signal: AbortSignal.timeout(10000) // 10 second timeout
        });

        if (!response.ok) {
            return {
                success: false,
                error: `Failed to fetch article (${response.status}). Please check the URL.`
            };
        }

        const html = await response.text();

        // Parse with JSDOM and Readability
        const dom = new JSDOM(html, { url });
        const reader = new Readability(dom.window.document);
        const article = reader.parse();

        if (!article || !article.textContent) {
            return {
                success: false,
                error: 'Could not extract article content. The page may be behind a paywall or require JavaScript.'
            };
        }

        // Clean up the text
        const text = article.textContent
            .replace(/\s+/g, ' ')
            .trim();

        if (text.length < 100) {
            return {
                success: false,
                error: 'Article content is too short to summarize.'
            };
        }

        // Limit content length to avoid excessive API costs
        const maxLength = 15000;
        const truncatedText = text.length > maxLength
            ? text.substring(0, maxLength) + '...'
            : text;

        return {
            success: true,
            text: truncatedText,
            title: article.title ?? undefined
        };
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown error';

        if (message.includes('timeout') || message.includes('abort')) {
            return {
                success: false,
                error: 'Request timed out. The website may be slow or blocking requests.'
            };
        }

        return {
            success: false,
            error: 'Failed to fetch article. Please check the URL and try again.'
        };
    }
}
