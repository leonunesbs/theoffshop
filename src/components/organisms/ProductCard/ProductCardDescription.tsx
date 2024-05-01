import { ReactNode } from 'react';

interface ProductCardDescriptionProps {
  children: ReactNode;
}

export function ProductCardDescription({ children }: ProductCardDescriptionProps) {
  return (
    <p role="contentinfo" className="line-clamp-4">
      {children}
    </p>
  );
}
