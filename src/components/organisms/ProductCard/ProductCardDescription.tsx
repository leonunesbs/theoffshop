import { ReactNode } from 'react';

interface ProductCardDescriptionProps {
  children: ReactNode;
}

export function ProductCardDescription({ children }: ProductCardDescriptionProps) {
  return (
    <div role="contentinfo" className="line-clamp-4 py-2">
      {children}
    </div>
  );
}
