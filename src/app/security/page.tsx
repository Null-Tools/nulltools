import Link from 'next/link'
import { ArrowLeft, Shield, Lock, Eye, AlertTriangle } from 'lucide-react'
import { Footer } from '@/components/footer'

export default function Security() {
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
            SECURITY
          </h1>
          <p className="text-text-secondary">
            Our commitment to keeping your data safe and secure as we build and grow
          </p>
          <div className="bg-card/50 border border-border p-6 rounded-lg mt-6">
            <h3 className="text-lg font-nothing text-text-primary mb-2">Development Status</h3>
            <p className="text-sm text-text-secondary">
              Null Tools is currently in early development. We're implementing security best practices from day one, 
              but some advanced security features are still being developed as our services mature.
            </p>
          </div>
        </div>

        <div className="prose prose-invert max-w-none">
          <div className="space-y-8 text-text-secondary leading-relaxed">
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Shield className="text-green-400" size={24} />
                <h2 className="text-2xl font-nothing text-text-primary tracking-wide">DATA ENCRYPTION</h2>
              </div>
              <p className="mb-4">
                Security measures we're implementing and planning:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>TLS 1.3 for website connections - <span className="text-green-400">Active</span></li>
                <li>Basic data encryption for stored files - <span className="text-yellow-400">In Development</span></li>
                <li>Advanced encryption for sensitive data - <span className="text-text-secondary/60">Planned</span></li>
                <li>End-to-end encryption for communications - <span className="text-text-secondary/60">Future Feature</span></li>
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Lock className="text-blue-400" size={24} />
                <h2 className="text-2xl font-nothing text-text-primary tracking-wide">ACCESS CONTROLS</h2>
              </div>
              <p className="mb-4">
                Access control measures as we build user systems:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Basic authentication for early access - <span className="text-green-400">Active</span></li>
                <li>Multi-factor authentication for accounts - <span className="text-text-secondary/60">Planned</span></li>
                <li>Role-based team access - <span className="text-yellow-400">Basic Implementation</span></li>
                <li>Secure admin access to infrastructure - <span className="text-green-400">Active</span></li>
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Eye className="text-purple-400" size={24} />
                <h2 className="text-2xl font-nothing text-text-primary tracking-wide">MONITORING & DETECTION</h2>
              </div>
              <p className="mb-4">
                Security monitoring as we scale our services:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Basic server monitoring and alerts - <span className="text-green-400">Active</span></li>
                <li>Log monitoring for unusual activity - <span className="text-yellow-400">Basic Setup</span></li>
                <li>Automated security scanning - <span className="text-text-secondary/60">Planned</span></li>
                <li>Simple incident response plan - <span className="text-green-400">Documented</span></li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-nothing text-text-primary mb-4 tracking-wide">COMPLIANCE & CERTIFICATIONS</h2>
              <p className="mb-4">
                Compliance standards we're working towards:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Basic GDPR compliance practices - <span className="text-green-400">Implemented</span></li>
                <li>SOC 2 certification - <span className="text-text-secondary/60">Future Goal</span></li>
                <li>PCI DSS for payment processing - <span className="text-text-secondary/60">When Null Vault Launches</span></li>
                <li>Security assessments - <span className="text-text-secondary/60">Planned for Production</span></li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-nothing text-text-primary mb-4 tracking-wide">INFRASTRUCTURE SECURITY</h2>
              <p className="mb-4">
                Infrastructure security measures we're building:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Modern cloud hosting with security defaults - <span className="text-green-400">Active</span></li>
                <li>Basic firewall and network protection - <span className="text-green-400">Active</span></li>
                <li>Automated security updates - <span className="text-green-400">Active</span></li>
                <li>Simple backup procedures - <span className="text-yellow-400">Basic Implementation</span></li>
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="text-orange-400" size={24} />
                <h2 className="text-2xl font-nothing text-text-primary tracking-wide">REPORTING SECURITY ISSUES</h2>
              </div>
              <p className="mb-4">
                If you discover a security vulnerability, please report it responsibly:
              </p>
              <div className="bg-card/50 border border-border rounded-lg p-6">
                <p className="mb-2">
                  <strong>Email:</strong>{' '}
                  <a href="mailto:security@nulltools.xyz" className="text-text-primary hover:underline">
                    security@nulltools.xyz
                  </a>
                </p>
                <p className="mb-2">
                  <strong>Response time:</strong> We aim to respond within 24 hours
                </p>
                <p>
                  <strong>Disclosure:</strong> We follow coordinated disclosure practices
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-nothing text-text-primary mb-4 tracking-wide">SECURITY BEST PRACTICES</h2>
              <p className="mb-4">
                Help us keep your account secure by following these practices:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Use strong, unique passwords</li>
                <li>Enable two-factor authentication</li>
                <li>Keep your software and browsers updated</li>
                <li>Be cautious with public Wi-Fi networks</li>
                <li>Log out from shared devices</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}