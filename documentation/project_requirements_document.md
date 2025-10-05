# Project Requirements Document (PRD)

## 1. Project Overview

We’re building **next-shadcn-dashboard-starter**, a boilerplate codebase that jumpstarts admin and analytics dashboard projects using Next.js (App Router), TypeScript, Tailwind CSS, and the shadcn/ui component library. This starter includes core layout components (sidebar, top bar), authentication flows, theming (light/dark modes), and sample pages with tables and charts. The goal is to eliminate repetitive setup tasks so developers can focus on business logic and customization.

This dashboard starter is being built to ensure consistency, best practices, and quick time-to-market for web applications that need an admin interface. Key objectives include:
- **Rapid onboarding:** Clone, install, and have a fully functional dashboard in minutes.
- **Maintainability:** Clean folder structure, TypeScript typings, and well-documented components.
- **Extensibility:** Easy to swap data sources, add new pages, and customize look-and-feel.

**Success Criteria**
- A developer can follow README instructions and see a working dashboard with login, a sample table, and a sample chart within 5 minutes.
- The starter adheres to performance (LCP < 2s), accessibility (WCAG AA), and security (OWASP) best practices.
- Core features (auth, layout, theming) are fully implemented and documented.

---

## 2. In-Scope vs. Out-of-Scope

### In-Scope (v1)
- User authentication (email/password) via NextAuth.js with a local SQLite or PlanetScale database.
- Core layout components: responsive sidebar, top navigation bar, and main content area.
- Light/dark theme toggling with persistence in localStorage.
- Sample dashboard page: data table (paginated, sortable) and line/bar chart (Chart.js).
- API routes for fetching sample data.
- Global state management using React Query.
- Basic form handling with React Hook Form.
- Deployment configuration for Vercel.
- Comprehensive README with setup, folder structure, and customization guide.

### Out-of-Scope (v1, for later phases)
- Social or OAuth authentication providers (Google, GitHub, etc.).
- File uploads and media management.
- Multi-tenant (SaaS) architecture.
- Role-based access control (RBAC) beyond a single admin user.
- Mobile-specific native wrappers (React Native, Expo).
- Advanced analytics integrations (Mixpanel, Amplitude).

---

## 3. User Flow

### Developer Onboarding Flow
A developer clones the repository, runs `npm install` and `npm run dev`. They land on a **Login page** with email and password fields. After entering seeded credentials, they get redirected to the **Dashboard Home**. The home screen shows a **sidebar** on the left, a **top bar** containing a theme toggle and user menu, and a **main panel** with a sample data table and chart.

### End-User Interaction Flow
An end-user logs in via email/password, sees an overview of metrics on the dashboard home (chart + table). They click the **"Users"** link in the sidebar to navigate to the Users page. There, they can search, sort, and paginate through a user list. They switch themes via the top bar toggle. Logging out returns them to the Login page.

---

## 4. Core Features
- **Authentication**: Email/password login and session management using NextAuth.js.
- **Layout**: Reusable `Sidebar`, `TopNav`, and `MainContent` components with responsive breakpoints.
- **Theming**: Light/dark mode toggle with smooth transitions; persists choice in localStorage.
- **Data Table**: Paginated, sortable table powered by React Table or custom hooks; sample data from `/api/users`.
- **Charts**: Line or bar charts rendered via Chart.js; data fetched from `/api/stats`.
- **API Routes**: Next.js API endpoints for sample data (JSON).
- **State Management**: Data fetching and caching via React Query; global theme context.
- **Forms**: Basic forms (e.g., login) using React Hook Form with validation.
- **Deployment Config**: Vercel-ready with environment variables template.
- **Documentation**: In-code JSDoc comments plus a standalone README.

---

## 5. Tech Stack & Tools
- **Next.js** (v14+) with App Router and TypeScript
- **Tailwind CSS** for utility-first styling
- **shadcn/ui** (Radix-based component primitives)
- **NextAuth.js** for authentication
- **React Query** for data fetching & caching
- **Chart.js** for rendering charts
- **React Hook Form** for form state and validation
- **Prisma** ORM with SQLite (dev) or PlanetScale (prod)
- **Vercel** for hosting and deployment
- **VSCode** IDE with recommended extensions: ESLint, Prettier, Tailwind CSS IntelliSense, shadcn-ui plugin

_No AI models are integrated in v1._

---

## 6. Non-Functional Requirements
- **Performance**: First Contentful Paint (FCP) under 1s; Largest Contentful Paint (LCP) under 2s on 3G.
- **Accessibility**: Adhere to WCAG AA (ARIA labels, keyboard navigation).
- **Security**: Protect API routes, sanitize inputs, use HTTPS, secure cookies (httpOnly, sameSite).
- **Responsiveness**: Fully functional on desktop (≥1024px) and tablet (≥768px); mobile friendly.
- **Maintainability**: 80+ test coverage for core modules; ESLint and Prettier enforcement.

---

## 7. Constraints & Assumptions
- Requires Node.js ≥16 and TypeScript.
- Next.js App Router only (no pages directory).
- Database: dev uses SQLite file, prod uses PlanetScale (MySQL compatible).
- Developer has a Vercel account for seamless deployment.
- shadcn/ui version must align with Radix UI v1.

---

## 8. Known Issues & Potential Pitfalls
- **Chart SSR**: Chart.js may not render server-side. Mitigation: Use dynamic import with `ssr: false`.
- **Theme Flash**: Flash of wrong theme on load. Mitigation: Pre-hydrate theme from localStorage in `<html>`.
- **API Rate Limits**: If switching to a hosted DB, watch out for free-tier rate limits. Plan caching strategy.
- **Tailwind Purge**: Unused classes purge may strip dynamic shadcn classes. Mitigation: Safelist patterns in `tailwind.config.js`.


---

*End of PRD.*