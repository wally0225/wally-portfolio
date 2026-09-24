# Wally Chang — Portfolio Site: Project Context

This file is auto-loaded by Claude Code as project memory. It captures the design
decisions and conventions established while building this site, so edits stay
consistent even in a fresh session.

## What this is

A static portfolio site (plain HTML/CSS, no framework, no build step) for Wally
(Hsun-Wei) Chang, applying for Product Manager / Product Designer / UIUX Designer
roles at tech companies in Australia. Deployed on GitHub Pages at
https://wally0225.github.io/wally-portfolio/

## Site architecture (3 levels)

```
index.html                  → Home: hero, about timeline, 4 category "portals", skills, contact
categories/*.html           → One page per category, lists that category's case studies
case-studies/*.html         → Full case study pages
assets/css/style.css        → ONE shared stylesheet for the entire site
assets/images/<case>/       → Real image files per case (not base64)
```

Home → category → case study. The home page does NOT list case studies directly;
it shows 4 category tiles, each linking to a `categories/*.html` page that lists
the case studies in that category as text-forward cards (`.list-card`), which
link to the full case study page.

## The four categories

1. **Pure Design** (`categories/pure-design.html`) — redesigns, visual design,
   front-end web builds. Currently: `mccusker-redesign.html`.
2. **New Feature Ideation** (`categories/new-feature-ideation.html`) — adding a
   new capability to something that already exists. Currently:
   `mccusker-newsletter.html`.
3. **Frontier Projects** (`categories/frontier-projects.html`) — products built
   in response to a shift in tech/policy/market conditions, regardless of
   whether the bet paid off. Currently: `entity.html`, `open-securities.html`.
4. **Research** (`categories/research.html`) — academic/research work from ANU.
   Currently just a locked "coming soon" card (Research Assistant, College of
   Engineering — NOT yet written up).

When adding a new case study: pick the right category, add a `.list-card` entry
on that category's page, and bump the project count shown on the home page's
portal card for that category.

## Design system (in `assets/css/style.css`)

- Color tokens as CSS custom properties in `:root` (`--paper`, `--ink`, `--gold`,
  `--dark`, etc.). A dark-mode variant is defined but the intent was a light,
  editorial "case file" look with a warm gold/brass accent — not a SaaS-card look.
- Typography: `Noto Serif TC` for headings (serif, editorial tone), `Noto Sans TC`
  for body. Chosen deliberately, not a default — do not swap without discussion.
- Two page contexts share one stylesheet via body classes: `page-home` and
  `page-case`. Some class names (`header.hero`, `footer`) are intentionally
  scoped per page type because the layouts genuinely differ — don't merge them.
- Screenshots sit inside dark rounded "device frame" panels (`.feature-shots`,
  `.frame`, `.filmstrip`) to visually tie back to the dark-UI products shown.
  Architecture/policy diagrams that are white-background images use `.arch-box`
  (white card, not a dark frame) instead.
- `.compare-table`, `.dual-list`, `.mini-steps` are reusable components built
  for the McCusker case; reuse them for future cases with similar content
  shapes (comparison tables, stakeholder lists, process steps) rather than
  inventing new one-off patterns.

## Content conventions established

- **Client anonymization**: Entity's case study pitches to "a prospective
  client" — the real client is anonymized because the deal never closed. This
  was a deliberate choice; don't re-add the real name. Open Securities' launch
  partners (Masterlink, E.SUN, Mega, SKIS, Horizon, Fubon Securities) ARE named
  because that's public information from press coverage.
- **Language note**: Entity and Open Securities carry an italic note explaining
  screenshots stay in Traditional Chinese because the product was built for the
  Taiwanese market. Keep this pattern for any future Taiwan-market case.
- **Tone**: first person, concrete over vague ("pitched to several prospective
  clients" not "pitched to clients"), and honest about outcomes — Entity's
  case explicitly says the deal wasn't signed rather than glossing over it.
- **Positioning**: Wally is positioned as a working PM/Designer whose master's
  sharpens existing product experience — NOT as someone "pivoting to research."
  Avoid research-pivot framing anywhere on the site.
- **CV as source of truth**: Career dates/titles on the home page timeline are
  taken directly from Wally's CV (Sep 2018–Jun 2021 BS Comp Sci NCCU; Jul
  2020–Mar 2022 UI/UX Designer; Aug 2022–May 2024 Senior Product Manager, both
  at Systex; Jul 2024–Nov 2026 Master of Computing, HCCC specialisation, ANU).

## Known open items

- Hero photo on the home page is a placeholder (`.photo-placeholder`) — swap
  in a real `<img>` inside `.photo-frame` when Wally provides a photo.
- Research category has one "coming soon" case (Standardising Student
  Assessment, ANU College of Engineering) not yet written up.
- More cases are expected across all four categories over time (e.g. past bank
  account-opening UX work, iWow feature launches, mBroker work, logo/visual
  design work) — ask which category before drafting a new one if it's not
  obvious.
