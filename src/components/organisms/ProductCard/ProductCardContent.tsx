import { ReactNode } from 'react';

interface ProductCardContentProps {
  children: ReactNode;
}

export function ProductCardContent({ children }: ProductCardContentProps) {
  return <div className="card-body justify-between">{children}</div>;
}
