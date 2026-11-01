# Eclipse Taekwondo — website

Static website for **Eclipse Taekwondo**, the Taekwondo school led by Master Enrique Suarez
(Kukkiwon 4th Dan), opening in 2027 in Southwest Broward, South Florida.

Plain HTML/CSS/JS with no build step. All links are relative, so the site works on GitHub Pages
(project sub-path), on any static host, or straight from the file system. Mobile-first and responsive.

## Pages
| File | Page |
|---|---|
| `index.html` | Home: "Discipline Starts Here." hero, belt stripe, Discipline / Confidence / Safety / Progress, program tiles, Founding Families waitlist, instructor teaser, photo gallery |
| `programs.html` | Belt path, programs by age and belt (Little Warriors to Black Belt, Teen + Adult, Family Class), teams, private classes, holiday camps, belt testing |
| `schedule.html` | Weekly Monday–Friday schedule in the guideline pastel colors (grid on desktop, per-day cards on phones), free-class panel, 3-step "how it works" |
| `about.html` | Master Enrique Suarez: bio, mission, credential stats, credentials table, Five Tenets with Korean names, "Our promise" |
| `parents.html` | Parents and FAQ: anti-bullying / safety / school benefits, first visit step by step, safety practices, FAQ, events (dates to be announced) |
| `contact.html` | Free intro class / Founding Families waitlist form (no sending service yet, nothing is sent; no email address or phone is published) |
| `classes.html` | Redirect to `programs.html` so old links keep working |

`css/styles.css` holds the whole design; `js/main.js` runs the mobile menu, the footer year and the form note.

## Design (from "Eclipse Taekwondo — Design Guidelines")
- Fonts (Google Fonts): **Montserrat** for headings, labels and numbers; **Lato** for body text.
- Core colors: Eclipse Black `#111111`, Charcoal `#222222`, Gold Bright `#F5B301` (gold on black, CTAs),
  Gold Deep `#D4A017` (gold text on light backgrounds), Warm Orange `#E87722` (bullet arrows only), White.
- Neutrals: Cream `#FFF8EC`, Cream Deep `#FDF1DA`, Ivory `#FFFCF6`, Sand border `#E6DCC8`, Warm Gray `#F2EEE6`.
- Belt colors for the belt stripe and program accents: `#F2EEE5`, `#F7D046`, `#3E8E41`, `#2563A8`, `#C0392B`, `#111111`.
- Schedule pastels: Little Warriors `#DCEAFB`, White + Yellow `#FFF1BF`, Green + Blue `#D5EFE0`,
  Red + High Red `#F9D6D2`, Black Belt `#D3D7DE`, Teen + Adult `#E6DDF5`, Family Class `#FFDDB8`; open slots `#F7F7F7` with a dash.
- Patterns: black label column with gold text and gold left border, gold underline under the header,
  cream callout with a Gold Deep left bar, Cream Deep stat/tenet cards.
- Logos: official full-color logo on black only (header, footer, icon). Never stretched, recolored or shadowed.
- Photos in `assets/img/` (resized, metadata removed; `-800`/`-600` versions for phones via `srcset`).

## Sources
- Official logo files
- Website instructions folder: Design Guidelines, designer mockups and photos
- Master Enrique's resume — public credentials and teaching experience only
- Weekly class schedule — the planned opening schedule
- Enrique's planning documents — public mission, values, program and safety descriptions only

## Privacy rule
Nothing private or internal goes on this site:
- No address, phone numbers, email addresses (not in pages, footer, links or meta tags), family details or birthdates.
- No prices, tuition, fees, revenue, projections, budgets, lease terms or other business-plan figures.
- No names of previous employers or schools. No academic history.
- Location is shown only as "Southwest Broward". Contact is only through the pending sign-up form.
