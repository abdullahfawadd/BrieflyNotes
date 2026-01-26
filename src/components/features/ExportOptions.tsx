'use client';

import { useState } from 'react';
import { Summary } from '@/types';

interface ExportOptionsProps {
    summary: Summary;
}

export default function ExportOptions({ summary }: ExportOptionsProps) {
    const [copied, setCopied] = useState(false);

    const formatAsText = (): string => {
        let text = `${summary.title}\n${'='.repeat(summary.title.length)}\n\n`;

        if (summary.keyTakeaways.length > 0) {
            text += `KEY TAKEAWAYS\n${'-'.repeat(14)}\n`;
            summary.keyTakeaways.forEach(takeaway => {
                text += `✓ ${takeaway}\n`;
            });
            text += '\n';
        }

        summary.sections.forEach(section => {
            if (section.heading) {
                text += `${section.heading}\n${'-'.repeat(section.heading.length)}\n`;
            }
            section.points.forEach(point => {
                text += `• ${point}\n`;
            });
            text += '\n';
        });

        if (summary.conclusion) {
            text += `---\n${summary.conclusion}\n`;
        }

        return text;
    };

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(formatAsText());
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            // Fallback
            const textarea = document.createElement('textarea');
            textarea.value = formatAsText();
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const handleDownloadPDF = () => {
        window.print();
    };

    return (
        <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
            <span className="text-sm text-slate-500 dark:text-slate-400">Export your notes</span>

            <div className="flex items-center gap-2">
                <button
                    type="button"
                    onClick={handleCopy}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${copied
                            ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                            : 'bg-white dark:bg-[#18181b] border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                        }`}
                >
                    <span className="material-symbols-outlined text-[18px]">
                        {copied ? 'check' : 'content_copy'}
                    </span>
                    {copied ? 'Copied!' : 'Copy'}
                </button>

                <button
                    type="button"
                    onClick={handleDownloadPDF}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-white dark:bg-[#18181b] border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
                >
                    <span className="material-symbols-outlined text-[18px]">download</span>
                    PDF
                </button>

                <button
                    type="button"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-white dark:bg-[#18181b] border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
                >
                    <span className="material-symbols-outlined text-[18px]">share</span>
                    Share
                </button>
            </div>
        </div>
    );
}
