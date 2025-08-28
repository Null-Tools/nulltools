import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Footer } from '@/components/footer'

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background text-text-primary">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors mb-6"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-nothing text-text-primary mb-4 tracking-wider">
            TERMS OF SERVICE
          </h1>
          <p className="text-text-secondary">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div className="prose prose-invert max-w-none">
          <div className="space-y-8 text-text-secondary leading-relaxed">
            <section>
              <h2 className="text-2xl font-nothing text-text-primary mb-4 tracking-wide">1. ACCEPTANCE OF TERMS</h2>
              <p>
                By accessing and using Null Tools services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-nothing text-text-primary mb-4 tracking-wide">2. DESCRIPTION OF SERVICE</h2>
              <p className="mb-4">
                Null Tools is developing a suite of developer-focused services including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Secure file sharing and management (Null Drop) - Currently in beta</li>
                <li>Temporary email services (Null Mails) - In development</li>
                <li>Secure payment processing (Null Vault) - Planned for future release</li>
              </ul>
              <p className="mt-4 text-sm bg-card/50 border border-border p-4 rounded-lg">
                <strong>Note:</strong> Most services are currently in development or early access. Features may change as we continue building and improving our platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-nothing text-text-primary mb-4 tracking-wide">3. USER RESPONSIBILITIES</h2>
              <p className="mb-4">You agree to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Use services only for lawful purposes</li>
                <li>Not upload malicious or illegal content</li>
                <li>Respect intellectual property rights</li>
                <li>Maintain the security of your account credentials</li>
                <li>Not attempt to circumvent security measures</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-nothing text-text-primary mb-4 tracking-wide">4. SERVICE AVAILABILITY</h2>
              <p>
                As we are still in early development stages, service availability may vary. We&apos;re working hard to improve stability and performance, but expect occasional downtime for updates and improvements. We&apos;ll do our best to communicate planned maintenance in advance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-nothing text-text-primary mb-4 tracking-wide">5. LIMITATION OF LIABILITY</h2>
              <p>
                As our services are currently in development and early access phases, they are provided &quot;as is&quot; without warranties. Null Tools shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services. Please use our beta services with appropriate caution.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-nothing text-text-primary mb-4 tracking-wide">6. TERMINATION</h2>
              <p>
                We may terminate or suspend your account and access to services at our sole discretion, without prior notice, for conduct that we believe violates these Terms of Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-nothing text-text-primary mb-4 tracking-wide">7. UPDATES TO TERMS</h2>
              <p>
                As we continue developing our services, these terms may be updated to reflect new features and changes. We&apos;ll notify users of significant updates through our website or email.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-nothing text-text-primary mb-4 tracking-wide">8. CONTACT INFORMATION</h2>
              <p>
                For questions regarding these Terms of Service, contact us at{' '}
                <a href="mailto:contact@nulltools.xyz" className="text-text-primary hover:underline">
                  contact@nulltools.xyz
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}