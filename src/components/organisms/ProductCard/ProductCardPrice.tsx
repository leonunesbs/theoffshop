interface ProductCardPriceProps {
  price: number;
}

export function ProductCardPrice({ price }: ProductCardPriceProps) {
  return <span className="text-lg font-extrabold">R$ {price}</span>;
}
