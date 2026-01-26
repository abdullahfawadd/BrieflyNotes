'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ResearchWorkspace() {
    const [inputUrl, setInputUrl] = useState('');

    return (
        <div className="bg-slate-50 text-slate-900 font-sans antialiased min-h-screen flex flex-col overflow-hidden selection:bg-slate-200 selection:text-slate-900">
            {/* Header */}
            <header className="flex-none bg-white border-b border-slate-200 z-50">
                <div className="px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Link href="/" className="text-slate-500 hover:text-slate-900 transition-colors">
                            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
                        </Link>
                        <h1 className="text-[14px] font-medium tracking-tight text-slate-700 font-serif italic">Research Notebook</h1>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="text-slate-400 hover:text-slate-900 transition-colors">
                            <span className="material-symbols-outlined text-[20px]">search</span>
                        </button>
                        <button className="text-slate-400 hover:text-slate-900 transition-colors">
                            <span className="material-symbols-outlined text-[20px]">bookmark_border</span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 flex flex-col overflow-hidden relative w-full max-w-lg mx-auto bg-white border-x border-slate-200 shadow-sm">
                {/* Source Input Section */}
                <div className="flex-none px-6 py-6 border-b border-slate-100 bg-white">
                    <div className="mb-4">
                        <span className="text-[10px] font-bold tracking-[0.15em] text-slate-400 uppercase">New Research</span>
                    </div>

                    {/* URL Input */}
                    <div className="relative group mb-4">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <span className="material-symbols-outlined text-slate-400 text-[18px]">link</span>
                        </div>
                        <input
                            type="text"
                            value={inputUrl}
                            onChange={(e) => setInputUrl(e.target.value)}
                            className="block w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-sm text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-400 focus:border-slate-400 transition-all"
                            placeholder="Paste YouTube or video URL..."
                        />
                    </div>

                    {/* Mode Selector */}
                    <div className="flex gap-2 mb-4">
                        <button className="flex-1 py-2 px-3 text-xs font-medium bg-slate-900 text-white rounded-sm">
                            Summary
                        </button>
                        <button className="flex-1 py-2 px-3 text-xs font-medium bg-slate-100 text-slate-600 rounded-sm hover:bg-slate-200 transition-colors">
                            Study Notes
                        </button>
                        <button className="flex-1 py-2 px-3 text-xs font-medium bg-slate-100 text-slate-600 rounded-sm hover:bg-slate-200 transition-colors">
                            Quiz
                        </button>
                    </div>

                    <button className="w-full py-3 bg-primary hover:bg-primary-hover text-white text-sm font-semibold rounded-sm transition-colors flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
                        Generate Notes
                    </button>
                </div>

                {/* Sample Research Content */}
                <div className="flex-none px-6 py-4 border-b border-slate-100 bg-white">
                    <div className="flex gap-4 items-start">
                        <div className="w-16 h-16 shrink-0 bg-slate-100 rounded border border-slate-200 overflow-hidden relative group cursor-pointer">
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300" />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/5 group-hover:bg-black/10 transition-colors">
                                <span className="material-symbols-outlined text-[20px] text-white drop-shadow-md">play_circle</span>
                            </div>
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="px-1.5 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase bg-slate-100 text-slate-500">Source</span>
                                <span className="text-[11px] text-slate-400 font-mono">12m 34s</span>
                            </div>
                            <h2 className="text-[15px] font-semibold text-slate-900 leading-snug font-serif">The Future of AI in 2024: Integration vs Innovation</h2>
                            <div className="flex items-center gap-3 mt-2">
                                <a className="text-[11px] text-slate-500 hover:text-primary hover:underline flex items-center gap-1" href="#">
                                    <span className="material-symbols-outlined text-[12px]">link</span>
                                    youtu.be/dQw4w...
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Notes Content */}
                <div className="flex-1 overflow-y-auto no-scrollbar scroll-smooth bg-white">
                    <div className="max-w-[90%] mx-auto py-8 pr-2 pl-4">
                        {/* Abstract */}
                        <section className="mb-10 relative">
                            <div className="absolute -left-3 top-1 w-0.5 h-full bg-slate-100"></div>
                            <span className="text-[10px] font-bold tracking-[0.15em] text-slate-400 uppercase mb-4 block pl-2">Abstract</span>
                            <p className="text-[18px] leading-loose text-slate-800 font-serif font-light pl-2">
                                This video explores the rapid evolution of generative AI, focusing on <span className="bg-yellow-50 text-slate-900 px-1 decoration-slate-300 underline decoration-1 underline-offset-4 cursor-pointer hover:bg-yellow-100 transition-colors">multimodal models</span>. The speaker argues that 2024 will be the year of &ldquo;integration&rdquo; rather than just &ldquo;innovation,&rdquo; with AI becoming invisible in everyday OS features.
                            </p>
                        </section>

                        {/* Notes & Concepts */}
                        <section className="space-y-10 mb-12">
                            <div className="flex items-center gap-3 pb-2 border-b border-slate-100">
                                <span className="material-symbols-outlined text-[18px] text-slate-400">format_list_bulleted</span>
                                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-widest">Notes &amp; Concepts</h3>
                            </div>

                            {/* Note 1 */}
                            <div className="group relative">
                                <div className="absolute -left-10 top-1.5 flex flex-col items-end w-8">
                                    <button className="text-[10px] font-mono text-slate-400 hover:text-primary transition-colors text-right w-full cursor-pointer hover:font-bold">02:14</button>
                                </div>
                                <div className="pl-2 border-l-2 border-transparent hover:border-slate-200 transition-colors duration-300">
                                    <h4 className="text-[16px] font-semibold text-slate-900 mb-2 font-serif">Multimodal Integration</h4>
                                    <p className="text-[16px] leading-loose text-slate-600 font-serif font-light">
                                        Models can now process text, images, and audio simultaneously. This dramatically reduces latency and improves context awareness across different mediums, creating a more seamless user experience.
                                    </p>
                                </div>
                            </div>

                            {/* Note 2 */}
                            <div className="group relative">
                                <div className="absolute -left-10 top-1.5 flex flex-col items-end w-8">
                                    <button className="text-[10px] font-mono text-slate-400 hover:text-primary transition-colors text-right w-full cursor-pointer hover:font-bold">05:42</button>
                                </div>
                                <div className="pl-2 border-l-2 border-transparent hover:border-slate-200 transition-colors duration-300">
                                    <h4 className="text-[16px] font-semibold text-slate-900 mb-2 font-serif">On-Device Processing</h4>
                                    <p className="text-[16px] leading-loose text-slate-600 font-serif font-light">
                                        Moving inference from cloud to edge devices (phones/laptops) ensures better privacy and significantly faster response times for users.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Glossary */}
                        <section className="space-y-6 pb-20">
                            <div className="flex items-center gap-3 pb-2 border-b border-slate-100">
                                <span className="material-symbols-outlined text-[18px] text-slate-400">dictionary</span>
                                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-widest">Glossary</h3>
                            </div>

                            <div className="grid gap-4">
                                <div className="p-4 bg-slate-50 border border-slate-100 rounded-sm">
                                    <div className="flex items-baseline justify-between mb-1">
                                        <span className="font-serif font-medium text-slate-900 text-sm">LLM</span>
                                        <span className="text-[10px] text-slate-400 uppercase tracking-wide">noun</span>
                                    </div>
                                    <p className="text-[13px] leading-relaxed text-slate-600 font-light font-serif">
                                        Large Language Model. AI algorithm using deep learning and massive datasets to understand and generate content.
                                    </p>
                                </div>

                                <div className="p-4 bg-slate-50 border border-slate-100 rounded-sm">
                                    <div className="flex items-baseline justify-between mb-1">
                                        <span className="font-serif font-medium text-slate-900 text-sm">Latency</span>
                                        <span className="text-[10px] text-slate-400 uppercase tracking-wide">noun</span>
                                    </div>
                                    <p className="text-[13px] leading-relaxed text-slate-600 font-light font-serif">
                                        Time delay between cause and effect. In AI, usually the time to first token generation.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

                {/* Bottom Toolbar */}
                <div className="flex-none border-t border-slate-200 bg-white p-3 z-30 pb-6">
                    <div className="flex items-center justify-between gap-4 max-w-[90%] mx-auto">
                        <button className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-50 rounded-full transition-all">
                            <span className="material-symbols-outlined text-[20px]">format_size</span>
                        </button>
                        <button className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-50 rounded-full transition-all">
                            <span className="material-symbols-outlined text-[20px]">edit_note</span>
                        </button>
                        <div className="h-6 w-px bg-slate-200 mx-2"></div>
                        <button className="flex-1 flex items-center justify-between px-4 py-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-full text-left transition-colors group">
                            <span className="text-[13px] text-slate-500 font-serif italic group-hover:text-slate-700">Ask a question...</span>
                            <span className="material-symbols-outlined text-[16px] text-slate-400 group-hover:text-primary">spark</span>
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}
