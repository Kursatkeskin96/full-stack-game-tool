"use client";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useCallback } from "react";

export default function Pagination({ cat, tier, page, hasPrev, hasNext }) {
  const router = useRouter();
  const pathname = usePathname()
  const searchParams = useSearchParams()

    // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams)
      params.set(name, value)
 
      return params.toString()
    },
    [searchParams]
  )
 
  return (
    <div className="flex justify-between">
      <button
        disabled={!hasPrev}
        className="disabled:bg-gray-400 disabled:cursor-none w-24 p-2 bg-red-800 text-white cursor-pointer"
        onClick={() => {
          // <pathname>?sort=asc
          router.push(pathname + '?' + createQueryString('page', `${page-1}`))
        }}
      >
        Previous
      </button>
      <button
        disabled={!hasNext}
        className="disabled:bg-gray-400 disabled:cursor-default w-24 p-2 bg-red-800 text-white cursor-pointer"
        onClick={() => {
          // <pathname>?sort=asc
          router.push(pathname + '?' + createQueryString('page', `${page+1}`))
        }}>
        Next
      </button>
    </div>
  );
}