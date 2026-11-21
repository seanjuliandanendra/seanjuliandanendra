# Sean Julian Danendra — Personal Portfolio

> Curious by nature. Creative by perspective. Driven by growth.

A responsive, editorial-style personal portfolio built with semantic HTML, CSS, and vanilla JavaScript. The visual identity pairs the supplied crimson brand banner and personal portrait with oversized typography, warm ivory surfaces, and restrained interactions.

## Design philosophy

The site is designed as a personal brand experience rather than a conventional developer template. Its visual language takes cues from independent editorial publications and contemporary creative studios: expressive typography, asymmetry, generous whitespace, fine rules, and a considered red / ivory / black palette.

## Visual identity

| Role | Color | Hex |
|---|---|---|
| Primary | Crimson Red | `#D80B16` |
| Deep accent | Deep Red | `#A6000A` |
| Highlight | Bright Red | `#F01B24` |
| Background | Warm Ivory | `#F5F0E8` |
| Paper | Soft White | `#FAF9F6` |
| Text | Pure Black | `#101010` |
| Surface | Charcoal | `#1B1B1B` |

Fonts: Anton (display), DM Sans (body), Playfair Display (editorial accent), and Caveat (available for future signature details).

## Features

- Single-page responsive layout for desktop, tablet, and mobile
- Sticky navigation and animated mobile menu
- Supplied personal brand banner and portrait integrated locally
- About, interests, projects, highlights, and contact sections
- Scroll reveal effects with `prefers-reduced-motion` support
- Active navigation state, skip link, keyboard support, and visible focus states
- SEO and Open Graph metadata, SVG favicon, and automatic copyright year
- Static hosting configuration for Netlify (no build step)

## Technology

- HTML5
- CSS3 (custom properties, grid, flexbox, responsive media queries)
- Vanilla JavaScript
- Google Fonts
- Inline SVG favicon

No framework, package manager, backend, or build tool is required.

## Repository structure

```text
sean-julian-danendra/
├── index.html
├── css/
│   ├── style.css
│   └── responsive.css
├── js/
│   └── main.js
├── assets/
│   ├── images/
│   │   ├── brand-banner.png
│   │   ├── profile-sean.jpg
│   │   └── projects/
│   ├── icons/
│   │   └── favicon.svg
│   └── documents/
├── README.md
├── .gitignore
├── LICENSE
└── netlify.toml
```

## Run locally

Because this is a static site, you can open `index.html` directly in a browser. For a local server, run one of these commands from the project directory:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## GitHub setup

1. Create an empty repository on GitHub.
2. Extract this ZIP archive.
3. Upload the project files and folders to the repository root, or push them using Git.
4. Use `main` as the default branch.

This archive does not perform any GitHub push or repository changes automatically.

## Deploy with Netlify

1. Sign in to Netlify and choose **Add new project → Import an existing project**.
2. Connect GitHub and select the repository.
3. Set the publish directory to `.`.
4. Leave the build command empty (there is no build step).
5. Deploy the site.

The included `netlify.toml` already declares the publish directory.

## Customization guide

### Personal information

Edit the About metadata and suggested copy in `index.html`. Replace bracketed text such as `[Add current status]` with accurate information. Remove any fields that do not apply.

### Interests

Replace the bracketed examples in the Technical, Creative, and Personal rows with interests you genuinely want to present. They are placeholders, not claims about current skills.

### Projects

Each project card is a placeholder. Update its title, description, category, technologies, and repository / live URLs. Add a project image to `assets/images/projects/` if desired, then update the relevant `.project-visual` in `index.html` and styles in `css/style.css`. Do not publish placeholder cards as completed work.

### Highlights

Replace `[YEAR]`, milestone titles, and descriptions with verified dates and experiences. Delete unused timeline entries.

### Contact and social links

Search `index.html` for `your.email@example.com` and replace it with the email address you want to publish. Replace the generic GitHub, LinkedIn, and Instagram URLs with your actual profile URLs. Remove any social network you do not use.

### Images

- Replace `assets/images/brand-banner.png` to update the hero brand image (keep the same filename or update its references in CSS and metadata).
- Replace `assets/images/profile-sean.jpg` to update the About portrait (keep the same filename or update its reference in HTML).
- Keep the original image subject and ensure you have the rights to publish any replacement.

### Colors and typography

Edit the CSS custom properties at the top of `css/style.css`. Google Fonts are loaded in the `<head>` of `index.html`.

## License

The source code is provided under the MIT License in `LICENSE`. The supplied personal photographs / brand artwork are personal assets and are not automatically relicensed for third-party reuse; obtain permission before redistributing them.
