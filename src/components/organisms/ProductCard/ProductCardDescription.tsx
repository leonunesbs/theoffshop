import { ReactNode } from 'react';

interface ProductCardDescriptionProps {
  children: ReactNode;
}

export function ProductCardDescription({ children }: ProductCardDescriptionProps) {
  return <p>{children}</p>;
}
