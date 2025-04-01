import Link from 'next/link';
import { useRouter } from 'next/router';
import MobileMenu from './MobileMenu';

interface HeaderProps {
  t: (key: string) => string;
}

export default function Header({ t }: HeaderProps) {
  const router = useRouter();
  
  // Menü linkleri
  const links = [
    { href: '/', label: t('Ana Sayfa') },
    { href: '/about', label: t('Hakkımda') },
    { href: '/projects', label: t('Projeler') },
    { href: '/contact', label: t('İletişim') }
  ];
  
  // Mevcut diller
  const locales = router.locales || ['en', 'tr'];
  
  return (
    <header className="py-6 px-4 sm:px-6 lg:px-8 border-b border-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold gradient-text">Duran Gezer</Link>
        
        {/* Masaüstü Menü */}
        <nav className="hidden md:flex space-x-8">
          {links.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className={`text-white hover:text-primary-400 transition-colors ${router.pathname === link.href ? 'text-primary-400' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center space-x-4">
          {/* Mobil Menü */}
          <MobileMenu links={links} locales={locales} />
          
          {/* Dil Seçenekleri - Masaüstü için */}
          <div className="hidden md:flex space-x-4">
            {locales.map((locale) => (
              <Link 
                key={locale} 
                href={router.pathname} 
                locale={locale}
                className="text-white hover:text-primary-400 transition-colors"
              >
                {locale.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}