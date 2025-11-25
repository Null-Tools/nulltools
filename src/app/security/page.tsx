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
          <p className="text-text-secondary mb-2">
            Last Updated: 2025-11-23
          </p>
          <p className="text-text-secondary">
            Our commitment to keeping your data safe and secure
          </p>
          <div className="bg-card/50 border border-border p-6 rounded-lg mt-6">
            <h3 className="text-lg font-nothing text-text-primary mb-2">Security Overview</h3>
            <p className="text-sm text-text-secondary">
              Null Tools implements enterprise-grade security features across all our products (Null Drop, Null Mails, Null Vault) including secure file storage, API authentication, 
              two-factor authentication (2FA), and unified account management through Null Pass integration.
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
                Encryption measures implemented across all Null Tools products:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>TLS 1.3 encryption</strong> for all web communications and data transmission</li>
                <li><strong>Secure file storage</strong> with access controls and user-specific directories</li>
                <li><strong>bcrypt password hashing</strong> with 12 rounds for secure password storage</li>
                <li><strong>JWT token-based authentication</strong> with 7-day expiry and secure session management</li>
                <li><strong>API key encryption</strong> and rate limiting to prevent abuse</li>
                <li><strong>Secure share token generation</strong> using cryptographically secure random identifiers (CUID)</li>
                <li><strong>PCI DSS compliant payment processing</strong> via Polar - we never store credit card information</li>
                <li><strong>Encrypted API responses</strong> for sensitive operations using AES encryption</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Lock className="text-blue-400" size={24} />
                <h2 className="text-2xl font-nothing text-text-primary tracking-wide">ACCESS CONTROLS</h2>
              </div>
              <p className="mb-4">
                Access control measures across all Null Tools products:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Secure user authentication</strong> through Null Pass unified authentication system</li>
                <li><strong>Two-factor authentication (2FA)</strong> using TOTP (Time-based One-Time Password) with authenticator apps</li>
                <li><strong>Session management</strong> with automatic expiration and secure token storage</li>
                <li><strong>API key-based authentication</strong> for developers (40-character cryptographically secure keys)</li>
                <li><strong>File-level access controls</strong> with public/private sharing options and secure share tokens</li>
                <li><strong>User-specific storage quotas</strong> and rate limiting based on subscription tier</li>
                <li><strong>Advanced email validation</strong> with MX record verification and disposable email detection</li>
                <li><strong>Subscription-based access control</strong> for premium features and enhanced limits</li>
                <li><strong>Failed login attempt monitoring</strong> and account protection mechanisms</li>
              </ul>
              <div className="mt-4 p-4 bg-card/50 border border-border rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Null Pass Integration</h4>
                <p className="text-sm text-text-secondary">
                  Null Pass is our unified authentication system that enables you to use a single account across all Null applications (Null Drop, Null Mails, Null Vault). Your account security is managed centrally through Null Pass, providing consistent security measures across the entire Null ecosystem. By deleting your Null Pass account, your account and all associated data will be permanently deleted from all Null applications.
                </p>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Eye className="text-purple-400" size={24} />
                <h2 className="text-2xl font-nothing text-text-primary tracking-wide">MONITORING & DETECTION</h2>
              </div>
              <p className="mb-4">
                Security monitoring and detection systems:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Real-time server monitoring</strong> and automated alerting for security incidents</li>
                <li><strong>API usage tracking</strong> and anomaly detection to identify suspicious activity</li>
                <li><strong>Failed login attempt monitoring</strong> and account lockout mechanisms</li>
                <li><strong>Payment fraud detection</strong> via Polar's secure payment processing infrastructure</li>
                <li><strong>Automated security scanning</strong> and dependency updates</li>
                <li><strong>Security incident response</strong> procedures and recovery protocols</li>
                <li><strong>Session expiration management</strong> with automatic cleanup of expired sessions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-nothing text-text-primary mb-4 tracking-wide">INFRASTRUCTURE SECURITY</h2>
              <p className="mb-4">
                Infrastructure security measures:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Cloudflare protection</strong> - DDoS protection, Web Application Firewall (WAF), and CDN services</li>
                <li><strong>Secure database hosting</strong> via Neon (Neon.tech) with encrypted connections</li>
                <li><strong>Vercel hosting</strong> with automatic security updates and SSL/TLS certificates</li>
                <li><strong>Encrypted database backups</strong> with point-in-time recovery capabilities</li>
                <li><strong>Load balancing and redundancy</strong> for high availability and fault tolerance</li>
                <li><strong>Automated security updates</strong> and patch management</li>
                <li><strong>Environment variable security</strong> with secure secret management</li>
                <li><strong>Secure file storage</strong> with user-specific directories and access controls</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-nothing text-text-primary mb-4 tracking-wide">COMPLIANCE & CERTIFICATIONS</h2>
              <p className="mb-4">
                Compliance standards and security practices:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>GDPR compliance</strong> - We follow GDPR principles for EU user data protection</li>
                <li><strong>PCI DSS compliance</strong> - All payment processing is handled by Polar, a PCI DSS compliant payment processor</li>
                <li><strong>Data encryption in transit</strong> - All data transmitted over TLS 1.3</li>
                <li><strong>Data encryption at rest</strong> - Secure file storage with access controls</li>
                <li><strong>Regular security assessments</strong> and code reviews</li>
                <li><strong>Privacy by design</strong> - Security considerations integrated into development process</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-nothing text-text-primary mb-4 tracking-wide">TWO-FACTOR AUTHENTICATION (2FA)</h2>
              <p className="mb-4">
                Null Tools supports two-factor authentication across all products to add an extra layer of security to your account:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li><strong>TOTP-based 2FA</strong> - Compatible with authenticator apps like Google Authenticator, Authy, and Microsoft Authenticator</li>
                <li><strong>QR code setup</strong> - Easy setup process with QR code scanning</li>
                <li><strong>Manual entry option</strong> - Alternative setup method using secret key</li>
                <li><strong>Required for sensitive operations</strong> - 2FA verification required for password changes when enabled</li>
                <li><strong>Secure secret storage</strong> - 2FA secrets are stored securely in encrypted format</li>
              </ul>
              <p className="text-sm bg-card/50 border border-border p-4 rounded-lg">
                <strong>Note:</strong> Enabling 2FA is highly recommended for all users, especially those with premium subscriptions or sensitive data. You can enable 2FA in your account settings.
              </p>
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
                  <strong>Response time:</strong> We aim to respond within 24-48 hours
                </p>
                <p className="mb-2">
                  <strong>Disclosure:</strong> We follow coordinated disclosure practices. Please allow us time to address the issue before public disclosure.
                </p>
                <p>
                  <strong>Scope:</strong> Please only test security vulnerabilities on your own account or with explicit written permission.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-nothing text-text-primary mb-4 tracking-wide">SECURITY BEST PRACTICES</h2>
              <p className="mb-4">
                Help us keep your account secure by following these practices:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Use strong, unique passwords</strong> - Use a password manager to generate and store secure passwords</li>
                <li><strong>Enable two-factor authentication (2FA)</strong> - Add an extra layer of security to your account</li>
                <li><strong>Keep your API keys secure</strong> - Rotate API keys regularly and never share them publicly</li>
                <li><strong>Monitor your account activity</strong> - Review your file uploads and API usage regularly</li>
                <li><strong>Check your billing statements</strong> - Monitor for unauthorized charges or subscription changes</li>
                <li><strong>Keep your software updated</strong> - Use the latest versions of your browser and operating system</li>
                <li><strong>Be cautious with public Wi-Fi</strong> - Avoid accessing sensitive accounts on unsecured networks</li>
                <li><strong>Log out from shared devices</strong> - Always log out when using public or shared computers</li>
                <li><strong>Review file sharing settings</strong> - Check file visibility (public/private) before uploading sensitive content</li>
                <li><strong>Use secure share links</strong> - Share links use cryptographically secure tokens, but only share them with trusted parties</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-nothing text-text-primary mb-4 tracking-wide">DATA RETENTION & DELETION</h2>
              <p className="mb-4">
                Our data retention and deletion policies:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Account deletion</strong> - You can delete your account at any time through Null Pass, which will permanently delete all your data from all Null Tools products (Null Drop, Null Mails, Null Vault)</li>
                <li><strong>File deletion</strong> - Files in Null Drop are permanently deleted when you delete them or when your account is deleted</li>
                <li><strong>Email data deletion</strong> - Temporary emails in Null Mails are automatically deleted based on retention policies</li>
                <li><strong>Payment data deletion</strong> - Payment data in Null Vault is handled securely through our payment processor and deleted according to their policies</li>
                <li><strong>Session expiration</strong> - Authentication sessions expire after 7 days of inactivity across all Null Tools products</li>
                <li><strong>API key revocation</strong> - You can revoke API keys at any time, which immediately invalidates them</li>
                <li><strong>Subscription cancellation</strong> - Canceling your subscription takes effect immediately. Your subscription and premium features will end right away, and you will be downgraded to the free tier. Canceling your subscription does not delete your account or files</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}