interface ProductCardPriceProps {
  itemId: number;
}

export async function ProductCardPrice({ itemId }: ProductCardPriceProps) {
  async function fetchPrice(itemId: number) {
    'use server';
    const url = `https://aliexpress-datahub.p.rapidapi.com/item_detail_2?itemId=${itemId}&currency=BRL&region=BR&locale=pt_BR`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '877af531f3msh0f61fe6c3d1bb3ap1ba315jsn0556c756e673',
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
