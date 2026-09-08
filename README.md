# FOOTWORK — Dutch Football Performance Academy

Complete Next.js 15 website voor FOOTWORK in ’t Gooi.

## Pagina's
- Home
- Onze Methode
- Voetbaltraining
- Kickboxing Performance
- Physical Performance
- FOOTWORK 8
- Performance Test
- Trainingen & Prijzen
- Voor Voetbalclubs
- Over Ons
- FAQ
- Contact

## Deploy via Vercel
1. Upload de inhoud van deze map naar de root van je GitHub repository.
2. Controleer dat `app`, `components`, `public`, `lib`, `package.json` en `next.config.mjs` direct in de repository-root staan.
3. Vercel: Framework = Next.js, Root Directory = `./`.
4. Deploy.

## Nog definitief invullen
- `lib/site.js`: definitief e-mailadres en Instagram-handle.
- `app/over-ons/page.jsx`: namen, eigen foto's, ervaring/diploma's van de twee trainers.
- `app/trainingen-prijzen/page.jsx`: prijzen zijn concept/startprijzen en moeten definitief worden bevestigd.
- Het contactformulier gebruikt nu `mailto:` en opent het e-mailprogramma. Voor volledig automatische verzending kan later een mailservice/API worden gekoppeld.

## Security
Next.js staat vast op 15.5.25 (Maintenance-LTS backport release op het moment dat deze versie is gemaakt).
