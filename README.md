# FOOTWORK V3 — Dutch Football Performance Academy

Complete Next.js site voor Vercel.

## Deploy
1. Upload de inhoud van deze map naar dezelfde GitHub repository.
2. Vercel bouwt automatisch opnieuw.
3. Framework: Next.js. Root Directory: `./`.

## Contactformulier echt laten mailen
De site gebruikt de Resend API zonder extra npm package.
Voeg in Vercel → Project → Settings → Environment Variables toe:

- `RESEND_API_KEY` = jouw Resend API key
- `CONTACT_TO_EMAIL` = e-mailadres waar aanvragen binnenkomen
- `CONTACT_FROM_EMAIL` = geverifieerde afzender, bv. `FOOTWORK <aanvragen@jouwdomein.nl>`
- `NEXT_PUBLIC_CONTACT_EMAIL` = zichtbaar contactadres
- `NEXT_PUBLIC_WHATSAPP_NUMBER` = internationaal formaat zonder +, bv. `31612345678`
- `NEXT_PUBLIC_INSTAGRAM` = bv. `@footworkacademy`
- `NEXT_PUBLIC_SITE_URL` = definitief domein, bv. `https://footworkacademy.nl`

Zonder `RESEND_API_KEY` + `CONTACT_TO_EMAIL` toont het formulier bewust een duidelijke configuratiemelding en verstuurt het geen persoonsgegevens naar een onbekende bestemming.

## Wat zit in V3
- Complete homepage + methode + aanbod
- FOOTWORK 8
- Performance Test
- Trainingen & prijzen
- Rooster & locaties
- Clubprogramma's
- Over ons
- FAQ
- Proeftraining/contact
- Server-side leadformulier
- Bedankpagina
- Mobiele sticky CTA + optionele WhatsApp
- Privacy + concept trainingsvoorwaarden
- SEO metadata, Open Graph, sitemap en robots
- Responsive navigatie

## Nog definitief invullen voor commerciële livegang
- Echte trainersnamen, foto's en kwalificaties
- Exacte trainingsdagen en locaties
- Definitieve prijzen en betaal/annuleringsvoorwaarden
- Officiële bedrijfsgegevens
- Definitieve privacy/voorwaarden juridisch laten controleren
