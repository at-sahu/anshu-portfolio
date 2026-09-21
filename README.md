# Anshu Kumar Sah Premium Portfolio

Agency-style bilingual portfolio website for Anshu Kumar Sah, built from the attached master prompt as a production-ready React + Vite project.

## Features

- Premium black/charcoal visual system with light mode support
- 3D hero scene using Three.js and React Three Fiber
- English and Hindi language switcher with saved preference
- Sticky glass navigation, scroll progress, active section tracking, mobile drawer
- Loading screen, desktop custom cursor, reveal animations, counters, hover states
- About, skills, tech wall, education timeline, projects, services, achievements
- Certificates, testimonials carousel, blog placeholders, gallery lightbox, pricing, FAQ
- Backend-ready contact form with React Hook Form + Zod validation
- SEO metadata, Open Graph, Twitter cards, JSON-LD structured data
- PWA manifest, favicon placeholders, robots.txt, sitemap.xml
- Deployment-ready for Vercel, Netlify, Cloudflare Pages, Firebase Hosting, and GitHub Pages

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS 4 via `@tailwindcss/vite`
- Three.js, `@react-three/fiber`, `@react-three/drei`
- Framer Motion
- Lucide React
- React Router
- React Hook Form + Zod
- React Helmet Async
- React Hot Toast
- Embla Carousel

## Getting Started

```bash
pnpm install
pnpm dev
```

Build for production:

```bash
pnpm build
pnpm preview
```

## Folder Structure

```text
src/
  components/
    common/
    layout/
    sections/
  context/
  data/
  hooks/
  pages/
  services/
  styles/
  translations/
  utils/
public/
  icons/
  placeholders/
```

## Customization

- Personal details and editable content: `src/data/portfolio.js`
- UI labels: `src/translations/ui.js`
- Theme and language providers: `src/context/`
- Contact validation: `src/services/contactSchema.js`
- Visual system: `src/styles/global.css`
- Resume placeholder: `public/resume-placeholder.txt`
- SEO URL placeholders: `index.html`, `public/robots.txt`, `public/sitemap.xml`

## Contact Form Integration

The contact form now sends validated inquiries to the included Node.js/Express API at `/api/inquiries`.

Backend:
- MongoDB Atlas stores inquiries
- Brevo API sends notification emails
- Express rate limiting protects the inquiry endpoint
- Helmet, CORS, validation, and environment variables are included

Frontend uses `VITE_API_URL` to point to the deployed backend. See `.env.example` and `backend/.env.example`.

Never commit real API keys or `.env` files.

## Free Deployment

Recommended zero-cost setup:
- GitHub: source repository
- Netlify: React/Vite frontend
- Render: Node.js/Express backend
- MongoDB Atlas: database
- Brevo: transactional email API

### Frontend

Set this Netlify environment variable:

```text
VITE_API_URL=https://YOUR-RENDER-SERVICE.onrender.com
```

Then deploy from GitHub. `netlify.toml` already contains the build command and SPA redirect.

### Backend

Deploy the `backend/` directory to Render. Add the variables from `backend/.env.example` in Render's Environment settings.

### Database

Create a MongoDB Atlas free cluster and put its connection string in `MONGO_URI`. Allow the deployed backend to connect according to your Atlas network-access settings.

### Email

Create a Brevo account, create an API key, and verify the sender email. Put the API key in `BREVO_API_KEY` and the verified sender in `FROM_EMAIL`.

The backend saves the inquiry even if email delivery is temporarily unavailable, and logs the email error for troubleshooting.

## Local Development

Frontend:

```bash
npm install
npm run dev
```

Backend:

```bash
cd backend
npm install
npm run dev
```

For local frontend-to-backend requests, use:

```text
VITE_API_URL=http://localhost:5000
```

## Future Enhancements

- Replace placeholders with real projects, certificates, testimonials, and blog posts
- Add a CMS or admin dashboard
- Add analytics through the prepared environment variables
- Replace the map placeholder with Google Maps or Mapbox
- Replace `resume-placeholder.txt` with a final PDF resume

## Author

Anshu Kumar Sah  
B.Tech CSE (Artificial Intelligence & Machine Learning), Semester 3  
U. V. Patel College of Engineering, Ganpat University
