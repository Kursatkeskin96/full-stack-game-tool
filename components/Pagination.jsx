"use client";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useCallback } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";


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
        className="disabled:bg-gray-400 flex justify-center items-center disabled:cursor-none w-24 p-2 bg-[#aaa77f] hover:bg-[#b9b58a] text-white cursor-pointer"
        onClick={() => {
          // <pathname>?sort=asc
          router.push(pathname + '?' + createQueryString('page', `${page-1}`))
        }}
      >
      <span className="mt-[2px] text-sm mr-2"><FaArrowLeft /></span>  Previous
      </button>
      <button
        disabled={!hasNext}
        className="disabled:bg-gray-400 flex justify-center items-center disabled:cursor-default w-24 p-2 bg-[#aaa77f] hover:bg-[#b9b58a] text-white cursor-pointer"
        onClick={() => {
          // <pathname>?sort=asc
          router.push(pathname + '?' + createQueryString('page', `${page+1}`))
        }}>
        Next <span className="mt-[2px] text-sm ml-2"><FaArrowRight /></span>
      </button>
    </div>
  );
}