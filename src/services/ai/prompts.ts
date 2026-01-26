import { SummaryMode } from '@/types';

// Prompt templates for each summary mode
// These are carefully crafted to produce consistent, high-quality output

export const SYSTEM_PROMPT = `You are an expert summarization assistant. Your task is to create clear, structured summaries of content.

Rules:
- Be accurate and faithful to the source content
- No hallucination or adding information not in the source
- Use clear, neutral language
- No emojis
- No hype or exaggerated language
- Structure output as JSON matching the required schema`;

export const getPromptForMode = (mode: SummaryMode, content: string): string => {
    const prompts: Record<SummaryMode, string> = {
        quick: `Create an ultra-concise summary of the following content.

Requirements:
- Title: A clear, descriptive title (max 10 words)
- 3-5 key bullet points only
- Each point should be 1-2 sentences max
- Focus on the most critical information
- Include 2-3 key takeaways
- No conclusion needed for quick notes

Content to summarize:
"""
${content}
"""

Respond with valid JSON matching this structure:
{
  "title": "string",
  "sections": [{ "points": ["string"] }],
  "keyTakeaways": ["string"],
  "conclusion": null
}`,

        study: `Create a comprehensive study-friendly summary of the following content.

Requirements:
- Title: A clear, descriptive title
- Organize into logical sections with clear headings
- 8-12 bullet points total across sections
- Each point should capture one complete concept
- Include 3-4 key takeaways for revision
- Add a brief conclusion (1-2 sentences)

Content to summarize:
"""
${content}
"""

Respond with valid JSON matching this structure:
{
  "title": "string",
  "sections": [{ "heading": "string", "points": ["string"] }],
  "keyTakeaways": ["string"],
  "conclusion": "string"
}`,

        action: `Create an action-focused summary of the following content.

Requirements:
- Title: A clear, descriptive title focused on outcomes
- Focus on actionable insights and next steps
- Frame points as things the reader can DO
- Use action verbs at the start of each point
- 5-8 action items total
- Include 2-3 key takeaways focused on implementation
- Conclusion should motivate action

Content to summarize:
"""
${content}
"""

Respond with valid JSON matching this structure:
{
  "title": "string",
  "sections": [{ "heading": "string", "points": ["string"] }],
  "keyTakeaways": ["string"],
  "conclusion": "string"
}`
    };

    return prompts[mode];
};
