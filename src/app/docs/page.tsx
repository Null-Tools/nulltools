import Link from 'next/link'
import { ArrowLeft, Book, Code, Download, ExternalLink } from 'lucide-react'
import { Footer } from '@/components/footer'

export default function Documentation() {
  const docSections = [
    {
      title: "Getting Started",
      icon: Book,
      items: [
        { name: "Quick Start Guide", href: "#quickstart" },
        { name: "Installation", href: "#installation" },
        { name: "Authentication", href: "#auth" },
        { name: "Basic Usage", href: "#usage" }
      ]
    },
    {
      title: "API Reference",
      icon: Code,
      items: [
        { name: "File Upload API", href: "#file-api" },
        { name: "Email API", href: "#email-api" },
        { name: "Payment API", href: "#payment-api" },
        { name: "Rate Limits", href: "#limits" }
      ]
    },
    {
      title: "SDKs & Tools",
      icon: Download,
      items: [
        { name: "JavaScript SDK", href: "#js-sdk" },
        { name: "Python SDK", href: "#python-sdk" },
        { name: "CLI Tool", href: "#cli" },
        { name: "Postman Collection", href: "#postman" }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-background text-text-primary">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="mb-12">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors mb-6"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-nothing text-text-primary mb-4 tracking-wider">
            DOCUMENTATION
          </h1>
          <p className="text-text-secondary text-lg">
            Everything you need to integrate and use Null Tools services
          </p>
        </div>

        <div className="mb-12 bg-card/30 border border-border rounded-2xl p-8">
          <h2 className="text-2xl font-nothing text-text-primary mb-4 tracking-wide">OVERVIEW</h2>
          <p className="text-text-secondary mb-6 leading-relaxed">
            Null Tools provides developer-first APIs for secure file management, temporary communications, and payment processing. 
            Our services are designed to be simple, secure, and scalable for developers and businesses of all sizes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-nothing text-text-primary mb-2">99.9%</div>
              <div className="text-sm text-text-secondary">Uptime SLA</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-nothing text-text-primary mb-2">&lt;100ms</div>
              <div className="text-sm text-text-secondary">Average Response</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-nothing text-text-primary mb-2">24/7</div>
              <div className="text-sm text-text-secondary">Developer Support</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {docSections.map((section, index) => {
            const Icon = section.icon
            return (
              <div key={section.title} className="bg-card/30 border border-border rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg">
                    <Icon size={20} className="text-white" />
                  </div>
                  <h3 className="text-xl font-nothing text-text-primary tracking-wide">
                    {section.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-text-secondary hover:text-text-primary transition-colors text-sm flex items-center gap-2 group"
                      >
                        {item.name}
                        <ExternalLink size={12} className="opacity-0 group-hover:opacity-50 transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        <div className="bg-card/30 border border-border rounded-2xl p-8">
          <h2 className="text-2xl font-nothing text-text-primary mb-6 tracking-wide">QUICK START</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-nothing text-text-primary mb-3">1. Get Your API Key</h3>
              <p className="text-text-secondary mb-3">Sign up and get your API key from the dashboard.</p>
              <div className="bg-background/50 border border-border rounded-lg p-4 font-mono text-sm">
                curl -H "Authorization: Bearer YOUR_API_KEY" https://api.nulltools.xyz/v1/status
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-nothing text-text-primary mb-3">2. Upload Your First File</h3>
              <p className="text-text-secondary mb-3">Use our simple API to upload files securely.</p>
              <div className="bg-background/50 border border-border rounded-lg p-4 font-mono text-sm">
                curl -X POST -F "file=@example.pdf" \<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;-H "Authorization: Bearer YOUR_API_KEY" \<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;https://api.nulltools.xyz/v1/files
              </div>
            </div>

            <div>
              <h3 className="text-lg font-nothing text-text-primary mb-3">3. Create Temporary Email</h3>
              <p className="text-text-secondary mb-3">Generate disposable email addresses for testing.</p>
              <div className="bg-background/50 border border-border rounded-lg p-4 font-mono text-sm">
                curl -X POST \<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;-H "Authorization: Bearer YOUR_API_KEY" \<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;https://api.nulltools.xyz/v1/emails
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-nothing text-text-primary mb-4 tracking-wide">NEED HELP?</h2>
          <p className="text-text-secondary mb-6">
            Can't find what you're looking for? Our team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/support"
              className="px-6 py-3 bg-white text-black border-2 border-white rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Contact Support
            </Link>
            <Link
              href="/community"
              className="px-6 py-3 bg-card border border-border rounded-lg text-text-primary hover:border-text-secondary/50 transition-colors font-semibold"
            >
              Join Community
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}