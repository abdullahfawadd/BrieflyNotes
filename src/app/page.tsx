'use client';

import { FormEvent, useState } from 'react';

const features = [
  {
    title: 'Smarter Learning',
    description: 'Turn any video into structured knowledge.',
    icon: '▣',
  },
  {
    title: 'AI-Powered',
    description: 'Get answers, summaries, and insights instantly.',
    icon: '◎',
  },
  {
    title: 'Save & Organize',
    description: 'Keep your learning organized in one place.',
    icon: '◫',
  },
];

export default function ComingSoonPage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus('loading');
    setMessage('Submitting...');

    try {
      const response = await fetch('/api/notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const result: { success: boolean; message?: string; error?: string } = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error ?? 'Unable to save your email right now.');
      }

      setStatus('success');
      setMessage(result.message ?? 'You are on the waitlist.');
      setEmail('');
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Something went wrong.');
    }
  }

  return (
    <div className="min-h-screen bg-[#070b15] text-white px-4 py-5 md:px-8 md:py-8">
      <div className="mx-auto w-full max-w-[1200px] rounded-[28px] border border-white/20 bg-[radial-gradient(circle_at_50%_40%,rgba(79,113,255,.26),rgba(4,7,17,0.95)_62%)] shadow-[0_0_90px_rgba(103,122,255,0.1)]">
        <header className="flex items-center justify-between px-4 py-4 md:px-8 md:py-6">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-xl font-black text-[#e0e4ff]">B</div>
            <span className="text-lg font-semibold tracking-tight">BrieflyNotes</span>
          </div>
          <button className="rounded-xl border border-white/15 bg-[#11172a] px-4 py-2 text-sm font-medium text-white/90">Notify me</button>
        </header>

        <main className="px-4 pb-6 md:px-8 md:pb-10">
          <section className="mx-auto max-w-4xl text-center pt-6 md:pt-12">
            <p className="mx-auto mb-5 inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold tracking-wider text-white/80">
              ✦ COMING SOON
            </p>
            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
              Something powerful
              <br />
              is coming <span className="text-[#aeb2ff]">soon.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70 md:text-[33px] md:leading-snug">
              We&apos;re building the future of learning from video.
              <br className="hidden md:block" />
              Get ready for an experience like no other.
            </p>
          </section>

          <section className="mx-auto mt-8 max-w-3xl rounded-2xl border border-white/10 bg-[#0c1221]/85 p-2 md:p-3">
            <form onSubmit={handleSubmit} className="flex flex-col gap-2 md:flex-row">
              <label htmlFor="email" className="flex flex-1 items-center gap-3 rounded-xl border border-white/10 bg-[#080d1b] px-4 py-3">
                <span className="text-white/60">✉</span>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Enter your email address"
                  className="w-full bg-transparent text-base text-white outline-none placeholder:text-white/35"
                />
              </label>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="rounded-xl bg-[#bfc2eb] px-8 py-3 text-lg font-semibold text-[#191b2b] transition hover:bg-[#d0d3ff] disabled:cursor-not-allowed disabled:opacity-80"
              >
                {status === 'loading' ? 'Submitting...' : 'Notify me'}
              </button>
            </form>
            <p className={`pt-3 text-sm ${status === 'error' ? 'text-red-300' : 'text-white/65'}`}>{message || 'Join 12,421+ learners on the waitlist.'}</p>
          </section>

          <section className="mx-auto mt-10 w-full max-w-5xl">
            <div className="relative h-[260px] overflow-hidden rounded-[24px] border border-white/10 bg-[radial-gradient(circle_at_50%_35%,rgba(192,198,255,.18),rgba(9,13,24,0.95)_58%)] md:h-[420px]">
              <div className="absolute left-1/2 top-[54%] h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-[28%] bg-gradient-to-b from-[#1d2640] via-[#0d1120] to-[#090d17] shadow-[0_0_80px_rgba(172,181,255,0.28)]" />
              <div className="absolute left-1/2 top-[54%] h-[48%] w-[48%] -translate-x-1/2 -translate-y-1/2 rounded-[24%] border border-[#9ca5ff33] bg-black/45" />
              <div className="absolute left-1/2 top-[54%] -translate-x-1/2 -translate-y-1/2 text-7xl font-black text-[#d3d8ff] drop-shadow-[0_0_20px_rgba(201,208,255,0.7)] md:text-9xl">
                B
              </div>
            </div>
          </section>

          <section className="mx-auto mt-8 grid max-w-5xl gap-4 border-t border-white/10 pt-8 md:grid-cols-3 md:gap-8">
            {features.map((feature) => (
              <article key={feature.title} className="text-center">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-white/20 bg-white/5 text-2xl text-white/85">
                  {feature.icon}
                </div>
                <h2 className="mt-3 text-2xl font-semibold">{feature.title}</h2>
                <p className="mt-2 text-lg text-white/65">{feature.description}</p>
              </article>
            ))}
          </section>

          <footer className="mx-auto mt-8 max-w-5xl border-t border-white/10 pt-6 text-center text-lg text-white/45">
            We respect your privacy. No spam, ever.
          </footer>
        </main>
      </div>
    </div>
  );
}
