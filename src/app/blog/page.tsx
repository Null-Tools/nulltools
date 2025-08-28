import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, ArrowRight } from 'lucide-react'
import { Footer } from '@/components/footer'

export default function Blog() {
  const featuredPost = {
    title: "Building Secure APIs: Lessons from Null Tools",
    excerpt: "What we learned building secure, scalable APIs that handle millions of requests. Best practices, pitfalls, and real-world insights.",
    author: "Alex Chen",
    date: "March 10, 2024",
    readTime: "8 min read",
    tags: ["Security", "APIs", "Architecture"],
    href: "/blog/building-secure-apis"
  }

  const blogPosts = [
    {
      title: "The Future of Developer Tools",
      excerpt: "How AI and automation are changing the developer experience, and what it means for tool builders.",
      author: "Sarah Kim",
      date: "March 5, 2024",
      readTime: "6 min read",
      tags: ["Development", "AI", "Tools"],
      href: "/blog/future-developer-tools"
    },
    {
      title: "Why We Built Null Drop",
      excerpt: "The story behind our file sharing service and the problems it solves for developers.",
      author: "Marcus Rodriguez",
      date: "February 28, 2024",
      readTime: "5 min read",
      tags: ["Product", "Story", "Files"],
      href: "/blog/why-null-drop"
    },
    {
      title: "Scaling to 1 Million API Calls",
      excerpt: "Technical deep-dive into how we handle scale, from infrastructure to monitoring.",
      author: "Emily Zhang",
      date: "February 20, 2024",
      readTime: "10 min read",
      tags: ["Engineering", "Scale", "Infrastructure"],
      href: "/blog/scaling-to-1m-calls"
    },
    {
      title: "Developer Security Best Practices",
      excerpt: "Essential security practices every developer should follow when building applications.",
      author: "Sarah Kim",
      date: "February 15, 2024",
      readTime: "7 min read",
      tags: ["Security", "Best Practices", "Development"],
      href: "/blog/security-best-practices"
    },
    {
      title: "Building a Developer Community",
      excerpt: "How we grew from 0 to 5,000 developers and the lessons we learned along the way.",
      author: "Alex Chen",
      date: "February 10, 2024",
      readTime: "5 min read",
      tags: ["Community", "Growth", "Developers"],
      href: "/blog/building-developer-community"
    },
    {
      title: "API Design Philosophy",
      excerpt: "Our approach to designing APIs that developers love to use and integrate with.",
      author: "Marcus Rodriguez",
      date: "February 5, 2024",
      readTime: "8 min read",
      tags: ["API Design", "UX", "Development"],
      href: "/blog/api-design-philosophy"
    }
  ]

  const categories = [
    { name: "All Posts", count: 12, active: true },
    { name: "Engineering", count: 5, active: false },
    { name: "Security", count: 3, active: false },
    { name: "Product", count: 2, active: false },
    { name: "Community", count: 2, active: false }
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
            BLOG
          </h1>
          <p className="text-text-secondary text-lg">
            Insights, tutorials, and stories from the Null Tools team
          </p>
        </div>

        <div className="mb-12">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Link
                key={category.name}
                href="#"
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category.active
                    ? 'bg-white text-black'
                    : 'bg-card border border-border text-text-secondary hover:text-text-primary hover:border-text-secondary/50'
                }`}
              >
                {category.name} ({category.count})
              </Link>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-nothing text-text-primary mb-8 tracking-wide">FEATURED POST</h2>
          <div className="bg-card/30 border border-border rounded-2xl p-8 hover:border-text-secondary/50 transition-all group">
            <Link href={featuredPost.href} className="block">
              <div className="flex flex-wrap gap-2 mb-4">
                {featuredPost.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-card border border-border rounded-full text-xs text-text-secondary">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl md:text-3xl font-nothing text-text-primary mb-4 group-hover:text-text-secondary transition-colors">
                {featuredPost.title}
              </h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center gap-6 text-sm text-text-secondary">
                <span>By {featuredPost.author}</span>
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>{featuredPost.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  <span>{featuredPost.readTime}</span>
                </div>
              </div>
              <div className="mt-6 inline-flex items-center gap-2 text-text-primary group-hover:gap-3 transition-all">
                Read Full Article
                <ArrowRight size={16} />
              </div>
            </Link>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-nothing text-text-primary mb-8 tracking-wide">RECENT POSTS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.title} className="bg-card/30 border border-border rounded-2xl p-6 hover:border-text-secondary/50 transition-all group">
                <Link href={post.href} className="block">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-card border border-border rounded text-xs text-text-secondary">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-nothing text-text-primary mb-3 group-hover:text-text-secondary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="space-y-2 text-xs text-text-secondary">
                    <div>By {post.author}</div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar size={12} />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={12} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 inline-flex items-center gap-2 text-text-primary text-sm group-hover:gap-3 transition-all">
                    Read More
                    <ArrowRight size={14} />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card/30 border border-border rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-nothing text-text-primary mb-4 tracking-wide">STAY UPDATED</h2>
          <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
            Get the latest posts and updates delivered to your inbox. No spam, just quality content about developer tools and best practices.
          </p>
          <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-card border border-border rounded-lg text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-text-secondary/50 transition-colors"
            />
            <button className="px-6 py-3 bg-white text-black border-2 border-white rounded-lg hover:bg-gray-100 transition-colors font-semibold whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-nothing text-text-primary mb-4 tracking-wide">LOOKING FOR OLDER POSTS?</h2>
          <p className="text-text-secondary mb-6">
            Browse our complete archive of articles and tutorials
          </p>
          <Link
            href="/blog/archive"
            className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-lg text-text-primary hover:border-text-secondary/50 transition-colors font-semibold"
          >
            View Archive
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}