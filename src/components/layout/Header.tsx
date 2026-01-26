'use client';

import Link from 'next/link';

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-[#18181b]/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1246e2]/10 text-[#1246e2] group-hover:bg-[#1246e2] group-hover:text-white transition-all">
                            <span className="material-symbols-outlined text-[20px]">smart_display</span>
                        </div>
                        <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                            BrieflyNotes
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        <Link
                            href="#features"
                            className="text-sm font-medium text-slate-600 hover:text-[#1246e2] dark:text-slate-400 dark:hover:text-white transition-colors"
                        >
                            Features
                        </Link>
                        <Link
                            href="#how-it-works"
                            className="text-sm font-medium text-slate-600 hover:text-[#1246e2] dark:text-slate-400 dark:hover:text-white transition-colors"
                        >
                            How It Works
                        </Link>
                        <Link
                            href="/app"
                            className="text-sm font-medium text-slate-600 hover:text-[#1246e2] dark:text-slate-400 dark:hover:text-white transition-colors"
                        >
                            Try Demo
                        </Link>
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                        <Link
                            href="/app"
                            className="hidden md:flex h-10 items-center justify-center rounded-lg bg-[#1246e2] px-5 text-sm font-bold text-white shadow-lg shadow-[#1246e2]/25 transition-all hover:bg-[#0d36b0] hover:shadow-[#1246e2]/35 hover:-translate-y-0.5"
                        >
                            Get Started Free
                        </Link>
                        <button className="md:hidden p-2 text-slate-700 dark:text-white">
                            <span className="material-symbols-outlined">menu</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
