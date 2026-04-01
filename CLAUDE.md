@AGENTS.md

# Dynet Infratechniek — Next.js Site (Klant: Gian Arends)

## Project Overview
Website voor **Dynet Infratechniek** (dynet.nl), geconverteerd van een WordPress/Elementor backup (.wpress) naar Next.js + Tailwind CSS. De WordPress backup is de ENIGE bron van waarheid — alle wijzigingen moeten matchen met het originele WP design.

## Bron van Waarheid
- **WordPress backup:** `~/Desktop/dynet/dynet-nl-20260327-105137-arel9vidjgsu.wpress`
- **Geëxtraheerde data:** `~/Desktop/dynet/extracted/` (database.sql, Elementor JSON, uploads)
- **Design specificatie:** `~/Desktop/dynet/extracted/DESIGN-SPEC.md` — compleet document met alle kleuren, fonts, spacing, layout per pagina
- **Local WP:** `dynet.local` via Local WP (voor visuele vergelijking)

## Tech Stack
- **Framework:** Next.js 16 (App Router, TypeScript)
- **Styling:** Tailwind CSS v4 + inline styles (voor pixel-perfect match met WP)
- **Hosting:** Vercel (auto-deploy via GitHub push naar main)
- **GitHub:** https://github.com/rivaldorose/dynet-site
- **Live URL:** https://dynet-site.vercel.app

## Project Structure
```
src/
├── app/
│   ├── page.tsx                    # Homepage (Dynet Infratechniek)
│   ├── layout.tsx                  # Root layout (Header + Footer)
│   ├── globals.css                 # Fonts, CSS vars, component styles
│   ├── dynet-electric/             # Dynet Electric subpagina
│   ├── contact/                    # Contact pagina + formulier
│   ├── projecten/                  # Projecten overzicht
│   ├── prijsvergelijker/           # Prijsvergelijker
│   ├── afspraak-maken/             # Afspraak formulier
│   ├── naw-gegevens/               # NAW formulier (glasvezel)
│   ├── bedankt/                    # Bedankt na afspraak
│   ├── bedankt-contact/            # Bedankt na contact
│   └── bedankt-voor-uw-gegevens/   # Bedankt na NAW
├── components/
│   ├── Header.tsx                  # Sticky header (cream bg, nav + iconen)
│   └── Footer.tsx                  # Footer (navy top bar, cream content, copyright)
public/
└── images/                         # Alle afbeeldingen uit WP backup
    ├── partners/                   # Partner logo's (Alfen, Shell, BMW, BAM, Vestel, Eneco)
    └── services/                   # Diensten afbeeldingen
```

## Design System (uit WordPress Elementor)

### Kleuren
| Doel | Hex |
|------|-----|
| Navy (primair) | `#11133D` |
| Navy alt | `#091441` |
| Groen (accent) | `#2E9F48` |
| Cream (achtergrond) | `#FDFBF2` |
| Diensten achtergrond | `#EBEBEB` |
| WhatsApp groen | `#33CC33` |

### Fonts
| Context | Font | Weight | Size |
|---------|------|--------|------|
| Body tekst | Tahoma | 400 | 16px, line-height 1.3em |
| Hero H1 | PT Sans Caption | 700 | 57px / 40px tablet / 25px mobile |
| Sectie titels (icon-box) | PT Sans Caption | 600 | 21px |
| Service card titels | PT Sans | 600 | 18px |
| Nav menu | PT Sans Caption | 600 | 16px |
| Contact card headings | PT Sans Caption | 700 | 18px |
| Footer headings | PT Sans Caption | 700 | 16px |

### Buttons
- **Navy buttons:** `#11133D` bg, wit tekst, 2px border, hover: transparant + navy tekst
- **Groene buttons (Dynet Electric):** `#2E9F48` bg, wit tekst, 2px border
- **Hero buttons:** `#11133D` bg, pulse animatie, pijl iconen

### Sectie borders
- Diensten: 4px solid `#2E9F48` top EN bottom
- Dynet Electric secties: 4px bottom border `#2E9F48`
- Navy separator: 4px bottom border `#2E9F48`

## Navigatie (Hoofdmenu)
Home | Over ons (#overons) | Duurzaamheid (#duurzaamheid) | Diensten (#diensten) | Projecten (#projecten) | Dynet Electric (/dynet-electric) | Contact (/contact)

## Bedrijfsinfo
- **Bedrijf:** Dynet Infratechniek (moederbedrijf), Dynet Electric (sub-afdeling)
- **Tagline:** "Wij verzorgen de verbinding van morgen"
- **Adres:** Keurmeesterstraat 53, 1187ZX Amstelveen
- **Telefoon:** 085-2224002
- **Email:** info@dynet.nl
- **Openingstijden:** Ma-Vr 08:00 - 17:30
- **Eigenaar WP backup:** Gian Arends (bizzz4562@gmail.com)
- **Ontwikkeld door:** Bizzz Media Solutions

## Commands
```bash
npm run dev       # Start dev server (localhost:3000)
npm run build     # Production build
npx tsc --noEmit  # TypeScript check
```

## Belangrijke regels
- **Bron van waarheid is ALTIJD het WP bestand** — niet eigen interpretatie
- Formulieren zijn front-end only (geen backend/email verzending — Resend moet nog gekoppeld worden)
- De site is volledig statisch (alle pagina's pre-rendered)
- Bij twijfel: check `DESIGN-SPEC.md` of de Elementor JSON in `extracted/elementor-data/`
- Custom icon font uit WP (glasvezel, laadpaal, etc.) is vervangen door SVG alternatieven
- Afbeeldingen `call2.webp`, `callcenter5.webp`, `callcenter6.webp` zaten NIET in de WP backup — klantenservice images als vervanging gebruikt
- Partner logos in volgorde: Alfen, Shell Recharge, BMW, Vestel, Eneco, Shell, BAM
- Projecten stedenlijst: 13 steden (incl. Zeist, Amstelveen, Surhuisterveen)

## TODO
- [ ] Resend koppelen voor contactformulier email verzending
- [ ] Custom domein koppelen (dynet.nl via Cloudflare DNS → Vercel)
