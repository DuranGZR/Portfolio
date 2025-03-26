import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Header from '../components/Header';

export default function About() {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>{`${t('about')} | ${t('site_title', 'Yapay Zeka & Makine Öğrenimi Portfolyosu')}`}</title>
        <meta
          name="description"
          content="Yapay zeka ve makine öğrenimi alanlarındaki geçmişim, yetkinliklerim ve vizyonum hakkında bilgi edinin."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <Header t={t} />

        {/* About Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">{t('about')}</span>
              </h1>
              <p className="text-xl text-gray-300">
                Yapay zeka ve makine öğrenimi alanlarında tutkulu bir uzman olarak, teknolojinin gücünü kullanarak karmaşık problemlere çözümler üretiyorum.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Left Column */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="lg:col-span-1"
              >
                <div className="sticky top-8">
                  <div className="aspect-square rounded-full bg-gradient-to-br from-primary-500 via-secondary-500 to-neon-pink p-1 animate-gradient-xy mx-auto max-w-xs">
                    <div className="w-full h-full rounded-full bg-dark-600 flex items-center justify-center overflow-hidden">
                      <div className="text-center p-8">
                        <div className="text-6xl mb-4">👨‍💻</div>
                        <div className="text-xl font-mono text-neon-blue">AI & ML</div>
                        <div className="text-sm font-mono mt-2 text-gray-400">// Uzmanı</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-primary-900 flex items-center justify-center">
                        <FaEnvelope className="text-primary-400" />
                      </div>
                      <span className="text-gray-300">contact@example.com</span>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-primary-900 flex items-center justify-center">
                        <FaMapMarkerAlt className="text-primary-400" />
                      </div>
                      <span className="text-gray-300">İstanbul, Türkiye</span>
                    </div>

                    <div className="flex space-x-4 justify-center mt-6">
                      <a href="https://github.com/yourprofile" className="text-gray-300 hover:text-primary-400">
                        <FaGithub size={24} />
                      </a>
                      <a href="https://linkedin.com/in/yourprofile" className="text-gray-300 hover:text-primary-400">
                        <FaLinkedin size={24} />
                      </a>
                      <a href="https://twitter.com/yourprofile" className="text-gray-300 hover:text-primary-400">
                        <FaTwitter size={24} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Column */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="lg:col-span-2 text-gray-300 space-y-6"
              >
                <p>
                  Makine öğrenimi ve derin öğrenme tekniklerini kullanarak yenilikçi projeler geliştiriyorum. Veri analizi, tahmin modelleri ve yapay zekâ sistemleri üzerine uzmanlaştım.
                </p>

                <p>
                  Python, TensorFlow, PyTorch, ve çeşitli bulut platformlarında geniş deneyime sahibim. Yapay zekâ uygulamalarını gerçek dünya sorunlarını çözmek için kullanmaya tutkuluyum.
                </p>

                <p>
                  Yapay zekânın geleceğine yönelik yenilikçi projelerde birlikte çalışmak için iletişime geçebilirsiniz.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
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
