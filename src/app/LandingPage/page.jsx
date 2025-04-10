import { Header } from "../components/header"
import { Hero } from "../components/hero"
import { Problem } from "../components/problem"
import { Solution } from "../components/solution"
import { HowItWorks } from "../components/how-it-works"
import { Benefits } from "../components/benefits"
import { Testimonials } from "../components/testimonials"
import { CallToAction } from "../components/call-to-action"
import { Footer } from "../components/footer"
import { BackgroundEffects } from "../components/background-effects"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <BackgroundEffects />
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <Benefits />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}

