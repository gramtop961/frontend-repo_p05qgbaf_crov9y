import { FileText, Clock, FileWarning } from 'lucide-react'

function AboutSection() {
  return (
    <section id="learn-more" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Why this system matters</h2>
            <p className="mt-4 text-gray-600">
              Filing insurance claims is slow, manual, and frustrating for users. Insurers face delays and errors due to paperwork and incomplete submissions. Our smart automation system digitizes and streamlines the process — from claim submission to approval.
            </p>

            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg border bg-gray-50">
                <div className="flex items-center gap-2 text-gray-800 font-semibold">
                  <Clock className="w-4 h-4" /> Slow
                </div>
                <p className="mt-2 text-sm text-gray-600">Lengthy manual reviews create delays.</p>
              </div>
              <div className="p-4 rounded-lg border bg-gray-50">
                <div className="flex items-center gap-2 text-gray-800 font-semibold">
                  <FileText className="w-4 h-4" /> Paperwork
                </div>
                <p className="mt-2 text-sm text-gray-600">Physical forms and attachments cause friction.</p>
              </div>
              <div className="p-4 rounded-lg border bg-gray-50">
                <div className="flex items-center gap-2 text-gray-800 font-semibold">
                  <FileWarning className="w-4 h-4" /> Errors
                </div>
                <p className="mt-2 text-sm text-gray-600">Incomplete submissions lead to back-and-forth.</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1585487000160-6ebcfceb0d98?q=80&w=1500&auto=format&fit=crop"
              alt="Digital insurance illustration"
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
