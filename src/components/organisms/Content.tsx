import { ReactNode } from 'react';

interface ContentProps {
  children: ReactNode;
}

export function Content({ children }: ContentProps) {
  return <div className="p-4 sm:p-12">{children}</div>;
}
