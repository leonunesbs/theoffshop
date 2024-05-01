import Link, { LinkProps } from 'next/link';

interface ProductCardBuyNowProps extends LinkProps {
  href: string;
}

export function ProductCardBuyNow({ href, ...rest }: ProductCardBuyNowProps) {
  return (
    <Link className="btn btn-primary" href={href} {...rest}>
      Compre agora
    </Link>
  );
}
