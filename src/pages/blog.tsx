import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaCalendar, FaTag, FaClock } from 'react-icons/fa';
import Header from '../components/Header';

export default function Blog() {
  const { t } = useTranslation('common');

  // Örnek blog yazıları - gerçek içerikle değiştirilmeli
  const blogPosts = [
    {
      id: 1,
      title: 'Yapay Zeka Modellerinde Bias ve Etik Sorunlar',
      excerpt: 'Yapay zeka sistemlerinde karşılaşılan önyargı (bias) sorunları ve bunların etik açıdan değerlendirilmesi üzerine bir inceleme.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.',
      date: '2023-11-15',
      readTime: '8 dk',
      author: 'AI Uzmanı',
      tags: ['Yapay Zeka', 'Etik', 'Bias'],
      image: '/images/blog1.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'Transformer Mimarisinin Doğal Dil İşlemedeki Devrim Etkisi',
      excerpt: 'Attention is all you need makalesiyle tanıtılan Transformer mimarisinin NLP alanında yarattığı paradigma değişimi ve güncel uygulamaları.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.',
      date: '2023-10-28',
      readTime: '12 dk',
      author: 'AI Uzmanı',
      tags: ['NLP', 'Transformer', 'Deep Learning'],
      image: '/images/blog2.jpg',
      featured: true
    },
    {
      id: 3,
      title: 'Veri Biliminde Keşifsel Veri Analizi (EDA) Teknikleri',
      excerpt: 'Veri bilimi projelerinde başarının anahtarı olan keşifsel veri analizi yöntemleri ve Python ile uygulamalı örnekler.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.',
      date: '2023-10-10',
      readTime: '10 dk',
      author: 'AI Uzmanı',
      tags: ['Veri Bilimi', 'EDA', 'Python'],
      image: '/images/blog3.jpg',
      featured: false
    },
    {
      id: 4,
      title: 'Derin Öğrenme Modellerinin Optimizasyonu ve Hiperparametre Ayarı',
      excerpt: 'Derin öğrenme modellerinin performansını artırmak için kullanılan optimizasyon teknikleri ve hiperparametre ayarlama stratejileri.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.',
      date: '2023-09-22',
      readTime: '15 dk',
      author: 'AI Uzmanı',
      tags: ['Deep Learning', 'Optimizasyon', 'Hiperparametre'],
      image: '/images/blog4.jpg',
      featured: false
    },
    {
      id: 5,
      title: 'Bilgisayarlı Görüde Son Gelişmeler: Vision Transformer ve CLIP',
      excerpt: 'Bilgisayarlı görü alanında çığır açan Vision Transformer (ViT) ve CLIP modellerinin çalışma prensipleri ve uygulamaları.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.',
      date: '2023-09-05',
      readTime: '11 dk',
      author: 'AI Uzmanı',
      tags: ['Computer Vision', 'ViT', 'CLIP'],
      image: '/images/blog5.jpg',
      featured: false
    },
    {
      id: 6,
      title: 'MLOps: Makine Öğrenimi Sistemlerinin Operasyonel Hale Getirilmesi',
      excerpt: 'Makine öğrenimi modellerinin geliştirme sürecinden üretim ortamına taşınması ve MLOps prensiplerinin uygulanması.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.',
      date: '2023-08-20',
      readTime: '9 dk',
      author: 'AI Uzmanı',
      tags: ['MLOps', 'DevOps', 'Production'],
      image: '/images/blog6.jpg',
      featured: false
    }
  ];

  return (
    <>
      <Head>
        <title>Blog | Yapay Zeka & Makine Öğrenimi Portfolyosu</title>
        <meta name="description" content="Yapay zeka, makine öğrenimi ve veri bilimi alanlarında güncel yazılar, analizler ve düşünceler." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <Header t={t} />

        {/* Blog Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Blog</span>
              </h1>
              <p className="text-xl text-gray-300">
                Yapay zeka, makine öğrenimi ve veri bilimi alanlarında güncel yazılar, analizler ve düşünceler.
              </p>
            </motion.div>

            {/* Featured Posts */}
            <div className="mb-20">
              <h2 className="text-2xl font-bold mb-8 border-b border-gray-800 pb-4">Öne Çıkan Yazılar</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
                {blogPosts.filter(post => post.featured).map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-dark-600 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col h-full group"
                  >
                    <div className="h-60 bg-dark-700 relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center bg-dark-800 text-6xl">
                        {post.id === 1 ? '🧠' : '💬'}
                      </div>
                      {/* Burada gerçek bir resim olacak */}
                      {/* <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" /> */}
                    </div>
                    <div className="p-6 flex-grow">
                      <div className="flex items-center text-sm text-gray-400 mb-3 space-x-4">
                        <div className="flex items-center">
                          <FaCalendar className="mr-2" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center">
                          <FaClock className="mr-2" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-primary-400 transition-colors">{post.title}</h3>
                      <p className="text-gray-300 mb-4">{post.excerpt}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="px-3 py-1 bg-primary-900 text-primary-200 rounded-full text-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="p-6 pt-0 border-t border-gray-800 mt-auto">
                      <button className="text-primary-400 hover:text-primary-300 font-medium transition-colors flex items-center">
                        Devamını Oku
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* All Blog Posts */}
            <div>
              <h2 className="text-2xl font-bold mb-8 border-b border-gray-800 pb-4">Tüm Yazılar</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {blogPosts.filter(post => !post.featured).map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-dark-600 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full group"
                  >
                    <div className="h-48 bg-dark-700 relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center bg-dark-800 text-5xl">
                        {['📊', '🚀', '👁️', '🤖'][index % 4]}
                      </div>
                      {/* Burada gerçek bir resim olacak */}
                      {/* <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" /> */}
                    </div>
                    <div className="p-5 flex-grow">
                      <div className="flex items-center text-xs text-gray-400 mb-2 space-x-3">
                        <div className="flex items-center">
                          <FaCalendar className="mr-1" size={12} />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center">
                          <FaClock className="mr-1" size={12} />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary-400 transition-colors">{post.title}</h3>
                      <p className="text-gray-400 mb-3 text-sm">{post.excerpt}</p>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {post.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="px-2 py-1 bg-primary-900 text-primary-200 rounded-full text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="p-5 pt-0 border-t border-gray-800 mt-auto">
                      <button className="text-primary-400 hover:text-primary-300 text-sm font-medium transition-colors flex items-center">
                        Devamını Oku
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Newsletter Subscription */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mt-20 bg-gradient-to-r from-primary-900 to-secondary-900 rounded-xl p-8 md:p-12"
            >
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Güncel Yapay Zeka İçeriklerinden Haberdar Olun</h3>
                <p className="text-gray-300 mb-6">Yeni yazılar, projeler ve yapay zeka alanındaki gelişmeler hakkında bildirimler almak için abone olun.</p>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="E-posta adresiniz"
                    className="flex-grow px-4 py-3 rounded-md bg-dark-600 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                  <button className="btn-primary whitespace-nowrap">
                    Abone Ol
                  </button>
                </div>
              </div>
            </motion.div>
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
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
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