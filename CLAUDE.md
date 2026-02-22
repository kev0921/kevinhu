# CLAUDE.md

This file provides guidance for AI assistants working on Kevin Hu's personal portfolio website.

## Project Overview

A personal portfolio website for Kevin Hu, a Computer Science student at the University of Toronto. The site showcases work experience, side projects, GitHub activity, and personal interests. It is live at [kevinhu04.netlify.app](https://kevinhu04.netlify.app/).

**Stack:** Next.js 14 (Pages Router) · TypeScript · Chakra UI v2 · Framer Motion · SWR · EmailJS · Spotify API · GitHub API

## Development Commands

```bash
npm run dev       # Start local dev server at http://localhost:3000
npm run build     # Production build (also runs next-sitemap via postbuild)
npm run start     # Start production server
npm run lint      # Run ESLint
```

> There are no automated tests in this project. Lint is the only automated check.

## Project Structure

```
/
├── src/
│   ├── pages/               # Next.js Pages Router (file = route)
│   │   ├── _app.tsx         # App entry: ChakraProvider + MainLayout + Meta
│   │   ├── _document.tsx    # Custom HTML document
│   │   ├── index.tsx        # Home page (/ route)
│   │   ├── experience.tsx   # /experience — Career & Education
│   │   ├── project.tsx      # /project — Side Projects
│   │   ├── github.tsx       # /github — Top GitHub repos (getStaticProps)
│   │   ├── contact.tsx      # /contact — EmailJS contact form (getStaticProps)
│   │   └── api/
│   │       ├── spotify.js   # /api/spotify — Proxies Spotify "Now Playing" API
│   │       └── hello.ts     # Default Next.js stub
│   ├── components/
│   │   ├── section/         # Page-level section components
│   │   │   ├── ProfileSection.tsx    # Hero/intro with avatar and bio
│   │   │   ├── SpotifySection.tsx    # Currently playing Spotify widget
│   │   │   ├── TechStackSection.tsx  # Tech stack icon grid
│   │   │   ├── SideProjectSection.tsx# Project cards grid
│   │   │   ├── GithubSection.tsx     # GitHub repo cards
│   │   │   └── HobbySection.tsx      # Hobbies section
│   │   ├── NavBar.tsx        # Responsive navbar with color mode toggle
│   │   ├── Footer.tsx        # Site footer
│   │   ├── MainLayout.tsx    # NavBar + main + Footer wrapper
│   │   ├── Meta.tsx          # <head> SEO meta tags
│   │   ├── CompanyCard.tsx   # Reusable card for experience/education entries
│   │   ├── GithubCard.tsx    # Reusable card for GitHub repos
│   │   ├── SideProjectCard.tsx # Reusable card for side projects
│   │   ├── StackCard.tsx     # Tech stack icon + link card
│   │   ├── ColorModeSwitcher.tsx # Dark/light toggle button
│   │   ├── Paragraph.tsx     # Styled paragraph wrapper
│   │   ├── SocialButton.tsx  # Social link button
│   │   └── ErrorMessage.tsx  # Inline form error display
│   ├── layout/
│   │   ├── theme.ts          # Chakra UI theme (dark mode default)
│   │   └── PageLayout.tsx    # Additional layout wrapper
│   ├── constant/
│   │   ├── index.tsx         # ALL site data: nav links, companies, educations,
│   │   │                     # sideProjects, techStacks, siteConfig, resume
│   │   └── getGithubRepos.ts # Fetches top-6 repos by stars via GitHub API
│   ├── types/                # TypeScript interfaces
│   │   ├── company.ts        # Company (experience/education entries)
│   │   ├── gitRepo.ts        # GitRepo (GitHub API response shape)
│   │   ├── project.ts        # Project (side project entries)
│   │   ├── spotify.ts        # SpotifySong
│   │   └── social.ts         # Social, TechStack
│   └── utils/
│       ├── motion.tsx        # Framer Motion wrappers: MotionBox, MotionFlex,
│       │                     # MotionText, MotionList, MotionImage
│       ├── capitalise.tsx    # String utility
│       └── animations/
│           └── page-transitions.tsx # PageSlideFade, StaggerChildren helpers
├── public/                   # Static assets (images, resume.pdf, sitemap, robots.txt)
├── styles/
│   ├── globals.css           # Global CSS + .waving-hand and .rotating animations
│   └── Home.module.css       # CSS module (minimal, legacy)
├── next.config.js            # Next.js config (reactStrictMode: true)
├── tsconfig.json             # TypeScript strict mode; src/ only
├── netlify.toml              # Netlify deployment (build: next build, publish: .next)
└── next-sitemap.config.js    # Sitemap config pointing to kevinhu04.netlify.app
```

## Key Conventions

### All Site Data Lives in `src/constant/index.tsx`

This is the single source of truth for all portfolio content. To update personal info, work history, projects, or tech stack — edit only this file:

- `menuLinks` — navigation items and routes
- `siteConfig` — author name, social links
- `resume` — resume PDF link
- `techStacks` — tech stack displayed on home page
- `companies` — work experience entries (also used for educations)
- `educations` — education entries
- `sideProjects` — project showcase cards

### Component Patterns

- Components are **functional React components** with TypeScript interfaces prefixed `I` (e.g., `IProfileSection`, `IMainLayout`).
- Chakra UI is used for all layout and styling. Avoid introducing Tailwind or plain CSS unless for global/animation purposes.
- Dark mode defaults to `dark` (set in `src/layout/theme.ts`). Use `useColorModeValue(lightVal, darkVal)` for theme-aware values.
- Motion components from `src/utils/motion.tsx` wrap Chakra primitives to support Framer Motion props without passing them to the DOM.
- Animation variants are defined in `src/utils/animations/page-transitions.tsx`. Use `PageSlideFade` and `StaggerChildren` for page-level entry animations.

### API Routes

- **`/api/spotify`** — Server-side proxy for the Spotify "Now Playing" API. Uses environment variables for credentials. Returns `{ isPlaying: false }` when nothing is playing or on error.
- Data is fetched client-side on the home page using **SWR** (`useSWR("/api/spotify", fetcher)`).

### Static Props

Pages that need external data at build time use `getStaticProps`:
- `github.tsx` — fetches top-6 repos by star count from GitHub API
- `contact.tsx` — passes EmailJS credentials from environment to the component

### TypeScript

- Strict mode is enabled (`"strict": true` in tsconfig).
- All types are in `src/types/`. Add new types there rather than inline.
- The `src/pages/api/spotify.js` is intentionally plain JS (not TS) due to its legacy origin.

## Environment Variables

Required for full functionality. Create a `.env.local` file locally:

```env
# Spotify integration (home page "Now Playing" widget)
NEXT_PUBLIC_SPOTIFY_CLIENT_ID=
NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET=
NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN=

# GitHub integration (github page)
GITHUB_USERNAME=kev0921

# EmailJS (contact form)
EMAILJS_SERVICE_ID=
EMAILJS_USER_ID=
EMAILJS_TEMPLATE_ID=
```

The site degrades gracefully without Spotify credentials (shows "Not Listening"). The contact form will fail silently without EmailJS credentials.

## Deployment

Deployed on **Netlify**. The `netlify.toml` defines:
- Build command: `next build`
- Publish directory: `.next`

The `postbuild` script automatically regenerates `sitemap.xml` and `robots.txt` via `next-sitemap` after each production build.

## Adding Content

### New Work Experience or Education Entry

Edit `src/constant/index.tsx`. Add an object to the `companies` or `educations` array following the `Company` type shape:

```ts
{
  title: "Company Name",
  alt: "Image alt text",
  url: "https://company.com",
  role: "Job Title",
  skills: ["React", "TypeScript"],
  period: "Month YYYY - Month YYYY",
  logo: "/companyLogo.png",  // place image in /public/
}
```

### New Side Project

Add an object to `sideProjects` in `src/constant/index.tsx` following the `Project` type:

```ts
{
  name: "Project Name",
  imageUrl: "/ProjectImage.png",  // place image in /public/
  alt: "Project Name",
  summary: "Short description of the project.",
  link: "https://github.com/kev0921/project",
  tech: ["React", "TypeScript"],
}
```

### New Page

1. Create `src/pages/new-page.tsx`
2. Add an entry to `menuLinks` in `src/constant/index.tsx`
3. Wrap the page content in `<Container maxW="container.lg" mt={["5", "10"]} mb={["5", "10"]}>` to stay consistent with other pages
4. Use `PageSlideFade` + `StaggerChildren` for entry animations

## Notes for AI Assistants

- **Do not add a testing framework** unless explicitly requested. There are no tests and the project is simple enough not to need them at this stage.
- **Do not introduce Tailwind CSS**. Chakra UI is the styling system in use.
- **Keep all personal data in `src/constant/index.tsx`** — never hardcode personal info directly in components.
- **The `public/` folder contains multiple old resume PDFs** (`old_resume*.pdf`). The active resume is `resume.pdf`.
- **`src/pages/projects.tsx`** appears to be a duplicate/legacy of `github.tsx` and is not linked in the nav. Do not delete it without confirming with the owner.
- When adding images, place them directly in `public/` (not a subdirectory) to match the existing pattern.
