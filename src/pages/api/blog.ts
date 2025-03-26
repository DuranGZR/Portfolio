import type { NextApiRequest, NextApiResponse } from 'next';

type BlogPost = {
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

type ResponseData = {
  success: boolean;
  message?: string;
  posts?: BlogPost[];
  post?: BlogPost;
};

// Örnek blog verileri (gerçek uygulamada bir veritabanından veya CMS'den gelecektir)
const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Yapay Zeka ve Makine Öğrenimi Arasındaki Farklar',
    slug: 'yapay-zeka-ve-makine-ogrenimi-arasindaki-farklar',
    excerpt: 'Yapay zeka ve makine öğrenimi arasındaki temel farkları ve benzerlikleri keşfedin.',
    content: 'Yapay zeka (AI), makinelerin insan zekasını taklit etmesini sağlayan geniş bir bilgisayar bilimi dalıdır. Makine öğrenimi (ML) ise yapay zekanın bir alt kümesidir ve makinelerin deneyimlerden öğrenmesine odaklanır...',
    coverImage: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485',
    date: '2023-10-15',
    author: {
      name: 'Ali Yılmaz',
      picture: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde',
    },
    tags: ['Yapay Zeka', 'Makine Öğrenimi', 'Teknoloji'],
  },
  {
    id: '2',
    title: 'Derin Öğrenme Modelleri ve Uygulamaları',
    slug: 'derin-ogrenme-modelleri-ve-uygulamalari',
    excerpt: 'Günümüzde kullanılan popüler derin öğrenme modellerini ve pratik uygulamalarını inceleyin.',
    content: 'Derin öğrenme, yapay sinir ağlarının çoklu katmanlarını kullanarak karmaşık veri yapılarını öğrenen bir makine öğrenimi alt alanıdır...',
    coverImage: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d',
    date: '2023-09-28',
    author: {
      name: 'Ayşe Demir',
      picture: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    },
    tags: ['Derin Öğrenme', 'Yapay Sinir Ağları', 'Veri Bilimi'],
  },
];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const { slug } = req.query;

  try {
    // Belirli bir blog yazısını getir
    if (slug && typeof slug === 'string') {
      const post = blogPosts.find(post => post.slug === slug);
      
      if (!post) {
        return res.status(404).json({ success: false, message: 'Blog yazısı bulunamadı' });
      }
      
      return res.status(200).json({ success: true, post });
    }
    
    // Tüm blog yazılarını getir
    return res.status(200).json({ success: true, posts: blogPosts });
    
  } catch (error) {
    console.error('Blog API hatası:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Sunucu hatası, lütfen daha sonra tekrar deneyin' 
    });
  }
}