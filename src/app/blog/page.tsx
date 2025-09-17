'use client'

import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, ArrowRight, User, FileText, Smartphone, Laptop, Rocket } from 'lucide-react'
import { Footer } from '@/components/footer'
import { getFeaturedPost, getRecentPosts, getAllTags, getTagCounts } from '@/lib/blog'
import Image from 'next/image'
import { useState } from 'react'

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All Posts")
  
  const featuredPost = getFeaturedPost()
  const allRecentPosts = getRecentPosts(20)
  const tagCounts = getTagCounts()
  const totalPosts = allRecentPosts.length + (featuredPost ? 1 : 0)

  const recentPosts = activeCategory === "All Posts" 
    ? allRecentPosts.slice(0, 6)
    : allRecentPosts.filter(post => post.tags.includes(activeCategory)).slice(0, 6)

  const categories = [
    { name: "All Posts", count: totalPosts, active: activeCategory === "All Posts" },
    { name: "Engineering", count: tagCounts['Engineering'] || 0, active: activeCategory === "Engineering" },
    { name: "Security", count: tagCounts['Security'] || 0, active: activeCategory === "Security" },
    { name: "Product", count: tagCounts['Product'] || 0, active: activeCategory === "Product" },
    { name: "Community", count: tagCounts['Community'] || 0, active: activeCategory === "Community" },
    { name: "Development", count: tagCounts['Development'] || 0, active: activeCategory === "Development" },
    { name: "Announcement", count: tagCounts['Announcement'] || 0, active: activeCategory === "Announcement" }
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
            Insights, tutorials, and stories from the Null Team
          </p>
        </div>

        <div className="mb-12">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  category.active
                    ? 'bg-white text-black scale-105 font-bold'
                    : 'bg-card border border-border text-text-secondary hover:text-text-primary hover:border-text-secondary/50 hover:scale-105'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {featuredPost && (
          <div className="mb-20">
            <div className="bg-gradient-to-br from-card/50 via-card/30 to-transparent border-2 border-white rounded-3xl overflow-hidden hover:border-text-secondary/50 transition-all group relative">
              <Link href={`/blog/${featuredPost.slug}`} className="block">
                <div className="relative">
                  {featuredPost.image ? (
                    <div className="relative h-80 lg:h-96 overflow-hidden">
                      <Image
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute top-6 right-6">
                        <span className="px-4 py-2 bg-white text-black text-xs font-nothing tracking-wider uppercase rounded-full">
                          FEATURED
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="relative h-80 lg:h-96 bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]" />
                      <div className="absolute top-6 right-6 z-10">
                        <span className="px-4 py-2 bg-white text-black text-xs font-nothing tracking-wider uppercase rounded-full">
                          FEATURED
                        </span>
                      </div>
                      <div className="text-center z-10">
                        <FileText size={64} className="text-white/20 mb-4 mx-auto" />
                      </div>
                    </div>
                  )}
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {featuredPost.tags.map((tag) => (
                        <button 
                          key={tag} 
                          onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            setActiveCategory(tag)
                          }}
                          className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs text-white hover:bg-white/20 transition-colors"
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-nothing text-white mb-4 group-hover:text-gray-200 transition-colors leading-tight">
                      {featuredPost.title}
                    </h3>
                    <p className="text-gray-200 leading-relaxed mb-6 max-w-3xl text-lg">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-6 text-sm text-gray-300">
                      <div className="flex items-center gap-2">
                        <User size={14} />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{featuredPost.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        )}

        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-nothing text-text-primary mb-12 tracking-wider text-center">
            RECENT POSTS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <div key={post.id} className="bg-gradient-to-br from-card/40 via-card/20 to-transparent border-2 border-white rounded-2xl overflow-hidden hover:border-text-secondary/50 transition-all group hover:scale-105 hover:-translate-y-1 duration-300">
                <Link href={`/blog/${post.slug}`} className="block h-full">
                  {post.image ? (
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                  ) : (
                    <div className="relative h-48 bg-gradient-to-br from-gray-800 via-gray-900 to-black flex items-center justify-center">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent)]" />
                      {index % 3 === 0 ? (
                        <Smartphone size={48} className="text-white/30" />
                      ) : index % 3 === 1 ? (
                        <Laptop size={48} className="text-white/30" />
                      ) : (
                        <Rocket size={48} className="text-white/30" />
                      )}
                    </div>
                  )}
                  
                  <div className="p-6 flex flex-col h-full">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map((tag) => (
                        <button 
                          key={tag} 
                          onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            setActiveCategory(tag)
                          }}
                          className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs text-text-secondary uppercase tracking-wide hover:bg-white/20 hover:text-white transition-colors"
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                    
                    <h3 className="text-xl font-nothing text-text-primary mb-3 group-hover:text-text-secondary transition-colors leading-tight">
                      {post.title}
                    </h3>
                    
                    <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-grow">
                      {post.excerpt}
                    </p>
                    
                    <div className="mt-auto">
                      <div className="flex items-center justify-between text-xs text-text-secondary/70 mb-4">
                        <div className="flex items-center gap-2">
                          <User size={12} />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-3">
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
                      
                      <div className="flex items-center justify-between">
                        <div className="inline-flex items-center gap-2 text-text-primary text-sm group-hover:gap-3 transition-all">
                          Read More
                          <ArrowRight size={14} />
                        </div>
                        <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                          <ArrowRight size={14} />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          
          {recentPosts.length === 0 && (
            <div className="text-center py-20">
              <FileText size={64} className="text-white/20 mb-6 mx-auto" />
              <h3 className="text-2xl font-nothing text-text-primary mb-4">NO RECENT POSTS</h3>
              <p className="text-text-secondary">Check back soon for more content!</p>
            </div>
          )}
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