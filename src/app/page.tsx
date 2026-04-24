import type { Metadata } from 'next';
import ComingSoonView from '@/components/coming-soon-view';

const siteUrl = 'https://brieflynotes.com';

export const metadata: Metadata = {
  title: 'BrieflyNotes Coming Soon | AI Video Learning Notes',
  description:
    'BrieflyNotes is launching soon. Turn long videos into structured notes, insights, and study-ready summaries with AI.',
  keywords: [
    'BrieflyNotes',
    'coming soon',
    'AI notes',
    'video summarizer',
    'study notes from video',
    'AI learning assistant',
    'waitlist',
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'BrieflyNotes Coming Soon',
    description: 'Join the waitlist for an AI platform that converts video into structured knowledge.',
    siteName: 'BrieflyNotes',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BrieflyNotes Coming Soon',
    description: 'Join the waitlist and be the first to experience AI-powered video learning notes.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'BrieflyNotes',
  url: siteUrl,
  description: 'AI-powered video-to-notes platform coming soon.',
  potentialAction: {
    '@type': 'JoinAction',
    name: 'Join Waitlist',
    target: siteUrl,
  },
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ComingSoonView />
    </>
  );
}
