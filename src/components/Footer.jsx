import { ShieldCheck, Mail, Twitter, Linkedin } from 'lucide-react'

function Footer() {
  return (
    <footer id="contact" className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 text-blue-700 font-bold text-lg">
              <ShieldCheck className="w-5 h-5" /> Smart Insurance Claim Automation
            </div>
            <p className="mt-3 text-gray-600 text-sm">Secure, transparent, and efficient claims for everyone.</p>
            <div className="mt-4 flex gap-3 text-gray-500">
              <a href="#" aria-label="Twitter" className="hover:text-blue-600"><Twitter className="w-5 h-5" /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-blue-600"><Linkedin className="w-5 h-5" /></a>
              <a href="mailto:hello@example.com" aria-label="Email" className="hover:text-blue-600"><Mail className="w-5 h-5" /></a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#learn-more" className="hover:text-gray-900">About</a></li>
              <li><a href="#features" className="hover:text-gray-900">Features</a></li>
              <li><a href="#" className="hover:text-gray-900">Privacy</a></li>
              <li><a href="#" className="hover:text-gray-900">Terms</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Get in touch</h4>
            <p className="mt-3 text-sm text-gray-600">Have questions? We’re here to help.</p>
            <a href="mailto:hello@example.com" className="mt-3 inline-block text-blue-700 font-semibold">hello@example.com</a>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t text-sm text-gray-500 flex items-center justify-between">
          <p>Copyright © 2025 Smart Insurance Claim Automation System</p>
          <p>Secure • GDPR Compliant</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
