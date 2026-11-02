# Hasini Pinsara Portfolio - Private Maintainer Notes

This is a maintenance document that can be committed to Git. The private filename does not restrict access. It is not imported by the application or copied into the production build. This is not encryption or access control: anyone with filesystem access can read it. Do not store passwords, API keys, or tokens here. Vite development servers can expose source files, so do not expose the development server publicly.

## Purpose and profile

A professional single-page portfolio for Hasini Pinsara, a Data Science undergraduate at the Sri Lanka Institute of Information Technology (SLIIT), Sri Lanka. The portfolio presents skills, academic projects, education, and banking experience to support AI/ML, Data Science, and Data Analytics internship applications.

- Public name: Hasini Pinsara
- LinkedIn profile name: Hasini Kulatunga
- Email: hasinipkulatunga@gmail.com
- LinkedIn: https://www.linkedin.com/in/hasini-kulatunga-88717a439/
- GitHub: https://github.com/Hasini-Kulatunga
- Location: Sri Lanka
- Phone: intentionally removed from the website; do not restore without a request.
- No unprovided certificates, social accounts, achievements, or professional job titles should be added.

## Content and navigation

Navigation anchors: #home, #about, #education, #projects, #experience, #contact.

### Hero

Eyebrow: HASINI PINSARA / DATA SCIENCE UNDERGRADUATE.

Heading, kept on two lines:

Turning data into
meaningful insights.

Description: Data Science undergraduate at SLIIT, exploring artificial intelligence, machine learning, and analytics to solve real-world problems. Seeking an AI/ML, Data Science, or Data Analytics internship.

The compact Explore my work button links to #projects and has a down-right arrow. The outlined Let's talk button links to #contact with an up-right arrow.

### About

Heading: Hasini Pinsara.
Role: Data Science Undergraduate / SLIIT.

Summary: I turn data into practical insights and intelligent solutions using Python, machine learning, and analytics. Seeking an AI/ML, Data Science, or Data Analytics internship to apply my skills to real-world problems.

Includes Who I Am, What I Build, My Mission, areas of focus, the technology stack, engineering philosophy, and future vision. The philosophy follows Discover, Architect, Engineer, Validate, and Evolve.

### Skills

- **Programming Languages:** Python, R, Java, JavaScript, C.
- **AI & Machine Learning:** Machine Learning, Data Preprocessing, Feature Engineering, Predictive Modelling, Model Training and Evaluation, Regression, Demand Forecasting, Scikit-learn, XGBoost, LightGBM, Random Forest, HistGradientBoosting.
- **Data Science & Analytics:** Exploratory Data Analysis (EDA), Data Analytics, Statistical Analysis, Data Warehousing, Data Visualization, Pandas, Polars, NumPy.
- **Databases:** Microsoft SQL Server, MySQL, MongoDB.
- **Backend & APIs:** Python (FastAPI), Spring Boot, Node.js, Express.js, Java Servlets/JSP, RESTful APIs.
- **Cloud & Deployment:** AWS EC2, AWS S3, Linux Server Administration, Web Application Deployment.
- **Web & Mobile Technologies:** React, React Native (Expo), MERN Stack.
- **Tools & Version Control:** Git, GitHub.
- **Security & Authentication:** JWT Authentication, Role-Based Access Control (RBAC).
- **Core Concepts:** Data Structures, System Design, Problem-Solving, Business Analysis, Data-Driven Decision Making.

### Education

- Bachelor of Science (Hons) in Data Science, SLIIT, July 2024 - Present. Description: Building a foundation in data science, machine learning, and statistical analysis through practical projects.
- Diploma in English, University of Peradeniya, 2023. Description: Developed English language skills for clear communication in academic and professional settings.
- Diploma in Information Technology, IMBS Campus, Kurunegala, 2022. Description: Built a foundation in information technology and practical computing skills.

All three entries have institution logos. SLIIT and IMBS use 108% image scaling, no inner padding, and clipped rounded frames. Peradeniya retains its original framing.

### Projects

#### Logistic 18

Supply Chain Risk Management

Multi-tenant logistics platform with XGBoost risk scoring and supply chain analytics. Contributed to risk alerts and notifications to help teams identify potential disruptions.

