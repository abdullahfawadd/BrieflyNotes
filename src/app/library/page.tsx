import Link from 'next/link';

export default function LibraryPage() {
    const summaries = [
        {
            id: '#0142',
            title: 'Understanding Quantum Computing',
            source: 'PBS Space Time',
            readTime: '6 min read',
            date: '15m ago',
            tags: ['Science', 'Physics'],
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBlXCCIX5ULTVhJJqr24r-kdWT4YNgZXTUqDDrJEZy8pj2uG-bDSmbJHSDiOdkfgAwWCHkoW1O9qPxz_kSzhyv76l5Yhrn4hSC2jf-SjWNiT8KeJQX9GFhwNjBoVNGZVMOEDXC4dLtv9IAC3tRRUlMydJ98uyzmmrcWj79sbzU92KhJqeDJzx-TcO5r-m0anikk3ZtDn8N6HDZ5k5FeZ7TShX46GYHC4sjEkdgd8WUNl4ldpN1tfApD8_dbofzWVgmQgGOdLsLEGt7O',
            featured: true,
        },
        {
            id: '#0141',
            title: 'Q3 Financial Earnings Call',
            source: 'Bloomberg Markets',
            readTime: '12 min read',
            date: 'Yesterday',
            tags: ['Business', 'Finance'],
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPNl0demKFmaY3Yd_e4_RlqRV1S7WOZ9W0F41dgVne0CH5IdqnFiPJySDHZJIsjNGVI-UIDL4cL61DIc5cUGBZl9xla4F7vwz63bUKSZhzTMIzWJOyuqgYZwdbYo3MfGcuAqNb7o-hyNQ_sPhFQEChh07Tb1QhMOw4eAEAzsztYfWpDMCgOwrOqcrA3oYbrtA1o3sL1KPIBbDRulEcUJYNAH7ZPBlsdQ27FNWTX3NxuKhss73_Qyinyuz2v9H3ZTkNpBY2Vr2X3wbO',
            featured: false,
        },
        {
            id: '#0140',
            title: 'The History of Typography',
            source: 'The Futur',
            readTime: '4 min read',
            date: 'Oct 12',
            tags: ['Design'],
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAcMPiQpgdBxNV-IKhzg1V72vnxdMIkXk1sfFijkE3icNRJbCVRXCZXo4cb-ddpd1hXNq4WySHCtNApOVDGH24SD2fv2v89DGqTkRotuwEM1DLGASzt5zto7yPXsdYy5x8GArAr8i5CfCViI41-8NKJhTMw8C0-qYLd4ZJ1KLs89Yqo18FlkNeA6zseDXAyjeodEUFP3kH1-uAMwSRhnkjnG44cnvXCRUEl9nMbzwr9fix85McGpbfwOjEId6p9yZsHPy8hcAgT6vYj',
            featured: false,
        },
        {
            id: '#0139',
            title: 'Weekly Product Sync',
            source: 'Internal Record',
            readTime: '45 min read',
            date: 'Oct 10',
            tags: ['Product', 'Meeting'],
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAP9FAJPru5jjHYWTDTqMEItH9-crRIbPWyr3X9JojJ4ymbGcSsLje3WNt3B6PWZKSiOp3vJPzGmx6IxxQncV2MWHee8ugS3hwdLJG1MbIL1EX4CQPOWTJshzTYtBwWcNKFqBvbDfmb6j1mq_f1Qd_4DrCw7_EOriADOb6kPtQwMLFeUtU9xZGn0i1ZnXSqFQz-bpX5uEzEwdKr6jcbYMcBCJszdISMX2242hql6O4AvBSLVNrUyLqtu151e978tU0jRIA9ok1NTcbT',
            featured: false,
        },
        {
            id: '#0138',
            title: 'Advanced Python Patterns',
            source: 'Real Python',
            readTime: '8 min read',
            date: 'Oct 08',
            tags: ['Coding', 'Python'],
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZ26Xh2UborTxGiNAySHGlIlNPzikBI1Rg9wcZD9C5PCh9taz0w2Sqm5mxtEMDaCv_SoXb2xmMQVS4oZVOlC7qPrFIN11sRqH1mFXPbnGZeClp4IALY1fK3LcH2JDszSoIOjJ52k8xFyuOZa6DSAe22vLkDcs9FlV9_gzTm27_cWYvCqJj4ngcK5aoLtWS67Lv7PXtCz3RZofWi9YBObxl_i2BqsswoHXGJINLDQVTa6iw9Fp98nkqMZ7DbJcUHTxRK8V90ZZ4L5xo',
            featured: false,
        },
    ];

    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display antialiased selection:bg-primary/30 min-h-screen flex flex-col pb-24">
            {/* Header */}
            <header className="pt-14 pb-2 px-5 bg-background-light dark:bg-background-dark sticky top-0 z-10">
                <div className="flex flex-col gap-1">
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Library Archive</h1>
                    <p className="text-slate-500 dark:text-gray-500 text-xs font-mono tracking-wide uppercase">{summaries.length} Summaries | Database Mode</p>
                </div>
            </header>

            {/* Search */}
            <div className="px-5 py-4 bg-background-light dark:bg-background-dark">
                <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="material-symbols-outlined text-gray-500 dark:text-gray-600 group-focus-within:text-primary transition-colors text-[20px]">search</span>
                    </div>
                    <input
                        className="block w-full pl-10 pr-3 py-3 rounded-md border-none bg-white dark:bg-surface-dark text-slate-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-primary/50 text-sm font-mono shadow-sm"
                        placeholder="Search database..."
                        type="text"
                    />
                </div>
            </div>

            {/* Filter Chips */}
            <div className="w-full overflow-x-auto no-scrollbar pb-2 bg-background-light dark:bg-background-dark border-b border-gray-200 dark:border-white/5">
                <div className="flex gap-3 px-5 min-w-max">
                    <button className="flex items-center justify-center px-4 py-1.5 rounded-md bg-primary text-white text-xs font-medium transition-colors">
                        All
                    </button>
                    <button className="flex items-center justify-center px-4 py-1.5 rounded-md bg-gray-200 dark:bg-surface-dark text-gray-600 dark:text-gray-400 border border-transparent dark:border-white/10 text-xs font-medium hover:bg-gray-300 dark:hover:bg-white/10 transition-colors">
                        YouTube
                    </button>
                    <button className="flex items-center justify-center px-4 py-1.5 rounded-md bg-gray-200 dark:bg-surface-dark text-gray-600 dark:text-gray-400 border border-transparent dark:border-white/10 text-xs font-medium hover:bg-gray-300 dark:hover:bg-white/10 transition-colors">
                        Lectures
                    </button>
                    <button className="flex items-center justify-center px-4 py-1.5 rounded-md bg-gray-200 dark:bg-surface-dark text-gray-600 dark:text-gray-400 border border-transparent dark:border-white/10 text-xs font-medium hover:bg-gray-300 dark:hover:bg-white/10 transition-colors">
                        Meetings
                    </button>
                    <button className="flex items-center justify-center px-4 py-1.5 rounded-md bg-gray-200 dark:bg-surface-dark text-gray-600 dark:text-gray-400 border border-transparent dark:border-white/10 text-xs font-medium hover:bg-gray-300 dark:hover:bg-white/10 transition-colors">
                        Podcasts
                    </button>
                </div>
            </div>

            {/* Archive List */}
            <main className="flex-1 flex flex-col w-full">
                {summaries.map((item) => (
                    <Link
                        key={item.id}
                        href="/app"
                        className="group flex gap-4 px-5 py-4 border-b border-gray-200 dark:border-white/5 bg-background-light dark:bg-background-dark active:bg-gray-100 dark:active:bg-white/5 transition-colors cursor-pointer"
                    >
                        {/* Thumbnail */}
                        <div
                            className="w-12 h-12 rounded-md bg-cover bg-center shrink-0 mt-1 shadow-sm ring-1 ring-black/5 dark:ring-white/10"
                            style={{ backgroundImage: `url("${item.image}")` }}
                        />

                        {/* Content */}
                        <div className="flex-1 flex flex-col gap-1 min-w-0">
                            <div className="flex justify-between items-start gap-4">
                                <div className="flex flex-col">
                                    <h3 className={`text-[15px] font-medium leading-tight truncate pr-2 ${item.featured ? 'text-primary dark:text-primary' : 'text-slate-900 dark:text-white'}`}>
                                        {item.title}
                                    </h3>
                                    <div className="flex items-center gap-1.5 mt-1">
                                        <span className="text-gray-500 dark:text-gray-500 text-xs truncate">{item.source}</span>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end shrink-0 text-right">
                                    <span className="text-gray-400 dark:text-gray-500 text-[10px] font-mono tracking-wide uppercase">{item.date}</span>
                                    <span className="text-gray-400 dark:text-gray-600 text-[10px] font-mono mt-0.5">{item.readTime}</span>
                                </div>
                            </div>

                            {/* Tags */}
                            <div className="flex items-center gap-2 mt-1.5">
                                {item.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium ${i === 0 && item.featured
                                                ? 'bg-primary/10 text-primary dark:text-primary/90'
                                                : 'bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400'
                                            }`}
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Link>
                ))}
            </main>

            {/* Bottom Navigation */}
            <nav className="fixed bottom-0 w-full bg-white dark:bg-black/90 backdrop-blur-md border-t border-gray-200 dark:border-white/10 pb-6 pt-3 px-6 z-50">
                <div className="flex justify-between items-center max-w-md mx-auto">
                    <Link href="/" className="flex flex-col items-center gap-1 text-gray-400 dark:text-gray-500 hover:text-primary dark:hover:text-primary transition-colors group">
                        <span className="material-symbols-outlined text-[26px] font-light group-hover:scale-105 transition-transform">home</span>
                        <span className="text-[10px] font-medium">Home</span>
                    </Link>
                    <button className="flex flex-col items-center gap-1 text-primary dark:text-primary group">
                        <span className="material-symbols-outlined text-[26px] font-normal group-hover:scale-105 transition-transform">library_books</span>
                        <span className="text-[10px] font-medium">Library</span>
                    </button>
                    <Link href="/app" className="flex flex-col items-center gap-1 text-gray-400 dark:text-gray-500 hover:text-primary dark:hover:text-primary transition-colors group">
                        <div className="w-[26px] h-[26px] rounded-full bg-gray-200 dark:bg-surface-dark border dark:border-gray-700 flex items-center justify-center mb-[1px] group-hover:bg-primary group-hover:text-white transition-colors">
                            <span className="material-symbols-outlined text-[18px]">add</span>
                        </div>
                        <span className="text-[10px] font-medium">Upload</span>
                    </Link>
                    <button className="flex flex-col items-center gap-1 text-gray-400 dark:text-gray-500 hover:text-primary dark:hover:text-primary transition-colors group">
                        <span className="material-symbols-outlined text-[26px] font-light group-hover:scale-105 transition-transform">person</span>
                        <span className="text-[10px] font-medium">Profile</span>
                    </button>
                </div>
            </nav>
        </div>
    );
}
