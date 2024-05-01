import { redirect } from 'next/navigation';
import { ReactNode } from 'react';

interface SearchFormProps {
  children?: ReactNode;
}

export function SearchForm({}: SearchFormProps) {
  const onSubmit = async (formData: FormData) => {
    'use server';
    const searchString = formData.get('searchString');
    if (!searchString) return;
    redirect(`?q=${searchString}`);
  };
  return (
    <form action={onSubmit} className="flex grow">
      <label className="input input-bordered items-center gap-2 grow flex">
        <input type="text" placeholder="busque aqui seu material cirúrgico" className="grow" name="searchString" />
        <button type="submit">
          <svg
            viewBox="0 0 31.5 31.5"
            aria-labelledby="searchIcon searchDesc"
            className="fill-base-content"
            width={21}
            height={21}
          >
            <path
              fill="inherit"
              d="M22.5 12.855a9.643 9.643 0 10-9.643 9.643 9.673 9.673 0 009.643-9.643zm.48 7.873l8.041 8.041a1.591 1.591 0 11-2.25 2.25l-8.041-8.041a12.331 12.331 0 01-7.873 2.738 12.858 12.858 0 1112.854-12.862 12.309 12.309 0 01-2.731 7.873z"
            />
          </svg>
        </button>
      </label>
    </form>
  );
}
