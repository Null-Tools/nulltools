export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content?: string
  author: string
  date: string
  readTime: string
  tags: string[]
  image?: string
  featured?: boolean
}

export function getFeaturedPost(): BlogPost | null {
  return null
}

export function getRecentPosts(limit?: number): BlogPost[] {
  return []
}

export function getAllPosts(): BlogPost[] {
  return []
}

export function getPostBySlug(slug: string): BlogPost | null {
  return null
}

export function getAllTags(): string[] {
  return []
}

export function getTagCounts(): Record<string, number> {
  return {}
}