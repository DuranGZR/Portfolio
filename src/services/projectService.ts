import { useRouter } from 'next/router';

export type Project = {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  coverImage: string;
  technologies: string[];
  tags?: string[];
  demoUrl?: string;
  liveUrl?: string | null;
  githubUrl: string;
  featured: boolean;
  category: string;
};

type ProjectResponse = {
  success: boolean;
  message?: string;
  projects?: Project[];
  project?: Project;
};

// GitHub'dan paylaşılan projelerin bilgileri
export const projects: Project[] = [
  {
    id: '1',
    title: 'Diyabet Tahmini',
    slug: 'diabetes-prediction',
    description: 'Makine öğrenmesi kullanarak diyabet risk analizi ve erken teşhis sistemi.',
    longDescription: 'Bu proje, hastaların klinik verilerini analiz ederek diyabet riskini tahmin eden gelişmiş bir makine öğrenmesi sistemi sunmaktadır. Proje kapsamında, veri ön işleme aşamasında eksik veri analizi ve özellik normalizasyonu gerçekleştirilmiş, ardından çeşitli makine öğrenmesi algoritmaları (Random Forest, XGBoost, SVM) karşılaştırmalı olarak değerlendirilmiştir. Model seçimi ve hiperparametre optimizasyonu için k-fold çapraz doğrulama kullanılmış, sonuçta %85+ doğruluk oranına ulaşılmıştır. Sistem, sağlık profesyonellerine diyabet risk değerlendirmesinde yardımcı bir araç olarak hizmet vermektedir.',
    coverImage: '/images/projects/diabetes-prediction.jpg',
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Seaborn'],
    githubUrl: 'https://github.com/DuranGZR/Diabetes_Prediction',
    featured: true,
    category: 'Makine Öğrenmesi'
  },
  {
    id: '2',
    title: 'Maaş Tahmini',
    slug: 'salary-prediction',
    description: 'Yapay zeka destekli gelişmiş maaş tahmin ve analiz sistemi.',
    longDescription: 'Bu proje, iş piyasasındaki maaş trendlerini analiz eden ve çalışanların potansiyel maaşlarını tahmin eden kapsamlı bir yapay zeka çözümüdür. Sistem, 50.000+ veri noktası üzerinde eğitilmiş olup, deneyim, eğitim seviyesi, sektör, lokasyon ve özel yetenekler gibi 20+ faktörü değerlendirmektedir. Gelişmiş regresyon teknikleri (Linear Regression, Random Forest, Gradient Boosting) kullanılarak oluşturulan model, çapraz doğrulama ile optimize edilmiş ve ortalama %92 tahmin doğruluğuna ulaşmıştır. Ayrıca, interaktif görselleştirmeler ile maaş trendlerini ve faktör etkilerini analiz etme imkanı sunmaktadır.',
    coverImage: '/images/projects/salary-prediction.jpg',
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Seaborn'],
    githubUrl: 'https://github.com/DuranGZR/Salary_Prediction_with_Mahcine_Learning',
    featured: true,
    category: 'Makine Öğrenmesi'
  },
  {
    id: '3',
    title: 'El Yazısı Tahmini',
    slug: 'handwriting-recognition',
    description: 'Derin öğrenme tabanlı gelişmiş el yazısı karakter tanıma sistemi.',
    longDescription: 'Bu proje, el yazısı karakterleri yüksek doğrulukla tanıyan modern bir derin öğrenme sistemi sunmaktadır. MNIST ve EMNIST veri setleri üzerinde eğitilen model, Konvolüsyonel Sinir Ağları (CNN) mimarisi kullanarak %99.2 doğruluk oranına ulaşmıştır. Sistem, veri artırma teknikleri, batch normalization ve dropout katmanları ile optimize edilmiş olup, farklı el yazısı stillerine karşı güçlü bir genelleme yeteneğine sahiptir. Gerçek zamanlı tanıma özelliği ile kullanıcıların çizdiği karakterleri anında analiz edebilmekte ve web arayüzü üzerinden kolay kullanım imkanı sunmaktadır.',
    coverImage: '/images/projects/handwriting-recognition.jpg',
    technologies: ['Python', 'TensorFlow', 'Keras', 'NumPy', 'Matplotlib', 'OpenCV'],
    githubUrl: 'https://github.com/DuranGZR/El_Yazisi_Tahmin',
    featured: false,
    category: 'Derin Öğrenme'
  },
  {
    id: '4',
    title: 'Otobüs Bilet Rezervasyon Sistemi',
    slug: 'bus-ticket-reservation',
    description: 'Modern ve kullanıcı dostu online otobüs bileti rezervasyon platformu.',
    longDescription: 'Bu proje, seyahat planlamasını kolaylaştıran kapsamlı bir web tabanlı bilet rezervasyon sistemidir. Kullanıcılar, dinamik arama filtreleri ile 100+ güzergah arasından seçim yapabilir, gerçek zamanlı koltuk durumunu görüntüleyebilir ve güvenli ödeme sistemi üzerinden rezervasyon yapabilirler. Sistem, responsive tasarımı ile mobil cihazlarda optimum kullanım sunar ve REST API mimarisi ile geliştirilmiştir. Öne çıkan özellikler arasında otomatik e-bilet oluşturma, çoklu ödeme seçenekleri, rezervasyon yönetimi ve anlık bildirim sistemi bulunmaktadır. Yönetici paneli üzerinden detaylı raporlama ve analiz araçları sunulmaktadır.',
    coverImage: '/images/projects/bus-ticket-reservation.jpg',
    technologies: ['Java'],
    githubUrl: 'https://github.com/DuranGZR/A_Bus_Ticket_Reservation_System',
    featured: false,
    category: 'Otomasyon'
  }
];

/**
 * Tüm projeleri getiren servis
 */
export function getProjects(category?: string): Project[] {
  if (category) {
    return projects.filter(project => project.category === category);
  }
  return projects;
}

/**
 * Öne çıkan projeleri getiren servis
 */
export function getFeaturedProjects(): Project[] {
  return projects.filter(project => project.featured);
}

/**
 * Belirli bir projeyi getiren servis
 */
export function getProject(slug: string): Project | null {
  return projects.find(project => project.slug === slug) || null;
}

/**
 * Proje kategorilerini getiren fonksiyon
 */
export function getProjectCategories(): string[] {
  const categories = projects.map(project => project.category);
  return Array.from(new Set(categories)); // Tekrarlanan kategorileri kaldır
}