import '@/styles/globals.css';

import { SpeedInsights } from '@vercel/speed-insights/next';
import { Metadata, Viewport } from 'next';
import { Rubik } from 'next/font/google';
import Head from 'next/head';

import { CategoriesBar, Content, Footer, Header } from '@/components/organisms';
import { categories } from '@/libs/utils';

const rubik = Rubik({ subsets: ['latin'], weight: ['900', '800', '700', '600', '500', '400', '300'] });

const schemaOrgJsonLd = {
  '@context': 'http://schema.org',
  '@type': 'Store',
  name: 'THE OFFSHOP - Loja da Cirurgia Oftalmológica',
  description: 'Encontre materiais cirúrgicos oftalmológicos de qualidade para sua rotina diária.',
  url: 'https://theoffshop.com.br',
  logo: 'https://theoffshop.com.br/favicon/apple-touch-icon.png',
  currency: 'BRL',
};

export const metadata: Metadata = {
  title: {
    template: '%s - THE OFFSHOP',
    default: `THE OFFSHOP - Loja da Cirurgia Oftalmológica`,
  },
  description: 'Encontre materiais cirúrgicos oftalmológicos de qualidade para sua rotina diária.',
  category: 'ecommerce',
  generator: '@leonunesbs',
  applicationName: `THE OFFSHOP - Loja da Cirurgia Oftalmológica`,
  referrer: 'origin-when-cross-origin',
  keywords: [
    'cirurgia',
    'oftalmológica',
    'oftalmológicos',
    'materiais',
    'qualidade',
    'oftalmologia',
    'cirurgia oftalmo',
    'material cirúrgico',
    'microcirurgia',
    'pterígio',
    'catarata',
    'pincas oftalmo',
    'tesoura',
    'porta agulha',
    'blefaroestato',
    'colibri',
    'lâmina',
  ],
  authors: [{ name: 'Leonardo Nunes', url: 'https://github.com/leonunesbs' }],
  creator: 'Leonardo Nunes',
  publisher: 'Leonardo Nunes',
  metadataBase: new URL('https://theoffshop.com.br'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'THE OFFSHOP - Loja da Cirurgia Oftalmológica',
    description: `Encontre materiais cirúrgicos oftalmológicos de qualidade para sua rotina diária..`,
    url: 'https://theoffshop.com.br',
    siteName: `THE OFFSHOP`,
    images: [
      {
        url: '/favicon/apple-touch-icon.png',
        width: 180,
        height: 180,
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  icons: {
    icon: [
      '/favicon/favicon.ico',
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
    'application/ld+json': JSON.stringify(schemaOrgJsonLd),
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
      <Head>
        <script type="application/ld+json">{JSON.stringify(schemaOrgJsonLd)}</script>
      </Head>
      <body>
        <div className={className}>
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
        </div>
        {/* <GoogleAnalytics gaId="G-TLQGN5157J" />
        <GoogleTagManager gtmId="GTM-MVNL439Q" />
        <Analytics /> */}
        <SpeedInsights />
      </body>
    </html>
  );
}
