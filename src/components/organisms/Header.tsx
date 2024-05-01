import Link from 'next/link';
import { ReactNode } from 'react';

import { SearchForm } from '../cells';

interface HeaderProps {
  children?: ReactNode;
}

export function Header({}: HeaderProps) {
  return (
    <header className="px-4 sm:px-8 py-4 space-y-2">
      <div className="flex items-center justify-between gap-4 sm:gap-10">
        <Link href="/">
          <h1 className="text-lg sm:text-2xl font-black whitespace-nowrap">THE OFFSHOP</h1>
        </Link>
        <div className="hidden sm:flex grow justify-center max-w-2xl">
          <SearchForm />
        </div>

        <div className="flex">
          <button type="button">Btn</button>
          <button type="button">Btn</button>
          <button type="button">Btn</button>
        </div>
      </div>
      <div className="flex sm:hidden grow justify-center max-w-2xl">
        <SearchForm />
      </div>
    </header>
  );
}
