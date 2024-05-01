import '@/styles/globals.css';

import { Metadata } from 'next';
import { Rubik } from 'next/font/google';

import { CategoriesBar, Content, Footer, Header } from '@/components/organisms';

const rubik = Rubik({ subsets: ['latin'], weight: ['900', '800', '700', '600', '500', '400', '300'] });

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
        <CategoriesBar.Root>
          <CategoriesBar.Item href="/">Kit Pterígio</CategoriesBar.Item>
          <CategoriesBar.Item href="/">Kit Catarata</CategoriesBar.Item>
          <CategoriesBar.Item href="/">Kit Retirada de pontos</CategoriesBar.Item>
          <CategoriesBar.Item href="/">Pinças</CategoriesBar.Item>
          <CategoriesBar.Item href="/">Porta agulhas</CategoriesBar.Item>
          <CategoriesBar.Item href="/">Tesouras</CategoriesBar.Item>
          <CategoriesBar.Item href="/">Especiais</CategoriesBar.Item>
        </CategoriesBar.Root>
        <Content>{children}</Content>
        <Footer />
      </body>
    </html>
  );
}
