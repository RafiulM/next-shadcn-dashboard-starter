import Hero from '@/components/landing/hero'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Modern Dashboard - Next.js & Shadcn',
  description: 'A beautifully crafted dashboard built with Next.js, TypeScript, and Tailwind CSS. Experience modern web development at its finest.',
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      
      {/* Additional landing page sections can be added here */}
      <section className="py-24 bg-background/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to get started?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of developers who have already chosen our platform for their projects.
          </p>
        </div>
      </section>
    </main>
  )
}