<div align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/9113740/201498864-2a900c64-d88f-4ed4-b5cf-770bcb57e1f5.png">
    <source media="(prefers-color-scheme: light)" srcset="https://user-images.githubusercontent.com/9113740/201498152-b171abb8-9225-487a-821c-6ff49ee48579.png">
    <img alt="Next.js Shadcn Dashboard" src="https://user-images.githubusercontent.com/9113740/201498152-b171abb8-9225-487a-821c-6ff49ee48579.png" width="600">
  </picture>
  
  <h1>Next.js 14 Admin Dashboard Starter</h1>
  
  <p>
    <strong>Modern admin dashboard template built with Next.js 14 App Router and Shadcn/ui</strong>
  </p>
  
  <p>
    <a href="https://next-shadcn-dashboard-starter.vercel.app">
      <strong>🚀 Live Demo</strong>
    </a>
    ·
    <a href="#-getting-started">
      <strong>📖 Documentation</strong>
    </a>
    ·
    <a href="https://github.com/Kiranism/next-shadcn-dashboard-starter/issues">
      <strong>🐛 Report Bug</strong>
    </a>
    ·
    <a href="https://github.com/Kiranism/next-shadcn-dashboard-starter/issues">
      <strong>💡 Request Feature</strong>
    </a>
  </p>
  
  <p>
    <img src="https://img.shields.io/github/license/Kiranism/next-shadcn-dashboard-starter" alt="License">
    <img src="https://img.shields.io/github/stars/Kiranism/next-shadcn-dashboard-starter" alt="Stars">
    <img src="https://img.shields.io/github/forks/Kiranism/next-shadcn-dashboard-starter" alt="Forks">
    <img src="https://img.shields.io/github/issues/Kiranism/next-shadcn-dashboard-starter" alt="Issues">
    <img src="https://img.shields.io/badge/Next.js-14-black" alt="Next.js">
    <img src="https://img.shields.io/badge/TypeScript-blue" alt="TypeScript">
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC" alt="Tailwind CSS">
    <img src="https://img.shields.io/badge/Shadcn/ui-000000" alt="Shadcn/ui">
  </p>
</div>

## 📋 Table of Contents

- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🖼️ Screenshots](#️-screenshots)
- [🚀 Getting Started](#-getting-started)
- [📁 Project Structure](#-project-structure)
- [🔧 Available Scripts](#-available-scripts)
- [⚙️ Environment Variables](#️-environment-variables)
- [📚 Pages & Routes](#-pages--routes)
- [🚀 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

## ✨ Features

- 🎨 **Modern Design** - Beautiful UI built with Shadcn/ui components and Tailwind CSS
- 🌙 **Dark Mode** - Built-in dark/light theme toggle with system preference detection
- 📱 **Responsive** - Mobile-first design that works on all devices
- 🔐 **Authentication** - Complete auth system with Supabase (email/social login)
- 📊 **Dashboard Analytics** - Interactive charts and graphs using Recharts
- 📋 **Data Tables** - Advanced tables with search, filter, and pagination
- 📝 **Forms** - Validation with React Hook Form and Zod schemas
- 🎯 **Kanban Board** - Drag-and-drop task management with dnd-kit
- 📁 **File Upload** - File upload functionality with UploadThing
- 🔍 **Search & Filter** - Powerful search and filtering with Nuqs
- 🎭 **UI Components** - 35+ pre-built Shadcn/ui components
- 🔧 **Developer Experience** - TypeScript, ESLint, Prettier, Husky pre-commit hooks

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | [Next.js 14](https://nextjs.org/) (App Router) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) |
| **UI Components** | [Shadcn/ui](https://ui.shadcn.com/) |
| **Authentication** | [Supabase Auth](https://supabase.com/auth) |
| **Database** | [Supabase](https://supabase.com/) |
| **Form Validation** | [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) |
| **State Management** | [Zustand](https://zustand-demo.pmnd.rs/) |
| **Search Params** | [Nuqs](https://nuqs.47ng.com/) |
| **Data Tables** | [TanStack Table](https://tanstack.com/table) |
| **Charts** | [Recharts](https://recharts.org/) |
| **Drag & Drop** | [dnd-kit](https://dndkit.com/) |
| **File Upload** | [UploadThing](https://uploadthing.com/) |
| **Query Client** | [TanStack Query](https://tanstack.com/query) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Code Quality** | ESLint, Prettier, Husky |

## 🖼️ Screenshots

### Dashboard Overview
<div align="center">
  <img src="https://next-shadcn-dashboard-starter.vercel.app/dashboard" alt="Dashboard Overview" width="800">
</div>

### Employee Management
<div align="center">
  <img src="https://next-shadcn-dashboard-starter.vercel.app/dashboard/employee" alt="Employee Management" width="800">
</div>

### Kanban Board
<div align="center">
  <img src="https://next-shadcn-dashboard-starter.vercel.app/dashboard/kanban" alt="Kanban Board" width="800">
</div>

### Dark Mode
<div align="center">
  <img src="https://next-shadcn-dashboard-starter.vercel.app/dashboard" alt="Dark Mode" width="800">
</div>

*Note: The screenshots above show the live demo. Click the "Live Demo" link at the top to explore the application interactively.*

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Kiranism/next-shadcn-dashboard-starter.git
   cd next-shadcn-dashboard-starter
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Add your Supabase credentials to `.env.local`:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
next-shadcn-dashboard-starter/
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Authentication routes
│   │   ├── sign-in/             # Sign in page
│   │   └── sign-up/             # Sign up page
│   ├── dashboard/               # Dashboard routes
│   │   ├── employee/            # Employee management
│   │   ├── kanban/              # Kanban board
│   │   ├── product/             # Product management
│   │   ├── profile/             # User profile
│   │   └── layout.tsx           # Dashboard layout
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── not-found.tsx            # 404 page
├── components/                   # Reusable components
│   ├── ui/                      # Shadcn/ui components
│   ├── layout/                  # Layout components
│   └── modal/                   # Modal components
├── sections/                     # Page sections
│   ├── auth/                    # Authentication sections
│   ├── employee/                # Employee sections
│   ├── kanban/                  # Kanban sections
│   ├── overview/                # Dashboard overview
│   ├── product/                 # Product sections
│   └── profile/                 # Profile sections
├── lib/                          # Utility functions
│   ├── actions/                 # Server actions
│   ├── supabase/                # Supabase client
│   └── utils.ts                 # Utility functions
├── hooks/                        # Custom React hooks
├── types/                        # TypeScript type definitions
├── constants/                    # Constants and mock data
└── public/                       # Static assets
```

## 🔧 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with Turbo |
| `npm run build` | Build production application |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |
| `npm run prepare` | Set up Husky git hooks |

## ⚙️ Environment Variables

Create a `.env.local` file in the root of your project:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Getting Supabase Credentials

1. Go to [supabase.com](https://supabase.com)
2. Create a new project or use an existing one
3. Navigate to Project Settings > API
4. Copy the Project URL and anon/public key
5. Add them to your `.env.local` file

## 📚 Pages & Routes

| Route | Description | Features |
|-------|-------------|----------|
| `/` | Landing page | Authentication |
| `/sign-in` | Sign in page | Email/social login |
| `/sign-up` | Sign up page | User registration |
| `/dashboard` | Dashboard overview | Analytics, charts, metrics |
| `/dashboard/employee` | Employee management | CRUD operations, tables |
| `/dashboard/employee/new` | Add employee | Form validation |
| `/dashboard/employee/[id]` | Employee details | View/edit employee |
| `/dashboard/product` | Product management | CRUD operations, tables |
| `/dashboard/product/new` | Add product | Form validation |
| `/dashboard/product/[id]` | Product details | View/edit product |
| `/dashboard/kanban` | Kanban board | Drag & drop tasks |
| `/dashboard/profile` | User profile | Multi-step form |

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy automatically on push to main branch

### Other Platforms

```bash
# Build for production
npm run build

# Start production server
npm run start
```

**Environment Variables for Production:**
Don't forget to add your environment variables to your hosting platform's settings.

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style and conventions
- Use TypeScript for type safety
- Write meaningful commit messages
- Test your changes before submitting
- Be respectful and constructive

## 📄 License

Distributed under the MIT License. See [`LICENSE`](LICENSE) for more information.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework for production
- [Shadcn/ui](https://ui.shadcn.com/) - Beautifully designed components
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Supabase](https://supabase.com/) - The open source Firebase alternative
- [Vercel](https://vercel.com/) - For hosting the demo

---

<div align="center">
  <p>
    Made with ❤️ by <a href="https://github.com/Kiranism">Kiran</a>
  </p>
  <p>
    If you found this project helpful, please consider giving it a ⭐️
  </p>
</div>