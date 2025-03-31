import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>Duran Gezer</title>
        <meta name="description" content="Yazılım geliştirme ve veri bilimi alanlarında öğrendiğim bilgileri ve üzerinde çalıştığım projeleri keşfedin." />
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
                  <a href="https://github.com/DuranGZR" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <FaGithub size={24} />
                  </a>
                  <a href="https://www.linkedin.com/in/durangzr/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <FaLinkedin size={24} />
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
                    <Image
                      src="/public/images/BGDuran.png"
                      alt="Duran Gezer"
                      width={800}
                      height={800}
                      className="w-full h-full object-cover rounded-full"
                      priority
                      quality={100}
                    />
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
              <h2 className="text-3xl font-bold mb-4">{t('skills.title')}</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                {t('skills.subtitle')}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {[
                {
                  title: t('skills.deep_learning.title'),
                  description: t('skills.deep_learning.description'),
                  icon: '🧠'
                },
                {
                  title: t('skills.nlp.title'),
                  description: t('skills.nlp.description'),
                  icon: '💬'
                },
                {
                  title: t('skills.computer_vision.title'),
                  description: t('skills.computer_vision.description'),
                  icon: '👁️'
                },
                {
                  title: t('skills.data_analysis.title'),
                  description: t('skills.data_analysis.description'),
                  icon: '📊'
                },
                {
                  title: t('skills.mlops.title'),
                  description: t('skills.mlops.description'),
                  icon: '🚀'
                },
                {
                  title: t('skills.reinforcement_learning.title'),
                  description: t('skills.reinforcement_learning.description'),
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
        
        

        {/* Footer */}
        <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <Link href="/" className="text-xl font-bold gradient-text">Duran Gezer</Link>
                <p className="text-gray-400 mt-2">© {new Date().getFullYear()} Tüm hakları saklıdır.</p>
              </div>
              <div className="flex space-x-6">
                <a href="https://github.com/DuranGZR" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <FaGithub size={20} />
                </a>
                <a href="https://www.linkedin.com/in/durangzr/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <FaLinkedin size={20} />
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