// YouTube transcript extraction using youtube-transcript library
// Simple, single-dependency approach

import { YoutubeTranscript } from 'youtube-transcript';

export interface TranscriptResult {
    success: boolean;
    text?: string;
    error?: string;
}

export function extractVideoId(url: string): string | null {
    const patterns = [
        /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
        /^([a-zA-Z0-9_-]{11})$/ // Direct video ID
    ];

    for (const pattern of patterns) {
        const match = url.match(pattern);
        if (match && match[1]) {
            return match[1];
        }
    }
    return null;
}

export async function extractYouTubeTranscript(url: string): Promise<TranscriptResult> {
    const videoId = extractVideoId(url);

    if (!videoId) {
        return {
            success: false,
            error: 'Invalid YouTube URL. Please provide a valid YouTube video link.'
        };
    }

    try {
        const transcriptItems = await YoutubeTranscript.fetchTranscript(videoId);

        if (!transcriptItems || transcriptItems.length === 0) {
            return {
                success: false,
                error: 'No transcript available for this video. The video may not have captions enabled.'
            };
        }

        // Combine transcript segments into clean text
        const text = transcriptItems
            .map(item => item.text)
            .join(' ')
            .replace(/\s+/g, ' ') // Clean up whitespace
            .trim();

        if (text.length < 50) {
            return {
                success: false,
                error: 'Transcript is too short to summarize.'
            };
        }

        return {
            success: true,
            text
        };
    } catch (error) {
        // Clean error message for users
        const message = error instanceof Error ? error.message : 'Unknown error';

        if (message.includes('disabled') || message.includes('unavailable')) {
            return {
                success: false,
                error: 'Transcript is not available for this video. Please try a video with captions enabled.'
            };
        }

        return {
            success: false,
            error: 'Failed to extract transcript. Please check the URL and try again.'
        };
    }
}