- Category: AI & Full Stack
- Status: Academic project
- Displayed technologies: Python, FastAPI, XGBoost, React, MongoDB
- Repository: https://github.com/Hasini-Kulatunga/Logistic-18

#### Glowbook

Salon Appointment Booking

Cross-platform salon booking app for managing services and appointments. Contributed to appointment CRUD operations, API integration, and data management.

- Category: Mobile
- Status: Academic project
- Displayed technologies: React Native (Expo), Node.js, Express.js, MongoDB Atlas
- Repository: https://github.com/itstharusha/Glowbook.git

#### Transportation Management

Web-Based Ride Booking

Web application for transportation and ride bookings. Contributed to the Ride Booking module, supporting backend functionality and database operations.

- Category: Web
- Status: Academic project
- Displayed technologies: Java, Node.js, RESTful APIs, Database Management
- Repository: https://github.com/Hasini-Kulatunga/Web-BasedTransportationSystem.git

### Work experience

Banking Intern, People's Bank, Regional Head Office, Kurunegala, March 2023 - October 2023.

Experience covers banking operations, customer service, administrative processes, communication, teamwork, time management, problem-solving, and professional business practices.

### Contact and footer

Email link and clipboard copy action, LinkedIn, GitHub, Sri Lanka location, footer navigation, copyright year, and back-to-top link. Copy falls back to opening the email application if clipboard access fails. Contact uses mailto links; there is no server-side contact form or email delivery service.

Social icons use LinkedIn blue #0A66C2, GitHub white #FFFFFF, and email red #EA4335.

## Visual system

Midnight Sapphire is the selected palette:

| Token | Color | Purpose |
| --- | --- | --- |
| --midnight | #0B1026 | Deep backgrounds |
| --navy | #172554 | Secondary surfaces |
| --sapphire | #3556A8 | Blue accents and illumination |
| --sky | #A7BDF2 | Highlights, labels, and icons |
| --ice | #F1F5FF | Main text |

Broad navy-to-blue gradients, soft atmospheric light, faint connected wire lines, oversized section watermarks, pale blue labels, two-tone headings, and translucent cards provide a restrained technical appearance. The reference portfolio inspired layout and lighting; its green/teal palette is not the selected palette.

The network background and its connection points must stay stationary: no zoom, drift, or pulsing. The font is Onest, loaded from Google Fonts. CSS has multiple historical overrides; later rules and selector specificity affect the result. Check the end of global.css before changing an earlier rule.

## Hero images and interaction

- Default: assets/img/1-withoutDigital.png
- Reveal: assets/img/2-1-withDigital.png
- Both sources: 1672 x 941 PNG
- Generation prompts: assets/img/README.md

The normal portrait is visible initially. A circular feathered mask follows mouse movement to reveal the digital image beneath it. Leaving the hero restores the normal portrait. Touch users can tap outside links to toggle the reveal. A full-image crossfade was rejected; preserve the circular interaction. The photographs have different arm poses, so local reveal areas may show a pose transition.

Both image layers must share dimensions, object-fit, and object-position. The CSS reveal coordinates are relative to the hero. Mobile image positioning starts below the navigation.

## Intro and robot

BootSequence plays a Lottie introduction using assets/vid/Hello (apple).json and public/vendor/lottie_light.min.js. It includes a Skip Intro button, completion fallback, and reduced-motion handling.

The small SVG robot is drawn in FloatingAssistant.jsx. It has no surrounding background or border. It links to #contact and remains hidden while the hero is visible. It appears once the hero has scrolled above the viewport, then hides when returning. Every six seconds its hand waves and a Hey! greeting appears. Reduced-motion preferences disable the greeting animations. Do not restore dancing.

## Responsive behavior and accessibility

- Up to 900px: portrait above hero text; normal document flow; immediately visible hero copy without waiting for text animations.
- Phone navigation: collapsible menu with aria-expanded and keyboard Escape handling.
- Project cards stack on smaller screens.
- Education, skills, experience, contact, and footer layouts adapt to narrow widths.
- Hero buttons keep compact widths and wrap when needed.
- Focus styles, labeled navigation, image alt text, decorative aria-hidden graphics, and prefers-reduced-motion rules are present.
- Browser layout checks completed at 320, 375, 390, 600, 768, 900, and 1280px with no horizontal document overflow or JavaScript errors at that check.

## Source map

