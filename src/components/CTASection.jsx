import { ArrowRight } from 'lucide-react'

function CTASection() {
  return (
    <section id="get-started" className="py-20 bg-blue-600">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 p-10 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold">Ready to simplify your insurance process?</h3>
              <p className="mt-3 text-blue-100">Start a free demo or contact us to see it in action.</p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <a href="#" className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-blue-700 font-semibold shadow hover:bg-blue-50">
                Try Free Demo <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a href="#contact" className="inline-flex items-center px-6 py-3 rounded-lg bg-transparent border border-white/30 text-white font-semibold hover:bg-white/10">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
