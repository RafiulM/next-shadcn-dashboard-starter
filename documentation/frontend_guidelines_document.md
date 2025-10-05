# Frontend Guidelines: next-shadcn-dashboard-starter

This document outlines the frontend architecture, design principles, and technologies used in the **next-shadcn-dashboard-starter**. It is written in everyday language to help any reader understand how the frontend is set up, why certain choices were made, and how to work with or extend the project.

## 1. Frontend Architecture

### Frameworks and Libraries
- **Next.js (App Router):** The core framework. Uses the new `app/` directory to organize routes, layouts, and server components. It delivers fast page loads through server-side rendering (SSR) and supports dynamic routes out of the box.
- **React Server Components:** Many pages and layouts run on the server for improved performance and smaller client bundles.
- **Shadcn UI:** A collection of reusable, accessible components (built on Radix UI) styled via Tailwind CSS. It provides sensible defaults that can be easily customized.
- **Tailwind CSS:** A utility-first CSS framework that speeds up styling and keeps CSS output minimal via Just-In-Time (JIT) compilation.
- **TypeScript:** Adds static types to JavaScript, preventing common errors and improving the developer experience.
- **Husky & lint-staged:** Git hooks ensure code quality by running linters (ESLint), formatters (Prettier), and tests before each commit.

### Scalability, Maintainability, Performance
- **Scalability:** The feature-based folder structure (`app/dashboard/employee`, `kanban`, `product`) lets you add new sections without cluttering the codebase.
- **Maintainability:** Co-locating code (layouts, pages, components) within each feature directory makes it easy to find and update related code. Shared elements go into a common `components/` folder.
- **Performance:** Server components and SSR reduce the amount of JavaScript sent to the browser. Tailwind’s JIT mode and Next.js’s built-in image and asset optimization further speed up page loads.

## 2. Design Principles

We follow three core principles:

1. **Usability:** Interfaces are simple and intuitive. Forms, buttons, tables, and dialogs come from Shadcn UI, ensuring consistent behavior. Clear labels and straightforward navigation guide users through the dashboard.
2. **Accessibility:** Components adhere to WAI-ARIA standards. Shadcn UI builds on Radix UI’s focus management and keyboard navigation. We add proper `aria-*` attributes where needed and use semantic HTML.
3. **Responsiveness:** Layouts adapt to different screen sizes using Tailwind’s responsive utilities. The sidebar collapses on small screens, and content stacks vertically on mobile.

In practice, buttons have clear focus states, tables scroll horizontally on narrow viewports, and all interactive elements can be used with a keyboard.

## 3. Styling and Theming

### Styling Approach
- **Utility-first with Tailwind CSS:** We write classes like `bg-primary text-white py-2 px-4 rounded` directly in JSX. This approach speeds up development and ensures no unused CSS remains.
- **No BEM or SMACSS needed:** Tailwind’s naming conventions replace traditional CSS methodologies.
- **Global Styles:** Defined in `styles/globals.css` for base resets and custom CSS variables.

### Theming
- **Light and Dark Modes:** Configured via Tailwind’s `dark` variant. We use CSS variables for colors, e.g., `--color-primary`, updated in `[data-theme]` attributes.
- **Customization:** Override Tailwind’s theme in `tailwind.config.js`:
  ```js
  module.exports = {
    theme: {
      extend: {
        colors: {
          primary: 'var(--color-primary)',
          secondary: 'var(--color-secondary)',
          accent: 'var(--color-accent)',
        }
      }
    },
    darkMode: 'class',
  }
  ```

### Visual Style
- **Style:** Modern flat design with subtle shadows and rounded corners. Clean, minimal, and focused on content.
- **Color Palette:**
  • Primary: #3B82F6 (blue-500)
  • Secondary: #6366F1 (indigo-500)
  • Accent: #14B8A6 (teal-500)
  • Background (light): #FFFFFF
  • Surface (light): #F9FAFB
  • Text (light): #111827
  • Background (dark): #111827
  • Surface (dark): #1F2937
  • Text (dark): #F3F4F6
  • Success: #10B981
  • Warning: #F59E0B
  • Error: #EF4444
