# Next.js 14 Admin Dashboard Starter with Shadcn UI

A modern, feature-rich admin dashboard starter template built with Next.js 14, TypeScript, and shadcn/ui. This template provides everything you need to quickly build professional admin interfaces, employee management systems, and data-driven dashboards.

![Dashboard Preview](https://user-images.githubusercontent.com/9113740/201498864-2a900c64-d88f-4ed4-b5cf-770bcb57e1f5.png)

## ✨ Features

- 🎨 **Modern UI/UX** - Built with shadcn/ui components and Tailwind CSS
- 🌓 **Dark/Light Theme** - Complete theming support with theme toggle
- 🔐 **Authentication** - Supabase auth with sign in/sign up functionality
- 📊 **Analytics Dashboard** - Interactive charts with Recharts
- 👥 **Employee Management** - Complete CRUD operations with data tables
- 📦 **Product Management** - Product catalog with filtering and search
- 📋 **Kanban Board** - Drag-and-drop task management with dnd-kit
- 📱 **Responsive Design** - Mobile-first approach with breakpoints
- 🔍 **Advanced Filtering** - Server-side search, filtering, and pagination
- 📝 **Form Validation** - React Hook Form with Zod schema validation
- 🎯 **Type Safety** - Full TypeScript implementation
- ⚡ **Performance** - Optimized with Next.js 14 App Router

## 🛠 Technology Stack

### Core Framework
- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[React 18](https://react.dev/)** - Modern React with hooks

### Styling & UI
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Modern React component library
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library

### Data & State Management
- **[Supabase](https://supabase.com/)** - Backend as a Service (Authentication & Database)
- **[Zustand](https://zustand-demo.pmnd.rs/)** - Lightweight state management
- **[TanStack Query](https://tanstack.com/query)** - Server state management
- **[Nuqs](https://nuqs.47ng.com/)** - Type-safe search params state manager

### Forms & Validation
- **[React Hook Form](https://react-hook-form.com/)** - Performant forms
- **[Zod](https://zod.dev/)** - Schema validation
- **[React Hook Form Resolvers](https://github.com/react-hook-form/resolvers)** - Form validation integration

### Data Display
- **[TanStack Table](https://tanstack.com/table)** - Headless UI for building tables
- **[Recharts](https://recharts.org/)** - Composable chart library

### Drag & Drop
- **[@dnd-kit](https://dndkit.com/)** - Modern drag and drop library

### Development Tools
- **[ESLint](https://eslint.org/)** - Code linting
- **[Prettier](https://prettier.io/)** - Code formatting
- **[Husky](https://typicode.github.io/husky/)** - Git hooks
- **[Lint-staged](https://github.com/okonet/lint-staged)** - Lint staged files

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── (auth)/            # Authentication pages
│   ├── dashboard/         # Dashboard pages
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # Reusable React components
│   ├── ui/               # shadcn/ui components
│   ├── layout/           # Layout components
│   └── ...
├── lib/                  # Utility functions and configurations
│   ├── supabase/         # Supabase client configuration
│   ├── utils.ts          # Utility functions
│   └── ...
├── sections/             # Feature-specific components
│   ├── auth/             # Authentication components
│   ├── employee/         # Employee management
│   ├── product/          # Product management
│   ├── kanban/           # Kanban board
│   └── overview/         # Dashboard overview
├── hooks/                # Custom React hooks
├── types/                # TypeScript type definitions
└── public/               # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

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

3. **Set up environment variables**
   
   Create a `.env.local` file in the root of your project:
   ```bash
   touch .env.local
   ```
   
   Add your Supabase configuration:
   ```env
   # Supabase Configuration
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

   To get these values:
   - Create a new project at [supabase.com](https://supabase.com)
   - Go to Settings → API
   - Copy the Project URL and anon public key

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📚 Pages & Features

### Authentication
- **Sign Up** (`/sign-up`) - User registration with email/password
- **Sign In** (`/sign-in`) - User login with authentication

### Dashboard Pages
- **Overview** (`/dashboard`) - Analytics dashboard with charts and metrics
- **Employees** (`/dashboard/employee`) - Employee management with CRUD operations
- **Products** (`/dashboard/product`) - Product catalog management
- **Kanban Board** (`/dashboard/kanban`) - Task management with drag-and-drop
- **Profile** (`/dashboard/profile`) - User profile management

### Key Features

#### Data Tables
- Server-side pagination
- Advanced filtering and search
- Column sorting
- Responsive design

#### Forms
- Multi-step forms
- Real-time validation
- File upload support
- Schema validation with Zod

#### Charts & Analytics
- Interactive charts (bar, line, pie)
- Real-time data updates
- Responsive visualizations

#### Kanban Board
- Drag-and-drop functionality
- Local state persistence
- Task management
- Column customization

## 🎨 Customization

### Adding New Pages

1. Create a new folder in `app/dashboard/`
2. Add your `page.tsx` file
3. Update the navigation in `components/dashboard-nav.tsx`

### Theme Customization

The theme uses CSS variables defined in `app/globals.css`. You can customize colors by modifying these variables:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  /* ... more variables */
}
```

### Adding New Components

1. Add shadcn/ui components:
   ```bash
   npx shadcn-ui@latest add [component-name]
   ```

2. Create custom components in the `components/` directory

## 🚀 Deployment

### Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy to Vercel**
   ```bash
   vercel
   ```

3. **Set up environment variables in Vercel**
   
   In your Vercel dashboard:
   - Go to Settings → Environment Variables
   - Add your Supabase URL and anon key

### Other Platforms

This project can be deployed to any platform that supports Next.js:
- **Netlify** - Connect your Git repository
- **Railway** - Deploy with Docker
- **DigitalOcean** - App Platform deployment

## 🔧 Development Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Format code
npm run format
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

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
- [Next.js](https://nextjs.org/) team for the amazing framework

## 🔗 Links

- **Live Demo**: [https://next-shadcn-dashboard-starter.vercel.app](https://next-shadcn-dashboard-starter.vercel.app)
- **Repository**: [https://github.com/Kiranism/next-shadcn-dashboard-starter](https://github.com/Kiranism/next-shadcn-dashboard-starter)
- **Author**: [Kiran](https://github.com/Kiranism)

---

⭐ If you find this template helpful, please consider giving it a star on GitHub!