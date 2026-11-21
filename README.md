# Sean Julian Danendra — Personal Portfolio

A single-page personal portfolio built as a bold editorial identity: crimson red, warm ivory and black, oversized type, and the real portrait of Sean Julian Danendra.

Plain HTML, CSS and JavaScript. No framework, no build step, no dependencies.

---

## Overview

| | |
|---|---|
| **Type** | Static, single-page website |
| **Sections** | Home, About, Interests, Projects, Highlights, Contact, Footer |
| **Stack** | HTML5, CSS3, vanilla JavaScript, Google Fonts |
| **Hosting** | Any static host (Netlify config included) |

All personal details that were not provided are **clearly marked placeholders** in `[square brackets]`. Nothing has been invented: no skills, projects, dates, schools or awards.

## Design philosophy

The site is meant to feel like the cover and pages of an independent magazine rather than a template.

- The supplied red banner is the hero. It is used as-is, so the original lettering and signature are never redrawn.
- Red, ivory and black alternate by section instead of one colour washing over everything.
- Type does the heavy lifting: very large condensed display headings against calm, readable body text.
- Motion is limited to one entrance on the hero, gentle reveals on scroll, and hover feedback. Everything respects `prefers-reduced-motion`.

## Visual identity

| Colour | Hex | Use |
|---|---|---|
| Crimson Red | `#D80B16` | Signature colour, Contact section, buttons |
| Deep Red | `#A6000A` | Interests section |
| Bright Red | `#F01B24` | Accents on dark backgrounds |
| Warm Ivory | `#F5F0E8` | Main light background and text on dark |
| Soft White | `#FAF9F6` | Projects section |
| Pure Black | `#101010` | Text, hero strip, footer |
| Charcoal | `#1B1B1B` | Highlights section |
| Muted Gray | `#858585` | Decorative only |
| Light Gray | `#D8D4CE` | Dividers and secondary text on dark |

**Fonts** (Google Fonts): Anton for display, DM Sans for body and interface, Playfair Display for the personal statement, Caveat for the small handwritten caption.

## Features

- Sticky navigation that turns ivory on scroll, with an active-section indicator
- Fullscreen mobile menu: locks page scroll, closes on link click or `Esc`, keeps keyboard focus inside while open
- Hero entrance sequence and a very light parallax on the banner (disabled on mobile and for reduced-motion users)
- Scroll reveals with the Intersection Observer API
- Portrait wipe-in reveal on the About section
- Copyright year updates automatically
- Back-to-top link
- Skip link, visible focus states, semantic HTML, alt text, lazy-loaded below-the-fold image
- SEO and Open Graph metadata, favicon, theme colour
- If JavaScript is off, all content stays visible

## Project structure

```text
sean-julian-danendra/
├── index.html
├── css/
│   ├── style.css          Tokens, layout, components
│   └── responsive.css     Breakpoints
├── js/
│   └── main.js            Menu, reveals, parallax, year, small helpers
├── assets/
│   ├── images/
│   │   ├── brand-banner.png    Hero banner (supplied)
│   │   ├── profile-sean.jpg    Portrait (supplied)
│   │   └── og-preview.png      1200 × 630 social preview (made from the banner)
│   ├── icons/
│   │   └── favicon.svg
│   └── documents/              Empty, ready for a CV or other files
├── README.md
├── .gitignore
├── LICENSE
└── netlify.toml
```

## Run it locally

No install is needed.

1. Extract the ZIP.
2. Open `sean-julian-danendra/index.html` in your browser.

Optional local server (useful for testing the Open Graph image and paths):

```bash
cd sean-julian-danendra
python3 -m http.server 8000
# then visit http://localhost:8000
```

An internet connection is needed to load the Google Fonts. Without one the site falls back to system fonts.

## Customise it

Everything editable is in `index.html`. Search for text in `[square brackets]`.

| What | Where in `index.html` |
|---|---|
| Biography, education, status, location, background | `#about` |
| Skills and interests (three groups) | `#interests` |
| Projects (title, category, description, tech, links) | `#projects` |
| Timeline entries | `#highlights` |
| Email, LinkedIn, Instagram, other links | `#contact` and the footer |
| Hero location label | `.hero__label--place` |

**Making links live.** The GitHub link already points to `https://github.com/seanjuliandanendra`. Placeholder links (`data-placeholder="true"`) do nothing until you change them:

1. Replace `href="#"` with the real URL.
2. Delete `data-placeholder="true"` and `aria-disabled="true"` from that link.
3. For the email button, set `href="mailto:you@example.com"`, replace the visible text, and delete `data-placeholder-email="true"`.

**Colours and fonts** are CSS variables at the top of `css/style.css`.

## Replacing images

| Image | File | Notes |
|---|---|---|
| Hero banner | `assets/images/brand-banner.png` | 3:1 works best. Keep the name near the centre so it survives cropping on phones. |
| Portrait | `assets/images/profile-sean.jpg` | Shown at 4:5. The supplied file is 432 × 432 px, so a larger original (about 1000 px or more) would look sharper on high-density screens. |
| Social preview | `assets/images/og-preview.png` | 1200 × 630 px |
| Favicon | `assets/icons/favicon.svg` | Any square SVG |

**Project thumbnails.** The three projects use CSS-drawn placeholder art. To use real screenshots, save them as `assets/images/projects/project-01.jpg` (and `-02`, `-03`) at 1600 × 1000 px, then replace the `<div class="project__thumb ...">` block with an `<img>`, for example:

```html
<img class="project__thumb" src="assets/images/projects/project-01.jpg"
     width="1600" height="1000" loading="lazy" alt="Describe the project">
```

## Upload to GitHub (manual)

1. Create a repository on github.com (or use `seanjuliandanendra/seanjuliandanendra`).
2. Extract the ZIP and open the `sean-julian-danendra` folder.
3. On the repository page choose **Add file > Upload files**.
4. Drag in **the contents** of the folder (`index.html`, `css`, `js`, `assets` and the rest), so `index.html` sits at the repository root.
5. Commit to the `main` branch.

Or with Git:

```bash
cd sean-julian-danendra
git init -b main
git add .
git commit -m "Add portfolio website"
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

## Deploy on Netlify

The included `netlify.toml` sets no build command and publishes the project root (`.`).

**From GitHub**

1. In Netlify choose **Add new site > Import an existing project**.
2. Connect GitHub and pick the repository.
3. Set the production branch to `main`. Leave the build command empty and the publish directory as `.`.
4. Deploy.

**Drag and drop (no GitHub)**

1. Open <https://app.netlify.com/drop>.
2. Drag the extracted `sean-julian-danendra` folder onto the page.

After deploying, update `og:image` in `index.html` to the full address, for example `https://your-site.netlify.app/assets/images/og-preview.png`. Social platforms need an absolute URL.

## Browser support

Current versions of Chrome, Edge, Firefox and Safari, on desktop and mobile.

## License

Source code: MIT, see [LICENSE](LICENSE).
The photographs and brand artwork in `assets/images/` belong to Sean Julian Danendra, all rights reserved.
