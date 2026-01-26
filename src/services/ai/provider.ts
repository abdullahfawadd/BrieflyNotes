import { Summary, SummaryMode } from '@/types';

// AI Provider Interface - allows swapping providers easily
export interface AIProvider {
    summarize(content: string, mode: SummaryMode): Promise<Summary>;
}

// Factory to get the current provider
export function getAIProvider(): AIProvider {
    // For MVP, only OpenAI is implemented
    // Future: could read from env to select provider
    const { OpenAIProvider } = require('./openai');
    return new OpenAIProvider();
}
