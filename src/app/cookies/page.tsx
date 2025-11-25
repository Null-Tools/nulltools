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
            Last Updated: 2025-11-23<br />
            Effective Date: 2025-11-23
          </p>
        </div>

        <div className="prose prose-invert max-w-none">
          <div className="space-y-8 text-text-secondary leading-relaxed">
            <section>
              <h2 className="text-2xl font-nothing text-text-primary mb-4 tracking-wide">1. Introduction</h2>
              <p className="mb-4">
                This Cookie Policy explains how Null Tools ("we", "us", "our") uses cookies and similar tracking technologies on our websites, including nulltools.xyz, nulldrop.xyz, nullmails.xyz, and nullvault.xyz (the "Sites"), and our associated services including Null Drop, Null Mails, Null Vault, and other Null Tools products (together, the "Services"). This Policy describes what cookies are, how we use them, and your choices regarding their use.
              </p>
              <p className="mb-4">
                By using our Site or Services, you consent to the use of cookies in accordance with this Cookie Policy. If you do not agree to our use of cookies, you should disable cookies in your browser settings or refrain from using our Site and Services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-nothing text-text-primary mb-4 tracking-wide">2. What Are Cookies</h2>
              <p className="mb-4">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners. Cookies allow a website to recognize your device and store some information about your preferences or past actions.
              </p>
              <p className="mb-4">
                We may also use other similar technologies, such as web beacons, pixel tags, and local storage (localStorage and sessionStorage), which function similarly to cookies and are used for the same purposes described in this Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-nothing text-text-primary mb-4 tracking-wide">3. Types of Cookies We Use</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-nothing text-text-primary mb-2">Essential Cookies</h3>
                <p className="mb-2">
                  These cookies are strictly necessary for the Site and Services to function properly. They enable core functionality such as user authentication, session management, security features, and basic site operations. Without these cookies, services you have requested cannot be provided.
                </p>
                <p className="mb-2">
                  Examples of essential cookies we use include:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Session cookies for user authentication and login state</li>
                  <li>Security tokens for protecting against cross-site request forgery (CSRF)</li>
                  <li>Cookies that remember your cookie consent preferences</li>
                </ul>
                <p className="mt-2">
                  These cookies cannot be disabled as they are essential for the Site to function.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-nothing text-text-primary mb-2">Functional Cookies</h3>
                <p className="mb-2">
                  Functional cookies allow the Site to remember choices you make (such as your username, language preference, or region) and provide enhanced, personalized features. These cookies may also be used to remember changes you have made to text size, fonts, and other parts of web pages that you can customize.
                </p>
                <p className="mb-2">
                  We primarily use browser local storage (localStorage and sessionStorage) to store your preferences, such as:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Default upload visibility settings (public/private) in Null Drop</li>
                  <li>User interface theme preferences across all Null Tools products</li>
                  <li>Product-specific preferences for Null Mails, Null Vault, and other services</li>
                  <li>Other customization settings</li>
                </ul>
                <p className="mt-2">
                  These cookies enhance your experience but are not strictly necessary for the Site to function.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-nothing text-text-primary mb-2">Payment and Subscription Cookies</h3>
                <p className="mb-2">
                  When you use our premium subscription services, our payment processor, Polar (Polar.sh), may set cookies on your device. These cookies are essential for processing payments securely, preventing fraud, managing your subscription, and providing you with access to premium features.
                </p>
                <p className="mb-2">
                  Polar cookies are managed by Polar's secure infrastructure and are governed by Polar's privacy policy. These cookies are necessary for premium subscription functionality and cannot be disabled if you wish to use premium features.
                </p>
                <p className="mt-2 p-3 bg-card/50 border border-border rounded-lg text-sm">
                  <strong>Note:</strong> We do not have direct access to or control over Polar cookies. All payment-related cookies are managed by Polar according to their own cookie and privacy policies.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-nothing text-text-primary mb-4 tracking-wide">4. Third-Party Cookies</h2>
              <p className="mb-4">
                In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the Site and Services, deliver advertisements, and so on. The following third-party services may set cookies on your device:
              </p>
              
              <div className="mb-4">
                <h3 className="text-lg font-nothing text-text-primary mb-2">Polar (Polar.sh)</h3>
                <p className="mb-2">
                  We use Polar as our payment processor for subscription payments. Polar may set cookies for secure payment handling, fraud prevention, subscription management, and billing operations. These cookies are essential for premium subscription functionality.
                </p>
                <p className="text-sm">
                  You can view Polar's privacy policy here: <a href="https://polar.sh/legal/privacy" target="_blank" rel="noopener noreferrer" className="text-text-primary hover:underline">https://polar.sh/legal/privacy</a>
                </p>
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-nothing text-text-primary mb-2">Cloudflare</h3>
                <p className="mb-2">
                  We use Cloudflare for content delivery network (CDN) services, security, and performance optimization. Cloudflare may set cookies to help identify malicious visitors, prevent abuse, and optimize performance.
                </p>
                <p className="text-sm">
                  You can view Cloudflare's privacy policy here: <a href="https://www.cloudflare.com/privacypolicy" target="_blank" rel="noopener noreferrer" className="text-text-primary hover:underline">https://www.cloudflare.com/privacypolicy</a>
                </p>
              </div>

              <p className="mt-4 text-sm bg-card/50 border border-border p-4 rounded-lg">
                <strong>Important:</strong> We do not use third-party analytics cookies (such as Google Analytics) or advertising cookies. We prioritize your privacy and do not track your browsing behavior across other websites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-nothing text-text-primary mb-4 tracking-wide">5. How Long Cookies Are Stored</h2>
              <p className="mb-4">
                The length of time a cookie remains on your device depends on whether it is a "persistent" or "session" cookie:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li><strong>Session cookies:</strong> These are temporary cookies that are deleted when you close your web browser. They are used to maintain your session while you navigate through the Site.</li>
                <li><strong>Persistent cookies:</strong> These remain on your device for a set period of time or until you delete them. They are activated each time you visit the Site.</li>
              </ul>
              <p className="mb-4">Specific retention periods for our cookies:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li><strong>Authentication cookies:</strong> Typically stored for 7 days, but may be refreshed with activity. These are essential for maintaining your login session.</li>
                <li><strong>Preference cookies (localStorage):</strong> Stored until you manually clear your browser's local storage or delete the data.</li>
                <li><strong>Cookie consent cookies:</strong> Stored to remember your cookie preferences, typically for 1 year.</li>
                <li><strong>Third-party cookies:</strong> Retention periods are determined by the respective third-party service providers (Polar, Cloudflare) according to their own policies.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-nothing text-text-primary mb-4 tracking-wide">6. Managing and Disabling Cookies</h2>
              <p className="mb-4">
                You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your browser preferences. Most browsers allow you to control cookies through their settings preferences. However, limiting cookies may impact your ability to use our Services.
              </p>
              
              <h3 className="text-xl font-nothing text-text-primary mb-3 mt-6 tracking-wide">Browser Settings:</h3>
              <p className="mb-4">
                Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit <a href="https://www.allaboutcookies.org/" target="_blank" rel="noopener noreferrer" className="text-text-primary hover:underline">www.allaboutcookies.org</a>.
              </p>
              <p className="mb-4">
                Please note that if you choose to disable cookies, some features of our Site and Services may not function properly or may be unavailable. Essential cookies cannot be disabled as they are necessary for the Site to function.
              </p>

              <h3 className="text-xl font-nothing text-text-primary mb-3 mt-6 tracking-wide">Do Not Track Signals:</h3>
              <p className="mb-4">
                Some browsers include a "Do Not Track" (DNT) feature that signals to websites you visit that you do not want to have your online activity tracked. Currently, there is no standard for how DNT signals work. As a result, we do not currently respond to DNT browser signals or mechanisms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-nothing text-text-primary mb-4 tracking-wide">7. Updates to This Cookie Policy</h2>
              <p className="mb-4">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Cookie Policy on this page and updating the "Last Updated" date at the top of this Policy.
              </p>
              <p>
                We encourage you to review this Cookie Policy periodically to stay informed about our use of cookies and related technologies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-nothing text-text-primary mb-4 tracking-wide">8. Contact Us</h2>
              <p className="mb-4">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us:
              </p>
              <p className="ml-4 p-4 bg-card/50 border border-border rounded-lg">
                Null Tools<br />
                Email: <a href="mailto:legal@nulltools.xyz" className="text-text-primary hover:underline">legal@nulltools.xyz</a><br />
                Email: <a href="mailto:contact@nulltools.xyz" className="text-text-primary hover:underline">contact@nulltools.xyz</a>
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}