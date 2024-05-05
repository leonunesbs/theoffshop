'use client';

import Link, { LinkProps } from 'next/link';

interface ProductCardBuyNowProps extends LinkProps {
  href: string;
}

export function ProductCardBuyNow({ href, ...rest }: ProductCardBuyNowProps) {
  return (
    <Link className="btn btn-primary" href={href} target="_blank" {...rest}>
      Compre agora
    </Link>
  );
}
