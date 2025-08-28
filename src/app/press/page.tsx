import Link from 'next/link'
import { ArrowLeft, Download, ExternalLink, Calendar } from 'lucide-react'
import { Footer } from '@/components/footer'

export default function PressKit() {
  const pressReleases = [
    {
      title: "Null Tools Raises $2M Seed Round to Democratize Developer Infrastructure",
      date: "March 1, 2024",
      summary: "Series A funding led by Accel Partners to expand developer tool ecosystem and team growth.",
      href: "/press/seed-funding-announcement"
    },
    {
      title: "Null Tools Launches Null Drop: Secure File Sharing for Developers",
      date: "January 15, 2024",
      summary: "New file sharing service designed specifically for developer workflows and team collaboration.",
      href: "/press/null-drop-launch"
    },
    {
      title: "5,000 Developers Join Null Tools Platform in First Quarter",
      date: "December 10, 2023",
      summary: "Growing developer adoption signals strong market demand for simplified infrastructure tools.",
      href: "/press/5k-developers-milestone"
    }
  ]

  const mediaAssets = [
    {
      name: "Logo Package",
      description: "High-resolution logos in various formats (SVG, PNG, JPG)",
      files: ["Logo - Light.svg", "Logo - Dark.svg", "Logo - Full Color.png"],
      size: "2.1 MB"
    },
    {
      name: "Brand Guidelines",
      description: "Complete brand guidelines including colors, typography, and usage rules",
      files: ["Brand Guidelines.pdf"],
      size: "4.5 MB"
    },
    {
      name: "Product Screenshots",
      description: "High-quality screenshots of our products and dashboard",
      files: ["Dashboard.png", "API Docs.png", "File Upload.png"],
      size: "12.3 MB"
    },
    {
      name: "Team Photos",
      description: "Professional headshots and team photos for media use",
      files: ["Team Photo.jpg", "Founder Headshots.zip"],
      size: "8.7 MB"
    }
  ]

  const mediaContacts = [
    {
      name: "Alex Chen",
      role: "Founder & CEO",
      email: "alex@nulltools.xyz",
      phone: "+1 (555) 123-0001",
      bio: "Former senior engineer at Google and Stripe. Expert in developer tools and API design."
    },
    {
      name: "Sarah Kim",
      role: "CTO",
      email: "sarah@nulltools.xyz",
      phone: "+1 (555) 123-0002",
      bio: "Security expert with 10+ years in fintech. Previously at Square and Coinbase."
    }
  ]

  const companyFacts = [
    { label: "Founded", value: "2023" },
    { label: "Headquarters", value: "San Francisco, CA" },
    { label: "Team Size", value: "12 employees" },
    { label: "Funding", value: "$2M seed round" },
    { label: "Developers", value: "5,000+ active users" },
    { label: "API Calls", value: "1M+ monthly" },
    { label: "Countries", value: "50+ served" },
    { label: "Uptime", value: "99.9% SLA" }
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
            PRESS KIT
          </h1>
          <p className="text-text-secondary text-lg">
            Media resources and company information for journalists and partners
          </p>
        </div>

        <div className="mb-16 bg-card/30 border border-border rounded-2xl p-8">
          <h2 className="text-2xl font-nothing text-text-primary mb-6 tracking-wide">COMPANY OVERVIEW</h2>
          <p className="text-text-secondary leading-relaxed mb-6 text-lg">
            Null Tools provides essential developer infrastructure including secure file sharing, 
            temporary email services, and payment processing. Founded in 2023, we serve over 5,000 
            developers across 50+ countries with simple, secure, and reliable APIs.
          </p>
          <p className="text-text-secondary leading-relaxed">
            Our mission is to provide developers with the tools they need to build, test, and deploy 
            applications efficiently. We believe in simplicity, security, and putting developers first.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-nothing text-text-primary mb-8 tracking-wide text-center">COMPANY FACTS</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {companyFacts.map((fact, index) => (
              <div key={fact.label} className="bg-card/30 border border-border rounded-2xl p-6 text-center">
                <div className="text-2xl md:text-3xl font-nothing text-text-primary mb-2">
                  {fact.value}
                </div>
                <div className="text-sm text-text-secondary">{fact.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-nothing text-text-primary mb-8 tracking-wide">RECENT PRESS RELEASES</h2>
          <div className="space-y-6">
            {pressReleases.map((release, index) => (
              <div key={release.title} className="bg-card/30 border border-border rounded-2xl p-6 hover:border-text-secondary/50 transition-all group">
                <Link href={release.href} className="block">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-nothing text-text-primary mb-2 group-hover:text-text-secondary transition-colors">
                        {release.title}
                      </h3>
                      <p className="text-text-secondary mb-3 leading-relaxed">
                        {release.summary}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-text-secondary">
                        <Calendar size={14} />
                        <span>{release.date}</span>
                      </div>
                    </div>
                    <ExternalLink size={16} className="text-text-secondary group-hover:text-text-primary transition-colors flex-shrink-0" />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-nothing text-text-primary mb-8 tracking-wide">MEDIA ASSETS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mediaAssets.map((asset, index) => (
              <div key={asset.name} className="bg-card/30 border border-border rounded-2xl p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-lg font-nothing text-text-primary mb-2">{asset.name}</h3>
                    <p className="text-text-secondary text-sm mb-3">{asset.description}</p>
                    <div className="text-xs text-text-secondary">Size: {asset.size}</div>
                  </div>
                  <button className="px-4 py-2 bg-white text-black border-2 border-white rounded-lg hover:bg-gray-100 transition-colors font-semibold text-sm flex items-center gap-2">
                    <Download size={14} />
                    Download
                  </button>
                </div>
                <div className="border-t border-border/30 pt-4">
                  <div className="text-xs text-text-secondary">Includes:</div>
                  <ul className="text-xs text-text-secondary mt-1 space-y-1">
                    {asset.files.map((file, fileIndex) => (
                      <li key={fileIndex} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-text-secondary rounded-full"></div>
                        {file}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <button className="px-8 py-3 bg-card border border-border rounded-lg text-text-primary hover:border-text-secondary/50 transition-colors font-semibold">
              Download Complete Press Kit
            </button>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-nothing text-text-primary mb-8 tracking-wide">MEDIA CONTACTS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mediaContacts.map((contact, index) => (
              <div key={contact.name} className="bg-card/30 border border-border rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <span className="text-xl font-nothing text-white">
                      {contact.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-nothing text-text-primary">{contact.name}</h3>
                    <p className="text-sm text-text-secondary">{contact.role}</p>
                  </div>
                </div>
                <p className="text-text-secondary text-sm mb-4 leading-relaxed">{contact.bio}</p>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-text-secondary">Email: </span>
                    <a href={`mailto:${contact.email}`} className="text-text-primary hover:underline">
                      {contact.email}
                    </a>
                  </div>
                  <div>
                    <span className="text-text-secondary">Phone: </span>
                    <a href={`tel:${contact.phone}`} className="text-text-primary hover:underline">
                      {contact.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card/30 border border-border rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-nothing text-text-primary mb-4 tracking-wide">MEDIA INQUIRIES</h2>
          <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
            For press inquiries, interview requests, or additional information, please contact our media team. 
            We typically respond within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="mailto:press@nulltools.xyz"
              className="px-6 py-3 bg-white text-black border-2 border-white rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Contact Press Team
            </Link>
            <Link
              href="/about"
              className="px-6 py-3 bg-card border border-border rounded-lg text-text-primary hover:border-text-secondary/50 transition-colors font-semibold"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}