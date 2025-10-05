import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CallToAction() {
  return (
    <section className="bg-blue-600 dark:bg-blue-800">
      <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            Join thousands of users who are already using our dashboard to manage their business more efficiently.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild variant="secondary" size="lg" className="px-8">
              <Link href="/sign-up">Start Free Trial</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8 border-white text-white hover:bg-white hover:text-blue-600">
              <Link href="/sign-in">Sign In</Link>
            </Button>
          </div>
          <p className="mt-6 text-sm text-blue-200">
            No credit card required. 14-day free trial.
          </p>
        </div>
      </div>
    </section>
  )
}