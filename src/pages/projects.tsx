import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Header from '../components/Header';

export default function Projects() {
  const { t } = useTranslation('common');

  // Örnek proje verileri - gerçek projelerle değiştirilmeli
  const projects = [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
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
      id: 5,
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
      id: 6,
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
        <title>{`${t('projects')} | ${t('site_title', 'Yapay Zeka & Makine Öğrenimi Portfolyosu')}`}</title>
        <meta name="description" content={t('projects_description', 'Yapay zeka ve makine öğrenimi alanlarında geliştirdiğim projeler, uygulamalar ve araştırmalar.')} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
                Yapay zeka ve makine öğrenimi alanlarında geliştirdiğim projeler, uygulamalar ve araştırmalar.
              </p>
            </motion.div>

            {/* Featured Projects */}
            <div className="mb-20">
              <h2 className="text-2xl font-bold mb-8 border-b border-gray-800 pb-4">Öne Çıkan Projeler</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
                {projects.filter(project => project.featured).map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-dark-600 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
                  >
                    <div className="h-60 bg-dark-700 relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center bg-dark-800 text-6xl">
                        {project.id === 1 ? '🤖' : '👁️'}
                      </div>
                      {/* Burada gerçek bir resim olacak */}
                      {/* <img src={project.image} alt={project.title} className="w-full h-full object-cover" /> */}
                    </div>
                    <div className="p-6 flex-grow">
                      <h3 className="text-2xl font-bold mb-3 gradient-text">{project.title}</h3>
                      <p className="text-gray-300 mb-4">{project.description}</p>
                      <p className="text-gray-400 mb-6">{project.longDescription}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="px-3 py-1 bg-primary-900 text-primary-200 rounded-full text-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="p-6 pt-0 flex justify-between items-center border-t border-gray-800 mt-auto">
                      <div className="flex space-x-4">
                        {project.githubUrl && (
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <FaGithub size={20} />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <FaExternalLinkAlt size={18} />
                          </a>
                        )}
                      </div>
                      <button className="btn-outline text-sm py-1 px-4">
                        Detayları Gör
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* All Projects */}
            <div>
              <h2 className="text-2xl font-bold mb-8 border-b border-gray-800 pb-4">Tüm Projeler</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {projects.filter(project => !project.featured).map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-dark-600 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                  >
                    <div className="h-48 bg-dark-700 relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center bg-dark-800 text-5xl">
                        {['🧠', '💬', '📊', '🚀'][index % 4]}
                      </div>
                      {/* Burada gerçek bir resim olacak */}
                      {/* <img src={project.image} alt={project.title} className="w-full h-full object-cover" /> */}
                    </div>
                    <div className="p-5 flex-grow">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary-400 transition-colors">{project.title}</h3>
                      <p className="text-gray-400 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span key={tagIndex} className="px-2 py-1 bg-primary-900 text-primary-200 rounded-full text-xs">
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="px-2 py-1 bg-dark-500 text-gray-300 rounded-full text-xs">
                            +{project.tags.length - 3}
                          </span>
                        )}
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
                      <button className="text-primary-400 hover:text-primary-300 text-sm font-medium transition-colors">
                        Detayları Gör
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
                <Link href="/" className="text-xl font-bold gradient-text">AI Portfolio</Link>
                <p className="text-gray-400 text-sm mt-2">© {new Date().getFullYear()} Tüm hakları saklıdır.</p>
              </div>
              <div className="flex space-x-6">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <FaGithub size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
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

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}