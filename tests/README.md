# Playwright Tests — Dynet Infratechniek

End-to-end tests voor de Dynet website. Draait tegen lokale dev server of productie.

## Tests

| Bestand | Wat wordt getest |
|---------|-----------------|
| `pages.spec.ts` | Alle pagina's laden, titels, headings, 404 |
| `navigation.spec.ts` | Header + footer links, mobile menu, social icons |
| `forms.spec.ts` | Formulier velden, honeypot, validatie |
| `security.spec.ts` | Security headers, CSP, API validatie, origin check |
| `mobile.spec.ts` | Mobile responsive layout, hamburger menu, no overflow |

## Draaien

**Lokaal (start dev server automatisch):**
```bash
npm test                    # Alle tests, alle browsers
npm run test:ui             # Interactive UI
npm run test:headed         # Met browser zichtbaar
```

**Tegen productie (https://www.dynet.nl):**
```bash
npm run test:prod
```

**Specifieke test of project:**
```bash
npx playwright test forms.spec.ts
npx playwright test --project=chromium-desktop
npx playwright test --project=mobile-safari
```

**Rapport bekijken:**
```bash
npm run test:report
```

## Browsers

- **chromium-desktop** — Desktop Chrome 1920x1080
- **mobile-safari** — iPhone 13 viewport (390x844)

## Belangrijke noten

- **Tests sturen GEEN echte emails** — we testen validatie en structuur, niet de Resend submit flow.
- **Rate limiting** — tegen productie worden API tests soms geraakt door rate limiting (5 per uur per IP). Tests accepteren zowel 400 als 429.
- **Browsers installeren (eerste keer):** `npx playwright install chromium webkit`
