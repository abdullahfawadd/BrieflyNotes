import OpenAI from 'openai';
import { Summary, SummaryMode } from '@/types';
import { AIProvider } from './provider';
import { SYSTEM_PROMPT, getPromptForMode } from './prompts';

export class OpenAIProvider implements AIProvider {
    private client: OpenAI;

    constructor() {
        const apiKey = process.env.OPENAI_API_KEY;
        if (!apiKey) {
            throw new Error('OPENAI_API_KEY environment variable is required');
        }
        this.client = new OpenAI({ apiKey });
    }

    async summarize(content: string, mode: SummaryMode): Promise<Summary> {
        const prompt = getPromptForMode(mode, content);

        const response = await this.client.chat.completions.create({
            model: 'gpt-4.1-mini',
            messages: [
                { role: 'system', content: SYSTEM_PROMPT },
                { role: 'user', content: prompt }
            ],
            temperature: 0.3, // Lower temperature for more consistent output
            max_tokens: 2000,
            response_format: { type: 'json_object' }
        });

        const responseContent = response.choices[0]?.message?.content;
        if (!responseContent) {
            throw new Error('No response from AI');
        }

        try {
            const parsed = JSON.parse(responseContent);

            // Validate and normalize the response
            return {
                title: parsed.title || 'Summary',
                sections: Array.isArray(parsed.sections) ? parsed.sections : [],
                keyTakeaways: Array.isArray(parsed.keyTakeaways) ? parsed.keyTakeaways : [],
                conclusion: parsed.conclusion || undefined,
                metadata: {
                    contentType: 'text', // Will be set by caller
                    mode,
                    processedAt: new Date().toISOString()
                }
            };
        } catch {
            throw new Error('Failed to parse AI response');
        }
    }
}
