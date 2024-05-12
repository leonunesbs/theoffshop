'use client';

import { redirect, useParams, useRouter, useSearchParams } from 'next/navigation';
import { ReactNode, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface SearchFormProps {
  children?: ReactNode;
}

export function SearchForm({}: SearchFormProps) {
  const { category } = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const { handleSubmit, register, reset } = useForm<{
    searchString: string;
  }>();

  const onSubmit: SubmitHandler<{ searchString: string }> = async ({ searchString }) => {
    if (!searchString) redirect('/');

    category ? router.push(`/${category}?search=${searchString}`) : router.push(`/?search=${searchString}`);
  };
  useEffect(() => {
    !searchParams.get('searchString') && reset();
  }, [reset, searchParams]);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex grow">
      <label
        htmlFor="searchString"
        className="input input-bordered items-center pr-0 gap-2 grow flex join"
        aria-label="Digite aqui a sua busca"
      >
        <input
          id="searchString"
          type="text"
          placeholder="busque aqui seu material cirúrgico"
          aria-placeholder="busque aqui seu material cirúrgico"
          className="grow join-item"
          {...register('searchString')}
        />
        <button type="submit" className="join-item btn btn-ghost" aria-label="buscar">
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
