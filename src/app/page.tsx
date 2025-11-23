import { Navigation } from '@/components/navigation'
import { Hero } from '@/components/hero'
import { Workflow } from '@/components/workflow'
import { Features } from '@/components/features'
import { Stats } from '@/components/stats'
import { Testimonials } from '@/components/testimonials'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <Workflow />
        <Features />
        <Stats />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}