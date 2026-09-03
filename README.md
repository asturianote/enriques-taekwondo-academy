# Eclipse Taekwondo — sample site

Sample marketing site for **Eclipse Taekwondo**, restyled from the official brand board (navy, gold, eclipse mark).
Not a live business listing. Location, phone, prices, and class times are intentionally omitted until they are real.

Public name: Eclipse Taekwondo. Founder: Master Enrique Suarez, 4th Dan Kukkiwon.
Tagline: Focus. Discipline. Excellence.

Open `index.html`, `classes.html`, or `contact.html` in a browser.
Relative links are set for a GitHub Pages project site.

## Files
- `index.html` — Home (about and team live here)
- `classes.html` — Classes
- `contact.html` — Contact (form does not send)
- `css/styles.css`
- `js/main.js`
- `assets/` — brand crops and SVG marks
- `README.md`

## Brand
- Colors: navy/charcoal `#0B1323`, gold `#D4AF37`, slate `#8A8D94`, white `#FFFFFF`
- Display type: Outfit (Google Fonts), all-caps; Korean `태권도` in Noto Sans KR
- Headline: Become the light in the dark.
- Primary CTA: Start your journey
- Secondary CTA: Free introductory class

## Assets
Crops from the official brand board (`brand-board.jpeg`):
- `assets/logo-lockup.png` — stacked primary lockup (eclipse mark + ECLIPSE / TAEKWONDO + 태권도)
- `assets/logo-banner.png` — high-res horizontal lockup from the top of the board
- `assets/seal.png` — circular seal, masked to a circle
- `assets/eclipse-photo.png` — diamond-ring eclipse photograph

Recreated in SVG (crops were too small or had overlapping text):
- `assets/eclipse-ring.svg` — eclipse / diamond-ring mark
- `assets/icon-focus.svg`, `icon-discipline.svg`, `icon-respect.svg`, `icon-confidence.svg`, `icon-excellence.svg`

Skipped: hero kick photo (website mockup had nav and headline overlapping the figure).

## How to open
Double-click `index.html` or open it from a browser File menu.
Optional local server: from this folder run `python3 -m http.server 8080` then visit port 8080.

## Swap later
Colors and fonts live in `:root` in `css/styles.css`.
Add street address, phone, class times, and prices only when those facts exist.
