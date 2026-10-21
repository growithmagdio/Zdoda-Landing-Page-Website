# Zdoda — AI Chatbot Landing Page

A production-ready, high-converting, single-page landing page built for **Zdoda** (www.zdoda.com), promoting custom AI chatbot services for businesses.

## Features
- **Deep-space Tech Design System:** Brand navy (`#0F0F23`), elevated cards (`#16163A`), electric blue glows (`#3B6CFF`), and warm gold CTAs (`#F5C542`).
- **Interactive Scripted Chatbot Demo:** Recreated from the Perth City Air demo with Home, Conversation, and FAQ tabs, realistic typing indicators, quick-reply chips, inline lead capture mini-form, and auto-play hero walkthrough.
- **GoHighLevel Calendar Integration:** Modal calendar embed (`https://api.hiighvance.com/widget/booking/vxtaxXPdV2kUDIMu357k`) with fallback new-tab link.
- **Floating Conversion Triggers:**
  - Bottom-right launcher bubble for instant chat demo.
  - Slide-up "Book a Call With Me" bottom bar after scrolling past hero (auto-hides on form view or modal open, dismissible per session).
- **Lead Capture Form:** Full name, Business name, URL validation, Email, Phone/WhatsApp, and Industry selector with spam honeypot and clean success screen.
- **Case Study Proof & Video Walkthrough:** Perth City Air 67-second synchronized moment cards and Laura Haber Living case study metrics (503K+ search impressions).
- **SEO & Structured Data:** Semantic HTML5, Schema.org `Organization` and `FAQPage` JSON-LD, Open Graph, and Twitter metadata.

## Quickstart

```bash
# 1. Install dependencies
npm install

# 2. Run local development server (port 3000)
npm run dev

# 3. Build for production
npm run build
```

## How to Edit Copy & Config

- **All Copy:** Edit `src/data/content.ts` to change headlines, problem statements, feature descriptions, industry cards, or FAQ items.
- **Endpoints & URLs:** Edit `src/config.ts` to configure:
  - `BOOKING_URL`: The calendar booking link (used across all booking buttons).
  - `FORM_ENDPOINT`: Webhook / API URL for receiving lead submissions.
  - `PRICING_START`: Base pricing label (e.g. `$199`).
  - `LAUNCH_TIME`: Turnaround guarantee (e.g. `7 days`).
  - `CONTACT_EMAIL` & `CONTACT_PHONE`.

## Deploying to Cloudflare Pages

1. Push this repository to GitHub or GitLab.
2. In the Cloudflare Pages dashboard, select **Create application** > **Pages** > **Connect to Git**.
3. Select this repository and set the build settings:
   - **Framework preset:** `Vite`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Deploy!

## AI chat (Gemini)

The chat widget calls `api/chat.ts`, a Vercel serverless function that talks to Gemini.

- Set `GEMINI_API_KEY` in **Vercel → Project → Settings → Environment Variables**, then redeploy.
- Optional: `GEMINI_MODEL` to change the model (default `gemini-3.5-flash-lite`, fallback `gemini-3.8-flash`).
- Never put the key in the frontend code or commit it. `.env` files are git-ignored.
- If the key is missing or Gemini fails, the widget falls back to the scripted replies in `src/utils/chatEngine.ts`.
- The assistant never quotes prices: the prompt forbids it and the function replaces any reply containing a price.
