import React, { createContext, useContext, ReactNode } from 'react';
import { useTranslationLoader } from '../hooks/useTranslationLoader';

type TranslationContextType = {
  translations: Record<string, any> | null;
  isLoading: boolean;
  error: string | null;
};

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

type TranslationProviderProps = {
  children: ReactNode;
};

export function TranslationProvider({ children }: TranslationProviderProps) {
  const { translations, isLoading, error } = useTranslationLoader();

  return (
    <TranslationContext.Provider value={{ translations, isLoading, error }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
}