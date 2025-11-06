import { Rocket, PlayCircle } from 'lucide-react'

function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-50" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 pt-20 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 text-blue-700 px-4 py-1.5 text-sm font-medium">
              <Rocket className="w-4 h-4" />
              Smart Insurance Claim Automation System
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              File insurance claims faster, smarter, and with complete transparency.
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-2xl">
              A digital platform that automates claim filing and tracking for health and vehicle insurance — saving time for both users and insurers.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#get-started" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-sm transition">
                Get Started
              </a>
              <a href="#learn-more" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white hover:bg-gray-50 text-gray-900 font-semibold border border-gray-200 shadow-sm transition">
                <PlayCircle className="w-5 h-5 mr-2" />
                Learn More
              </a>
            </div>

            <div className="mt-10 flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
                Live status tracking
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-blue-500" />
                Bank-grade security
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl border border-blue-100 bg-white/80 backdrop-blur shadow-xl p-4">
              <div className="aspect-[4/3] w-full rounded-lg bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=1600&auto=format&fit=crop"
                  alt="Insurance dashboard mockup"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute -bottom-10 -left-16 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl" />
            <div className="pointer-events-none absolute -top-10 -right-16 w-64 h-64 bg-indigo-200/30 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
