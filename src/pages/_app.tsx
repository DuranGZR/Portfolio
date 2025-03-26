import '@/styles/globals.css';
import { appWithTranslation } from 'next-i18next';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import { AnimatePresence } from 'framer-motion';

const inter = Inter({ subsets: ['latin'] });

function App({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <main className={inter.className}>
        <AnimatePresence mode="wait">
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </main>
    </ThemeProvider>
  );
}

export default appWithTranslation(App);