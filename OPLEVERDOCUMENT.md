# Opleverdocument — Dynet Infratechniek Website

**Opleverdatum:** 21 april 2026
**Live URL:** https://www.dynet.nl
**Klant:** Dynet Infratechniek (contactpersoon: Jamal Badho)

---

## 1. Doel van de website

De website is een volledige vervanging van de oude WordPress-site van Dynet Infratechniek. Het doel:

- **Professionele online aanwezigheid** voor Dynet Infratechniek en Dynet Electric
- **Leadgeneratie** via 3 contactformulieren (Contact, Afspraak maken, NAW-gegevens)
- **QR-code landingspagina** (NAW-gegevens) voor bewoners die een glasvezelaansluiting willen aanvragen
- **Informatieve pagina's** over diensten, projecten, duurzaamheid, en de Dynet Electric afdeling

De site is opgezet als een **statische Next.js applicatie** op Vercel. Dit betekent: razendsnel, geen database te beheren, geen WordPress-updates of plugin-kwetsbaarheden meer, en vrijwel nul hostingkosten.

---

## 2. Techniek in één oogopslag

| Onderdeel | Gebruikt |
|-----------|----------|
| **Framework** | Next.js 16 (App Router, TypeScript) |
| **Styling** | Tailwind CSS v4 + inline styles |
| **Hosting** | Vercel (Production + Preview + Development) |
| **Code opslag** | GitHub (private repo) |
| **Email verzending** | Resend |
| **Domein + DNS** | Cloudflare (beheerd door broer van Rivaldo) |
| **Monitoring** | Vercel built-in logs |
| **Tests** | Playwright (82 end-to-end tests) |

### Workflow bij wijzigingen

1. Code wijziging → push naar `main` branch op GitHub
2. Vercel detecteert de push
3. Automatische build (~30 seconden)
4. Live op www.dynet.nl

Geen handmatige deploys, geen FTP, geen database-uploads.

---

## 3. Waar staat alles?

### GitHub repository
- **URL:** https://github.com/rivaldorose/dynet-site
- **Branch:** `main` (alles wat hier staat, staat live)
- **Toegang:** via GitHub account van Rivaldo — moet overgedragen worden aan klant

### Vercel project
- **Dashboard:** https://vercel.com/macvaldo1997-gmailcoms-projects/dynet-site
- **Account:** macvaldo1997@gmail.com
- **Production URL:** https://www.dynet.nl
- **Preview URLs:** https://dynet-site-*.vercel.app (elke branch krijgt een eigen preview)

### Resend (email verzending)
- **Dashboard:** https://resend.com
- **API Key:** opgeslagen als `RESEND_API_KEY` environment variable in Vercel
- **Geverifieerd domein:** dynet.nl (SPF + DKIM records zijn actief in Cloudflare)
- **Gratis tier:** 3.000 emails/maand, 100 per dag (ruim voldoende)

### Cloudflare (DNS)
- **Account:** van de broer van Rivaldo
- **A record:** dynet.nl → Vercel (76.76.21.21)
- **CNAME:** www.dynet.nl → Vercel
- **Proxy status:** DNS only (grijs wolkje — belangrijk, niet wijzigen)
- **MX records:** ongewijzigd gelaten (mail loopt via bestaande mailprovider)

---

## 4. Pagina's op de website

| URL | Pagina | Doel |
|-----|--------|------|
| `/` | Homepage — Dynet Infratechniek | Hero, Over ons, Duurzaamheid, Diensten, Projecten |
| `/dynet-electric` | Dynet Electric | Sub-afdeling voor elektrische installaties en laadoplossingen |
| `/contact` | Contact | Contactgegevens, Google Maps, contactformulier |
| `/projecten` | Projecten | Werkgebieden, specialisaties |
| `/prijsvergelijker` | Prijsvergelijker | Vraag offerte aan |
| `/afspraak-maken` | Afspraak maken | Formulier voor afspraak bevestiging |
| `/naw-gegevens` | NAW-gegevens (via QR code) | Formulier voor bewoners die glasvezel willen |
| `/bedankt` | Bedankt | Na afspraak submission |
| `/bedankt-contact` | Bedankt | Na contact formulier submission |
| `/bedankt-voor-uw-gegevens` | Bedankt | Na NAW formulier submission |

### Navigatie
- **Header:** Home • Over ons • Duurzaamheid • Diensten • Projecten • Dynet Electric • Contact
- **Footer:** zelfde links + Afspraak maken + social media + contactgegevens

---

## 5. Formulieren en email-routing

Alle drie de formulieren werken via een API-route in de site, die emails verstuurt via Resend.

| Formulier | URL | Email gaat naar |
|-----------|-----|----------------|
| **Contact** | /contact | `naw@dynet.nl` |
| **NAW-gegevens** (QR code) | /naw-gegevens | `naw@dynet.nl` |
| **Afspraak maken** | /afspraak-maken | `bevestigingen@dynet.nl` |

