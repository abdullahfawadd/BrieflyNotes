import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-[#09090b] border-t border-slate-200 dark:border-slate-800 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Logo */}
                    <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-lg">
                        <span className="material-symbols-outlined text-[#1246e2]">smart_display</span>
                        BrieflyNotes
                    </div>

                    {/* Links */}
                    <div className="flex gap-8 text-sm text-slate-500 dark:text-slate-400">
                        <Link href="#" className="hover:text-[#1246e2] transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="hover:text-[#1246e2] transition-colors">
                            Terms of Service
                        </Link>
                        <Link href="#" className="hover:text-[#1246e2] transition-colors">
                            Contact
                        </Link>
                    </div>

                    {/* Copyright */}
                    <div className="text-sm text-slate-400 dark:text-slate-600">
                        © 2024 BrieflyNotes. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
