# Project Requirements Document (PRD)

## 1. Project Overview

**next-shadcn-dashboard-starter** is a boilerplate project designed to help front-end and full-stack developers launch a production-ready web dashboard in minutes. It combines Next.js (with the App Router), TypeScript, Tailwind CSS, and the ShadCN UI component library to deliver a standardized, accessible, and highly customizable starter. The core problem it solves is the repetitive setup of routing, theming, authentication, layout, and build tooling—all prerequisites for any modern dashboard UI.

This starter is being built to accelerate development speed, enforce best practices, and reduce integration headaches. Key objectives include:

- **Rapid Setup**: Developers should clone the repo, install dependencies, and see a live dashboard scaffold in under five minutes.
- **Modular Flexibility**: All UI components, pages, and utilities should be clearly separated so teams can swap in their own styles or data sources without friction.
- **Production-Readiness**: The project must include authentication scaffolding, light/dark theme support, linting, formatting, and CI/CD hooks out of the box.

Success will be measured by how quickly a new developer can spin up the project, add new dashboard modules, and deploy to a platform like Vercel with zero additional configuration.

---

## 2. In-Scope vs. Out-of-Scope

### In-Scope (Version 1.0)
- Next.js App Router setup with TypeScript.
- Tailwind CSS configured with a light/dark theme toggle.
- ShadCN UI component library integrated.
- Authentication flow using NextAuth.js (email/password + Google OAuth).
- Layout components: Sidebar, Topbar, Main Content area, Footer.
- Two sample dashboard pages:
  - **Analytics**: Simple chart (Chart.js) and data table.
  - **User Profile**: Display and edit basic profile info.
- Basic global state management (using React Context).
- ESLint, Prettier, and Husky pre-commit hooks.
- GitHub Actions workflow for linting and type-checking on every PR.
- Deployment configuration for Vercel.

### Out-of-Scope (Planned for Later Phases)
- Multi-tenant or role-based access control beyond basic user vs. admin.
- Payment gateway or subscription management.
- Real-time collaboration (WebSockets).
- Internationalization (i18n) and localization.
- Extensive component library beyond core dashboard needs.
- Mobile-specific layouts or a dedicated React Native app.

---

## 3. User Flow

A new developer or team member begins by cloning the `next-shadcn-dashboard-starter` repository and running `npm install` followed by `npm run dev`. The local dev server spins up, and the developer lands on a login page. If they don’t have an account, they can register with an email/password or click “Login with Google.” Once authenticated, they’re redirected to the Analytics dashboard.

On the Analytics dashboard, a left-hand sidebar lets the user navigate between “Analytics” and “Profile.” The topbar displays the app name, a theme toggle, and a user avatar menu (with “Profile” and “Sign out”). Clicking “Profile” brings them to a page where they see their email and name in a form, can make edits, and save changes. Throughout, global styles, responsiveness, and accessibility best practices are in effect.

---

## 4. Core Features

- **Authentication Module**
  - Sign up & login with email/password
  - Google OAuth sign-in
  - Protected routes in Next.js App Router
- **Layout Components**
  - Configurable Sidebar (collapsible)
  - Topbar with theme switch & user menu
  - Main Content area with page wrapper
- **Theming**
  - Light & dark mode using Tailwind’s `theme` config
  - Persist theme preference in `localStorage`
- **Dashboard Pages**
  - Analytics: Chart.js bar/line chart, responsive data table
  - User Profile: Editable form, client & server validation
- **Global State Management**
  - React Context for user session & theme
- **Build & Tooling**
  - ESLint + Prettier with Husky pre-commit
  - TypeScript strict mode
  - GitHub Actions for CI lint & type checks
- **Deployment**
  - Ready-to-use Vercel configuration

---

## 5. Tech Stack & Tools

- **Frontend**: Next.js (v13+ App Router), React, TypeScript
- **Styling**: Tailwind CSS, ShadCN UI (Radix UI + Tailwind)
- **Authentication**: NextAuth.js (Email & Google OAuth)
- **Charts/Data**: Chart.js (via `react-chartjs-2`), TanStack Table (optional)
- **State Management**: React Context API
- **Backend/Data**: (Optional) Prisma with SQLite or PostgreSQL
- **CI/CD**: GitHub Actions, Vercel
- **Lint & Format**: ESLint, Prettier, Husky
- **IDE Integrations**: VSCode recommended, with Tailwind CSS IntelliSense, ESLint, Prettier extensions

---

## 6. Non-Functional Requirements

- **Performance**: Lighthouse score ≥ 90 on desktop.
- **Security**: Follow OWASP Top 10; secure cookies, CSRF protection via NextAuth.js.
- **Accessibility**: Adhere to WCAG 2.1 AA standards; use semantic HTML and ARIA attributes.
- **Scalability**: Modular folder structure to add new pages without conflicts.
- **Reliability**: CI pipeline must catch lint or type errors before merging.
- **Usability**: Intuitive sidebar navigation and consistent component props.

Target initial page load time should be under 1 second on a 3G network (using Next.js image and script optimization).

---

## 7. Constraints & Assumptions

- Node.js v16+ environment is available.
- Deployment will target Vercel, though any Node.js host is supported.
- ShadCN UI and Radix UI styling conventions are acceptable.
- NextAuth.js must support the selected OAuth provider (Google).
- Database layer (Prisma + Postgres or SQLite) is optional and can be stubbed.
- Developers are familiar with Git, VSCode, and basic CI concepts.

---

## 8. Known Issues & Potential Pitfalls

- **SSR & Chart.js**: Chart.js may break server-side rendering. Mitigation: use dynamic imports (`next/dynamic`) with `ssr: false`.
- **Hydration Mismatch**: Tailwind dark mode can cause flicker. Mitigation: apply theme class on `<html>` during initial render.
- **Rate Limits on OAuth**: Google OAuth can throttle on free tiers. Suggest using test credentials for dev.
- **TypeScript Strict Mode**: May require extra type definitions for Radix UI or dynamic imports. Keep `@types` packages up to date.
- **CI Timeouts**: Large test suites or build steps can exceed GitHub Actions default time. Keep builds lightweight or increase timeout.

With these details laid out, the AI model can generate subsequent documents—Tech Stack deep dive, Frontend Guidelines, Backend Structure, File Structure, and more—without any guesswork.
