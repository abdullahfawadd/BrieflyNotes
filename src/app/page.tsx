import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="bg-paper text-slate-900 font-sans antialiased overflow-x-hidden pb-24">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full bg-paper/95 border-b border-border-subtle backdrop-blur-sm">
        <div className="flex items-center justify-between px-6 py-5 max-w-2xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 border border-slate-900 flex items-center justify-center rounded-sm">
              <span className="material-symbols-outlined text-[16px] text-slate-900">auto_videocam</span>
            </div>
            <h2 className="text-slate-900 text-xl font-serif font-bold tracking-tight">VideoBriefly.</h2>
          </div>
          <Link href="/app" className="text-slate-600 hover:text-slate-900 text-sm font-medium transition-colors border-b border-transparent hover:border-slate-900">
            Try App
          </Link>
        </div>
      </header>

      <main className="max-w-2xl mx-auto">
        {/* Hero Section */}
        <section className="px-6 pt-12 pb-10 flex flex-col gap-10">
          <div className="flex flex-col gap-6 text-left">
            {/* Badge */}
            <div className="inline-flex items-center self-start gap-2 px-3 py-1 bg-surface border border-border-subtle rounded-full">
              <span className="w-2 h-2 rounded-full bg-slate-900"></span>
              <span className="text-slate-600 text-[11px] font-semibold uppercase tracking-widest">Research Tool v2.0</span>
            </div>

            {/* Headline */}
            <h1 className="text-slate-900 text-5xl font-serif font-medium leading-[1.15] tracking-tight">
              Turn video content into <i className="font-serif italic text-slate-700">structured knowledge</i>.
            </h1>

            {/* Subheadline */}
            <p className="text-slate-600 text-lg font-light leading-relaxed max-w-lg border-l border-slate-300 pl-4">
              Eliminate the need for re-watching. Generate academic-grade summaries and quizzes in seconds.
            </p>
          </div>

          {/* Visual Diagram */}
          <div className="w-full bg-surface border border-border-subtle rounded-sm p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-slate-100"></div>
            <div className="flex flex-col items-center justify-center gap-6 relative z-10">
              {/* Input Card */}
              <div className="w-full max-w-[240px] bg-white border border-slate-200 shadow-subtle p-3 flex gap-3 items-center rounded-sm">
                <div className="w-8 h-8 bg-slate-100 flex items-center justify-center border border-slate-200 rounded-sm">
                  <span className="material-symbols-outlined text-slate-400 text-[18px]">play_arrow</span>
                </div>
                <div className="flex-1 space-y-1.5">
                  <div className="h-1.5 bg-slate-200 w-3/4"></div>
                  <div className="h-1.5 bg-slate-100 w-1/2"></div>
                </div>
              </div>

              {/* Arrow */}
              <div className="h-8 w-px bg-slate-300 relative">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 border-b border-r border-slate-300 rotate-45 bg-white"></div>
              </div>

              {/* Output Card */}
              <div className="w-full max-w-[280px] bg-white border border-slate-200 shadow-paper p-5 flex flex-col gap-4 rounded-sm">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="text-[10px] font-serif uppercase tracking-widest text-slate-500">Summary_001.txt</span>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full border border-slate-200"></div>
                    <div className="w-2 h-2 rounded-full border border-slate-200"></div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <span className="text-[10px] font-bold text-slate-400 font-serif">01.</span>
                    <div className="space-y-1.5 flex-1 pt-1">
                      <div className="h-1.5 bg-slate-800 w-full"></div>
                      <div className="h-1.5 bg-slate-200 w-5/6"></div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-[10px] font-bold text-slate-400 font-serif">02.</span>
                    <div className="space-y-1.5 flex-1 pt-1">
                      <div className="h-1.5 bg-slate-600 w-11/12"></div>
                      <div className="h-1.5 bg-slate-200 w-4/6"></div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-[10px] font-bold text-slate-400 font-serif">03.</span>
                    <div className="space-y-1.5 flex-1 pt-1">
                      <div className="h-1.5 bg-slate-200 w-3/4"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Dot pattern overlay */}
            <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
          </div>
        </section>

        {/* Divider */}
        <div className="w-full flex justify-center py-4">
          <span className="text-slate-300 text-xl">***</span>
        </div>

        {/* Methodology Section */}
        <section className="px-6 py-12">
          <h2 className="text-slate-900 text-3xl font-serif font-medium mb-10">Methodology</h2>
          <div className="relative pl-2">
            {/* Timeline line */}
            <div className="absolute left-[27px] top-2 bottom-4 w-px bg-slate-200"></div>

            <div className="flex flex-col gap-12">
              {/* Step 1 */}
              <div className="flex gap-6 relative">
                <div className="flex-shrink-0 w-14 h-14 bg-white border border-slate-200 flex items-center justify-center rounded-full z-10 text-slate-900 font-serif text-lg font-bold shadow-subtle">
                  I
                </div>
                <div className="pt-2">
                  <h3 className="text-slate-900 text-lg font-serif font-medium mb-2">Source Input</h3>
                  <p className="text-slate-600 text-sm leading-relaxed max-w-sm">
                    Simply paste a URL from YouTube or Vimeo. The system parses the audiovisual data instantly.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-6 relative">
                <div className="flex-shrink-0 w-14 h-14 bg-white border border-slate-200 flex items-center justify-center rounded-full z-10 text-slate-900 font-serif text-lg font-bold shadow-subtle">
                  II
                </div>
                <div className="pt-2">
                  <h3 className="text-slate-900 text-lg font-serif font-medium mb-2">Parameter Selection</h3>
                  <p className="text-slate-600 text-sm leading-relaxed max-w-sm">
                    Define the output format: Educational Syllabus, Executive Summary, or Action Items.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-6 relative">
                <div className="flex-shrink-0 w-14 h-14 bg-white border border-slate-200 flex items-center justify-center rounded-full z-10 text-slate-900 font-serif text-lg font-bold shadow-subtle">
                  III
                </div>
                <div className="pt-2">
                  <h3 className="text-slate-900 text-lg font-serif font-medium mb-2">Knowledge Synthesis</h3>
                  <p className="text-slate-600 text-sm leading-relaxed max-w-sm">
                    Export structured notes to your preferred knowledge base (Notion, Obsidian, PDF).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-6 py-12 bg-surface border-y border-border-subtle">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-baseline justify-between mb-8 border-b border-slate-200 pb-4">
              <h2 className="text-slate-900 text-2xl font-serif font-medium">Core Capabilities</h2>
              <span className="text-xs font-mono text-slate-500 uppercase">Fig. 2.1</span>
            </div>

            <div className="grid grid-cols-1 gap-0 bg-white border border-slate-200 divide-y divide-slate-200 rounded-sm">
              {/* Feature 1 */}
              <div className="p-8 group hover:bg-slate-50 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-serif font-bold text-slate-900">Structured Summarization</h3>
                  <span className="material-symbols-outlined text-slate-400 font-light">segment</span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Algorithmic extraction of key points mapped to timestamps. Allows for non-linear consumption of linear video content.
                </p>
                <ul className="text-xs text-slate-500 font-mono space-y-1 list-disc pl-4">
                  <li>Timestamp correlation</li>
                  <li>Key entity extraction</li>
                </ul>
              </div>

              {/* Feature 2 */}
              <div className="p-8 group hover:bg-slate-50 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-serif font-bold text-slate-900">Interrogative AI</h3>
                  <span className="material-symbols-outlined text-slate-400 font-light">chat_bubble_outline</span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Natural language interface allowing direct queries against the video transcript. Retrieve specific data points without scrubbing.
                </p>
                <ul className="text-xs text-slate-500 font-mono space-y-1 list-disc pl-4">
                  <li>Contextual QA</li>
                  <li>Citation linking</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="px-6 py-12">
          <h2 className="text-slate-900 text-2xl font-serif font-medium mb-8">Applications</h2>
          <div className="grid gap-4">
            <div className="border border-slate-200 p-6 rounded-sm flex items-start gap-4 hover:border-slate-400 transition-colors cursor-default bg-white">
              <span className="material-symbols-outlined text-slate-700 mt-1">school</span>
              <div>
                <span className="text-xs font-bold text-slate-900 uppercase tracking-widest block mb-1">Academia</span>
                <h3 className="text-lg font-serif text-slate-900 mb-2">Lecture Synthesis</h3>
                <p className="text-slate-600 text-sm">Convert lengthy lectures into study guides and rapid-review quizzes.</p>
              </div>
            </div>

            <div className="border border-slate-200 p-6 rounded-sm flex items-start gap-4 hover:border-slate-400 transition-colors cursor-default bg-white">
              <span className="material-symbols-outlined text-slate-700 mt-1">edit_note</span>
              <div>
                <span className="text-xs font-bold text-slate-900 uppercase tracking-widest block mb-1">Content Strategy</span>
                <h3 className="text-lg font-serif text-slate-900 mb-2">Repurposing</h3>
                <p className="text-slate-600 text-sm">Transform video essays into blog posts, newsletters, and tweets.</p>
              </div>
            </div>

            <div className="border border-slate-200 p-6 rounded-sm flex items-start gap-4 hover:border-slate-400 transition-colors cursor-default bg-white">
              <span className="material-symbols-outlined text-slate-700 mt-1">work</span>
              <div>
                <span className="text-xs font-bold text-slate-900 uppercase tracking-widest block mb-1">Enterprise</span>
                <h3 className="text-lg font-serif text-slate-900 mb-2">Meeting Records</h3>
                <p className="text-slate-600 text-sm">Accurate minutes and action items from recorded team syncs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 py-16 text-center border-t border-slate-100">
          <div className="inline-block border-b-2 border-slate-900 pb-1 mb-8">
            <span className="text-sm font-semibold uppercase tracking-widest text-slate-900">Conclusion</span>
          </div>
          <h2 className="text-4xl font-serif text-slate-900 mb-6 leading-tight">
            Stop rewatching.<br />Start comprehending.
          </h2>
          <div className="flex items-center justify-center gap-2 text-slate-500 mb-10 font-serif italic">
            <span>Join 10,000+ researchers and professionals</span>
          </div>
        </section>
      </main>

      {/* Fixed Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 p-4">
        <div className="max-w-2xl mx-auto">
          <Link
            href="/app"
            className="w-full h-12 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-sm shadow-sm flex items-center justify-center gap-3 transition-all active:scale-[0.99]"
          >
            <span className="tracking-wide">Begin Free Analysis</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
