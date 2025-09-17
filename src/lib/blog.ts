export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content?: string
  author: string
  date: string
  readTime: string
  tags: string[]
  slug: string
  featured?: boolean
  image?: string
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Welcome!",
    excerpt: "Learn what we're planning and how we'll share our knowledge with developers.",
    content: `
    We belive that our sourrunding technology should be more accessible and easier to use, and defenitely more secure.

    That's why we're building Null Apps. A set of tools and services that are easy to use and secure.

    Our First App is Null Pass. A unified authentication system across all Null Apps, it's our private tool to bring you the best experience.

    We're also building Null Drop. A file sharing service that is easy to use and secure.

    We're also building Null Mails. A temporary email service that is easy to use and secure.

    We're also building Null Vault. A secure payment processing service that is easy to use and secure.

    If you have any questions, please contact us at contact@nulltools.xyz

    That's all for now, we'll be back with more updates soon!
    `,
    author: "!̸I̸m̸p̸u̸l̸s̸e̸",
    date: "September 17, 2025",
    readTime: "3 min read",
    tags: ["Announcement", "Null Team", "Welcome"],
    slug: "welcome",
    featured: true
  }
]

export function getFeaturedPost(): BlogPost | undefined {
  return blogPosts.find(post => post.featured)
}

export function getAllPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getRecentPosts(limit: number = 6): BlogPost[] {
  return getAllPosts().filter(post => !post.featured).slice(0, limit)
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug)
}

export function getPostsByTag(tag: string): BlogPost[] {
  return blogPosts.filter(post => post.tags.includes(tag))
}

export function getAllTags(): string[] {
  const allTags = blogPosts.flatMap(post => post.tags)
  return Array.from(new Set(allTags)).sort()
}

export function getTagCounts(): { [key: string]: number } {
  const tagCounts: { [key: string]: number } = {}
  blogPosts.forEach(post => {
    post.tags.forEach(tag => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1
    })
  })
  return tagCounts
}