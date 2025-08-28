import Link from 'next/link'
import { ArrowLeft, Code2, Server, Key, Zap } from 'lucide-react'
import { Footer } from '@/components/footer'

export default function APIReference() {
  const endpoints = [
    {
      category: "Files",
      color: "from-blue-500 to-cyan-500",
      endpoints: [
        { method: "POST", path: "/v1/files", description: "Upload a file" },
        { method: "GET", path: "/v1/files/{id}", description: "Get file information" },
        { method: "DELETE", path: "/v1/files/{id}", description: "Delete a file" },
        { method: "GET", path: "/v1/files", description: "List your files" }
      ]
    },
    {
      category: "Emails",
      color: "from-purple-500 to-pink-500",
      endpoints: [
        { method: "POST", path: "/v1/emails", description: "Create temporary email" },
        { method: "GET", path: "/v1/emails/{id}", description: "Get email details" },
        { method: "GET", path: "/v1/emails/{id}/messages", description: "List messages" },
        { method: "DELETE", path: "/v1/emails/{id}", description: "Delete email address" }
      ]
    },
    {
      category: "Payments",
      color: "from-green-500 to-emerald-500",
      endpoints: [
        { method: "POST", path: "/v1/payments", description: "Create payment" },
        { method: "GET", path: "/v1/payments/{id}", description: "Get payment status" },
        { method: "POST", path: "/v1/refunds", description: "Create refund" },
        { method: "GET", path: "/v1/webhooks", description: "List webhooks" }
      ]
    }
  ]

  const getMethodColor = (method: string) => {
    switch (method) {
      case 'GET': return 'text-green-400 bg-green-400/10'
      case 'POST': return 'text-blue-400 bg-blue-400/10'
      case 'DELETE': return 'text-red-400 bg-red-400/10'
      case 'PUT': return 'text-orange-400 bg-orange-400/10'
      default: return 'text-gray-400 bg-gray-400/10'
    }
  }

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
            API REFERENCE
          </h1>
          <p className="text-text-secondary text-lg">
            Complete reference for all Null Tools API endpoints
          </p>
        </div>

        <div className="mb-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-card/30 border border-border rounded-2xl p-6 text-center">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg w-fit mx-auto mb-4">
              <Server size={24} className="text-white" />
            </div>
            <h3 className="font-nothing text-text-primary mb-2">BASE URL</h3>
            <p className="text-sm text-text-secondary font-mono">api.nulltools.xyz</p>
          </div>
          
          <div className="bg-card/30 border border-border rounded-2xl p-6 text-center">
            <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg w-fit mx-auto mb-4">
              <Key size={24} className="text-white" />
            </div>
            <h3 className="font-nothing text-text-primary mb-2">AUTH</h3>
            <p className="text-sm text-text-secondary">Bearer Token</p>
          </div>
          
          <div className="bg-card/30 border border-border rounded-2xl p-6 text-center">
            <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg w-fit mx-auto mb-4">
              <Code2 size={24} className="text-white" />
            </div>
            <h3 className="font-nothing text-text-primary mb-2">FORMAT</h3>
            <p className="text-sm text-text-secondary">JSON</p>
          </div>
          
          <div className="bg-card/30 border border-border rounded-2xl p-6 text-center">
            <div className="p-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg w-fit mx-auto mb-4">
              <Zap size={24} className="text-white" />
            </div>
            <h3 className="font-nothing text-text-primary mb-2">RATE LIMIT</h3>
            <p className="text-sm text-text-secondary">1000/hour</p>
          </div>
        </div>

        <div className="mb-12 bg-card/30 border border-border rounded-2xl p-8">
          <h2 className="text-2xl font-nothing text-text-primary mb-6 tracking-wide">AUTHENTICATION</h2>
          <p className="text-text-secondary mb-6">
            All API requests require authentication using a Bearer token in the Authorization header.
          </p>
          <div className="bg-background/50 border border-border rounded-lg p-4 font-mono text-sm mb-4">
            curl -H "Authorization: Bearer YOUR_API_KEY" \<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;https://api.nulltools.xyz/v1/status
          </div>
          <p className="text-text-secondary text-sm">
            Get your API key from the <Link href="#" className="text-text-primary hover:underline">dashboard</Link>.
          </p>
        </div>

        <div className="space-y-12">
          {endpoints.map((category) => (
            <div key={category.category} className="bg-card/30 border border-border rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className={`p-2 bg-gradient-to-br ${category.color} rounded-lg`}>
                  <Code2 size={20} className="text-white" />
                </div>
                <h2 className="text-2xl font-nothing text-text-primary tracking-wide">
                  {category.category.toUpperCase()} API
                </h2>
              </div>
              
              <div className="space-y-4">
                {category.endpoints.map((endpoint, index) => (
                  <div key={index} className="bg-background/30 border border-border/50 rounded-lg p-4">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="flex items-center gap-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold ${getMethodColor(endpoint.method)}`}>
                          {endpoint.method}
                        </span>
                        <code className="text-text-primary font-mono text-sm">
                          {endpoint.path}
                        </code>
                      </div>
                      <p className="text-text-secondary text-sm flex-1">
                        {endpoint.description}
                      </p>
                      <Link
                        href="#"
                        className="text-text-primary hover:underline text-sm font-medium whitespace-nowrap"
                      >
                        View Details →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-card/30 border border-border rounded-2xl p-8">
          <h2 className="text-2xl font-nothing text-text-primary mb-6 tracking-wide">ERROR CODES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-nothing text-text-primary mb-4">Client Errors</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <code className="text-red-400">400</code>
                  <span className="text-text-secondary">Bad Request</span>
                </div>
                <div className="flex justify-between text-sm">
                  <code className="text-red-400">401</code>
                  <span className="text-text-secondary">Unauthorized</span>
                </div>
                <div className="flex justify-between text-sm">
                  <code className="text-red-400">403</code>
                  <span className="text-text-secondary">Forbidden</span>
                </div>
                <div className="flex justify-between text-sm">
                  <code className="text-red-400">404</code>
                  <span className="text-text-secondary">Not Found</span>
                </div>
                <div className="flex justify-between text-sm">
                  <code className="text-red-400">429</code>
                  <span className="text-text-secondary">Rate Limited</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-nothing text-text-primary mb-4">Server Errors</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <code className="text-orange-400">500</code>
                  <span className="text-text-secondary">Internal Server Error</span>
                </div>
                <div className="flex justify-between text-sm">
                  <code className="text-orange-400">502</code>
                  <span className="text-text-secondary">Bad Gateway</span>
                </div>
                <div className="flex justify-between text-sm">
                  <code className="text-orange-400">503</code>
                  <span className="text-text-secondary">Service Unavailable</span>
                </div>
                <div className="flex justify-between text-sm">
                  <code className="text-orange-400">504</code>
                  <span className="text-text-secondary">Gateway Timeout</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-nothing text-text-primary mb-4 tracking-wide">OFFICIAL SDKs</h2>
          <p className="text-text-secondary mb-8">
            Get started faster with our official SDKs and tools
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              href="#"
              className="p-4 bg-card border border-border rounded-lg hover:border-text-secondary/50 transition-colors"
            >
              <div className="font-mono font-bold text-text-primary mb-2">JavaScript</div>
              <div className="text-sm text-text-secondary">npm install @nulltools/js</div>
            </Link>
            <Link
              href="#"
              className="p-4 bg-card border border-border rounded-lg hover:border-text-secondary/50 transition-colors"
            >
              <div className="font-mono font-bold text-text-primary mb-2">Python</div>
              <div className="text-sm text-text-secondary">pip install nulltools</div>
            </Link>
            <Link
              href="#"
              className="p-4 bg-card border border-border rounded-lg hover:border-text-secondary/50 transition-colors"
            >
              <div className="font-mono font-bold text-text-primary mb-2">CLI</div>
              <div className="text-sm text-text-secondary">brew install nulltools</div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}