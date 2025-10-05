# Project Requirements Document (PRD)

## 1. Project Overview

We’re building **next-shadcn-dashboard-starter**, a ready-to-go boilerplate for developers who want a modern, responsive admin/dashboard web app without reinventing the wheel. It wires up Next.js (App Router), TypeScript, Tailwind CSS, and the shadcn/ui component library into a cohesive starter kit. Developers can clone this repo and have a production-quality dashboard layout, authentication flow, theming, and form handling set up from day one.

The core problem it solves is the wasted time spent setting up basic dashboard infrastructure—routing, layout (sidebar, header, main), theme switching, authentication, and form validation. This starter accelerates project kickoff, enforces best practices, and ensures consistent UI patterns. Success means a developer can fork this starter, connect it to their database or API, and have a functional, deployable dashboard in under an hour.

## 2. In-Scope vs. Out-of-Scope

**In-Scope (v1.0)**
- Next.js App Router project scaffold (pages in `/app`).
- Tailwind CSS and shadcn/ui component integration.
- Responsive dashboard layout (sidebar, top nav, main content area).
- Basic authentication using NextAuth.js (email/password + Google OAuth).
- Light/dark theme toggle persisted in localStorage.
- Example CRUD form with React Hook Form + Zod validation.
- Session management via secure HTTP-only cookies.
- Sample user profile page and settings page.
- API route examples consuming Prisma + PostgreSQL (mocked or real).
- GitHub Actions CI for linting and basic tests.
- Deployment configuration for Vercel.

**Out-of-Scope (v1.0)**
- Role-based access control (RBAC) or multi-tenant support.
- Payment or billing integration.
- Real-time communication (WebSockets).
- In-depth analytics/dashboard widgets beyond sample.
- Analytics, logging, or monitoring setup.
- Native mobile support or Electron wrapper.

## 3. User Flow

**Visitor Experience**
A new visitor lands on the homepage (`/`). They see a brief marketing blurb about the dashboard starter and a prompt to sign up or log in. When they click “Sign Up,” they’re taken to `/auth/signup` where they enter email and password or choose Google OAuth. After successful registration, they’re redirected to the main dashboard page.

**Authenticated User Journey**
On the `/dashboard` page, users see a left sidebar with navigation links: Dashboard, Profile, Settings, and Log Out. The header includes a theme toggle and the user’s avatar. Clicking “Profile” loads their user details in the main area with an edit form. Under “Settings,” they can toggle email notifications and other preferences. All pages maintain the same layout, and data is fetched via Next.js server components or client hooks (SWR).

## 4. Core Features

- **Authentication**: NextAuth.js with credentials and Google OAuth, HTTP-only cookies, session check for protected routes.
- **Layout Components**: Sidebar, Header, Main Content area, Footer (optional).
- **Theming**: Light/dark mode toggle saved in localStorage and applied via Tailwind.
- **Form Handling**: React Hook Form + Zod for type-safe validation; sample CRUD form.
- **Data Layer**: Prisma ORM connected to PostgreSQL (example schema for users and profiles).
- **API Routes**: Next.js route handlers (`/api/*`) demonstrating create, read, update, delete operations.
- **UI Library**: shadcn/ui components (Buttons, Inputs, Cards, Menus).
- **State Management**: SWR for client-side data fetching and caching.
- **CI/CD**: GitHub Actions for lint (ESLint, Prettier) and basic unit tests (Jest/Testing Library).
- **Deployment Scripts**: Vercel configuration (`vercel.json`) and environment variable examples.

## 5. Tech Stack & Tools

- **Framework**: Next.js 13 (App Router), TypeScript
- **Styling**: Tailwind CSS, shadcn/ui component library
- **Authentication**: NextAuth.js (OAuth + Credentials)
- **Database**: PostgreSQL (Prisma ORM)
- **Forms & Validation**: React Hook Form, Zod
- **Data Fetching**: SWR
- **CI/CD**: GitHub Actions, Jest, Testing Library
- **Deployment**: Vercel
- **Local Development**: `pnpm` or `npm`, VS Code (recommended), Git

*Optional AI Integration*: None in v1. If desired later, integrate OpenAI’s GPT-4 model for generating analytics insights or admin notifications.

## 6. Non-Functional Requirements

- **Performance**: Time to first byte < 200ms on Vercel; Lighthouse score ≥ 90.
- **Accessibility**: WCAG 2.1 AA compliance; keyboard navigation; ARIA attributes on custom components.
- **Security**: OWASP Top 10 mitigation; secure HTTP-only cookies; CSRF protection on API routes; input sanitization.
- **Usability**: Mobile-first, responsive design down to 320px; clear error messages on forms.
- **Maintainability**: Modular code structure; documented components; type-safe everywhere with TypeScript.

## 7. Constraints & Assumptions

- Node.js v16+ environment, deployed on Vercel or equivalent platform supporting Next.js App Router.
- Developers have access to a PostgreSQL instance or can use SQLite for local dev.
- NextAuth.js and Prisma are acceptable solutions; no alternative auth or ORM in this version.
- shadcn/ui and Tailwind CSS versions are compatible; minor version mismatches to be resolved.

## 8. Known Issues & Potential Pitfalls

- **Theme Flash**: Flash of incorrect theme on first paint. Mitigation: inline script to read `localStorage` before CSS loads.
- **SSR vs. CSR Hydration**: Mismatch between server-rendered HTML and client React. Mitigation: use Next.js `use client` directive sparingly.
- **Prisma Migrations**: Schema drift if migrations aren’t applied consistently. Mitigation: include migration scripts in CI.
- **OAuth Redirect URIs**: Must match deployment URL. Document environment var setup clearly.
- **Tailwind Purge**: Unused CSS removal might strip dynamic classes. Mitigation: safelist patterns in `tailwind.config.js`.

---

This PRD lays out everything the AI or developer needs to generate Tech Stack docs, Frontend Guidelines, Backend Structure, and more, without having to guess any details. Feel free to spin off subsequent documents directly from these requirements.