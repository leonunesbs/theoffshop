import { ReactNode } from 'react';

interface FooterProps {
  children?: ReactNode;
}

export function Footer({}: FooterProps) {
  return <footer>FOOTER</footer>;
}
