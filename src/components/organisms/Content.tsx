import { ReactNode } from 'react';

interface ContentProps {
  children: ReactNode;
}

export function Content({ children }: ContentProps) {
  return <div className="px-4 py-10 sm:p-12 min-h-screen">{children}</div>;
}
