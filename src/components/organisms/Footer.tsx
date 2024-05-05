import Link from 'next/link';
import { ReactNode } from 'react';
import { FaInstagram } from 'react-icons/fa6';

import { categories } from '@/libs/utils';

interface FooterProps {
  children?: ReactNode;
}

export function Footer({}: FooterProps) {
  return (
    <footer className="bg-primary text-primary-content">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 sm:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/">
              <span className="text-xl sm:text-2xl font-black whitespace-nowrap">THE OFFSHOP</span>
            </Link>
            <p className="font-thin">Loja da Cirurgia Oftalmológica</p>
          </div>
          <div className="grid grid-cols-2 gap-2 sm:gap-8 sm:grid-cols-3">
            {categories.map((category) => (
              <Link key={category.slug} href={category.href} className="link link-hover">
                {category.title}
              </Link>
            ))}
          </div>
        </div>
        <hr className="my-6 border-primary-content" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-primary-content">
            © 2024{' '}
            <Link href="/" className="link no-underline hover:underline">
              THE OFFSHOP
            </Link>
            . Todos os direitos reservados.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <Link href="https://instagram.com/theoffshop.ofc" className="btn btn-square btn-ghost">
              <FaInstagram className="w-6 h-6" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
