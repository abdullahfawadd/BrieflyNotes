import { Summary } from '@/types';

interface SummaryDisplayProps {
    summary: Summary;
}

export default function SummaryDisplay({ summary }: SummaryDisplayProps) {
    return (
        <article className="rounded-2xl bg-white dark:bg-[#18181b] border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
            {/* Header */}
            <header className="px-8 pt-8 pb-6 border-b border-slate-100 dark:border-slate-800">
                {/* Category Badge */}
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-4">
                    <span className="material-symbols-outlined text-[16px]">
                        {summary.metadata.contentType === 'youtube' ? 'smart_display' :
                            summary.metadata.contentType === 'article' ? 'article' : 'notes'}
                    </span>
                    <span className="capitalize">{summary.metadata.contentType}</span>
                    <span>•</span>
                    <span className="capitalize">{summary.metadata.mode} Notes</span>
                </div>

                {/* Title */}
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white leading-tight mb-2">
                    {summary.title}
                </h1>

                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">schedule</span>
                        {new Date(summary.metadata.processedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                    {summary.metadata.sourceUrl && (
                        <a
                            href={summary.metadata.sourceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-[#1246e2] hover:underline"
                        >
                            <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                            View Source
                        </a>
                    )}
                </div>
            </header>

            {/* Content */}
            <div className="p-8 space-y-8">
                {/* TL;DR Box */}
                {summary.keyTakeaways.length > 0 && (
                    <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-6 border border-slate-100 dark:border-slate-700">
                        <div className="flex items-center gap-2 mb-3 text-slate-900 dark:text-white font-semibold">
                            <span className="material-symbols-outlined text-[#1246e2]">bolt</span>
                            <h3>Key Takeaways</h3>
                        </div>
                        <ul className="space-y-2">
                            {summary.keyTakeaways.map((takeaway, i) => (
                                <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                                    <span className="material-symbols-outlined text-[#1246e2] text-[16px] mt-0.5 shrink-0">check_circle</span>
                                    {takeaway}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Sections */}
                {summary.sections.map((section, index) => (
                    <section key={index} className="space-y-4">
                        {section.heading && (
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-200 dark:border-slate-700 pb-2">
                                <span className="material-symbols-outlined text-slate-400">lightbulb</span>
                                {section.heading}
                            </h2>
                        )}
                        <ul className="space-y-3">
                            {section.points.map((point, pointIndex) => (
                                <li key={pointIndex} className="flex items-start gap-3 text-slate-600 dark:text-slate-300 leading-relaxed">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#1246e2] mt-2.5 shrink-0" />
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </section>
                ))}

                {/* Conclusion */}
                {summary.conclusion && (
                    <footer className="pt-6 border-t border-slate-200 dark:border-slate-700">
                        <div className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-slate-400 mt-0.5">format_quote</span>
                            <p className="text-slate-500 dark:text-slate-400 italic">{summary.conclusion}</p>
                        </div>
                    </footer>
                )}
            </div>
        </article>
    );
}
