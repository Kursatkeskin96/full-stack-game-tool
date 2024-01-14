import React from 'react'
import Link from 'next/link'


export default async function Menu() {
  return (
    <div className='lg:w-2/6 w-full pt-14'>
      <h2 className='mb-6 text-2xl font-bold'>Categories</h2>
      <div className='flex justify-center items-center gap-4 flex-wrap'>
      <Link href='/guides/categories?cat=general'><div className='bg-[#A1CCD1] hover:bg-[#b2e2e8] cursor-pointer text-white w-20 h-6 rounded-lg shadow-md border-[1px] border-gray-400 text-center flex justify-center items-center text-xs'>General</div></Link>
      <Link href='/guides/categories?cat=pvp-pve'><div className='bg-[#dedcc9] hover:bg-[#eeecd9] cursor-pointer text-white w-20 h-6 rounded-lg shadow-md text-center border-[1px] border-gray-400 flex justify-center items-center text-xs'>Pvp / Pve</div></Link>
      <Link href='/guides/categories?cat=gather'><div className='bg-[#E9B384] hover:bg-[#f8bf8e] cursor-pointer text-white w-20 h-6 rounded-lg shadow-md text-center border-[1px] border-gray-400 flex justify-center items-center text-xs'>Gather</div></Link>
      <Link href='/guides/categories?cat=refine'><div className='bg-[#7C9D96] hover:bg-[#95bab1] cursor-pointer text-white w-20 h-6 rounded-lg shadow-md text-center border-[1px] border-gray-400 flex justify-center items-center text-xs'>Refine</div></Link>
      <Link href='/guides/categories?cat=craft'><div className='bg-[#BCE29E] hover:bg-[#c8f0a9] cursor-pointer text-white  w-20 h-6 rounded-lg shadow-md text-center border-[1px] border-gray-400 flex justify-center items-center text-xs'>Craft</div></Link>
      <Link href='/guides/categories?cat=economy'><div className='bg-[#9cb274] hover:bg-[#f0f6ba] cursor-pointer text-white  w-20 h-6 rounded-lg shadow-md text-center border-[1px] border-gray-400 flex justify-center items-center text-xs'>Economy</div></Link>
            </div>
    </div>
  )
}
