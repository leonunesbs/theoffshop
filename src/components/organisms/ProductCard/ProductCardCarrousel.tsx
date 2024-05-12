import Image from 'next/image';

interface ProductCardCarrouselProps {
  itemId: number;
}
//
export async function ProductCardCarrousel({ itemId }: ProductCardCarrouselProps) {
  async function fetchImages(itemId: number) {
    'use server';
    const url = `https://aliexpress-datahub.p.rapidapi.com/item_detail_simple?itemId=${itemId}&currency=BRL&region=BR&locale=pt_BR`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.RAPID_APIKEY as string,
        'X-RapidAPI-Host': 'aliexpress-datahub.p.rapidapi.com',
      },
    };

    try {
      const response = await fetch(url, options);
      const { result } = await response.json();
      return result.item.images as string[];
    } catch (error) {
      console.error(error);
      return [''];
    }
  }
  return (
    <div className="carousel w-full bg-base-300 h-[300px]">
      {(await fetchImages(itemId)).map((imageUrl, i) => {
        const url = `https://${imageUrl.split('//')[1]}`;
        return (
          <div key={`${imageUrl} ${i}`} className="carousel-item relative w-full h-full">
            <Image
              alt={`${imageUrl} ${i}`}
              style={{
                objectFit: 'contain',
              }}
              fill
              src={url}
              quality={50}
              sizes="350x350"
            />
          </div>
        );
      })}
    </div>
  );
}
