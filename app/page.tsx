import { Hero } from "@/components/landing/Hero"
import { FeatureList } from "@/components/landing/FeatureList"
import { CallToAction } from "@/components/landing/CallToAction"

export default function Home() {
  return (
    <main>
      <Hero />
      <FeatureList />
      <CallToAction />
    </main>
  )
}