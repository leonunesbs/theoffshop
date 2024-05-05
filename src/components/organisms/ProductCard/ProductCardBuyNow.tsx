'use client';

import Link, { LinkProps } from 'next/link';

interface ProductCardBuyNowProps extends LinkProps {
  href: string;
  productName: string;
}

export function ProductCardBuyNow({ href, productName }: ProductCardBuyNowProps) {
  return (
    <Link id={`buynow_${productName}`} className="btn btn-primary" href={href} target="_blank">
      Compre agora
    </Link>
  );
}
