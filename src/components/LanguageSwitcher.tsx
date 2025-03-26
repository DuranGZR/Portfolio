import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type LanguageSwitcherProps = {
  className?: string;
  dropdownPosition?: 'top' | 'bottom';
};

export default function LanguageSwitcher({ 
  className = '', 
  dropdownPosition = 'bottom' 
}: LanguageSwitcherProps) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  // Mevcut diller
  const locales = router.locales || ['tr', 'en'];
  
  // Mevcut dil
  const currentLocale = router.locale || 'tr';
  
  // Dil isimlerini tanımla
  const localeNames: Record<string, string> = {
    tr: 'Türkçe',
    en: 'English'
  };
  
  // Dil bayraklarını tanımla
  const localeFlags: Record<string, string> = {
    tr: '🇹🇷',
    en: '🇬🇧'
  };

  // Dışarı tıklandığında dropdown'ı kapat
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 text-white hover:text-primary-400 transition-colors"
        aria-label="Dil değiştir"
      >
        <span className="text-lg">{localeFlags[currentLocale]}</span>
        <span className="hidden sm:inline">{localeNames[currentLocale]}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: dropdownPosition === 'top' ? 10 : -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: dropdownPosition === 'top' ? 10 : -10 }}
            transition={{ duration: 0.2 }}
            className={`absolute ${dropdownPosition === 'top' ? 'bottom-full mb-2' : 'top-full mt-2'} right-0 z-50 bg-dark-700 rounded-md shadow-lg py-2 min-w-[120px]`}
          >
            {locales.map((locale) => (
              <Link
                key={locale}
                href={router.pathname}
                locale={locale}
                className={`flex items-center px-4 py-2 hover:bg-dark-600 ${currentLocale === locale ? 'text-primary-400' : 'text-white'}`}
                onClick={() => setIsOpen(false)}
              >
                <span className="mr-2">{localeFlags[locale]}</span>
                <span>{localeNames[locale]}</span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}