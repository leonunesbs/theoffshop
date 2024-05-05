import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next/types';

import { ProductCard } from '@/components/organisms';
import { categories, normalizeText } from '@/libs/utils';
import mainCatalog from '@/public/catalog.json';

export async function generateMetadata({
  searchParams,
}: {
  searchParams?: {
    search: string;
    category: string;
    page?: number;
  };
}): Promise<Metadata> {
  if (searchParams?.category) {
    return {
      title: `${categories.find((category) => category.slug == searchParams?.category)?.title as string} - THE OFFSHOP`,
    };
  } else if (searchParams?.search) {
    return {
      title: `Busca: "${searchParams.search}" - THE OFFSHOP`,
    };
  } else {
    return {};
  }
}

export default function Home({
  searchParams,
}: {
  searchParams?: {
    search: string;
    category: string;
    page: number;
  };
}) {
  const itemsPerPage = 12;
  const page = parseInt(searchParams?.page?.toString() || '1');

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

  const catalog = (searchParams?.search ? filteredCatalog : mainCatalog).sort((a, b) => {
    return normalizeText(a.name).localeCompare(normalizeText(b.name));
  });
  const products = searchParams?.category
    ? catalog.filter(({ categories }) => categories.includes(searchParams?.category))
    : catalog;

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const selectedProducts = products.slice(startIndex, startIndex + itemsPerPage);

  const nextPage = page + 1;
  const prevPage = page - 1;

  return (
    <section>
      <h2 className="text-2xl font-semibold text-center mb-8">
        {categories.find((category) => category.slug == searchParams?.category)?.title}
      </h2>
      {searchParams?.search && (
        <p className="mb-4">Mostrando resultados de busca: &ldquo;{searchParams.search}&rdquo;</p>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        {selectedProducts.map(({ id, name, imageUrls, productUrl, description }) => (
          <ProductCard.Root key={id}>
            <div className="carousel w-full bg-base-300 h-[300px]">
              {imageUrls.map((src) => (
                <ProductCard.Image key={src} src={src} alt={name} />
              ))}
            </div>
            <ProductCard.Content>
              <ProductCard.Title title={name} />
              <ProductCard.Description>{description}</ProductCard.Description>
              <div className="flex justify-between">
                <Image src="aliexpress_logo.svg" alt="Aliexpress Logo" width={80} height={30} />
                <ProductCard.Actions>
                  <ProductCard.BuyNow href={productUrl} productName={name} />
                </ProductCard.Actions>
              </div>
            </ProductCard.Content>
          </ProductCard.Root>
        ))}
      </div>
      {totalPages > 1 && (
        <div className="join flex justify-center">
          {page > 1 ? (
            <Link
              href={`?${searchParams?.category ? `category=${searchParams.category}&` : ''}${searchParams?.search ? `search=${searchParams.search}&` : ''}page=${prevPage}`}
              className={'join-item btn btn-ghost'}
            >
              «
            </Link>
          ) : (
            <Link href={'/'} className={'join-item btn btn-ghost invisibleg'}>
              «
            </Link>
          )}
          <button className="join-item btn btn-ghost">Pág. {page}</button>
          {page < totalPages ? (
            <Link
              href={`?${searchParams?.category ? `category=${searchParams.category}&` : ''}${searchParams?.search ? `search=${searchParams.search}&` : ''}page=${nextPage}`}
              className="join-item btn btn-ghost"
            >
              »
            </Link>
          ) : (
            <Link href={'/'} className={'join-item btn btn-ghost invisibleg'}>
              »
            </Link>
          )}
        </div>
      )}
      {selectedProducts.length == 0 && (
        <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 text-center">
          <i>Nenhum produto encontrado com esse filtro.</i>
        </div>
      )}
    </section>
  );
}
