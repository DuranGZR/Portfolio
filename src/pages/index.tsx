import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';
import Header from '../components/Header';

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>Yapay Zeka & Makine Öğrenimi Portfolyosu</title>
        <meta name="description" content="Yapay zeka ve makine öğrenimi alanlarındaki çalışmalarımı ve projelerimi keşfedin." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <Header t={t} />

        {/* Hero Section */}
        <section className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="gradient-text">{t('hero.title')}</span>
                </h1>
                <p className="text-xl text-gray-300">
                  {t('hero.subtitle')}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/projects" className="btn-primary">
                    {t('hero.cta_projects')}
                  </Link>
                  <Link href="/contact" className="btn-outline">
                    {t('hero.cta_contact')}
                  </Link>
                </div>
                <div className="flex space-x-4 pt-4">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <FaGithub size={24} />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <FaLinkedin size={24} />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <FaTwitter size={24} />
                  </a>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-square rounded-full bg-gradient-to-br from-primary-500 via-secondary-500 to-neon-pink p-1 animate-gradient-xy">
                  <div className="w-full h-full rounded-full bg-dark-600 flex items-center justify-center overflow-hidden">
                    <div className="text-center p-8">
                      <div className="text-6xl mb-4">🤖</div>
                      <div className="text-xl font-mono text-neon-blue">AI & ML</div>
                      <div className="text-sm font-mono mt-2 text-gray-400">// Portfolyo</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -z-10 inset-0 blur-3xl bg-primary-600 bg-opacity-20 rounded-full"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-700">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Uzmanlık Alanlarım</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Yapay zeka ve veri bilimi alanlarında edindiğim yetkinlikler
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {[
                {
                  title: 'Derin Öğrenme',
                  description: 'CNN, RNN, Transformer mimarileri ve PyTorch/TensorFlow ile model geliştirme',
                  icon: '🧠'
                },
                {
                  title: 'Doğal Dil İşleme',
                  description: 'Metin analizi, duygu analizi, dil modelleri ve chatbot geliştirme',
                  icon: '💬'
                },
                {
                  title: 'Bilgisayarlı Görü',
                  description: 'Görüntü sınıflandırma, nesne tespiti ve segmentasyon uygulamaları',
                  icon: '👁️'
                },
                {
                  title: 'Veri Analizi',
                  description: 'Büyük veri setlerinde keşifsel analiz, görselleştirme ve içgörü çıkarımı',
                  icon: '📊'
                },
                {
                  title: 'MLOps',
                  description: 'Model dağıtımı, izleme ve sürekli entegrasyon/dağıtım süreçleri',
                  icon: '🚀'
                },
                {
                  title: 'Pekiştirmeli Öğrenme',
                  description: 'Ajan tabanlı sistemler ve karar verme algoritmaları geliştirme',
                  icon: '🎮'
                }
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card neon-border hover:border-primary-500 group"
                >
                  <div className="text-4xl mb-4">{skill.icon}</div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary-400 transition-colors">{skill.title}</h3>
                  <p className="text-gray-400">{skill.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Öne Çıkan Projeler</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Yapay zeka ve makine öğrenimi alanlarında geliştirdiğim bazı projeler
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Duygu Analizi API',
                  description: 'Sosyal medya yorumlarında duygu analizi yapan ve gerçek zamanlı sonuçlar üreten bir API servisi.',
                  tags: ['NLP', 'Python', 'FastAPI', 'BERT'],
                  image: '/images/project1.jpg'
                },
                {
                  title: 'Görüntü Sınıflandırma Modeli',
                  description: 'Tıbbi görüntülerde hastalık tespiti yapan derin öğrenme tabanlı bir sınıflandırma modeli.',
                  tags: ['Computer Vision', 'PyTorch', 'CNN', 'Healthcare'],
                  image: '/images/project2.jpg'
                },
              ].map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card overflow-hidden group"
                >
                  <div className="h-48 bg-gradient-to-r from-primary-900 to-secondary-900 flex items-center justify-center mb-4 rounded-md">
                    <div className="text-4xl">{index === 0 ? '💬' : '🔍'}</div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary-400 transition-colors">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-xs bg-dark-500 text-primary-300 px-2 py-1 rounded">{tag}</span>
                    ))}
                  </div>
                  <Link href={`/projects/${index + 1}`} className="text-primary-400 hover:text-primary-300 font-medium inline-flex items-center">
                    Detayları Gör
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/projects" className="btn-secondary">
                Tüm Projeleri Gör
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <Link href="/" className="text-xl font-bold gradient-text">AI Portfolio</Link>
                <p className="text-gray-400 mt-2">© {new Date().getFullYear()} Tüm hakları saklıdır.</p>
              </div>
              <div className="flex space-x-6">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <FaGithub size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <FaLinkedin size={20} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <FaTwitter size={20} />
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