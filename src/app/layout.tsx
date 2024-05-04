import '@/styles/globals.css';

import { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import Link from 'next/link';

import { CategoriesBar, Content, Footer, Header } from '@/components/organisms';

const rubik = Rubik({ subsets: ['latin'], weight: ['900', '800', '700', '600', '500', '400', '300'] });

export const metadata: Metadata = {
  title: {
    template: '%s - THE OFFSHOP',
    default: `THE OFFSHOP - Loja da Cirurgia Oftalmológica`,
  },
  description: `Material cirúrgico oftalmológico de qualidade para o seu dia a dia`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const className = rubik.className;
  return (
    <html lang="pt-br">
      <body className={className}>
        <div className="flex justify-center bg-base-300 dark:bg-white text-base-300">
          <Link className="btn btn-link btn-sm no-underline" href={'/'}>
            Acesse aqui nosso guia de compras!
          </Link>
        </div>
        <Header />
        <CategoriesBar.Root>
          <CategoriesBar.Item href="?category=kit-pterigio">Kits Pterígio</CategoriesBar.Item>
          <CategoriesBar.Item href="?category=kit-catarata">Kits Catarata</CategoriesBar.Item>
          <CategoriesBar.Item href="?category=pincas">Pinças</CategoriesBar.Item>
          <CategoriesBar.Item href="?category=porta-agulhas">Porta agulhas</CategoriesBar.Item>
          <CategoriesBar.Item href="?category=tesouras">Tesouras</CategoriesBar.Item>
          <CategoriesBar.Item href="?category=especiais">Especiais</CategoriesBar.Item>
        </CategoriesBar.Root>
        <Content>{children}</Content>
        <Footer />
      </body>
    </html>
  );
}
