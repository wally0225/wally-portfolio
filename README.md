# Wally Chang — Portfolio Website

Static site, ready to deploy on GitHub Pages. No build step needed — just push and go.

## Folder structure

```
index.html                                  ← Home page
case-studies/
  entity.html                               ← Case Study 01: Entity
  open-securities.html                      ← Case Study 02: Open Securities
assets/
  css/
    style.css                               ← Shared stylesheet for the whole site
  images/
    entity/                                 ← Screenshots used on the Entity case page
    open-securities/                        ← Screenshots used on the Open Securities case page
```

Plain HTML/CSS, no build step, no framework. One shared `style.css` drives the look of every page — edit it once and every page updates. Pages are scoped with a body class (`page-home` / `page-case`) so home-page and case-study styles don't collide even though they share one file.

To add a new case study's images, drop them in a new folder under `assets/images/your-case-name/` and reference them from the new case page with a relative path, e.g. `../assets/images/your-case-name/screen-01.jpg`.

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
   - Drag in `index.html`, the `case-studies` folder, and the `assets` folder (drag whole folders — GitHub keeps the folder structure)
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
