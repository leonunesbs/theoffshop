import { ProductCard } from '@/components/organisms';
import mainCatalog from '@/public/catalog.json';

export default function Home({
  searchParams,
}: {
  searchParams?: {
    search: string;
  };
}) {
  // Função para normalizar strings removendo espaços, acentos e caracteres especiais
  function normalizeText(text: string) {
    return text
      .normalize('NFD') // Normaliza a string para a forma de decomposição canônica
      .replace(/[\u0300-\u036f]/g, '') // Remove acentos
      .replace(/[^a-z0-9]/gi, '') // Remove caracteres não alfanuméricos
      .toLowerCase(); // Converte para minúsculo
  }

  // Filtragem do catálogo com a função de normalização
  const filteredCatalog = searchParams?.search
    ? mainCatalog.filter((product) => {
        const normalizedSearch = normalizeText(searchParams.search);
        return (
          normalizeText(product.name).includes(normalizedSearch) ||
          product.price.toString().includes(normalizedSearch) ||
          product.categories.some((category) => normalizeText(category).includes(normalizedSearch))
        );
      })
    : mainCatalog;

  const catalog = searchParams?.search ? filteredCatalog : mainCatalog;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {catalog.map(({ id, name, imageUrl, price, productUrl }) => (
        <ProductCard.Root key={id}>
          <ProductCard.Image src={imageUrl} alt={name} />
          <ProductCard.Content>
            <ProductCard.Title title={name} />
            <ProductCard.Price price={price} />
            <ProductCard.Actions>
              <ProductCard.BuyNow href={productUrl} />
            </ProductCard.Actions>
          </ProductCard.Content>
        </ProductCard.Root>
      ))}
    </div>
  );
}
