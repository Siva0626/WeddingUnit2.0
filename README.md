# The Wedding Unit — New Project

Production-ready Next.js rebuild for The Wedding Unit Photography. The implementation follows the supplied visual reference and UI/technical execution prompt, using the original photographs and logo from the supplied asset archive.

## Stack

- Next.js App Router + TypeScript
- CSS Modules
- Supabase (`public.enquiries`) for enquiry persistence
- Cloudflare Email Service REST API for notification email
- Zod for server-side validation

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

## Production configuration

Set all variables in `.env.local` or your hosting provider's environment settings. Never expose `SUPABASE_SERVICE_ROLE_KEY` or `CLOUDFLARE_API_TOKEN` to the browser.

Cloudflare Email Service uses the REST endpoint:
`POST /accounts/{account_id}/email/sending/send`.

The Supabase table expected by the enquiry service is `public.enquiries` with the schema specified in the supplied execution prompt. The app does not create or alter the table automatically.

## Supabase

If your existing table needs RLS/service permissions adjusted, do that in Supabase rather than shipping schema creation logic with the website. The server uses the service-role key only in `src/lib/supabase/server.ts`.

## Assets

Original supplied photographs live under `public/assets/Photos/` and the supplied logo is `public/assets/branding/logo.png`. No stock or AI-generated photography is used. No fake video assets are included because the supplied archive does not contain video files.

## Routes

- `/` — full homepage
- `/contact` — dedicated booking/contact page
- `/api/enquiry` — POST enquiry endpoint
- `/robots.txt` — generated robots metadata
- `/sitemap.xml` — generated sitemap metadata
