import Link from 'next/link'
import { ArrowLeft, MessageCircle, Mail, Clock, CheckCircle, AlertCircle } from 'lucide-react'
import { Footer } from '@/components/footer'

export default function Support() {
  const supportChannels = [
    {
      name: "Email Support",
      description: "Send us your questions and we'll get back to you as soon as possible.",
      icon: Mail,
      href: "mailto:contact@nulltools.xyz",
      availability: "Best effort",
      responseTime: "When available",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "GitHub Issues",
      description: "Report bugs or request features on our GitHub repository.",
      icon: MessageCircle,
      href: "https://github.com/Null-Tools/nulltools/issues",
      availability: "Open source",
      responseTime: "Community driven",
      color: "from-blue-500 to-cyan-500"
    }
  ]

  const faqItems = [
    {
      question: "What is Null Tools?",
      answer: "Null Tools is a collection of developer utilities starting with temporary email services. We're building simple tools to solve common development problems."
    },
    {
      question: "Is Null Tools free to use?",
      answer: "We're currently in early development. Pricing and availability details will be announced as our tools become ready for public use."
    },
    {
      question: "How can I stay updated?",
      answer: "Follow us on GitHub or join our community to get updates on new tools and releases as they become available."
    },
    {
      question: "Can I contribute to the project?",
      answer: "Yes! We welcome contributions. Check out our GitHub repository to see how you can help improve our tools."
    },
    {
      question: "What tools are you planning to build?",
      answer: "We're starting with temporary emails (Null Mails), file sharing (Null Drop), and secure payments (Null Vault). More tools will be added based on community needs."
    },
    {
      question: "How do I report bugs or request features?",
      answer: "Please use our GitHub Issues page to report bugs or request new features. We actively monitor and respond to community feedback."
    }
  ]

  const statusItems = [
    { service: "Website", status: "operational", uptime: "100%" },
    { service: "Null Mails", status: "development", uptime: "In progress" },
    { service: "Null Drop", status: "development", uptime: "In progress" },
    { service: "Null Vault", status: "development", uptime: "Planning" }
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
            SUPPORT
          </h1>
          <p className="text-text-secondary text-lg">
            Get help and stay updated with our development progress
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-nothing text-text-primary mb-8 tracking-wide">GET IN TOUCH</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {supportChannels.map((channel) => {
              const Icon = channel.icon
              return (
                <div key={channel.name} className="bg-card/30 border border-border rounded-2xl p-6 hover:border-text-secondary/50 transition-all group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 bg-gradient-to-br ${channel.color} rounded-lg`}>
                      <Icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-lg font-nothing text-text-primary">{channel.name}</h3>
                  </div>
                  <p className="text-text-secondary mb-4 leading-relaxed">
                    {channel.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock size={14} className="text-text-secondary" />
                      <span className="text-text-secondary">{channel.availability}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle size={14} className="text-green-400" />
                      <span className="text-text-secondary">Response: {channel.responseTime}</span>
                    </div>
                  </div>
                  <Link
                    href={channel.href}
                    className="inline-flex items-center gap-2 text-text-primary hover:underline group-hover:gap-3 transition-all"
                  >
                    Contact Support
                    <ArrowLeft size={14} className="rotate-180" />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-nothing text-text-primary mb-8 tracking-wide">DEVELOPMENT STATUS</h2>
          <div className="bg-card/30 border border-border rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-6">
              <AlertCircle size={20} className="text-yellow-400" />
              <span className="text-text-primary font-medium">Currently in Development</span>
            </div>
            <div className="space-y-4">
              {statusItems.map((item) => (
                <div key={item.service} className="flex items-center justify-between py-2 border-b border-border/30 last:border-b-0">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${
                      item.status === 'operational' ? 'bg-green-400' : 
                      item.status === 'development' ? 'bg-yellow-400' : 'bg-gray-400'
                    }`}></div>
                    <span className="text-text-primary">{item.service}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-text-secondary">{item.uptime}</span>
                    <span className={`text-sm font-medium capitalize ${
                      item.status === 'operational' ? 'text-green-400' : 
                      item.status === 'development' ? 'text-yellow-400' : 'text-gray-400'
                    }`}>{item.status}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link
                href="https://github.com/Null-Tools"
                className="text-text-primary hover:underline text-sm"
              >
                Follow Development on GitHub →
              </Link>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-nothing text-text-primary mb-8 tracking-wide">FREQUENTLY ASKED QUESTIONS</h2>
          <div className="space-y-6">
            {faqItems.map((item) => (
              <div key={item.question} className="bg-card/30 border border-border rounded-2xl p-6">
                <h3 className="text-lg font-nothing text-text-primary mb-3">{item.question}</h3>
                <p className="text-text-secondary leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-nothing text-text-primary mb-8 tracking-wide">QUICK CONTACT</h2>
          <div className="bg-card/30 border border-border rounded-2xl p-8 text-center">
            <p className="text-text-secondary mb-6 text-lg">
              Have a question or want to contribute? We'd love to hear from you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="mailto:contact@nulltools.xyz"
                className="px-6 py-3 bg-white text-black border-2 border-white rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                Send Email
              </Link>
              <Link
                href="https://github.com/Null-Tools/nulltools/issues"
                className="px-6 py-3 bg-card border border-border rounded-lg text-text-primary hover:border-text-secondary/50 transition-colors font-semibold"
              >
                Open GitHub Issue
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-nothing text-text-primary mb-4 tracking-wide">STAY CONNECTED</h2>
          <p className="text-text-secondary mb-8">
            Follow our progress and join the community
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <Link
              href="https://github.com/Null-Tools"
              className="p-4 bg-card border border-border rounded-lg hover:border-text-secondary/50 transition-colors"
            >
              <div className="font-medium text-text-primary mb-2">GitHub Repository</div>
              <div className="text-sm text-text-secondary">Follow development and contribute</div>
            </Link>
            <Link
              href="/about"
              className="p-4 bg-card border border-border rounded-lg hover:border-text-secondary/50 transition-colors"
            >
              <div className="font-medium text-text-primary mb-2">About Us</div>
              <div className="text-sm text-text-secondary">Learn more about our mission</div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}