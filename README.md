# Hasini Pinsara - Data Science Portfolio

A responsive React portfolio for Hasini Pinsara, a Data Science undergraduate at SLIIT in Sri Lanka, seeking AI/ML, Data Science, and Data Analytics internships.

## Features

- Midnight Sapphire design, translucent cards, and stationary connected-wire backgrounds.
- Dual portrait hero with a circular cursor reveal and touch interaction.
- About, skills, education, three academic projects, banking experience, and contact links.
- Responsive phone/tablet layouts and collapsible navigation.
- Background-free robot contact shortcut with a six-second greeting cycle.
- Production pre-rendering, structured profile data, and configurable search metadata.

## Local development

```sh
npm install
npm run dev
```

## Production checks

```sh
npm run build
node scripts/check-seo.mjs
npm run preview
```

Build output is written to `dist/`. The application uses React, React DOM, Vite, and plain CSS. It does not require a backend or database.

## GitHub Pages

1. Push this project to the repository's `main` branch.
2. In Settings > Pages, choose GitHub Actions as the publishing source.
3. Add the repository Actions variable `SITE_URL` containing the complete public HTTPS URL, including any repository subdirectory and a trailing slash.
4. Run the Deploy portfolio to GitHub Pages workflow or push to `main`.

The existing workflow builds and publishes `dist/`. See [SEO setup](SEO.md) for canonical URLs, sitemaps, and indexing. Without `SITE_URL`, the build omits the canonical URL and generated sitemap rather than using a guessed address.

## Assets

Only images used by the current portfolio are retained:

- `assets/img/1-withoutDigital.png`: default hero portrait.
- `assets/img/2-1-withDigital.png`: digital reveal portrait.
- `assets/img/sliit-logo.png`: SLIIT education logo.
- `assets/img/UoP-logo.webp`: University of Peradeniya education logo.
- `assets/img/IMBS-logo.jpg`: IMBS education logo.
- `public/hpLogo-sapphire.png`: transparent HP favicon.

The Lottie intro also uses `assets/vid/Hello (apple).json` and `public/vendor/lottie_light.min.js`.

## Documentation

- [Hero image generation prompts](assets/img/README.md)
- [Portfolio maintenance details](src/README.private.md)
- [Search and deployment setup](SEO.md)

The private README filename does not provide access protection and the file is not excluded from Git.

## Profile

- [LinkedIn](https://www.linkedin.com/in/hasini-kulatunga-88717a439/)
- [GitHub](https://github.com/Hasini-Kulatunga)
- Email: hasinipkulatunga@gmail.com
