import { ReactNode } from 'react';

interface ProductCardDescriptionProps {
  children: ReactNode;
}

export function ProductCardDescription({ children }: ProductCardDescriptionProps) {
  return (
    <>
      <span className="text-lg font-extrabold">R$ 580</span>
      <p role="contentinfo" className="line-clamp-4">
        {children}
      </p>
    </>
  );
}
