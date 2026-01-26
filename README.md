# BrieflyNotes

AI-powered video summarization SaaS. Transform YouTube videos, articles, and text into structured study notes in seconds.

## Features

- 🎬 **YouTube Summarization** - Extract and summarize any video with transcript
- 📄 **Article Parsing** - Clean extraction from web articles
- 🧠 **AI-Powered** - GPT-4 powered summaries with accurate understanding
- 📋 **Multiple Modes** - Quick Notes, Study Notes, or Action Points
- 📤 **Export Options** - Copy, PDF, or Markdown export
- 📚 **Library** - Save and organize your summaries

## Tech Stack

- **Frontend**: Next.js 15, React, Tailwind CSS
- **Database**: PostgreSQL + Prisma
- **Auth**: NextAuth.js (Google, GitHub, Email)
- **AI**: OpenAI GPT-4
- **Payments**: Lemon Squeezy

## Getting Started

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Run database migrations
npx prisma migrate dev

# Start development server
npm run dev
```

## Environment Variables

```env
DATABASE_URL="postgresql://..."
NEXTAUTH_SECRET="..."
NEXTAUTH_URL="http://localhost:3000"
GOOGLE_CLIENT_ID="..."
GOOGLE_CLIENT_SECRET="..."
OPENAI_API_KEY="..."
LEMONSQUEEZY_API_KEY="..."
```

## License

MIT
