'use client';

import Link, { LinkProps } from 'next/link';

interface ProductCardBuyNowProps extends LinkProps {
  href: string;
}

export function ProductCardBuyNow({ href }: ProductCardBuyNowProps) {
  return (
    <Link id={`buynow${href}`} className="btn btn-primary" href={href} target="_blank">
      Compre agora
    </Link>
  );
}
