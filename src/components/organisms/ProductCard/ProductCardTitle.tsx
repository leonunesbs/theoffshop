interface ProductCardTitleProps {
  title: string;
}

export function ProductCardTitle({ title }: ProductCardTitleProps) {
  return <h3 className="card-title font-semibold text-sm">{title}</h3>;
}
