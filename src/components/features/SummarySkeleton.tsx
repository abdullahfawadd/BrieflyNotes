export default function SummarySkeleton() {
    return (
        <div className="rounded-2xl bg-white dark:bg-[#18181b] border border-slate-200 dark:border-slate-800 overflow-hidden">
            {/* Header Skeleton */}
            <div className="px-8 pt-8 pb-6 border-b border-slate-100 dark:border-slate-800">
                <div className="skeleton h-6 w-32 mb-4" />
                <div className="skeleton h-8 w-3/4 mb-2" />
                <div className="skeleton h-4 w-1/3" />
            </div>

            {/* Content Skeleton */}
            <div className="p-8 space-y-8">
                {/* TL;DR Box Skeleton */}
                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-6 border border-slate-100 dark:border-slate-700">
                    <div className="skeleton h-5 w-32 mb-4" />
                    <div className="space-y-3">
                        <div className="skeleton h-4 w-full" />
                        <div className="skeleton h-4 w-5/6" />
                        <div className="skeleton h-4 w-4/5" />
                    </div>
                </div>

                {/* Section 1 Skeleton */}
                <div className="space-y-4">
                    <div className="skeleton h-6 w-1/3 mb-2" />
                    <div className="space-y-3">
                        <div className="skeleton h-4 w-full" />
                        <div className="skeleton h-4 w-5/6" />
                        <div className="skeleton h-4 w-4/5" />
                    </div>
                </div>

                {/* Section 2 Skeleton */}
                <div className="space-y-4">
                    <div className="skeleton h-6 w-2/5 mb-2" />
                    <div className="space-y-3">
                        <div className="skeleton h-4 w-full" />
                        <div className="skeleton h-4 w-3/4" />
                        <div className="skeleton h-4 w-5/6" />
                        <div className="skeleton h-4 w-2/3" />
                    </div>
                </div>
            </div>
        </div>
    );
}
