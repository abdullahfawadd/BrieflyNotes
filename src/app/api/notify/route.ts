import { NextResponse } from 'next/server';

interface NotifyPayload {
  email?: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function sendEmailViaResend(subscriberEmail: string): Promise<void> {
  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) {
    return;
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${resendApiKey}`,
    },
    body: JSON.stringify({
      from: process.env.RESEND_FROM_EMAIL ?? 'BrieflyNotes Waitlist <onboarding@resend.dev>',
      to: [process.env.NOTIFY_TO_EMAIL ?? 'abdullahfawad.dev@gmail.com'],
      subject: 'New BrieflyNotes waitlist signup',
      html: `<p><strong>New signup:</strong> ${subscriberEmail}</p><p>Time: ${new Date().toISOString()}</p>`,
      reply_to: subscriberEmail,
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to send notification email via Resend.');
  }
}

async function forwardToGoogleSheet(subscriberEmail: string): Promise<void> {
  const googleScriptWebhook = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (!googleScriptWebhook) {
    return;
  }

  const response = await fetch(googleScriptWebhook, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: subscriberEmail,
      createdAt: new Date().toISOString(),
      source: 'brieflynotes-coming-soon',
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to append subscriber to Google Sheets webhook.');
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as NotifyPayload;
    const email = body.email?.trim().toLowerCase();

    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ success: false, error: 'Please enter a valid email address.' }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY && !process.env.GOOGLE_SHEETS_WEBHOOK_URL) {
      return NextResponse.json(
        {
          success: false,
          error: 'Notification backend is not configured. Set RESEND_API_KEY or GOOGLE_SHEETS_WEBHOOK_URL.',
        },
        { status: 500 }
      );
    }

    await Promise.all([sendEmailViaResend(email), forwardToGoogleSheet(email)]);

    return NextResponse.json({
      success: true,
      message: 'Thanks! You are on the waitlist now.',
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unexpected error';
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
