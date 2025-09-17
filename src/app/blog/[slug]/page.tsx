import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, Tag, User, Sparkles } from 'lucide-react'
import { Footer } from '@/components/footer'
import { getPostBySlug, getAllPosts } from '@/lib/blog'
import { notFound } from 'next/navigation'
import Image from 'next/image'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug)
  
  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background text-text-primary">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="mb-12">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>
          
          {post.image && (
            <div className="relative h-80 lg:h-96 rounded-3xl overflow-hidden mb-8 border-2 border-white">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          )}
          
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <span 
                key={tag} 
                className="inline-flex items-center gap-1 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm text-text-secondary uppercase tracking-wider"
              >
                <Tag size={14} />
                {tag}
              </span>
            ))}
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-nothing text-text-primary mb-8 tracking-wider leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-8 text-text-secondary mb-8 pb-8 border-b border-border">
            <div className="flex items-center gap-2">
              <User size={16} />
              <span className="font-medium">{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>

        <article className="max-w-none">
          <div className="bg-gradient-to-br from-card/20 via-card/10 to-transparent border border-white/30 rounded-2xl p-8 lg:p-12">
            {post.content ? (
              <div className="space-y-6 max-w-4xl mx-auto">
                <div 
                  dangerouslySetInnerHTML={{ __html: post.content }} 
                  className="prose prose-invert prose-lg max-w-none 
                    [&>p]:text-text-secondary/90 [&>p]:text-base [&>p]:leading-[1.8] [&>p]:mb-6
                    [&>h2]:text-text-primary [&>h2]:font-nothing [&>h2]:tracking-wider [&>h2]:text-xl [&>h2]:mb-4 [&>h2]:mt-8
                    [&>h3]:text-text-primary [&>h3]:font-nothing [&>h3]:text-lg [&>h3]:mb-3 [&>h3]:mt-6
                    [&>ul]:text-text-secondary/90 [&>ul]:mb-6 [&>ul]:pl-6
                    [&>li]:mb-2 [&>li]:leading-[1.7]
                    [&>blockquote]:border-l-2 [&>blockquote]:border-white/40 [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:text-text-secondary/80 [&>blockquote]:my-6"
                />
              </div>
            ) : (
              <div className="text-center py-16 max-w-3xl mx-auto">
                <Sparkles size={64} className="text-white/15 mb-6 mx-auto" />
                <h2 className="text-2xl md:text-3xl font-nothing text-text-primary/90 mb-4 tracking-wide">
                  CONTENT COMING SOON
                </h2>
                <p className="text-text-secondary/80 mb-10 text-base max-w-xl mx-auto leading-relaxed">
                  This blog post is currently being written. Check back soon for the full article!
                </p>
                <div className="bg-card/20 border border-white/20 rounded-xl p-6 text-left">
                  <h3 className="text-lg font-nothing text-text-primary/90 mb-4 tracking-wide text-center">What you can expect:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-3 text-text-secondary/80">
                      <div className="w-1.5 h-1.5 bg-white/60 rounded-full"></div>
                      <span>In-depth analysis and insights</span>
                    </div>
                    <div className="flex items-center gap-3 text-text-secondary/80">
                      <div className="w-1.5 h-1.5 bg-white/60 rounded-full"></div>
                      <span>Practical examples and code snippets</span>
                    </div>
                    <div className="flex items-center gap-3 text-text-secondary/80">
                      <div className="w-1.5 h-1.5 bg-white/60 rounded-full"></div>
                      <span>Real-world case studies</span>
                    </div>
                    <div className="flex items-center gap-3 text-text-secondary/80">
                      <div className="w-1.5 h-1.5 bg-white/60 rounded-full"></div>
                      <span>Best practices and recommendations</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </article>
      </div>
      <Footer />
    </div>
  )
}