### Email format
- **Afzender:** `Dynet Website <noreply@dynet.nl>`
- **Reply-to:** het emailadres dat de bezoeker invulde — dus als je op "beantwoorden" klikt, beantwoord je direct de klant
- **Onderwerp:** bijv. `Nieuw contactformulier — Jan de Vries`, of `Afspraak BEVESTIGD — Maria Janssen`

### Afspraak maken: Ja/Nee bevestiging
Dit formulier heeft een **Ja/Nee radio button** onderaan ("Bevestig jij de afspraak?"). In de ontvangen email zie je direct:
- **Ja** → groen — subject: `Afspraak BEVESTIGD`
- **Nee** → rood — subject: `Afspraak GEWEIGERD`

### Environment variables op Vercel
Deze sturen de email routing. Wijzigbaar via het Vercel dashboard zonder code aan te raken:

| Variabele | Huidige waarde | Doel |
|-----------|---------------|------|
| `RESEND_API_KEY` | (secret) | API key voor Resend |
| `EMAIL_FROM` | `Dynet Website <noreply@dynet.nl>` | Afzender |
| `EMAIL_TO` | `naw@dynet.nl` | Voor contact + NAW formulieren |
| `EMAIL_TO_AFSPRAAK` | `bevestigingen@dynet.nl` | Voor afspraak formulier |

**Om een email adres te wijzigen:** Vercel dashboard → Settings → Environment Variables → bewerken → Redeploy.

---

## 6. Design en content

### Kleuren (gebaseerd op originele WordPress ontwerp)
- **Navy (primair):** `#11133D`
- **Groen (accent):** `#2E9F48`
- **Cream (achtergrond):** `#FDFBF2`
- **Diensten sectie:** `#EBEBEB`

### Fonts
- **Headings:** PT Sans Caption (700)
- **Body tekst:** Tahoma (400), 16px, regel-hoogte 1.3em
- **Nav menu:** PT Sans Caption (600)