| File | Responsibility |
| --- | --- |
| src/main.jsx | Client React root and global CSS import |
| src/App.jsx | Section order and intro state |
| src/entry-server.jsx | Server rendering for production HTML |
| src/components/Hero.jsx | Portrait layers and pointer/touch reveal |
| src/components/HeroContent.jsx | Hero text and buttons |
| src/components/Navbar.jsx | Desktop/mobile navigation |
| src/components/About.jsx | Summary, skills, philosophy |
| src/components/Education.jsx | Qualifications and logos |
| src/components/Projects.jsx | Project data and cards |
| src/components/Experience.jsx | Banking internship |
| src/components/Contact.jsx | Contact links, copy action, footer |
| src/components/NetworkBackdrop.jsx | Decorative connected wire SVG |
| src/components/FloatingAssistant.jsx | Contact robot and visibility |
| src/components/SocialIcon.jsx | SVG social icons and brand colors |
| src/components/BootSequence.jsx | Intro animation |
| src/styles/global.css | Styling, responsive rules, animations |
| scripts/build.mjs | Client build, pre-render, URL metadata and sitemap |
| scripts/check-seo.mjs | Production content/schema/asset checks |
| index.html | Base metadata, structured data, favicon links |
| SEO.md | Deployment and search setup notes |

The unused Certifications component, clock hook, template imagery, obsolete logos, and empty source sitemap were removed. The build generates a sitemap when SITE_URL is configured.

## Logo assets

- SLIIT: assets/img/sliit-logo.png
- Peradeniya: assets/img/UoP-logo.webp
- IMBS: assets/img/IMBS-logo.jpg
- Active transparent favicon: public/hpLogo-sapphire.png

The sapphire HP favicon was generated as a geometric interlocking monogram using the site's blue palette. index.html references it using %BASE_URL%. Earlier pink logo assets and obsolete favicon files were removed; only the active sapphire favicon remains.

## Stack and local commands

React, React DOM, Vite, and @vitejs/plugin-react. No application backend or database is required for this website. Project technologies listed on cards describe those projects, not this portfolio's infrastructure.

Package name: hasini-portfolio. Current package version: 5.0.1. Dependencies currently use latest rather than fixed versions.

```sh
npm install
npm run dev
npm run build
npm run preview
node scripts/check-seo.mjs
```

npm run dev opens Vite in the browser. Production output is dist/. The build also creates a temporary .prerender/ directory and removes it when finished. npm run preview serves the generated production output. Version scripts are version:sync, version:check, and release; inspect version.js before using release-related commands.

## Search and deployment

At the last user-provided status, the site was not deployed and had no confirmed production URL.

The build pre-renders page content for crawlers and includes ProfilePage/Person JSON-LD, descriptive titles, descriptions, social metadata, and public profile links. The profile accurately identifies an undergraduate rather than asserting professional employment.

Set SITE_URL in .env.production or the build environment to the real public HTTPS URL, including a subdirectory when applicable. See .env.example. With SITE_URL, the build generates canonical metadata, og:url, dist/robots.txt, and dist/sitemap.xml. Without it, the build omits the canonical URL and generated sitemap and prints a reminder. Do not use localhost or invent a production domain.

GitHub Pages workflow: .github/workflows/deploy.yml. It builds on main pushes or manual dispatch and deploys dist. Configure the repository Actions variable SITE_URL. Without an explicit URL, GitHub Actions derives asset base paths from the actual repository name. BASE_PATH can configure a subdirectory when SITE_URL is not set.

After deployment, verify the domain in Google Search Console, submit the sitemap, request homepage indexing, and link the website from Hasini's public profiles. SEO and structured data do not guarantee first place or inclusion in Google/AI search.

## Maintenance checks

1. Preserve current user content and inspect existing changes before editing.
2. Update metadata and visible content together when changing identity or role.
3. Run npm run build after structural or rendering changes.
4. Run node scripts/check-seo.mjs after SEO/pre-render changes.
5. Check phone, tablet, and desktop widths after CSS changes, especially hero visibility, image alignment, navigation, contact wrapping, and document overflow.
6. Retain image originals and transparency on favicon changes.
7. Keep credentials out of source files, documentation, and browser-exposed environment variables.
8. This README is not excluded from Git; review its contents before sharing the repository.
