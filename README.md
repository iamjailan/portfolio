# Jailan Samun — Portfolio

The source code for [sleepany.com](https://sleepany.com), the personal portfolio of Jailan Samun. It presents work experience, education, technical skills, selected projects, a downloadable CV, and a software-development blog.

## Features

- Responsive portfolio with light and dark themes
- Work, education, skills, projects, and contact sections
- Project screenshots and technology tags
- Downloadable CV
- MDX-powered blog with pagination
- Per-page Open Graph images and structured data
- Canonical metadata for `https://sleepany.com`
- Generated `sitemap.xml`, `robots.txt`, and `llms.txt`

## Technology

- Next.js 16 and React 19
- TypeScript
- Tailwind CSS 4
- shadcn/ui and Radix UI
- Motion animations
- Content Collections and MDX

## Local development

Requirements:

- Node.js 18 or newer
- pnpm

Install the dependencies and start the development server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available commands

```bash
pnpm dev       # Start the development server
pnpm build     # Create a production build
pnpm start     # Run the production build
pnpm lint      # Check the code with ESLint
pnpm lint:fix  # Fix supported ESLint issues
```

## Customization

Most portfolio content lives in [`src/data/resume.tsx`](src/data/resume.tsx), including personal details, skills, experience, education, projects, social links, the canonical domain, and the CV path.

Other useful locations:

- `content/` — blog posts written in MDX
- `public/` — CV, profile image, project screenshots, fonts, and other static assets
- `src/app/` — pages, metadata, sitemap, robots, and `llms.txt`
- `src/components/` — reusable interface components and portfolio sections

## SEO and discovery

The production site exposes:

- [https://sleepany.com/sitemap.xml](https://sleepany.com/sitemap.xml)
- [https://sleepany.com/robots.txt](https://sleepany.com/robots.txt)
- [https://sleepany.com/llms.txt](https://sleepany.com/llms.txt)

Blog entries are added to the sitemap and `llms.txt` automatically from the MDX collection.

## Deployment

Build the application with `pnpm build` and deploy it to any platform that supports Next.js. Configure `sleepany.com` as the production domain and redirect the `www` hostname to the canonical non-`www` URL.

## License

This project is available under the terms in [LICENSE](LICENSE).