- **Font:** Inter (fallback to system fonts). Imported via `@import` in `globals.css`:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
  html { font-family: 'Inter', sans-serif; }
  ```

## 4. Component Structure

- **Feature-Based Folders:** Each major area (e.g., `dashboard/employee`) contains its own `layout.tsx`, `page.tsx`, and subcomponents. This keeps related code together.
- **Shared Components:** A top-level `components/` folder holds UI elements used throughout the app (e.g., `Button`, `Modal`, `Table`).
- **Atomic Design:** We aim for small, single-purpose components. Larger features compose these atomic pieces.

Benefits:
- **Reusability:** Build once, use everywhere. A `Button` in `components/` works in auth flows and dashboard sections.
- **Maintainability:** Fix a bug in one place. You don’t hunt through multiple folders.

## 5. State Management

- **Server State:** Fetched in server components using Next.js data fetching (`fetch` or custom API routes). No external library needed for simple GET requests.
- **Client State:** For local UI state (modals open/closed, form inputs), use React’s `useState` or `useReducer`.
- **Global State (optional):** If you need cross-page or persistent state (e.g., theme preference, user profile), use React Context or a lightweight library like **Zustand**.
- **Data Caching & Syncing:** For more advanced data fetching (caching, optimistic updates), integrate **TanStack Query** (formerly React Query).

## 6. Routing and Navigation

- **Next.js App Router:** All pages live under `app/`. Layouts can wrap nested routes automatically.
- **Route Groups:** `(auth)` groups sign-in and sign-up pages under a shared layout.
- **Dynamic Routes:** Folders named `[employeeId]` or `[productId]` generate detail pages for those items.
- **Linking:** Use Next.js `Link` component for client-side transitions.
- **Navigation UI:** A persistent sidebar (`dashboard/layout.tsx`) highlights the current section, collapses on small screens, and shows nested links for detail pages.

## 7. Performance Optimization

- **Server Components & SSR:** Minimizes JavaScript sent to the client.
- **Code Splitting & Lazy Loading:** Next.js automatically splits code by route. For heavy components, use dynamic `import()`.
- **Image Optimization:** Use `<next/image>` for responsive, lazy-loaded images.
- **Tailwind JIT:** Only generates the CSS you use in your code.
- **Asset Compression:** Next.js bundles and compresses CSS/JS in production builds.
- **Cache-Control Headers:** Customize in `next.config.js` or API routes to leverage browser caching.

## 8. Testing and Quality Assurance

- **Unit Tests:** With **Jest** and **React Testing Library** for components and utility functions.
- **Integration Tests:** Focus on component interactions and data fetching. Use React Testing Library to render pages with mocked server responses.
- **End-to-End (E2E) Tests:** With **Playwright** or **Cypress** for critical user flows (sign-in, dashboard navigation, CRUD operations).
- **Linting & Formatting:** **ESLint** (with Next.js and TypeScript plugins) enforces code style. **Prettier** ensures consistent formatting.
- **Pre-commit Hooks:** **Husky + lint-staged** run linters and tests before each commit.

## 9. Conclusion and Overall Frontend Summary

This frontend setup combines the power of Next.js App Router, React Server Components, Shadcn UI, and Tailwind CSS to deliver a dashboard starter kit that is:

- **Fast:** SSR, code splitting, and optimized assets keep load times low.
- **Maintainable:** Feature-based folders and shared components make it easy to extend and refactor.
- **Customizable:** Tailwind theming and Shadcn’s unstyled defaults let you match any brand style.
- **Reliable:** TypeScript, pre-commit hooks, and a comprehensive testing strategy catch errors early.

By following these guidelines, you’ll ensure the project remains scalable, performant, and user-friendly as it grows. Enjoy building with **next-shadcn-dashboard-starter**!