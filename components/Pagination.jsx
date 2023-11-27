'use client'
import { useRouter } from 'next/navigation'
import React from 'react'


export default function Pagination({ cat, page, hasPrev, hasNext }) {
  const router = useRouter();

  return (
    <div className='flex justify-between'>
      <button
        disabled={!hasPrev}
        className='disabled:bg-gray-400 disabled:cursor-none w-24 p-2 bg-red-800 text-white cursor-pointer'
        onClick={() => router.push(`?page=${page-1}&cat=${cat}`)}>Previous</button>
      <button
        disabled={!hasNext}
        className='disabled:bg-gray-400 disabled:cursor-default w-24 p-2 bg-red-800 text-white cursor-pointer'
        onClick={() => router.push(`?page=${page+1}&cat=${cat}`)}>Next</button>
    </div>
  );
}
