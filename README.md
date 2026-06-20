# Radiance Bridal Studio

A premium, luxury bridal makeup studio website — elegant, editorial and handcrafted, built with React, TypeScript, Tailwind CSS and Framer Motion.

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** (fast dev server & build)
- **Tailwind CSS** (custom luxury design tokens)
- **Framer Motion** (premium, subtle animations)
- **React Router** (Home + dedicated Booking page)

## Getting Started

```bash
npm install      # install dependencies
npm run dev      # start dev server at http://localhost:5173
npm run build    # type-check + production build
npm run preview  # preview the production build
```

## Project Structure

```
src/
├── components/        # Reusable UI (Navbar, Footer, Icons, ImagePlaceholder, etc.)
├── sections/          # Home page sections (Hero, About, Portfolio, FAQ, ...)
├── pages/             # Route pages (Home, Booking)
├── config/site.ts     # ⭐ Central config — WhatsApp number & contact details
├── lib/motion.ts      # Shared Framer Motion variants
├── index.css          # Tailwind layers + global luxury styles
└── App.tsx            # Routing + page transitions
```

## ⭐ Configuration

All brand contact details and the **WhatsApp booking number** live in one place:

```
src/config/site.ts
```

Update `whatsappNumber` (full international format, **no `+`, spaces or dashes**),
e.g. `'919876543210'`, plus phone, email, address and social links.

## How the Booking Works

The **Book Appointment** page validates every field, then generates a pre-filled
WhatsApp message and opens `https://wa.me/<number>?text=<encoded-message>` so the
bride can send her request in one tap. No data is stored on the site.

Message format sent to the studio:

```
Hello Radiance Bridal Studio,
I would like to book an appointment.

Name: ...
Phone: ...
Email: ...
Event Type: ...
Date: ...
Time: ...
Location: ...
Requirements: ...

Please contact me regarding availability.
Thank you.
```

## Replacing Image Placeholders

Every image is a clearly labelled `<ImagePlaceholder />` (e.g. "Bridal Hero Image",
"Traditional Brides 1"). To use real photography, swap the placeholder for an
`<img>` inside the same wrapper classes so the layout, rounding and hover-zoom are
preserved.

## Notes

- Fully responsive, mobile-first, accessible (semantic landmarks, focus states,
  `prefers-reduced-motion` support) and SEO-ready (meta + Open Graph tags).
- No real prices are shown — packages display **"Contact us for detailed pricing"**.
