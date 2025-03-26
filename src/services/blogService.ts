import { useRouter } from 'next/router';

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  date: string;
  author: {
    name: string;
    picture: string;
  };
  tags: string[];
};

type BlogResponse = {
  success: boolean;
  message?: string;
  posts?: BlogPost[];
  post?: BlogPost;
};

/**
 * Blog yazılarını getiren servis
 */
export async function getBlogPosts(locale: string = 'tr'): Promise<BlogPost[]> {
  try {
    const response = await fetch(`/api/blog?locale=${locale}`);
    const data: BlogResponse = await response.json();

    if (data.success && data.posts) {
      return data.posts;
    } else {
      console.error('Blog yazıları alınırken hata:', data.message);
      return [];
    }
  } catch (error) {
    console.error('Blog servisi hatası:', error);
    return [];
  }
}

/**
 * Belirli bir blog yazısını getiren servis
 */
export async function getBlogPost(slug: string, locale: string = 'tr'): Promise<BlogPost | null> {
  try {
    const response = await fetch(`/api/blog?slug=${slug}&locale=${locale}`);
    const data: BlogResponse = await response.json();

    if (data.success && data.post) {
      return data.post;
    } else {
      console.error('Blog yazısı alınırken hata:', data.message);
      return null;
    }
  } catch (error) {
    console.error('Blog servisi hatası:', error);
    return null;
  }
}

/**
 * Blog yazılarını filtreleme ve arama için hook
 */
export function useBlogSearch() {
  const router = useRouter();
  const { locale } = router;

  const searchPosts = async (query: string, tags?: string[]): Promise<BlogPost[]> => {
    try {
      const allPosts = await getBlogPosts(locale);
      
      if (!query && (!tags || tags.length === 0)) {
        return allPosts;
      }
      
      // Küçük harfe çevir ve boşlukları temizle
      const normalizedQuery = query.toLowerCase().trim();
      
      return allPosts.filter(post => {
        // Etiket filtresi
        const matchesTags = !tags || tags.length === 0 || 
          tags.some(tag => post.tags.includes(tag));
        
        // Arama sorgusu filtresi
        const matchesQuery = !normalizedQuery || 
          post.title.toLowerCase().includes(normalizedQuery) || 
          post.excerpt.toLowerCase().includes(normalizedQuery) || 
          post.content.toLowerCase().includes(normalizedQuery);
        
        return matchesTags && matchesQuery;
      });
    } catch (error) {
      console.error('Blog arama hatası:', error);
      return [];
    }
  };

  return { searchPosts };
}