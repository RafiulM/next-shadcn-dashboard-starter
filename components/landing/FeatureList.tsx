import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    title: "Employee Management",
    description: "Efficiently manage your team members, track performance, and handle HR tasks with ease.",
    icon: "👥"
  },
  {
    title: "Product Management",
    description: "Organize your products, manage inventory, and track sales all in one place.",
    icon: "📦"
  },
  {
    title: "Kanban Board",
    description: "Visual project management with drag-and-drop functionality to streamline your workflow.",
    icon: "📋"
  },
  {
    title: "Real-time Analytics",
    description: "Get insights into your business with comprehensive analytics and reporting tools.",
    icon: "📊"
  },
  {
    title: "Profile Management",
    description: "Customize your profile, manage settings, and keep your information up to date.",
    icon: "👤"
  },
  {
    title: "Secure Authentication",
    description: "Enterprise-grade security with modern authentication methods to protect your data.",
    icon: "🔐"
  }
]

export function FeatureList() {
  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Everything You Need to Succeed
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Powerful features designed to help you manage your business efficiently
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900 mb-4">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}