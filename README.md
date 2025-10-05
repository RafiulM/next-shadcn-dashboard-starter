# Next.js 14 Admin Dashboard Starter

<div align="center">
  
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-cyan)
![Shadcn UI](https://img.shields.io/badge/Shadcn%20UI-latest-purple)
![License](https://img.shields.io/badge/License-MIT-green)

**A modern, feature-rich admin dashboard starter built with Next.js 14, Shadcn UI, and TypeScript**

[🔗 View Demo](https://next-shadcn-dashboard-starter.vercel.app) • [🚀 Deploy to Vercel](https://vercel.com/new/clone?repository-url=https://github.com/Kiranism/next-shadcn-dashboard-starter)

## ⚡ Quick Start

```bash
# Clone the repository
git clone https://github.com/Kiranism/next-shadcn-dashboard-starter.git
cd next-shadcn-dashboard-starter

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view your new dashboard!

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/9113740/201498864-2a900c64-d88f-4ed4-b5cf-770bcb57e1f5.png">
  <source media="(prefers-color-scheme: light)" srcset="https://user-images.githubusercontent.com/9113740/201498152-b171abb8-9225-487a-821c-6ff49ee48579.png">
  <img alt="Dashboard Preview" src="https://user-images.githubusercontent.com/9113740/201498864-2a900c64-d88f-4ed4-b5cf-770bcb57e1f5.png" width="800">
</picture>

</div>

## 📋 Table of Contents

- [⚡ Quick Start](#-quick-start)
- [✨ Features](#-features)
- [🛠️ Technology Stack](#%EF%B8%8F-technology-stack)
- [🚀 Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running Locally](#running-locally)
- [📊 Project Structure](#-project-structure)
- [🔐 Authentication](#-authentication)
- [📱 Available Pages](#-available-pages)
- [🗂️ Database Schema](#%EF%B8%8F-database-schema)
- [🚀 Deployment](#-deployment)
- [🔧 Troubleshooting](#-troubleshooting)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

## ✨ Features

- **🔐 Authentication System**: Complete sign-up and sign-in flows with social login support
- **📊 Dashboard Analytics**: Interactive charts and graphs using Recharts
- **👥 Employee Management**: Full CRUD operations with advanced filtering and search
- **📦 Product Management**: Dynamic product pages with server-side data handling
- **📋 Kanban Board**: Drag-and-drop task management with local state persistence
- **🎨 Modern UI**: Built with Shadcn UI components and Tailwind CSS
- **🌙 Dark Mode**: Complete theme switching functionality
- **📱 Responsive Design**: Mobile-first approach with adaptive layouts
- **🔍 Advanced Search**: Type-safe search parameters with Nuqs
- **📝 Form Validation**: Robust form handling with React Hook Form and Zod
- **🎯 Performance**: Optimized with Next.js 14 App Router and SSR

## 🛠️ Technology Stack

| Category | Technology |
|----------|------------|
| **Framework** | [Next.js 14](https://nextjs.org/) (App Router) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) |
| **Components** | [Shadcn UI](https://ui.shadcn.com/) (Radix UI primitives) |
| **Authentication** | [Supabase Auth](https://supabase.com/auth) |
| **Database** | [Supabase](https://supabase.com/) |
| **State Management** | [Zustand](https://zustand-demo.pmnd.rs/) |
| **Data Fetching** | [TanStack Query](https://tanstack.com/query/latest) |
| **Tables** | [TanStack Table](https://tanstack.com/table/latest) |
| **Forms** | [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) |
| **Charts** | [Recharts](https://recharts.org/) |
| **Drag & Drop** | [@dnd-kit](https://dndkit.com/) |
| **Search Params** | [Nuqs](https://nuqs.47ng.com/) |
| **Code Quality** | ESLint, Prettier, Husky |

## 🚀 Getting Started

### Prerequisites

- Node.js 16.0 or later
- npm, yarn, or pnpm
- A Supabase project (for authentication and database)
- Git (for cloning the repository)

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
   ```

### Environment Variables

1. **Create environment file**
   ```bash
   cp .env.example .env.local
   ```

2. **Add your Supabase credentials**
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

   Get these values from your [Supabase project settings](https://supabase.com/dashboard/project/_/settings/api).

### Running Locally

1. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

2. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📊 Project Structure

```
next-shadcn-dashboard-starter/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication pages
│   ├── dashboard/         # Dashboard routes
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── ui/               # Shadcn UI components
│   ├── layout/           # Layout components
│   └── ...               # Other custom components
├── lib/                  # Utility functions
│   ├── supabase/         # Supabase client config
│   ├── utils.ts          # Helper functions
│   └── ...               # Other utilities
├── sections/             # Page sections
├── hooks/                # Custom React hooks
├── types/                # TypeScript type definitions
├── constants/            # Constants and mock data
└── public/               # Static assets
```

## 🔐 Authentication

This starter uses **Supabase Auth** for authentication:

- **Email/Password Authentication**: Traditional sign-up and sign-in
- **Social Login**: Google, GitHub, and other OAuth providers
- **Session Management**: Secure session handling with JWT tokens
- **Protected Routes**: Middleware for route protection

### Setting up Authentication

1. **Create a Supabase Project**
   - Go to [supabase.com](https://supabase.com) and create a new project
   - Note your project URL and anon key from Settings → API

2. **Configure Supabase Auth**
   - Go to your Supabase project → Authentication → Settings
   - Configure allowed URLs (localhost:3000 for development, yourdomain.com for production)
   - Enable desired OAuth providers (Google, GitHub, etc.)

3. **Create Auth Tables**
   The starter includes authentication pages and flows. You may need to create additional tables for user profiles based on your requirements.

4. **Test Authentication**
   - Run `npm run dev` 
   - Navigate to `/sign-up` to test user registration
   - Navigate to `/sign-in` to test login functionality

## 📱 Available Pages

| Page | Path | Description |
|------|------|-------------|
| **Sign Up** | `/sign-up` | User registration with validation |
| **Sign In** | `/sign-in` | User authentication with social login |
| **Dashboard** | `/dashboard` | Overview with analytics and metrics |
| **Employees** | `/dashboard/employee` | Employee listing with search and filters |
| **Employee Detail** | `/dashboard/employee/[id]` | Individual employee information |
| **Products** | `/dashboard/product` | Product management interface |
| **Product Detail** | `/dashboard/product/[id]` | Individual product details |
| **Kanban Board** | `/dashboard/kanban` | Drag-and-drop task management |
| **Profile** | `/dashboard/profile` | User profile management |

## 🗂️ Database Schema

The starter uses Supabase for database management. Key tables include:

- **`users`**: User authentication data (managed by Supabase)
- **`profiles`**: Extended user profile information
- **`employees`**: Employee management data
- **`products`**: Product catalog information
- **`tasks`**: Kanban board tasks and status

You can find SQL migration scripts in the `supabase/migrations` directory.

## 🚀 Deployment

### Vercel (Recommended)

1. **Deploy via Vercel CLI**
   ```bash
   npm i -g vercel
   vercel
   ```

2. **Set environment variables**
   Add your Supabase credentials to Vercel environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

3. **Deploy to production**
   ```bash
   vercel --prod
   ```

4. **One-Click Deployment**
   Click the button below to deploy directly to Vercel:

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Kiranism/next-shadcn-dashboard-starter)

### Other Platforms

- **Netlify**: Connect your GitHub repository and set environment variables
- **Railway**: Deploy with one click using the Railway template
- **Digital Ocean**: Use App Platform for container-based deployment

## 🔧 Troubleshooting

### Common Issues

**1. Build fails due to missing environment variables**
- Ensure `.env.local` is created with the correct Supabase credentials
- Verify all required environment variables are set

**2. Authentication not working**
- Check that Supabase Auth is properly configured
- Verify allowed URLs include your development domain (localhost:3000)
- Ensure environment variables are correctly set

**3. Styling issues**
- Run `npm install` to ensure all dependencies are installed
- Check that Tailwind CSS is properly configured
- Verify `globals.css` is imported in your layout

**4. Import errors**
- Ensure all dependencies are installed with `npm install`
- Check that you're using the correct import paths
- Restart your development server after installing dependencies

### Getting Help

- Check the [GitHub Issues](https://github.com/Kiranism/next-shadcn-dashboard-starter/issues) for common problems
- Review the [Next.js documentation](https://nextjs.org/docs) for framework-specific questions
- Consult the [Shadcn UI documentation](https://ui.shadcn.com/docs) for component issues

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
4. **Run linting**
   ```bash
   npm run lint
   ```
5. **Commit your changes**
   ```bash
   git commit -m "feat: add your feature"
   ```
6. **Push to the branch**
   ```bash
   git push origin feature/your-feature-name
   ```
7. **Open a Pull Request**

### Development Guidelines

- Follow the existing code style
- Use TypeScript for type safety
- Write clear, descriptive commit messages
- Test your changes thoroughly
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Shadcn UI](https://ui.shadcn.com/) for the beautiful component library
- [Supabase](https://supabase.com/) for the backend-as-a-service platform
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework

---

<div align="center">
Made with ❤️ by [Kiran](https://github.com/Kiranism)
</div>