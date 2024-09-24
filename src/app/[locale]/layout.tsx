import { Poppins } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale,
} from 'next-intl/server';
import { ReactNode } from 'react';

import '@/styles/globals.css';

import { ThemeProvider } from '@/components/ThemeProvider';

import { locales } from '@/config';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

type RootLayoutProps = {
  children: ReactNode;
  params: {
    locale: string;
  };
};

export function generateStaticParam() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: Omit<RootLayoutProps, 'children'>) {
  const t = await getTranslations({ locale, namespace: 'RootLayout' });
  return {
    title: t('title'),
  };
}

export default async function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  unstable_setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <ThemeProvider
        attribute='class'
        defaultTheme='system'
        enableSystem
        disableTransitionOnChange
      >
        <body className={poppins.className}>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </body>
      </ThemeProvider>
    </html>
  );
}
