import type { NextApiRequest, NextApiResponse } from 'next';

type Project = {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  coverImage: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
};

type ResponseData = {
  success: boolean;
  message?: string;
  projects?: Project[];
  project?: Project;
};

// Örnek proje verileri (gerçek uygulamada bir veritabanından veya CMS'den gelecektir)
const projects: Project[] = [
  {
    id: '1',
    title: 'Duygu Analizi Uygulaması',
    slug: 'duygu-analizi-uygulamasi',
    description: 'Doğal dil işleme kullanarak metinlerdeki duyguları analiz eden web uygulaması.',
    longDescription: 'Bu proje, doğal dil işleme teknikleri kullanarak metinlerdeki duyguları analiz eden bir web uygulamasıdır. Kullanıcılar, metin girdiklerinde uygulama metni analiz ederek olumlu, olumsuz veya nötr olarak sınıflandırır. Proje, Python ve TensorFlow kullanılarak geliştirilmiş bir derin öğrenme modeli içerir ve React ile oluşturulmuş bir kullanıcı arayüzüne sahiptir.',
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    technologies: ['Python', 'TensorFlow', 'React', 'Flask', 'NLP'],
    demoUrl: 'https://example.com/demo',
    githubUrl: 'https://github.com/username/sentiment-analysis',
    featured: true,
  },
  {
    id: '2',
    title: 'Görüntü Sınıflandırma Sistemi',
    slug: 'goruntu-siniflandirma-sistemi',
    description: 'Derin öğrenme kullanarak görüntüleri sınıflandıran mobil uygulama.',
    longDescription: 'Bu mobil uygulama, kamera ile çekilen görüntüleri gerçek zamanlı olarak sınıflandırabilen bir yapay zeka sistemi içerir. Uygulama, önceden eğitilmiş bir CNN (Convolutional Neural Network) modeli kullanarak 1000'den fazla nesne kategorisini tanıyabilir. Proje, TensorFlow Lite ve React Native kullanılarak geliştirilmiştir.',
    coverImage: 'https://images.unsplash.com/photo-1526406915894-7bcd65f60845',
    technologies: ['TensorFlow Lite', 'React Native', 'Python', 'CNN', 'Computer Vision'],
    githubUrl: 'https://github.com/username/image-classifier',
    featured: true,
  },
  {
    id: '3',
    title: 'Akıllı Ev Otomasyon Sistemi',
    slug: 'akilli-ev-otomasyon-sistemi',
    description: 'IoT cihazlarını yapay zeka ile kontrol eden ev otomasyon sistemi.',
    longDescription: 'Bu proje, ev içindeki IoT cihazlarını yapay zeka algoritmaları kullanarak otomatik olarak kontrol eden bir sistemdir. Sistem, kullanıcı alışkanlıklarını öğrenerek ısıtma, aydınlatma ve güvenlik sistemlerini optimize eder. Raspberry Pi üzerinde çalışan Python tabanlı bir backend ve React ile geliştirilmiş bir kontrol paneli içerir.',
    coverImage: 'https://images.unsplash.com/photo-1558002038-1055e2dae2c7',
    technologies: ['Raspberry Pi', 'Python', 'React', 'IoT', 'Machine Learning'],
    demoUrl: 'https://example.com/smart-home-demo',
    githubUrl: 'https://github.com/username/smart-home',
    featured: false,
  },
];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const { slug, featured } = req.query;

  try {
    // Belirli bir projeyi getir
    if (slug && typeof slug === 'string') {
      const project = projects.find(project => project.slug === slug);
      
      if (!project) {
        return res.status(404).json({ success: false, message: 'Proje bulunamadı' });
      }
      
      return res.status(200).json({ success: true, project });
    }
    
    // Öne çıkan projeleri getir
    if (featured === 'true') {
      const featuredProjects = projects.filter(project => project.featured);
      return res.status(200).json({ success: true, projects: featuredProjects });
    }
    
    // Tüm projeleri getir
    return res.status(200).json({ success: true, projects });
    
  } catch (error) {
    console.error('Projeler API hatası:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Sunucu hatası, lütfen daha sonra tekrar deneyin' 
    });
  }
}