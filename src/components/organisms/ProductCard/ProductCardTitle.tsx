interface ProductCardTitleProps {
  title: string;
}

export function ProductCardTitle({ title }: ProductCardTitleProps) {
  return (
    <h3 className="card-title font-semibold text-md mb-2" itemProp="name">
      {title}
    </h3>
  );
}
