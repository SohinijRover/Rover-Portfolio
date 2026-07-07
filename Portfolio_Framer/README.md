# Sohini Joardar — Portfolio

Personal portfolio site for Sohini Joardar, built with Next.js (App Router), Tailwind CSS, and Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Structure

- `app/` — routes: home, `about`, `work`, `blog`, `contact`
- `components/` — page sections and shared UI primitives (`components/ui`)
- `lib/data.ts` — all site copy: services, projects, testimonials, blog posts
- `lib/schema.ts` — zod schema for the contact form

## Content

Bio, project, and testimonial copy in `lib/data.ts` is placeholder content — swap in real projects, testimonials, and photography before shipping. The profile image is a gradient placeholder (`SJ` monogram); replace it with a real photo via `next/image` where it appears in `components/Hero.tsx` and `app/about/page.tsx`.

The contact form validates client-side and simulates a submission. To actually receive messages, wire `components/ContactForm.tsx` up to a form backend (e.g. Formspree, Resend, or a custom API route).

## Build

```bash
npm run build
```
