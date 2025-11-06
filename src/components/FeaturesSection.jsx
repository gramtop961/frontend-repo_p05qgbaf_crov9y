import { FileUp, SearchCheck, Shield, Archive, Bot } from 'lucide-react'

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="group p-6 rounded-xl border bg-white shadow-sm hover:shadow-md transition">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50 text-blue-600">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-600 text-sm">{description}</p>
    </div>
  )
}

function FeaturesSection() {
  const features = [
    {
      icon: FileUp,
      title: 'Easy Claim Submission',
      description: 'Fill online forms and securely upload documents and images in minutes.'
    },
    {
      icon: SearchCheck,
      title: 'Claim Status Tracker',
      description: 'See live updates like Under Review, Approved, or Rejected.'
    },
    {
      icon: Bot,
      title: 'Automated Validation',
      description: 'Auto-checks coverage limits, policy numbers, and document completeness.'
    },
    {
      icon: Archive,
      title: 'Digital History',
      description: 'All claim receipts and records stored and searchable in one place.'
    },
    {
      icon: Shield,
      title: 'Secure and Transparent',
      description: 'Bank-grade security with real-time visibility into each claim.'
    }
  ]

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-blue-50/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Powerful features that save time</h2>
          <p className="mt-4 text-gray-600">Built to simplify claims for both users and insurers.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <FeatureCard key={f.title} icon={f.icon} title={f.title} description={f.description} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
