# Haynes Corner Website

A modern Next.js website for Haynes Corner, featuring events, businesses, arts, and community information with integrated Sanity CMS.

## Prerequisites

- Node.js 24.19.0 (specified in `.nvmrc`)
- npm (comes with Node.js)

## Tech Stack

- **Framework**: Next.js 16.2.4 (React 19.2.5)
- **CMS**: Sanity 5.31.1
- **Styling**: Tailwind CSS 4.2.4, SASS, Styled Components
- **TypeScript**: 5.9.3
- **Maps**: Google Maps API
- **Email**: Nodemailer

## Getting Started

1. **Install dependencies**:

```bash
npm install
```

2. **Run the development server**:

```bash
npm run dev
```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

- `/app` - Next.js app directory (pages and layouts)
  - `/(site)` - Public website pages
  - `/(studio)` - Sanity Studio admin
- `/components` - React components
  - `/blocks` - Page content blocks
  - `/global` - Site-wide components
  - `/modules` - Reusable UI modules
- `/sanity` - Sanity CMS configuration and schemas
- `/queries` - Sanity GROQ queries
- `/utils` - Utility functions
- `/styles` - Global styles and SCSS

## Security

All packages are kept up-to-date with **0 vulnerabilities**. Security overrides are configured in `package.json` for transitive dependencies.

## Environment Variables

Configure your `.env.local` file with necessary API keys and configuration (Sanity, Google Maps, etc.).

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Sanity Documentation](https://www.sanity.io/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
