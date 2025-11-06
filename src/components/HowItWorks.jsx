import { UploadCloud, CheckCircle2, BellRing, Receipt } from 'lucide-react'

function HowItWorks() {
  const steps = [
    { icon: UploadCloud, title: 'Submit your claim', desc: 'Fill details and upload documents securely.' },
    { icon: CheckCircle2, title: 'System validates automatically', desc: 'Real-time checks for policy and coverage.' },
    { icon: BellRing, title: 'Get real-time status updates', desc: 'Track progress from review to approval.' },
    { icon: Receipt, title: 'Receive approval and receipts', desc: 'Everything stored digitally for easy access.' }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">How it works</h2>
          <p className="mt-4 text-gray-600">A simple 4-step journey from submission to resolution.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.title} className="p-6 rounded-xl border bg-gray-50">
              <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                <s.icon className="w-6 h-6" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
