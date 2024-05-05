'use client';

import { sendGAEvent } from '@next/third-parties/google';
import Link, { LinkProps } from 'next/link';

interface ProductCardBuyNowProps extends LinkProps {
  href: string;
}

export function ProductCardBuyNow({ href }: ProductCardBuyNowProps) {
  return (
    <Link
      className="btn btn-primary"
      href={href}
      target="_blank"
      onClick={() => sendGAEvent({ event: 'generate_lead', value: 'New Lead' })}
    >
      Compre agora
    </Link>
  );
}
