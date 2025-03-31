import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Header from '../components/Header';
import Image from 'next/image';

export default function About() {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>{`${t('about')} | ${t('site_title', 'Yazılım Geliştirme ve Veri Bilimi Portfolyosu')}`}</title>
        <meta
          name="description"
          content="Yazılım geliştirme ve veri bilimi alanlarındaki geçmişim, yetkinliklerim ve vizyonum hakkında bilgi edinin."
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
                Yapay zeka ve veri bilimi alanlarına tutkulu biri olarak, teknolojinin gücünü kullanarak karmaşık problemlere çözümler üretiyorum.
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
                <div className="fix top-24 z-10">
                  <div className="aspect-square rounded-full bg-gradient-to-br from-primary-500 via-secondary-500 to-neon-pink p-1 animate-gradient-xy mx-auto max-w-xs relative">
                    <div className="w-full h-full rounded-full bg-dark-600 overflow-hidden">
                      <Image
                        src="/images/BGDuran.png"
                        alt="Duran Gezer"
                        width={300}
                        height={300}
                        className="object-cover w-full h-full rounded-full"
                        priority
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-primary-900 flex items-center justify-center">
                      <FaEnvelope className="text-primary-400" />
                    </div>
                    <span className="text-gray-300">durangezer2004@gmail.com</span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-primary-900 flex items-center justify-center">
                      <FaMapMarkerAlt className="text-primary-400" />
                    </div>
                    <span className="text-gray-300">İzmir, Türkiye</span>
                  </div>

                  <div className="flex space-x-4 justify-center mt-6">
                    <a href="https://github.com/DuranGZR" className="text-gray-300 hover:text-primary-400">
                      <FaGithub size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/durangzr/" className="text-gray-300 hover:text-primary-400">
                      <FaLinkedin size={24} />
                    </a>
                    
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
                Ben Duran Gezer, İnönü Üniversitesi Bilgisayar Mühendisliği bölümü 3. sınıf öğrencisiyim. Yazılım geliştirme ve yapay zeka alanlarına odaklanmış, veri odaklı düşünme yeteneği yüksek bir geliştiriciyim. Teknolojinin sunduğu olanaklarla karmaşık problemleri çözmeyi, yeni fikirleri gerçeğe dönüştürmeyi ve sürekli gelişmeyi ilke edinmiş bir mühendis adayıyım.
                </p>

                <p>
                Makine öğrenmesi, derin öğrenme, veri analizi ve yapay zeka sistemleri üzerine uzmanlaşarak bu alanlarda hem teorik bilgi hem de pratik proje deneyimi edindim. Python başta olmak üzere birçok programlama dili ve araç üzerinde çalıştım. TensorFlow, PyTorch gibi popüler derin öğrenme framework’leri ile projeler geliştirdim. Aynı zamanda Pandas, NumPy, Scikit-learn gibi kütüphanelerle veri işleme ve modelleme üzerine çalışmalar yaptım.
                </p>

                

                <p>
                Eğitim hayatım boyunca teknik becerilerimi çeşitli çevrimiçi kurslar ve uygulamalı projelerle destekledim. Aynı zamanda açık kaynak projelere katkı sunma ve topluluk temelli platformlarda aktif olma vizyonuna sahibim. Öğrenmeyi ve üretmeyi yaşam boyu sürecek bir süreç olarak görüyorum.
                </p>

                <p>
                Kariyer hedefim, yapay zekanın etik, sürdürülebilir ve insan odaklı kullanıldığı projelerde aktif rol almak ve bu alanda yaratıcı çözümler üreterek topluma değer katan teknolojiler geliştirmektir.
                </p>
              </motion.div>
            </div>

            {/* Skills Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-16"
            >
              <h2 className="text-3xl font-bold mb-8 gradient-text text-center">Teknik Beceriler</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {/* Programming Languages */}
                <div className="card neon-border p-6">
                  <h3 className="text-xl font-bold mb-4 text-primary-400">Programlama Dilleri</h3>
                  <div className="space-y-4">
                    {[
                      { name: 'Python', level: 90, icon: '🐍' },
                      { name: 'Java', level: 85, icon: '♨️' },
                      { name: 'C#', level: 80, icon: '🔷' },
                      { name: 'HTML', level: 60, icon: '</>' },
                      { name: 'CSS', level: 60, icon: '🟨' },
                      { name: 'JavaScript', level: 60, icon: '｡🇯‌🇸‌' }
                    ].map((skill, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-2">
                            <span>{skill.icon}</span>
                            <span className="font-medium">{skill.name}</span>
                          </span>
                          <span className="text-sm text-gray-400">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              

                {/* Tools & Technologies */}
                <div className="card neon-border p-6">
                  <h3 className="text-xl font-bold mb-4 text-primary-400">Araçlar & Teknolojiler</h3>
                  <div className="space-y-4">
                    {[
                      { name: 'Git', level: 85, icon: '📚' },
                      { name: 'Docker', level: 80, icon: '🐳' },
                      { name: 'SQL', level: 70, icon: '📊' }
                      
                    ].map((skill, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-2">
                            <span>{skill.icon}</span>
                            <span className="font-medium">{skill.name}</span>
                          </span>
                          <span className="text-sm text-gray-400">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
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
