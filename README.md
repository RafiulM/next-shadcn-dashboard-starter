<div align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/9113740/201498864-2a900c64-d88f-4ed4-b5cf-770bcb57e1f5.png">
    <source media="(prefers-color-scheme: light)" srcset="https://user-images.githubusercontent.com/9113740/201498152-b171abb8-9225-487a-821c-6ff49ee48579.png">
  </picture>
  
  <h1>Next.js 14 Admin Dashboard Starter</h1>
  <p>Production-ready admin dashboard template built with Next.js 14 App Router and shadcn/ui</p>
  
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  [![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC)](https://tailwindcss.com/)
  
  <br />
  
  **[Live Demo](https://next-shadcn-dashboard-starter.vercel.app)** • **[Report Bug](https://github.com/Kiranism/next-shadcn-dashboard-starter/issues)** • **[Request Feature](https://github.com/Kiranism/next-shadcn-dashboard-starter/issues)**
</div>

## ✨ Features

- 🚀 **Next.js 14 App Router** - Latest React framework with app directory
- 🎨 **Beautiful UI** - Built with shadcn/ui components and Tailwind CSS
- 🔐 **Authentication** - Supabase auth with email/password support
- 📊 **Data Tables** - Advanced tables with sorting, filtering, and pagination
- 📈 **Charts & Analytics** - Interactive charts with Recharts
- 📋 **Kanban Board** - Drag-and-drop task management
- 📝 **Forms** - Dynamic multi-step forms with validation
- 🌙 **Dark Mode** - Built-in theme switching
- 📱 **Responsive Design** - Mobile-first responsive layout
- 🔍 **Search & Filtering** - Server-side search and URL state management
- 🎯 **Type Safety** - Full TypeScript support with Zod validation
- 🏗️ **Modern Stack** - Includes Zustand, TanStack Query, and more

## 🛠️ Technology Stack

| Category | Technology | Description |
|----------|------------|-------------|
| **Framework** | [Next.js 14](https://nextjs.org/) | React framework with App Router |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | Type-safe JavaScript |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) | Utility-first CSS framework |
| **Components** | [shadcn/ui](https://ui.shadcn.com/) | Modern UI component library |
| **Authentication** | [Supabase](https://supabase.com/) | Backend-as-a-Service with auth |
| **State Management** | [Zustand](https://zustand-demo.pmnd.rs/) | Lightweight state management |
| **Data Fetching** | [TanStack Query](https://tanstack.com/query) | Server-state management |
| **Forms** | [React Hook Form](https://react-hook-form.com/) | Performant forms with easy validation |
| **Validation** | [Zod](https://zod.dev/) | TypeScript-first schema validation |
| **Tables** | [TanStack Table](https://tanstack.com/table) | Headless UI for building tables |
| **Charts** | [Recharts](https://recharts.org/) | Composable charting library |
| **Drag & Drop** | [@dnd-kit](https://dndkit.com/) | Modern drag and drop library |
| **URL State** | [Nuqs](https://nuqs.47ng.com/) | Type-safe search params state |
| **Code Quality** | ESLint, Prettier, Husky | Linting, formatting, and pre-commit hooks |

## 📸 Screenshots

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/9113740/201498864-2a900c64-d88f-4ed4-b5cf-770bcb57e1f5.png">
  <source media="(prefers-color-scheme: light)" srcset="https://user-images.githubusercontent.com/9113740/201498152-b171abb8-9225-487a-821c-6ff49ee48579.png">
</picture>

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Supabase project (for authentication)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Kiranism/next-shadcn-dashboard-starter.git
   cd next-shadcn-dashboard-starter
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   
   **Note**: If you encounter issues with missing dependencies during build, try:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Then update `.env.local` with your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Troubleshooting

If you encounter build issues:

1. **Missing dependencies**:
   ```bash
   npm install --force
   ```

2. **Clean install**:
   ```bash
   rm -rf .next node_modules package-lock.json
   npm install
   npm run build
   ```

3. **Node.js version**: Ensure you're using Node.js 18+

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── (auth)/            # Authentication routes
│   │   ├── sign-in/       # Sign in page
│   │   └── sign-up/       # Sign up page
│   ├── dashboard/         # Dashboard routes
│   │   ├── employee/      # Employee management
│   │   ├── kanban/        # Kanban board
│   │   ├── product/       # Product management
│   │   └── profile/       # User profile
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   ├── layout/           # Layout components
│   └── modal/            # Modal components
├── sections/             # Page-specific sections
│   ├── auth/             # Authentication sections
│   ├── employee/         # Employee management sections
│   ├── kanban/           # Kanban board sections
│   ├── overview/         # Dashboard overview sections
│   ├── product/          # Product management sections
│   └── profile/          # Profile sections
├── lib/                  # Utility libraries
│   ├── actions/          # Server actions
│   ├── supabase/         # Supabase client configuration
│   └── utils.ts          # Utility functions
├── hooks/                # Custom React hooks
├── types/                # TypeScript type definitions
├── constants/            # Application constants
└── documentation/        # Project documentation
```

## 📝 Available Scripts

```bash
# Development
npm run dev          # Start development server with Turbo
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run format       # Format code with Prettier

# Git hooks
npm run prepare      # Set up Husky git hooks
```

## 🔧 Environment Variables

Create a `.env.local` file in the root directory:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

To get these values:
1. Create a new project at [supabase.com](https://supabase.com)
2. Go to Project Settings > API
3. Copy the Project URL and anon public key

## 📚 Pages & Features

| Page | Route | Features |
|------|-------|----------|
| **Sign In** | `/sign-in` | Email/password authentication |
| **Sign Up** | `/sign-up` | User registration |
| **Dashboard** | `/dashboard` | Analytics overview with charts |
| **Employees** | `/dashboard/employee` | Employee table with CRUD operations |
| **Add Employee** | `/dashboard/employee/new` | Employee creation form |
| **Products** | `/dashboard/product` | Product management table |
| **Add Product** | `/dashboard/product/new` | Product creation form |
| **Profile** | `/dashboard/profile` | Multi-step profile editing |
| **Kanban Board** | `/dashboard/kanban` | Drag-and-drop task management |

## 🎯 Key Features in Detail

### Data Tables
- Server-side pagination
- Advanced filtering and search
- Column sorting
- Row actions
- Responsive design
- URL state persistence with Nuqs

### Forms
- Multi-step forms with progress indicators
- Client and server-side validation with Zod
- File upload support
- Dynamic form fields
- Form state management

### Authentication
- Supabase-based authentication
- Protected routes
- User session management
- Sign in/out functionality

### Kanban Board
- Drag and drop functionality with @dnd-kit
- Local state persistence with Zustand
- Task creation and editing
- Column management

## 🚀 Deployment

### Deploy to Vercel

The easiest way to deploy is using the Vercel Platform:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Kiranism/next-shadcn-dashboard-starter)

### Manual Deployment

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Deploy to your preferred platform**
   - Vercel (recommended)
   - Netlify
   - Railway
   - Any platform supporting Next.js

### Environment Variables for Production

Don't forget to add your environment variables to your hosting platform:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful component library
- [Supabase](https://supabase.com/) for the backend services
- [Vercel](https://vercel.com/) for the hosting platform
- Next.js team for the amazing framework

## 🔗 Related Projects

Looking for a React version? Check out: [React Shadcn Dashboard Starter](https://github.com/Kiranism/react-shadcn-dashboard-starter)

---

<div align="center">
  Made with ❤️ by <a href="https://github.com/Kiranism">Kiran</a>
</div>
