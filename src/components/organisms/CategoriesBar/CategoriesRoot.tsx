import { ReactNode } from 'react';

interface CategoriesRootProps {
  children: ReactNode;
}

export function CategoriesRoot({ children }: CategoriesRootProps) {
  return (
    <div
      className="bg-primary text-primary-content space-x-2 overflow-scroll justify-start sm:justify-center flex whitespace-nowrap shadow dark:shadow-none"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      {children}
    </div>
  );
}
