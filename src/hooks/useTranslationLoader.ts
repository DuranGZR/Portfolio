import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

type TranslationResponse = {
  success: boolean;
  message?: string;
  translations?: Record<string, any>;
};

/**
 * Dinamik olarak çeviri dosyalarını yüklemek için özel hook
 * @returns {object} Yüklenen çeviriler ve yükleme durumu
 */
export function useTranslationLoader() {
  const [translations, setTranslations] = useState<Record<string, any> | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchTranslations = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(`/api/translations?locale=${router.locale || 'tr'}`);
        const data: TranslationResponse = await response.json();

        if (data.success && data.translations) {
          setTranslations(data.translations);
        } else {
          setError(data.message || 'Çeviriler yüklenirken bir hata oluştu');
        }
      } catch (err) {
        setError('Çeviriler yüklenirken bir hata oluştu');
        console.error('Çeviri yükleme hatası:', err);
      } finally {
        setIsLoading(false);
      }
    };

    if (router.locale) {
      fetchTranslations();
    }
  }, [router.locale]);

  return { translations, isLoading, error };
}