import '@/styles/globals.css';

import { Metadata } from 'next';
import { Rubik } from 'next/font/google';

import { Content, Footer, Header } from '@/components/organisms';

const rubik = Rubik({ subsets: ['latin'], weight: ['900', '400'] });

export const metadata: Metadata = {
  title: `THE OFFSHOP - Loja da Cirurgia Oftalmológica`,
  description: `Material cirúrgico oftalmológico de qualidade para o seu dia a dia`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const className = rubik.className;
  return (
    <html lang="pt-br">
      <body className={className}>
        <Header />
        <Content>{children}</Content>
        <Footer />
      </body>
    </html>
  );
}
