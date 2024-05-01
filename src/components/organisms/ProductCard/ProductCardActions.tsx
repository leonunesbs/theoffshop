import { ReactNode } from 'react';

interface ProductCardActionsProps {
  children: ReactNode;
}

export function ProductCardActions({ children }: ProductCardActionsProps) {
  return <div className="card-actions justify-end">{children}</div>;
}