### Afbeeldingen
Alle afbeeldingen komen uit de originele WordPress backup (logo, hero, partner logos, diensten foto's). Ze staan in `/public/images/` in de code.

### Content wijzigen
Alle teksten zijn hardcoded in de code (niet in een database). Om tekst aan te passen moet iemand met toegang tot GitHub of Vercel de bestanden bewerken. Dat kan op twee manieren:
1. **Via GitHub web interface** — simpele tekstwijzigingen zonder iets te installeren
2. **Lokaal via VS Code** — voor grotere wijzigingen

Voor de klant die zelf content wil beheren is een **Headless CMS** (bijv. Sanity.io of Contentful) een optie voor de toekomst. Dit is niet ingebouwd omdat:
- De content zelden verandert
- Het een extra maandelijks abonnement zou kosten
- Het onderhoud complexer maakt

---

## 7. Security

De website is gebouwd met de volgende beveiligingsmaatregelen:

### Tegen spam en misbruik
- **Honeypot velden** op alle 3 formulieren — verborgen invulveld dat bots automatisch invullen, gebruikers niet. Bot submissions worden stil genegeerd.
- **Rate limiting** — max 5 inzendingen per IP-adres per uur per formulier. Stopt floods.
- **Server-side validatie** — emailformaat, telefoonformaat, maximale lengtes. Geen gedoe met 10.000 karakter lange "vragen".
- **Origin check** — alleen POST requests vanaf dynet.nl worden geaccepteerd. Externe sites die de API willen misbruiken krijgen 403.

### Tegen XSS / injection
- **HTML escaping** in email templates — `<script>` tags die iemand invult worden getoond als tekst, niet uitgevoerd.
- **Content Security Policy** header — browsers krijgen een strikte lijst van toegestane scripts, fonts, en iframes.

### HTTP Security Headers (automatisch op alle pagina's)
- `Strict-Transport-Security` — forceert HTTPS
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: SAMEORIGIN` — voorkomt clickjacking
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` — blokkeert camera, mic, locatie

### Automatische dependency updates
- **Dependabot** staat aan op GitHub. Iedere maandag checkt het of er npm packages zijn met security fixes, en opent automatisch een Pull Request.

### Nog open (optioneel)
- **DMARC record** op dynet.nl — extra bescherming tegen email spoofing. Moet in Cloudflare toegevoegd worden. Niet gedaan omdat de klant geen DNS wijzigingen wil doen zonder overleg.
- **Cloudflare Turnstile** — onzichtbare CAPTCHA. Nog niet nodig met huidige honeypot + rate limiting. Kan toegevoegd worden als er ooit gerichte spam komt.

---

## 8. Tests

De site heeft een **automatische test suite** met 82 tests (Playwright):

| Categorie | Aantal | Wat wordt getest |
|-----------|--------|-----------------|
| Pagina's | 11 | Alle pagina's laden, titels, headings, 404 |
| Navigatie | 8 | Header/footer links, mobile menu, social icons |
| Formulieren | 12 | Velden, honeypot, validatie, Ja/Nee radios |
| Security | 6 | Headers, CSP, API validatie, origin check |
| Mobile | 6 | Responsive, hamburger menu, geen horizontale scroll |

**Hoe te draaien:**
```bash
npm test              # lokaal
npm run test:prod     # tegen live site
```

**Belangrijk:** tests sturen GEEN echte emails. Ze testen de structuur en validatie.

---

## 9. Wat is er allemaal gebouwd (timeline)

1. **WordPress backup uitgepakt** — 15.829 bestanden, 320 posts, alle Elementor data geëxtraheerd
2. **Design spec geschreven** — kleuren, fonts, spacing gedocumenteerd uit origineel
3. **Next.js site opgezet** — TypeScript, Tailwind, App Router
4. **Alle 10 pagina's herbouwd** met exacte match op originele WP design
5. **Contactformulieren gekoppeld** — Resend integratie voor 3 formulieren
6. **Email routing gesplitst** — NAW + Contact → `naw@dynet.nl`, Afspraak → `bevestigingen@dynet.nl`
7. **Ja/Nee bevestiging** toegevoegd aan afspraak formulier
8. **Footer uitgebreid** met Afspraak maken link
9. **Mobile responsive fixes** — alle pagina's werken op telefoon
10. **Security layer:** honeypot, rate limiting, validatie, CSP, headers, Dependabot
11. **Playwright test suite** met 82 tests

---

## 10. Wat de klant moet weten om verder te gaan

### Toegang die overgedragen moet worden
1. **GitHub repo** — uitnodiging sturen naar klant-email zodat ze editor rechten hebben
2. **Vercel project** — klant toevoegen als team member (of project overdragen naar hun account)
3. **Resend account** — klant eigen account laten maken en API key vervangen (optioneel, kan ook zo blijven)
4. **Cloudflare** — is al bij de broer van Rivaldo

### Wat de klant zelf kan doen
- Emails ontvangen op `naw@dynet.nl` en `bevestigingen@dynet.nl`
- Inzendingen beantwoorden via reply (gaat automatisch naar de klant)
- Statistieken bekijken in het Resend dashboard
- Email adressen wijzigen via Vercel environment variables

### Wat de klant NIET zelf kan doen (zonder technische hulp)
- Tekst of afbeeldingen op de site aanpassen (is code)
- Nieuwe pagina's toevoegen
- Formulieren uitbreiden met extra velden

Voor dit soort wijzigingen is technische hulp nodig. Opties:
1. **Rivaldo inhuren** voor incidentele wijzigingen
2. **Andere developer** inhuren — alle code staat op GitHub, het is een standaard Next.js project
3. **Headless CMS toevoegen** (Sanity, Contentful) — dan kan de klant zelf teksten en afbeeldingen beheren

---

## 11. Mogelijke toekomstige uitbreidingen

Dingen die nog kunnen als er behoefte aan is:

- [ ] **Headless CMS** — klant beheert zelf content
- [ ] **Cookie banner / GDPR compliance** — nog niet ingebouwd (de originele WP site had Complianz)
- [ ] **Google Analytics / Plausible** — bezoekersstatistieken
- [ ] **Blog sectie** — nieuws artikelen publiceren
- [ ] **Cloudflare Turnstile** — extra spam bescherming (als honeypot + rate limiting niet genoeg blijkt)
- [ ] **DMARC record** — email spoofing bescherming
- [ ] **Error monitoring (Sentry)** — realtime melding als er iets stuk gaat
- [ ] **Meertaligheid** — Engels naast Nederlands

---

## 12. Support en contact

**Technisch beheer tot overdracht:** Rivaldo Rose
- Email: macvaldo1997@gmail.com
- GitHub: @rivaldorose

**Klant:**
- Jamal Badho
- j.badho@dynet.nl

**Dynet bedrijfsinfo op de site:**
- Adres: Keurmeesterstraat 53, 1187ZX Amstelveen
- Telefoon: 085-2224002
- Algemeen email: info@dynet.nl
- Website: www.dynet.nl

---

## 13. Kosten overzicht

| Onderdeel | Kosten |
|-----------|--------|
| Vercel hosting (Hobby tier) | **€0** — voor deze site ruim voldoende |
| GitHub (private repo) | **€0** |
| Resend (<3000 emails/maand) | **€0** |
| Cloudflare DNS | **€0** |
| Domein dynet.nl | Reeds in bezit klant |
| **Totaal maandelijks** | **€0** |

Als er ooit meer dan 3000 emails per maand verstuurd worden: Resend Pro = $20/maand voor 50.000 emails.
Als de Vercel Hobby tier ontgroeid wordt (heel veel bezoekers): Vercel Pro = $20/maand.

---

## Bijlagen

In deze repo te vinden:
- `README.md` — korte project introductie
- `CLAUDE.md` — technische richtlijnen voor AI-assisted development
- `OPLEVERDOCUMENT.md` — dit document
- `tests/README.md` — test suite documentatie
- `.env.example` — template voor environment variables
- `DESIGN-SPEC.md` (in `/extracted/` folder) — volledige design specificatie uit originele WordPress

---

*Dit document is opgeleverd op 21 april 2026. Voor vragen of wijzigingen aan de documentatie: neem contact op.*
