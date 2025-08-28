import Link from 'next/link'
import { ArrowLeft, Users, MessageCircle, Github, Twitter, Linkedin, ExternalLink } from 'lucide-react'
import { Footer } from '@/components/footer'

export default function Community() {
  const communityChannels = [
    {
      name: "Discord Server",
      description: "Join our Discord for real-time discussions, support, and community updates.",
      icon: MessageCircle,
      href: "https://discord.gg/nulltools",
      members: "1.2k+",
      color: "from-purple-500 to-indigo-500"
    },
    {
      name: "GitHub Discussions",
      description: "Technical discussions, feature requests, and open-source contributions.",
      icon: Github,
      href: "https://github.com/Null-Tools/discussions",
      members: "850+",
      color: "from-gray-600 to-gray-800"
    },
    {
      name: "Developer Forum",
      description: "In-depth technical discussions and integration help.",
      icon: Users,
      href: "https://forum.nulltools.xyz",
      members: "650+",
      color: "from-blue-500 to-cyan-500"
    }
  ]

  const socialLinks = [
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://twitter.com/nulltools",
      description: "Latest updates and announcements"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/company/nulltools",
      description: "Professional updates and company news"
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/Null-Tools",
      description: "Open source projects and contributions"
    }
  ]

  const events = [
    {
      title: "Monthly Developer Meetup",
      date: "Every 2nd Thursday",
      description: "Virtual meetup to discuss new features, share use cases, and network with other developers.",
      type: "Recurring"
    },
    {
      title: "Null Tools API Workshop",
      date: "March 15, 2024",
      description: "Hands-on workshop covering advanced API usage and integration patterns.",
      type: "Workshop"
    },
    {
      title: "Community Hackathon",
      date: "April 10-12, 2024",
      description: "Build innovative solutions using Null Tools APIs. Prizes and recognition for winners.",
      type: "Hackathon"
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
            COMMUNITY
          </h1>
          <p className="text-text-secondary text-lg">
            Join thousands of developers building with Null Tools
          </p>
        </div>

        <div className="mb-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-card/30 border border-border rounded-2xl p-6 text-center">
            <div className="text-3xl font-nothing text-text-primary mb-2">5,000+</div>
            <div className="text-sm text-text-secondary">Active Developers</div>
          </div>
          <div className="bg-card/30 border border-border rounded-2xl p-6 text-center">
            <div className="text-3xl font-nothing text-text-primary mb-2">50+</div>
            <div className="text-sm text-text-secondary">Countries</div>
          </div>
          <div className="bg-card/30 border border-border rounded-2xl p-6 text-center">
            <div className="text-3xl font-nothing text-text-primary mb-2">1M+</div>
            <div className="text-sm text-text-secondary">API Calls/Month</div>
          </div>
          <div className="bg-card/30 border border-border rounded-2xl p-6 text-center">
            <div className="text-3xl font-nothing text-text-primary mb-2">24/7</div>
            <div className="text-sm text-text-secondary">Community Support</div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-nothing text-text-primary mb-8 tracking-wide">JOIN THE CONVERSATION</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {communityChannels.map((channel, index) => {
              const Icon = channel.icon
              return (
                <div key={channel.name} className="bg-card/30 border border-border rounded-2xl p-6 hover:border-text-secondary/50 transition-all group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 bg-gradient-to-br ${channel.color} rounded-lg`}>
                      <Icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-nothing text-text-primary">{channel.name}</h3>
                      <p className="text-sm text-text-secondary">{channel.members} members</p>
                    </div>
                  </div>
                  <p className="text-text-secondary mb-6 leading-relaxed">
                    {channel.description}
                  </p>
                  <Link
                    href={channel.href}
                    className="inline-flex items-center gap-2 text-text-primary hover:underline group-hover:gap-3 transition-all"
                  >
                    Join Community
                    <ExternalLink size={14} />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-nothing text-text-primary mb-8 tracking-wide">FOLLOW US</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <Link
                  key={social.name}
                  href={social.href}
                  className="bg-card/30 border border-border rounded-2xl p-6 hover:border-text-secondary/50 transition-all group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Icon size={24} className="text-text-primary" />
                    <h3 className="text-lg font-nothing text-text-primary">{social.name}</h3>
                    <ExternalLink size={14} className="text-text-secondary group-hover:text-text-primary transition-colors" />
                  </div>
                  <p className="text-text-secondary text-sm">
                    {social.description}
                  </p>
                </Link>
              )
            })}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-nothing text-text-primary mb-8 tracking-wide">UPCOMING EVENTS</h2>
          <div className="space-y-6">
            {events.map((event, index) => (
              <div key={event.title} className="bg-card/30 border border-border rounded-2xl p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-nothing text-text-primary">{event.title}</h3>
                      <span className="px-3 py-1 bg-card border border-border rounded-full text-xs text-text-secondary">
                        {event.type}
                      </span>
                    </div>
                    <p className="text-text-secondary mb-2">{event.description}</p>
                    <p className="text-sm text-text-secondary">{event.date}</p>
                  </div>
                  <Link
                    href="#"
                    className="px-6 py-2 bg-white text-black border-2 border-white rounded-lg hover:bg-gray-100 transition-colors font-semibold whitespace-nowrap"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card/30 border border-border rounded-2xl p-8">
          <h2 className="text-2xl font-nothing text-text-primary mb-6 tracking-wide">COMMUNITY GUIDELINES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-nothing text-text-primary mb-4">Be Respectful</h3>
              <p className="text-text-secondary text-sm mb-4">
                Treat all community members with respect and kindness. We're all here to learn and grow together.
              </p>
              <h3 className="text-lg font-nothing text-text-primary mb-4">Stay On Topic</h3>
              <p className="text-text-secondary text-sm">
                Keep discussions relevant to Null Tools and related development topics.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-nothing text-text-primary mb-4">Help Others</h3>
              <p className="text-text-secondary text-sm mb-4">
                Share your knowledge and help fellow developers solve problems and learn new things.
              </p>
              <h3 className="text-lg font-nothing text-text-primary mb-4">No Spam</h3>
              <p className="text-text-secondary text-sm">
                Avoid promotional content, spam, or irrelevant posts that don't add value to the community.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-nothing text-text-primary mb-4 tracking-wide">READY TO GET INVOLVED?</h2>
          <p className="text-text-secondary mb-8">
            Join our community and start building amazing things with Null Tools
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://discord.gg/nulltools"
              className="px-6 py-3 bg-white text-black border-2 border-white rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Join Discord
            </Link>
            <Link
              href="https://github.com/Null-Tools"
              className="px-6 py-3 bg-card border border-border rounded-lg text-text-primary hover:border-text-secondary/50 transition-colors font-semibold"
            >
              View on GitHub
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}