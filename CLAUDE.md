@AGENTS.md

# Dynet Electric — Next.js Site

## Project Overview
Website voor Dynet Electric (dynet.nl), geconverteerd van een WordPress/Elementor backup naar Next.js + Tailwind CSS. Gedeployed op Vercel.

## Tech Stack
- **Framework:** Next.js 16 (App Router, TypeScript)
- **Styling:** Tailwind CSS v4
- **Hosting:** Vercel (auto-deploy via GitHub)
- **GitHub:** https://github.com/rivaldorose/dynet-site
- **Live URL:** https://dynet-site.vercel.app

## Project Structure
```
src/
├── app/
│   ├── page.tsx                    # Homepage
│   ├── layout.tsx                  # Root layout (Header + Footer)
│   ├── globals.css                 # Tailwind + custom CSS vars
│   ├── contact/                    # Contact pagina + formulier
│   ├── projecten/                  # Projecten overzicht
│   ├── prijsvergelijker/           # Energievergelijking
│   ├── afspraak-maken/             # Afspraak formulier
│   ├── naw-gegevens/               # NAW formulier (glasvezel)
│   ├── bedankt/                    # Bedankt na afspraak
│   ├── bedankt-contact/            # Bedankt na contact
│   └── bedankt-voor-uw-gegevens/   # Bedankt na NAW
├── components/
│   ├── Header.tsx                  # Sticky header + mobile menu
│   └── Footer.tsx                  # Footer met contactinfo
public/
└── images/                         # Alle afbeeldingen uit WP backup
    ├── partners/                   # Partner logo's (Shell, BMW, Alfen, BAM, Vestel)
    └── services/                   # Diensten afbeeldingen
```

## Brand / Design
- **Kleuren:** Navy (#1a1a3e), Green (#2e9f48), White
- **CSS variabelen:** `--navy`, `--navy-dark`, `--green`, `--green-light`, `--green-dark`
- **Tailwind classes:** `bg-navy-dark`, `text-green`, `bg-green`, `hover:bg-green-light`

## Bedrijfsinfo
- **Bedrijf:** Dynet Electric (onderdeel van Dynet Infratechniek)
- **Adres:** Keurmeesterstraat 53, 1187 ZX Amstelveen
- **Telefoon:** 085-2224002
- **Email:** info@dynet.nl
- **Openingstijden:** Ma-Vr 08:00 - 17:30
- **Certificeringen:** NEN 1010, NEN 3410

## Commands
```bash
npm run dev       # Start dev server (localhost:3000)
npm run build     # Production build
npx tsc --noEmit  # TypeScript check
```

## Notes
- Formulieren zijn momenteel front-end only (geen backend/email verzending)
- Originele WordPress backup staat in `/extracted/` (niet in git)
- Partner SVG logo's komen uit de originele WordPress uploads
- De site is volledig statisch (alle pagina's zijn pre-rendered)
