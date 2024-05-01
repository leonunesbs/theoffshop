interface ProductCardTitleProps {
  title: string;
}

export function ProductCardTitle({ title }: ProductCardTitleProps) {
  return <h2 className="card-title">{title}</h2>;
}
