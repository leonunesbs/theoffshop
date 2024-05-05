'use client';

import { sendGAEvent } from '@next/third-parties/google';
import Link, { LinkProps } from 'next/link';

interface ProductCardBuyNowProps extends LinkProps {
  href: string;
  productTitle: string;
}

export function ProductCardBuyNow({ href, productTitle, ...rest }: ProductCardBuyNowProps) {
  return (
    <Link
      className="btn btn-primary"
      href={href}
      target="_blank"
      onClick={() => sendGAEvent({ event: 'buttonClicked', value: `Buy now: ${productTitle}` })}
      {...rest}
    >
      Compre agora
    </Link>
  );
}
