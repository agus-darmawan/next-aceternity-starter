import { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { ReactNode } from 'react';

import '@/styles/globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s | Starter',
    default: 'Homepage | Starter',
  },
  description: 'Agus Darmawan starter website.',
  applicationName: 'Agus Darmawan next js starter template',
  authors: [{ name: 'Agus Darmawan' }],
  generator: 'Next.js',
  keywords: [
    'Agus Darmawan',
    'code',
    'web development',
    'javascript',
    'react',
    'node.js',
    'portfolio',
    'web dev',
    'html',
    'css',
    'python',
    'robotics',
    'ros',
    'barunastra',
  ],
  referrer: 'origin-when-cross-origin',
  creator: 'Agus Darmawan',
  publisher: 'Agus Darmawan',
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

interface IRootLayoutProps {
  children: ReactNode;
  params: {
    locale: string;
  };
}

const RootLayout = ({ children, params }: IRootLayoutProps) => {
  const { locale } = params;
  return (
    <html lang={locale}>
      <body className={poppins.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
