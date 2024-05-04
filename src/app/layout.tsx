import '@/styles/globals.css';

import { Metadata, Viewport } from 'next';
import { Rubik } from 'next/font/google';

import { CategoriesBar, Content, Footer, Header } from '@/components/organisms';
import { categories } from '@/libs/utils';

const rubik = Rubik({ subsets: ['latin'], weight: ['900', '800', '700', '600', '500', '400', '300'] });

export const metadata: Metadata = {
  title: {
    template: '%s - THE OFFSHOP',
    default: `THE OFFSHOP - Loja da Cirurgia Oftalmológica`,
  },
  description: `Material cirúrgico oftalmológico de qualidade para o seu dia a dia`,
  category: 'technology',
  robots: {
    index: false,
    follow: true,
    nocache: true,
  },
  generator: '@leonunesbs',
  applicationName: `THE OFFSHOP - Loja da Cirurgia Oftalmológica`,
  referrer: 'origin-when-cross-origin',
  keywords: [
    'oftalmologia',
    'cirurgia oftalmo',
    'material cirúrgico',
    'microcirurgia',
    'residência médica',
    'material r1',
    'material r2',
    'material r3',
    'kit pterigio',
    'kit catarata',
    'pincas oftalmo',
    'tesouras',
    'porta agulhas',
  ],
  authors: [{ name: 'Leonardo Nunes', url: 'https://github.com/leonunesbs' }],
  creator: 'Leonardo Nunes',
  publisher: 'Leonardo Nunes',
  openGraph: {
    title: 'THE OFFSHOP - Loja da Cirurgia Oftalmológica',
    description: `Material cirúrgico oftalmológico de qualidade para o seu dia a dia.`,
    url: 'https://theoffshop.com.br',
    siteName: `THE OFFSHOP`,
    images: [
      {
        url: 'https://theoffshop.com.br/favicon/apple-touch-icon.png',
        width: 180,
        height: 180,
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  icons: {
    icon: [
      'favicon.ico',
      {
        url: '/favicon/favicon-32x32.png',
        sizes: '32x32',
      },
      {
        url: '/favicon/favicon-16x16.png',
        sizes: '16x16',
      },
    ],
    apple: {
      url: '/favicon/apple-touch-icon.png',
      sizes: '180x180',
    },
    other: {
      rel: 'mask-icon',
      url: '/favicon/safari-pinned-tab.svg',
      color: '#ebebeb',
    },
  },
  manifest: '/favicon/site.webmanifest',
  appleWebApp: {
    title: 'THE OFFSHOP',
    statusBarStyle: 'black-translucent',
  },
  other: {
    applicationName: 'THE OFFSHOP',
    msapplicationTileColor: '#ebebeb',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#fff',

  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const className = rubik.className;
  return (
    <html lang="pt-BR">
      <body className={className}>
        {/* <div className="flex justify-center bg-base-300 dark:bg-white text-base-300">
          <Link className="btn btn-link btn-sm no-underline" href={'/'}>
            Acesse aqui nosso guia de compras!
          </Link>
        </div> */}
        <Header />
        <CategoriesBar.Root>
          {categories.map((category) => (
            <CategoriesBar.Item key={category.slug} href={category.href}>
              {category.title}
            </CategoriesBar.Item>
          ))}
        </CategoriesBar.Root>
        <Content>{children}</Content>
        <Footer />
      </body>
    </html>
  );
}
