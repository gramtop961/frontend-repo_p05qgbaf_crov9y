import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import FeaturesSection from './components/FeaturesSection'
import HowItWorks from './components/HowItWorks'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <HeroSection />

      {/* About / Problem */}
      <AboutSection />

      {/* Features */}
      <FeaturesSection />

      {/* How It Works */}
      <HowItWorks />

      {/* CTA */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
