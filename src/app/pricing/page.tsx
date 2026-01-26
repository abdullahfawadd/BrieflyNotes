import Link from 'next/link';

export default function PricingPage() {
    return (
        <div className="bg-gray-50 text-text-main antialiased min-h-screen">
            <div className="mx-auto max-w-md bg-white min-h-screen border-x border-gray-100 shadow-2xl shadow-gray-200/50 flex flex-col">
                {/* Header */}
                <div className="flex items-center px-4 py-4 justify-between sticky top-0 bg-white/90 backdrop-blur-sm z-20 border-b border-gray-50">
                    <Link href="/" className="p-2 rounded-full hover:bg-gray-50 text-gray-400 hover:text-gray-600 transition-colors">
                        <span className="material-symbols-outlined text-[24px]">arrow_back</span>
                    </Link>
                    <div className="font-semibold text-sm tracking-wide text-gray-900">PRICING</div>
                    <div className="w-10"></div>
                </div>

                <div className="flex-1 px-5 pt-8 pb-10">
                    {/* Headline */}
                    <div className="text-center mb-10 space-y-3">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Honest pricing</h1>
                        <p className="text-gray-500 text-sm leading-relaxed max-w-[280px] mx-auto">
                            Simple plans for learners. Upgrade only when you need more power.
                        </p>
                    </div>

                    {/* Billing Toggle */}
                    <div className="flex justify-center mb-12">
                        <div className="inline-flex bg-gray-50 p-1 rounded-lg border border-gray-100">
                            <label className="cursor-pointer select-none px-4 py-2 rounded-md text-sm font-medium transition-all has-[:checked]:bg-white has-[:checked]:text-indigo-600 has-[:checked]:shadow-sm has-[:checked]:ring-1 has-[:checked]:ring-black/5 text-gray-500">
                                <input className="hidden" name="billing" type="radio" value="monthly" />
                                Monthly
                            </label>
                            <label className="cursor-pointer select-none px-4 py-2 rounded-md text-sm font-medium transition-all has-[:checked]:bg-white has-[:checked]:text-indigo-600 has-[:checked]:shadow-sm has-[:checked]:ring-1 has-[:checked]:ring-black/5 text-gray-500">
                                <input defaultChecked className="hidden" name="billing" type="radio" value="yearly" />
                                Yearly <span className="text-xs text-indigo-500 font-bold ml-1">-20%</span>
                            </label>
                        </div>
                    </div>

                    {/* Pricing Cards */}
                    <div className="grid grid-cols-2 gap-4 items-stretch mb-12">
                        {/* Casual Plan */}
                        <div className="flex flex-col p-5 rounded-xl border border-gray-200 bg-white hover:border-gray-300 transition-colors">
                            <div className="mb-6">
                                <h3 className="font-semibold text-gray-900 mb-1">Casual</h3>
                                <p className="text-[11px] uppercase tracking-wider font-semibold text-gray-400">Basic</p>
                            </div>
                            <div className="mb-8">
                                <span className="text-3xl font-bold text-gray-900">$0</span>
                                <span className="text-gray-400 text-sm font-medium">/mo</span>
                            </div>
                            <ul className="space-y-4 mb-8 flex-1">
                                <li className="flex items-start gap-2 text-xs text-gray-600 leading-tight">
                                    <span className="material-symbols-outlined text-[18px] text-gray-400 shrink-0">check</span>
                                    3 videos/mo
                                </li>
                                <li className="flex items-start gap-2 text-xs text-gray-600 leading-tight">
                                    <span className="material-symbols-outlined text-[18px] text-gray-400 shrink-0">check</span>
                                    Basic notes
                                </li>
                                <li className="flex items-start gap-2 text-xs text-gray-600 leading-tight">
                                    <span className="material-symbols-outlined text-[18px] text-gray-400 shrink-0">check</span>
                                    Std. support
                                </li>
                            </ul>
                            <button className="w-full py-3 px-4 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 text-xs font-bold uppercase tracking-wide hover:bg-gray-100 transition-colors">
                                Current
                            </button>
                        </div>

                        {/* Pro Plan */}
                        <div className="flex flex-col p-5 rounded-xl border border-indigo-200 bg-indigo-50/20 hover:border-indigo-300 transition-colors relative">
                            <div className="mb-6">
                                <h3 className="font-semibold text-indigo-900 mb-1">Pro</h3>
                                <p className="text-[11px] uppercase tracking-wider font-semibold text-indigo-500">Student Friendly</p>
                            </div>
                            <div className="mb-8">
                                <span className="text-3xl font-bold text-indigo-900">$8</span>
                                <span className="text-indigo-400 text-sm font-medium">/mo</span>
                            </div>
                            <ul className="space-y-4 mb-8 flex-1">
                                <li className="flex items-start gap-2 text-xs text-gray-700 leading-tight">
                                    <span className="material-symbols-outlined text-[18px] text-indigo-500 shrink-0">check</span>
                                    Unlimited
                                </li>
                                <li className="flex items-start gap-2 text-xs text-gray-700 leading-tight">
                                    <span className="material-symbols-outlined text-[18px] text-indigo-500 shrink-0">check</span>
                                    Structured notes
                                </li>
                                <li className="flex items-start gap-2 text-xs text-gray-700 leading-tight">
                                    <span className="material-symbols-outlined text-[18px] text-indigo-500 shrink-0">check</span>
                                    Export PDF
                                </li>
                                <li className="flex items-start gap-2 text-xs text-gray-700 leading-tight">
                                    <span className="material-symbols-outlined text-[18px] text-indigo-500 shrink-0">check</span>
                                    Priority AI
                                </li>
                            </ul>
                            <button className="w-full py-3 px-4 rounded-lg bg-indigo-500 text-white text-xs font-bold uppercase tracking-wide hover:bg-indigo-600 shadow-sm shadow-indigo-200 transition-all active:scale-[0.98]">
                                Get Pro
                            </button>
                        </div>
                    </div>

                    {/* Testimonial */}
                    <div className="bg-gray-50 rounded-xl p-5 border border-gray-100 mb-8">
                        <div className="flex gap-3">
                            <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 text-xs font-bold shrink-0">
                                SJ
                            </div>
                            <div>
                                <p className="text-sm text-gray-600 italic leading-relaxed mb-2">
                                    &ldquo;The structured notes are a game changer for cramming sessions. It saved my semester!&rdquo;
                                </p>
                                <p className="text-xs font-semibold text-gray-900">Sarah J. — Med Student</p>
                            </div>
                        </div>
                    </div>

                    {/* FAQ Link */}
                    <div className="text-center pb-8">
                        <a className="text-sm text-gray-400 hover:text-indigo-500 transition-colors flex items-center justify-center gap-1 group" href="#">
                            Have questions? <span className="group-hover:underline decoration-indigo-300">Read the FAQ</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
