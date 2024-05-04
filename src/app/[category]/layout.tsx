import { Metadata } from 'next';

const titles: {
  [key: string]: string;
} = {
  'kit-pterigio': 'Kits Pterígio',
  'kit-catarata': 'Kits Catarata',
  pincas: 'Pinças',
  'porta-agulhas': 'Porta agulhas',
  tesouras: 'Tesouras',
  especiais: 'Especiais',
};

export async function generateMetadata({
  params,
}: {
  params: {
    category: string;
  };
}): Promise<Metadata> {
  return {
    title: titles[params.category],
  };
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    category: string;
  };
}) {
  return (
    <div>
      <h2 className="text-center text-4xl mb-4">{titles[params.category]}</h2>
      {children}
    </div>
  );
}
