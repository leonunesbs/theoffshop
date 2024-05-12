import Link from 'next/link';
import { ReactNode, Suspense } from 'react';
import { FaCircleInfo } from 'react-icons/fa6';

import { SearchForm } from '../cells';

interface HeaderProps {
  children?: ReactNode;
}

export function Header({}: HeaderProps) {
  return (
    <header className="px-4 sm:px-8 py-4 space-y-2">
      <div className="flex items-center justify-between gap-4 sm:gap-10">
        <Link href="/">
          <span className="text-xl sm:text-2xl font-black whitespace-nowrap">THE OFFSHOP</span>
        </Link>
        <Suspense fallback={<>Loading...</>}>
          <div className="hidden sm:flex grow justify-center max-w-2xl">
            <SearchForm />
          </div>
        </Suspense>

        <div className="flex">
          <Link href="/about" className="btn btn-primary btn-sm">
            <FaCircleInfo className="h-4 w-4" />
            Informações
          </Link>
        </div>
      </div>
      <Suspense fallback={<>Loading...</>}>
        <div className="flex sm:hidden grow justify-center max-w-2xl">
          <SearchForm />
        </div>
      </Suspense>
    </header>
  );
}
