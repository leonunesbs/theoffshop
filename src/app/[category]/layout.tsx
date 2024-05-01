import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `THE OFFSHOP - Loja da Cirurgia Oftalmológica`,
  description: `Material cirúrgico oftalmológico de qualidade para o seu dia a dia`,
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    category: string;
  };
}) {
  const titles: {
    [key: string]: string;
  } = {
    'kits-pterigio': 'Kits Pterígio',
    'kits-catarata': 'Kits Catarata',
    pincas: 'Pinças',
    'porta-agulhas': 'Porta agulhas',
    tesouras: 'Tesouras',
    especiais: 'Especiais',
  };
  return (
    <div>
      <h2 className="text-center text-4xl mb-4">{titles[params.category]}</h2>
      {children}
    </div>
  );
}
