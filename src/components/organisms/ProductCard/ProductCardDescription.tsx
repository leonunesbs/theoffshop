import { ReactNode } from 'react';

interface ProductCardDescriptionProps {
  children: ReactNode;
}

export function ProductCardDescription({ children }: ProductCardDescriptionProps) {
  return (
    <>
      <p className="text-lg font-extrabold">R$ 580</p>
      <p>{children}</p>
    </>
  );
}
