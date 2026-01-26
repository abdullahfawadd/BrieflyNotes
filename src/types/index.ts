// Type definitions for BrieflyNotes

export type SummaryMode = 'quick' | 'study' | 'action';

export type ContentType = 'youtube' | 'article' | 'text';

export interface SummaryRequest {
    content: string;
    contentType: ContentType;
    mode: SummaryMode;
}

export interface SummarySection {
    heading?: string;
    points: string[];
}

export interface Summary {
    title: string;
    sections: SummarySection[];
    keyTakeaways: string[];
    conclusion?: string;
    metadata: {
        contentType: ContentType;
        mode: SummaryMode;
        sourceUrl?: string;
        processedAt: string;
    };
}

// API Response Shape - Locked contract
export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: {
        code: string;
        message: string;
    };
}

export type SummaryApiResponse = ApiResponse<Summary>;
