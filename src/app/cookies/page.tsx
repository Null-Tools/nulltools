import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Footer } from '@/components/footer'

export default function CookiePolicy() {
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
            COOKIE POLICY
          </h1>
          <p className="text-text-secondary">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div className="prose prose-invert max-w-none">
          <div className="space-y-8 text-text-secondary leading-relaxed">
            <div className="bg-card/50 border border-border p-6 rounded-lg mb-8">
              <h3 className="text-lg font-nothing text-text-primary mb-2">Current Status</h3>
              <p className="text-sm">
                Null Tools is currently in early development. We use minimal cookies and tracking. As we develop our services, this policy may be updated to reflect new features.
              </p>
            </div>

            <section>
              <h2 className="text-2xl font-nothing text-text-primary mb-4 tracking-wide">1. WHAT ARE COOKIES</h2>
              <p>
                Cookies are small text files that are placed on your computer or mobile device when you visit our website. They help us provide you with a better experience by remembering your preferences and improving our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-nothing text-text-primary mb-4 tracking-wide">2. TYPES OF COOKIES WE USE</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-nothing text-text-primary mb-2">Essential Cookies</h3>
                <p>These cookies are necessary for the website to function properly. Currently, we use minimal essential cookies for basic site functionality.</p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-nothing text-text-primary mb-2">Analytics Cookies</h3>
                <p>Currently not implemented. We may add basic analytics in the future to understand how visitors use our website, but this will be done with privacy in mind.</p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-nothing text-text-primary mb-2">Functional Cookies</h3>
                <p>Currently minimal. As we develop user accounts and preferences, we may add functional cookies to remember your settings.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-nothing text-text-primary mb-4 tracking-wide">3. THIRD-PARTY COOKIES</h2>
              <p className="mb-4">Currently, we use minimal third-party services. As we develop, we may integrate:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><span className="text-text-secondary/60">Google Analytics</span> - Not currently implemented, may be added for basic traffic analysis</li>
                <li><span className="text-text-secondary/60">Payment processors</span> - Will be added when Null Vault payment service launches</li>
                <li><span className="text-text-secondary/60">Authentication services</span> - Planned for future user account features</li>
              </ul>
              <p className="mt-4 text-sm bg-card/30 border border-border/30 p-4 rounded-lg">
                We believe in privacy-first development and will only add third-party services when necessary for core functionality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-nothing text-text-primary mb-4 tracking-wide">4. MANAGING COOKIES</h2>
              <p className="mb-4">
                You can control and manage cookies in several ways:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Browser settings: Most browsers allow you to refuse cookies or delete existing ones</li>
                <li>Opt-out tools: Many third-party services provide opt-out mechanisms</li>
                <li>Do Not Track: We respect Do Not Track browser settings where applicable</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-nothing text-text-primary mb-4 tracking-wide">5. COOKIE RETENTION</h2>
              <p>
                Currently, we use minimal cookies with short retention periods. Most cookies last only for your session and are automatically deleted when you close your browser. As we add more features, we'll keep retention periods as short as possible while maintaining functionality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-nothing text-text-primary mb-4 tracking-wide">6. UPDATES TO THIS POLICY</h2>
              <p>
                We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-nothing text-text-primary mb-4 tracking-wide">7. CONTACT US</h2>
              <p>
                If you have questions about our use of cookies, please contact us at{' '}
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