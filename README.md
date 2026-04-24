# BrieflyNotes

A pixel-focused **coming soon** landing page for BrieflyNotes, built with Next.js and Tailwind CSS, including a waitlist form backend.

## What is included

- Responsive dark coming-soon UI inspired by the provided reference
- Email capture form with client-side UX feedback
- Backend API route at `POST /api/notify`
- Notification delivery options:
  - Send email notifications to `abdullahfawad.dev@gmail.com` using Resend
  - Append entries to Google Sheets using an Apps Script webhook

## Tech Stack

- Next.js (App Router)
- React
- Tailwind CSS

## Getting Started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

## Environment Variables

```env
# Optional: Resend for email notifications
RESEND_API_KEY=your_resend_api_key
RESEND_FROM_EMAIL="BrieflyNotes Waitlist <onboarding@resend.dev>"
NOTIFY_TO_EMAIL=abdullahfawad.dev@gmail.com

# Optional: Google Sheets Apps Script webhook
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/your-script-id/exec
```

You can configure either Resend or Google Sheets, or both.
