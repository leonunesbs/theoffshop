import Link, { LinkProps } from 'next/link';
import { ReactNode } from 'react';

interface CategoryItemProps extends LinkProps {
  children: ReactNode;
  href: string;
}

export function CategoryItem({ children, href, ...rest }: CategoryItemProps) {
  return (
    <Link href={href} className="btn btn-primary btn-ghost" {...rest}>
      {children}
    </Link>
  );
}
