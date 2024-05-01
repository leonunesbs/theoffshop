import '@/styles/globals.css';

import { Metadata } from 'next';
import { Rubik } from 'next/font/google';

const rubik = Rubik({ subsets: ['latin'], weight: ['900', '400'] });

export const metadata: Metadata = {
  title: `THE OFFSHOP - Materiais para Cirurgia Oftalmológica`,
  description: `Material cirúrgico oftalmológico de qualidade para o seu dia a dia`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={rubik.className}>{children}</body>
    </html>
  );
}
