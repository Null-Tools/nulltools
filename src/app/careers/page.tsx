import Link from 'next/link'
import { ArrowLeft, MapPin, Clock, DollarSign, Users, Coffee, Heart, Zap } from 'lucide-react'
import { Footer } from '@/components/footer'

export default function Careers() {
  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Salary",
      description: "Top-tier compensation with equity options",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Clock,
      title: "Flexible Hours",
      description: "Work when you're most productive",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Coffee,
      title: "Remote First",
      description: "Work from anywhere in the world",
      color: "from-orange-500 to-yellow-500"
    },
    {
      icon: Zap,
      title: "Learning Budget",
      description: "$2,000 annual budget for courses and conferences",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Users,
      title: "Great Team",
      description: "Work with passionate, talented people",
      color: "from-teal-500 to-blue-500"
    }
  ]

  const openPositions = [
    {
      title: "Senior Full Stack Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Help us build the next generation of developer tools. Work on both frontend and backend systems.",
      requirements: ["5+ years full-stack experience", "React/TypeScript", "Node.js/Python", "Cloud platforms"],
      salary: "$140k - $180k"
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Build and maintain our infrastructure that serves millions of API requests daily.",
      requirements: ["Kubernetes experience", "AWS/GCP", "CI/CD pipelines", "Infrastructure as Code"],
      salary: "$130k - $170k"
    },
    {
      title: "Product Marketing Manager",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      description: "Drive product marketing strategy and help developers discover our tools.",
      requirements: ["3+ years product marketing", "Developer tools experience", "Content creation", "Analytics"],
      salary: "$110k - $140k"
    },
    {
      title: "Customer Success Engineer",
      department: "Customer Success",
      location: "Remote",
      type: "Full-time",
      description: "Help enterprise customers succeed with our APIs and build long-term relationships.",
      requirements: ["Technical background", "Customer facing experience", "API knowledge", "Problem solving"],
      salary: "$90k - $120k"
    }
  ]

  const values = [
    {
      title: "Developer First",
      description: "We're developers building for developers. We understand the problems because we live them."
    },
    {
      title: "Quality Over Quantity",
      description: "We'd rather build fewer things exceptionally well than many things poorly."
    },
    {
      title: "Transparent Communication",
      description: "Open, honest communication builds trust and leads to better decisions."
    },
    {
      title: "Continuous Learning",
      description: "Technology evolves fast. We invest in our team's growth and learning."
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
            CAREERS
          </h1>
          <p className="text-text-secondary text-lg">
            Join us in building the future of developer tools
          </p>
        </div>

        <div className="mb-16 bg-card/30 border border-border rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-nothing text-text-primary mb-6 tracking-wide">WHY JOIN NULL TOOLS?</h2>
          <p className="text-text-secondary text-lg leading-relaxed max-w-4xl mx-auto mb-8">
            We're a small but growing team of passionate developers building tools that we use ourselves. 
            Every team member has significant impact on our product and the developer community we serve.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-nothing text-text-primary mb-2">5,000+</div>
              <div className="text-sm text-text-secondary">Developers Using Our Tools</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-nothing text-text-primary mb-2">$2M</div>
              <div className="text-sm text-text-secondary">Seed Funding Raised</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-nothing text-text-primary mb-2">Remote</div>
              <div className="text-sm text-text-secondary">Work From Anywhere</div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-nothing text-text-primary mb-8 tracking-wide text-center">BENEFITS & PERKS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={benefit.title} className="bg-card/30 border border-border rounded-2xl p-6 text-center">
                  <div className={`p-3 bg-gradient-to-br ${benefit.color} rounded-lg w-fit mx-auto mb-4`}>
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-nothing text-text-primary mb-3">{benefit.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-nothing text-text-primary mb-8 tracking-wide text-center">OPEN POSITIONS</h2>
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <div key={position.title} className="bg-card/30 border border-border rounded-2xl p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <h3 className="text-xl font-nothing text-text-primary">{position.title}</h3>
                      <span className="px-3 py-1 bg-card border border-border rounded-full text-xs text-text-secondary">
                        {position.department}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-text-secondary">
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{position.type}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign size={14} />
                        <span>{position.salary}</span>
                      </div>
                    </div>

                    <p className="text-text-secondary mb-4 leading-relaxed">
                      {position.description}
                    </p>

                    <div>
                      <h4 className="text-sm font-semibold text-text-primary mb-2">Requirements:</h4>
                      <ul className="text-sm text-text-secondary space-y-1">
                        {position.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-text-secondary rounded-full flex-shrink-0"></div>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 lg:flex-shrink-0">
                    <Link
                      href={`mailto:careers@nulltools.xyz?subject=Application for ${position.title}`}
                      className="px-6 py-3 bg-white text-black border-2 border-white rounded-lg hover:bg-gray-100 transition-colors font-semibold text-center"
                    >
                      Apply Now
                    </Link>
                    <Link
                      href="#"
                      className="px-6 py-3 bg-card border border-border rounded-lg text-text-primary hover:border-text-secondary/50 transition-colors font-semibold text-center"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-nothing text-text-primary mb-8 tracking-wide text-center">OUR VALUES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={value.title} className="bg-card/30 border border-border rounded-2xl p-6">
                <h3 className="text-lg font-nothing text-text-primary mb-3">{value.title}</h3>
                <p className="text-text-secondary leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-nothing text-text-primary mb-8 tracking-wide text-center">APPLICATION PROCESS</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">1</div>
              <h3 className="text-lg font-nothing text-text-primary mb-2">Apply</h3>
              <p className="text-text-secondary text-sm">Submit your application with resume and cover letter</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">2</div>
              <h3 className="text-lg font-nothing text-text-primary mb-2">Screen</h3>
              <p className="text-text-secondary text-sm">Initial screening call with our team</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">3</div>
              <h3 className="text-lg font-nothing text-text-primary mb-2">Interview</h3>
              <p className="text-text-secondary text-sm">Technical and cultural fit interviews</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">4</div>
              <h3 className="text-lg font-nothing text-text-primary mb-2">Offer</h3>
              <p className="text-text-secondary text-sm">Reference check and job offer</p>
            </div>
          </div>
        </div>

        <div className="text-center bg-card/30 border border-border rounded-2xl p-8">
          <h2 className="text-2xl font-nothing text-text-primary mb-4 tracking-wide">DON'T SEE THE RIGHT ROLE?</h2>
          <p className="text-text-secondary mb-8">
            We're always looking for talented people. Send us your resume and tell us how you'd like to contribute.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="mailto:careers@nulltools.xyz"
              className="px-6 py-3 bg-white text-black border-2 border-white rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Send Resume
            </Link>
            <Link
              href="/about"
              className="px-6 py-3 bg-card border border-border rounded-lg text-text-primary hover:border-text-secondary/50 transition-colors font-semibold"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}