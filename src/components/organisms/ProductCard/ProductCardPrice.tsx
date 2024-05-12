interface ProductCardPriceProps {
  itemId: bigint;
}

export async function ProductCardPrice({ itemId }: ProductCardPriceProps) {
  async function fetchPrice(itemId: bigint) {
    'use server';
    const url = `https://aliexpress-datahub.p.rapidapi.com/item_detail_2?itemId=${itemId}&currency=BRL&region=BR&locale=pt_BR`;
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
      return {
        price: (
          (result.item.sku.def.promotionPrice as string | number) || (result.item.sku.def.price as string | number)
        )
          .toString()
          .replaceAll('.', ','),
        promotion: !!result.item.sku.def.promotionPrice,
      };
    } catch (error) {
      console.error(error);
      return {
        price: '',
        promotion: false,
      };
    }
  }
  const result = await fetchPrice(itemId);
  return (
    <div>
      {result.promotion && <span className="badge badge-primary badge-sm">PROMO</span>}
      <p className="text-xl font-semibold flex items-center gap-1">R$ {result.price}</p>
    </div>
  );
}
