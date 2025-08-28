import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Footer } from '@/components/footer'

export default function PrivacyPolicy() {
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
            PRIVACY POLICY
          </h1>
          <p className="text-text-secondary">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div className="prose prose-invert max-w-none">
          <div className="space-y-8 text-text-secondary leading-relaxed">
            <section>
              <h2 className="text-2xl font-nothing text-text-primary mb-4 tracking-wide">1. OVERVIEW</h2>
              <p className="mb-4">
                Null Tools is currently in early development. This Privacy Policy outlines our commitment to protecting your privacy as we develop our suite of developer tools.
              </p>
              <p>
                At this time, our website is primarily informational and we collect minimal data as described below.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-nothing text-text-primary mb-4 tracking-wide">2. INFORMATION WE CURRENTLY COLLECT</h2>
              <p className="mb-4">
                Since we are in development phase, we currently collect very limited information:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Basic web analytics (page views, general location) through standard web server logs</li>
                <li>Any information you voluntarily provide when contacting us via email</li>
                <li>GitHub interactions if you engage with our open source repositories</li>
              </ul>
              <p className="mt-4">
                <strong>We do not currently have:</strong> User accounts, payment processing, file uploads, or any active services that would collect personal data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-nothing text-text-primary mb-4 tracking-wide">3. HOW WE USE INFORMATION</h2>
              <p className="mb-4">The limited information we collect is used to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Understand website usage and improve our development roadmap</li>
                <li>Respond to inquiries and support requests</li>
                <li>Communicate about project updates (only if you&apos;ve contacted us directly)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-nothing text-text-primary mb-4 tracking-wide">4. FUTURE SERVICES</h2>
              <p className="mb-4">
                As we develop our tools (Null Drop, Null Mails, Null Vault), we will:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Update this Privacy Policy before launching any data-collecting services</li>
                <li>Implement privacy-by-design principles</li>
                <li>Collect only the minimum data necessary for each service to function</li>
                <li>Provide clear notice about what data each tool collects and why</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-nothing text-text-primary mb-4 tracking-wide">5. DATA SHARING</h2>
              <p>
                We do not sell, trade, or share your personal information with third parties. The only exception would be if required by law or to protect our rights and safety.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-nothing text-text-primary mb-4 tracking-wide">6. SECURITY</h2>
              <p>
                We take reasonable precautions to protect any information we collect. As we develop our services, security will be a primary consideration in our design and implementation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-nothing text-text-primary mb-4 tracking-wide">7. CHANGES TO THIS POLICY</h2>
              <p>
                This Privacy Policy will be updated as our services develop. We will notify users of significant changes by updating the date at the top of this policy and, when we have active users, through appropriate communication channels.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-nothing text-text-primary mb-4 tracking-wide">8. CONTACT US</h2>
              <p>
                If you have questions about this Privacy Policy or our privacy practices, please contact us at{' '}
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