# Project Requirements Document (PRD)

## 1. Project Overview

`next-shadcn-dashboard-starter` is a boilerplate template that jump-starts the creation of modern web dashboards. It bundles Next.js (with the App Router), Tailwind CSS, and the `shadcn/ui` component library into a ready-to-use structure. Developers get a pre-built authentication flow, a responsive sidebar layout, and placeholder modules for core admin features (employee, product, Kanban, settings, profile). The goal is to remove repetitive setup work so teams can focus on business-specific logic and UI customization.

This starter is built to solve two main problems: (1) eliminating the overhead of wiring up routing, theming, and layout for dashboards, and (2) providing a consistent, accessible UI approach that teams can adapt. Key success criteria include ease of onboarding (developers should spin up the app in under five minutes), a clean and extendable code structure, and out-of-the-box accessibility and theming support (light/dark mode). Ultimately, it should serve as a foundation that handles common concerns, letting teams iterate quickly on features.

## 2. In-Scope vs. Out-of-Scope

**In-Scope (Version 1.0)**

*   Pre-configured authentication: sign-in, sign-up pages, session handling in `lib/auth.ts`, protected routes via `middleware.ts`.
*   Dashboard skeleton: collapsible sidebar, header, main content area.
*   Example modules: Employee Management, Product Management, Kanban Board, Settings, Profile Page.
*   UI components library: copied and customizable `shadcn/ui` components (tables, cards, forms, buttons, date-picker, skeletons).
*   Theming: light/dark toggle powered by `next-themes`.
*   Utility functions: Tailwind class merging (`clsx`, `tailwind-merge`), date handling (`date-fns`), Zod validation stubs.
*   Basic code quality: Prettier, ESLint/Husky pre-commit hooks.

**Out-of-Scope (Later Phases)**

*   Real backend API integration; placeholder data only.
*   Advanced state management (Zustand, Redux) beyond local state and props.
*   Automated testing (unit, integration, E2E).
*   Internationalization (i18n) and localization.
*   CI/CD pipelines and deployment scripts.
*   Storybook or component catalog.
*   Advanced analytics, logging, or monitoring.

## 3. User Flow

A new developer clones the repository, installs dependencies, and runs `npm run dev`. They land on the sign-in page under `/app/(auth)/sign-in`. After creating an account via the sign-up form, they are redirected to `/dashboard`. The app checks for an active session in `middleware.ts`; if missing, it reroutes users back to sign-in. Once authenticated, users see the dashboard’s sidebar and header with a user menu toggle.

From the dashboard home, users can click sidebar links: “Employee,” “Product,” “Kanban,” and “Settings.” Each link loads a page component in `app/dashboard/...`. Pages display static placeholder data with tables, cards, or a Kanban board component. The profile page under `/app/profile` shows user information and a form stub for updates. Developers replace placeholders with real API calls, extend Zod schemas in `lib/validations.ts`, and swap static data with dynamic fetches in server/client components.

## 4. Core Features

*   **Authentication**: Sign-in/sign-up pages, session cookies, middleware-protected routes.
*   **Dashboard Layout**: Collapsible sidebar (`components/dashboard/sidebar.tsx`), header, responsive main view.
*   **Employee Management**: List and detail pages under `/dashboard/employee`.
*   **Product Management**: List and detail pages under `/dashboard/product`.
*   **Kanban Board**: Interactive board component under `/dashboard/kanban`.
*   **Settings Module**: Placeholder settings page hierarchy.
*   **Profile Page**: User info and profile update stubs.
*   **UI Library**: Fully customizable components from `components/ui/` (buttons, cards, tables, modals, form fields, skeletons).
*   **Theming**: Dark/light mode toggle via `next-themes` and `components/mode-toggle.tsx`.
*   **Utility Helpers**: `lib/utils.ts` (class names merging), `lib/auth.ts` (session logic), `lib/validations.ts` (Zod schemas).
*   **Build Tools**: Tailwind CSS, PostCSS, TypeScript, Husky, Prettier.

## 5. Tech Stack & Tools

*   **Next.js (App Router)**: Framework for SSR, SSG, routing, and API routes.
*   **React & TypeScript**: Strong typing and component model.
*   **Tailwind CSS**: Utility-first styling.
*   **shadcn/ui**: Accessible, copy-able UI components based on Radix UI.
*   **next-themes**: Theme switching.
*   **date-fns**: Date manipulation.
*   **clsx & tailwind-merge**: Conditional class merging.
*   **Zod**: Schema validation (in `lib/validations.ts`).
*   **Husky & Prettier**: Pre-commit hooks and formatting.
*   **IDE Integrations**: Recommended VS Code with TypeScript, ESLint, Tailwind CSS IntelliSense.

## 6. Non-Functional Requirements

*   **Performance**: First contentful paint (FCP) under 1s on 3G; hydrate within 500ms.
*   **Accessibility**: WCAG 2.1 AA standards; semantic HTML, ARIA roles in custom components.
*   **Security**: Protected routes via middleware; secure session cookies (httpOnly, sameSite).
*   **Usability**: Responsive design down to 320px width; consistent spacing and typography.
*   **Maintainability**: Modular folder structure; reusable components; strict TypeScript rules.

## 7. Constraints & Assumptions

*   **Node.js v16+** and NPM/Yarn available.
*   **No real API backend**; developers will integrate their own endpoints later.
*   `next-themes` works client-side only; initial theme flash acceptable.
*   **Assume Zod schemas** will be expanded per project needs.
*   **Hosting**: Vercel or any Node-capable environment.
*   **Scoped CSS**: Tailwind only; no CSS Modules or styled-components.

## 8. Known Issues & Potential Pitfalls

*   **Flicker on theme load**: default theme toggling can cause a flash of unstyled content—mitigate with CSS `class` strategy or SSR theme injection.
*   **Route Protection Gaps**: Ensure `middleware.ts` covers all `/dashboard/*` and `/profile` paths.
*   **Data-Fetching Ambiguity**: Devs must choose between server components or client fetch (React Query/SWR) and consistently apply.
*   **Auth Integration**: Placeholder auth logic may need replacement with NextAuth or custom JWT flows.
*   **Large Bundle Size**: Copy-pasted `shadcn/ui` components can bloat bundle—tree-shake unused exports or lazy-load heavy widgets.

By following this PRD, an AI or human developer has a clear, unambiguous blueprint to implement, extend, or customize the starter template into a production-ready dashboard application.
