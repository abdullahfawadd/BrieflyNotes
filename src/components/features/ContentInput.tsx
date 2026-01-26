'use client';

import { useState } from 'react';
import { ContentType } from '@/types';

interface ContentInputProps {
    onSubmit: (content: string, contentType: ContentType) => void;
    isLoading: boolean;
}

type InputTab = 'url' | 'text';

export default function ContentInput({ onSubmit, isLoading }: ContentInputProps) {
    const [activeTab, setActiveTab] = useState<InputTab>('url');
    const [urlInput, setUrlInput] = useState('');
    const [textInput, setTextInput] = useState('');
    const [error, setError] = useState('');

    const detectContentType = (url: string): ContentType | null => {
        const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)/;
        if (youtubeRegex.test(url)) return 'youtube';

        const urlRegex = /^https?:\/\/.+/;
        if (urlRegex.test(url)) return 'article';

        return null;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (activeTab === 'url') {
            if (!urlInput.trim()) {
                setError('Please enter a URL');
                return;
            }
            const contentType = detectContentType(urlInput.trim());
            if (!contentType) {
                setError('Please enter a valid YouTube or article URL');
                return;
            }
            onSubmit(urlInput.trim(), contentType);
        } else {
            if (!textInput.trim()) {
                setError('Please enter some text');
                return;
            }
            if (textInput.trim().length < 100) {
                setError('Please enter at least 100 characters');
                return;
            }
            onSubmit(textInput.trim(), 'text');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full space-y-4">
            {/* Tab Selector */}
            <div className="flex gap-2 p-1 bg-slate-100 dark:bg-slate-800 rounded-lg w-fit mx-auto">
                <button
                    type="button"
                    onClick={() => setActiveTab('url')}
                    className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${activeTab === 'url'
                            ? 'bg-white dark:bg-[#18181b] text-[#1246e2] shadow-sm'
                            : 'text-slate-500 hover:text-slate-700 dark:text-slate-400'
                        }`}
                >
                    <span className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px]">link</span>
                        Paste URL
                    </span>
                </button>
                <button
                    type="button"
                    onClick={() => setActiveTab('text')}
                    className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${activeTab === 'text'
                            ? 'bg-white dark:bg-[#18181b] text-[#1246e2] shadow-sm'
                            : 'text-slate-500 hover:text-slate-700 dark:text-slate-400'
                        }`}
                >
                    <span className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px]">notes</span>
                        Paste Text
                    </span>
                </button>
            </div>

            {/* Input Area */}
            <div className="flex gap-3">
                {activeTab === 'url' ? (
                    <div className="relative flex-1">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                            <span className="material-symbols-outlined">link</span>
                        </div>
                        <input
                            type="text"
                            className="w-full h-12 pl-12 pr-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#18181b] focus:ring-2 focus:ring-[#1246e2]/20 focus:border-[#1246e2] text-slate-900 dark:text-white placeholder:text-slate-400 text-sm shadow-sm transition-all"
                            placeholder="Paste YouTube or Article URL here..."
                            value={urlInput}
                            onChange={(e) => {
                                setUrlInput(e.target.value);
                                setError('');
                            }}
                            disabled={isLoading}
                        />
                    </div>
                ) : (
                    <textarea
                        className="flex-1 min-h-[120px] p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#18181b] focus:ring-2 focus:ring-[#1246e2]/20 focus:border-[#1246e2] text-slate-900 dark:text-white placeholder:text-slate-400 text-sm shadow-sm resize-y transition-all"
                        placeholder="Paste your text content here (minimum 100 characters)..."
                        value={textInput}
                        onChange={(e) => {
                            setTextInput(e.target.value);
                            setError('');
                        }}
                        disabled={isLoading}
                        maxLength={15000}
                    />
                )}

                {activeTab === 'url' && (
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="h-12 px-6 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold rounded-xl hover:opacity-90 transition-all shadow-sm flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isLoading ? (
                            <span className="material-symbols-outlined animate-spin text-[20px]">progress_activity</span>
                        ) : (
                            <span className="material-symbols-outlined text-[20px]">auto_awesome</span>
                        )}
                        <span className="hidden sm:inline">{isLoading ? 'Generating...' : 'Generate'}</span>
                    </button>
                )}
            </div>

            {/* Submit button for text mode */}
            {activeTab === 'text' && (
                <div className="flex justify-between items-center">
                    <span className={`text-xs ${textInput.length < 100 ? 'text-red-500' : 'text-slate-400'}`}>
                        {textInput.length.toLocaleString()} / 15,000 characters
                    </span>
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="h-10 px-6 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold rounded-lg hover:opacity-90 transition-all shadow-sm flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isLoading ? (
                            <>
                                <span className="material-symbols-outlined animate-spin text-[18px]">progress_activity</span>
                                Generating...
                            </>
                        ) : (
                            <>
                                <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
                                Generate Summary
                            </>
                        )}
                    </button>
                </div>
            )}

            {/* Error */}
            {error && (
                <p className="text-sm text-red-600 dark:text-red-400 text-center">{error}</p>
            )}
        </form>
    );
}
