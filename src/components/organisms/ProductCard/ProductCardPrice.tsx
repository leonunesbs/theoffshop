interface ProductCardPriceProps {
  price: number;
}

export function ProductCardPrice({ price }: ProductCardPriceProps) {
  return <span className="text-2xl font-extrabold">R$ {price}</span>;
}
