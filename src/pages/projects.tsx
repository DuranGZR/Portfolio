import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Header from '../components/Header';
import { GetStaticProps } from 'next';
import { Project, getProjects, getProjectCategories } from '../services/projectService';

type ProjectsPageProps = {
  projects: Project[];
  categories: string[];
};

export default function Projects({ projects, categories }: ProjectsPageProps) {
  const { t } = useTranslation('common');
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  
  // GitHub'dan alınan projeler
  const mockProjects = [
    {
      id: '1',
      title: 'Duygu Analizi API',
      description: 'Sosyal medya yorumlarında duygu analizi yapan ve gerçek zamanlı sonuçlar üreten bir API servisi.',
      longDescription: 'Bu projede, sosyal medya platformlarından toplanan kullanıcı yorumlarını analiz eden ve duygu durumunu tespit eden bir API geliştirdim. BERT tabanlı bir derin öğrenme modeli kullanarak, metinlerdeki nüansları ve bağlamı anlayabilen bir sistem oluşturdum. API, gerçek zamanlı olarak çalışabilecek şekilde optimize edildi ve FastAPI kullanılarak hızlı ve ölçeklenebilir bir servis haline getirildi.',
      tags: ['NLP', 'Python', 'FastAPI', 'BERT', 'Docker'],
      image: '/images/project1.jpg',
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: true
    },
    {
      id: '2',
      title: 'Görüntü Sınıflandırma Modeli',
      description: 'Tıbbi görüntülerde hastalık tespiti yapan derin öğrenme tabanlı bir sınıflandırma modeli.',
      longDescription: 'Sağlık sektöründe kullanılmak üzere, tıbbi görüntülerde (X-ray, MRI) hastalık tespiti yapabilen bir derin öğrenme modeli geliştirdim. CNN mimarisi kullanarak oluşturduğum model, radyoloji uzmanlarının teşhis sürecini hızlandırmayı ve doğruluk oranını artırmayı hedefliyor. Model, PyTorch ile geliştirildi ve %95 üzerinde doğruluk oranına ulaştı.',
      tags: ['Computer Vision', 'PyTorch', 'CNN', 'Healthcare', 'Transfer Learning'],
      image: '/images/project2.jpg',
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: true
    },
    {
      id: '3',
      title: 'Akıllı Öneri Sistemi',
      description: 'Kullanıcı davranışlarını analiz ederek kişiselleştirilmiş içerik önerileri sunan bir öneri motoru.',
      longDescription: 'E-ticaret platformları için geliştirdiğim bu öneri sistemi, kullanıcıların gezinme geçmişi, satın alma davranışları ve demografik verilerini analiz ederek kişiselleştirilmiş ürün önerileri sunuyor. Collaborative filtering ve content-based filtering yöntemlerini hibrit bir yaklaşımla birleştirerek, soğuk başlangıç problemini çözen ve yüksek doğrulukta öneriler yapabilen bir sistem tasarladım.',
      tags: ['Recommendation Systems', 'Python', 'TensorFlow', 'Machine Learning', 'Big Data'],
      image: '/images/project3.jpg',
      githubUrl: 'https://github.com',
      liveUrl: null,
      featured: false
    },
    {
      id: '4',
      title: 'Otomatik Metin Özetleme',
      description: 'Uzun metinleri otomatik olarak özetleyen ve ana temaları çıkaran bir NLP uygulaması.',
      longDescription: 'Bu projede, uzun makaleleri, raporları ve belgeleri otomatik olarak özetleyen bir doğal dil işleme uygulaması geliştirdim. Transformer mimarisi kullanarak, metinlerin ana temalarını ve önemli noktalarını çıkarabilen, tutarlı ve anlamlı özetler oluşturabilen bir model tasarladım. Uygulama, akademik araştırmacılar ve içerik üreticileri için zaman tasarrufu sağlıyor.',
      tags: ['NLP', 'Transformers', 'BERT', 'Text Summarization', 'Python'],
      image: '/images/project4.jpg',
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: false
    },
    {
      id: '5',
      title: 'Anomali Tespiti Sistemi',
      description: 'Endüstriyel IoT sensör verilerinde anormallikleri tespit eden bir makine öğrenimi sistemi.',
      longDescription: 'Endüstriyel tesisler için geliştirdiğim bu sistem, IoT sensörlerinden gelen verileri gerçek zamanlı olarak analiz ederek anormal durumları tespit ediyor. Unsupervised learning algoritmaları kullanarak, önceden bilinmeyen anormallikleri bile yakalayabilen model, ekipman arızalarını önceden tahmin ederek bakım maliyetlerini düşürmeyi ve üretim kesintilerini önlemeyi hedefliyor.',
      tags: ['Anomaly Detection', 'IoT', 'Time Series Analysis', 'Unsupervised Learning', 'Kafka'],
      image: '/images/project5.jpg',
      githubUrl: 'https://github.com',
      liveUrl: null,
      featured: false
    },
    {
      id: '6',
      title: 'Konuşma Tanıma Asistanı',
      description: 'Gerçek zamanlı konuşma tanıma ve doğal dil anlama yeteneklerine sahip bir sesli asistan uygulaması.',
      longDescription: 'Bu projede, kullanıcıların sesli komutlarını anlayabilen ve doğal bir şekilde yanıt verebilen bir sesli asistan geliştirdim. Derin öğrenme tabanlı konuşma tanıma modeli ve doğal dil işleme teknikleri kullanarak, kullanıcıların günlük görevlerini kolaylaştıran, takvim yönetimi, hatırlatıcılar oluşturma ve bilgi sorgulama gibi işlevleri yerine getirebilen bir asistan tasarladım.',
      tags: ['Speech Recognition', 'NLP', 'Voice Assistant', 'PyTorch', 'TensorFlow'],
      image: '/images/project6.jpg',
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: false
    }
  ];

  return (
    <>
      <Head>
        <title>{`${t('projects')} | ${t('site_title', 'Yazılım Geliştirme ve Veri Bilimi Portfolyosu')}`}</title>
        <meta name="description" content={t('projects_description', 'Yazılım geliştirme ve veri bilimi alanlarında üzerinde çalıştığım projeler, uygulamalar ve öğrenme deneyimlerim.')} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <Header t={t} />

        {/* Projects Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Projeler</span>
              </h1>
              <p className="text-xl text-gray-300">
                Yazılım geliştirme ve veri bilimi alanlarında üzerinde çalıştığım projeler, uygulamalar ve öğrenme deneyimlerim.
              </p>
            </motion.div>
            
            

            {/* Projects Grid */}
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <style jsx>{`
                  .project-card.expanded {
                    transform: scale(1.05) translateY(-8px);
                    z-index: 20;
                  }
                  .project-card {
                    transition: all 0.3s ease-in-out;
                  }
                `}</style>
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    id={`project-${project.id}`}
                    className={`project-card bg-gradient-to-br from-dark-600 to-dark-700 rounded-xl overflow-hidden shadow-xl transition-all duration-500 flex flex-col h-full border border-gray-800 hover:border-primary-500 relative group hover:shadow-2xl ${expandedProject === project.id ? 'expanded' : ''}`}
                  >
                    <div className="h-56 bg-gradient-to-br from-dark-800 to-dark-900 relative overflow-hidden group cursor-pointer">
                      <div className="absolute inset-0 flex items-center justify-center transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-12">
                        {project.title.includes('Diyabet') ? (
                          <span className="text-7xl filter drop-shadow-lg">🧠</span>
                        ) : project.title.includes('Maaş') ? (
                          <span className="text-7xl filter drop-shadow-lg">📊</span>
                        ) : project.title.includes('El Yazısı') ? (
                          <span className="text-7xl filter drop-shadow-lg">✍️</span>
                        ) : project.title.includes('Otobüs') ? (
                          <span className="text-7xl filter drop-shadow-lg">🚌</span>
                        ) : (
                          <span className="text-7xl filter drop-shadow-lg">🚀</span>
                        )}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-6 flex-grow">
                      <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent hover:from-primary-300 hover:to-primary-500 transition-all duration-300">{project.title}</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies?.map((tech, techIndex) => (
                          <span key={techIndex} className="px-3 py-1.5 bg-primary-900/30 text-primary-200 rounded-full text-xs font-medium hover:bg-primary-800/50 transition-colors duration-200 border border-primary-700/30">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="mt-4">
                        <p className={`project-description text-sm text-gray-300 transition-all duration-500 ease-in-out ${expandedProject === project.id ? '' : 'line-clamp-3'}`}>{project.longDescription}</p>
                      </div>
                    </div>
                    <div className="p-5 pt-0 flex justify-between items-center border-t border-gray-800 mt-auto">
                      <div className="flex space-x-3">
                        {project.githubUrl && (
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <FaGithub size={18} />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <FaExternalLinkAlt size={16} />
                          </a>
                        )}
                      </div>
                      <button 
                        onClick={() => {
                          setExpandedProject(prev =>
                            prev === project.id ? null : project.id
                          );
                        }} 
                        className="text-primary-400 hover:text-primary-300 text-sm font-medium transition-colors"
                      >
                        {expandedProject === project.id ? 'Detayları Gizle' : 'Detayları Gör'}
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-auto py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <Link href="/" className="text-xl font-bold gradient-text">Duran Gezer</Link>
                <p className="text-gray-400 text-sm mt-2">© {new Date().getFullYear()} Tüm hakları saklıdır.</p>
              </div>
              <div className="flex space-x-6">
                <a href="https://github.com/DuranGZR" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <FaGithub size={20} />
                </a>
                <a href="https://www.linkedin.com/in/durangzr/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale = 'tr' }) => {
  // Projeleri ve kategorileri al
  const projects = await getProjects();
  const categories = getProjectCategories();
  
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      projects,
      categories,
    },
    // Her 24 saatte bir yeniden oluştur
    revalidate: 86400,
  };
}