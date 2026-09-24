# Wally Chang — Portfolio Website

Static site, ready to deploy on GitHub Pages. No build step needed — just push and go.

## Folder structure

```
index.html                                  ← Home page (4 category portals)
categories/
  pure-design.html                          ← Category: Pure Design
  new-feature-ideation.html                 ← Category: New Feature Ideation
  frontier-projects.html                    ← Category: Frontier Projects
  research.html                             ← Category: Research
case-studies/
  entity.html                               ← Frontier Projects
  open-securities.html                      ← Frontier Projects
  mccusker-newsletter.html                  ← New Feature Ideation
  mccusker-redesign.html                    ← Pure Design
assets/
  css/
    style.css                               ← Shared stylesheet for the whole site
  images/
    entity/
    open-securities/
    mccusker/
```

The site now has three levels: **home → category → case study**. The home page shows four category "portals" (Pure Design, New Feature Ideation, Frontier Projects, Research); each links to a category page listing that category's case studies as text-forward cards; each of those links to the full case study page.

Plain HTML/CSS, no build step, no framework. One shared `style.css` drives the look of every page — edit it once and every page updates. Pages are scoped with a body class (`page-home` / `page-case`) so home-page and case-study styles don't collide even though they share one file.

To add a new case study:
1. Decide which category it belongs to.
2. Add its images to a new folder under `assets/images/your-case-name/`.
3. Add the case study HTML file under `case-studies/`.
4. Add a `.list-card` entry for it on the relevant `categories/xxx.html` page, and bump that category's project count on `index.html`.

## Deploy to GitHub Pages (first time)

1. **Create a GitHub account** if you don't have one: https://github.com/join

2. **Create a new repository**
   - Click the **+** in the top right → **New repository**
   - Repository name: `your-username.github.io` (replace `your-username` with your actual GitHub username — this exact naming gives you the cleanest URL)
   - Set it to **Public**
   - Do NOT initialise with a README (we already have one)
   - Click **Create repository**

3. **Upload these files**
   - On your new repo's page, click **uploading an existing file**
   - Drag in `index.html`, the `categories` folder, the `case-studies` folder, and the `assets` folder (drag whole folders — GitHub keeps the folder structure)
   - Scroll down, click **Commit changes**

4. **Turn on GitHub Pages**
   - Go to your repo's **Settings** tab → **Pages** (left sidebar)
   - Under "Build and deployment", Source: **Deploy from a branch**
   - Branch: **main**, folder: **/ (root)** → **Save**
   - Wait 1–2 minutes. Your site will be live at:
     `https://your-username.github.io`

5. **Check it works**
   - Visit the URL above
   - Click into both case studies and confirm the "← Portfolio" and "Next case study" links work

## Updating the site later (e.g. adding a new case study)

1. I'll give you a new HTML file for the case study (e.g. `open-api-2.html`)
2. In your GitHub repo, go into the `case-studies` folder → **Add file** → **Upload files** → drag in the new file → **Commit changes**
3. I'll also give you an updated `index.html` with the new case added to the Case Studies section — upload it the same way to replace the old one
4. GitHub Pages updates automatically within a minute or two — no other steps needed

## Optional: custom domain

If you'd like a domain like `wallychang.com` instead of `your-username.github.io`:
1. Buy a domain from any registrar (Namecheap, Google Domains, etc. — usually ~US$10–15/year)
2. In your repo's **Settings → Pages**, add the domain under "Custom domain"
3. At your domain registrar, add the DNS records GitHub shows you
This step is optional and can be done any time after the site is already live on `github.io`.
