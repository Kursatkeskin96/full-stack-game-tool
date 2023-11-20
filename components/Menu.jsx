import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import pic1 from "@/images/pic1.png";

export default function Menu() {
  return (
    <div className='lg:w-2/6 w-full'>
      <h1 className='mt-12 mb-6 text-2xl font-bold'>Most Popular</h1>
      <div>
        <Link href='/' className='flex items-center gap-5'>
          <div className='w-1/4 relative aspect-square'>
            <Image src={pic1} alt='' fill className=' object-cover rounded-[50%] border-[3px] border-gray-200' />
          </div>
          <div className='w-3/4 flex flex-col gap-1'>
            <span className='text-xs rounded-lg font-[12px] px-2 py-[3px] bg-[#BCE29E] text-white w-fit'>Craft</span>
            <h3 className='text-sm'>How To Become A 700 Spec Crafter?</h3>
            <div>
              <span className='text-xs text-gray-500'>Shwarzfit - </span>
              <span className='text-xs text-gray-300'>03.12.2023</span>
            </div>
          </div>
        </Link>
        <Link href='/' className='flex items-center gap-5 my-4'>
          <div className='w-1/4 relative aspect-square'>
            <Image src={pic1} alt='' fill className=' object-cover rounded-[50%] border-[3px] border-gray-200' />
          </div>
          <div className='w-3/4 flex flex-col gap-1'>
            <span className='text-xs rounded-lg font-[12px] px-2 py-[3px] bg-[#E9B384] text-white w-fit'>Gather</span>
            <h3 className='text-sm'>How To Become A 700 Spec Crafter?</h3>
            <div>
              <span className='text-xs text-gray-500'>Shwarzfit - </span>
              <span className='text-xs text-gray-300'>03.12.2023</span>
            </div>
          </div>
        </Link>
        <Link href='/' className='flex items-center gap-5'>
          <div className='w-1/4 relative aspect-square'>
            <Image src={pic1} alt='' fill className=' object-cover rounded-[50%] border-[3px] border-gray-200' />
          </div>
          <div className='w-3/4 flex flex-col gap-1'>
            <span className='text-xs rounded-lg font-[12px] px-2 py-[3px] bg-[#7C9D96]  text-white w-fit'>Refine</span>
            <h3 className='text-sm'>How To Become A 700 Spec Crafter?</h3>
            <div>
              <span className='text-xs text-gray-500'>Shwarzfit - </span>
              <span className='text-xs text-gray-300'>03.12.2023</span>
            </div>
          </div>
        </Link>
        <Link href='/' className='flex items-center gap-5 my-4'>
          <div className='w-1/4 relative aspect-square'>
            <Image src={pic1} alt='' fill className=' object-cover rounded-[50%] border-[3px] border-gray-200' />
          </div>
          <div className='w-3/4 flex flex-col gap-1'>
            <span className='text-xs rounded-lg font-[12px] px-2 py-[3px] bg-[#9cb274] text-white w-fit'>Economy</span>
            <h3 className='text-sm'>How To Become A 700 Spec Crafter?</h3>
            <div>
              <span className='text-xs text-gray-500'>Shwarzfit - </span>
              <span className='text-xs text-gray-300'>03.12.2023</span>
            </div>
          </div>
        </Link>
      </div>
      <h2 className='mt-12 mb-6 text-2xl font-bold'>Categories</h2>
      <div className='flex justify-center items-center gap-4 flex-wrap'>
      <div className='bg-[#A1CCD1] hover:bg-[#b2e2e8] cursor-pointer text-white w-20 h-6 rounded-lg shadow-md border-[1px] border-gray-400 text-center flex justify-center items-center text-xs'>PVP</div>
            <div className='bg-[#dedcc9] hover:bg-[#eeecd9] cursor-pointer text-white w-20 h-6 rounded-lg shadow-md text-center border-[1px] border-gray-400 flex justify-center items-center text-xs'>PVE</div>
            <div className='bg-[#E9B384] hover:bg-[#f8bf8e] cursor-pointer text-white w-20 h-6 rounded-lg shadow-md text-center border-[1px] border-gray-400 flex justify-center items-center text-xs'>Gather</div>
            <div className='bg-[#7C9D96] hover:bg-[#95bab1] cursor-pointer text-white w-20 h-6 rounded-lg shadow-md text-center border-[1px] border-gray-400 flex justify-center items-center text-xs'>Refine</div>
            <div className='bg-[#BCE29E] hover:bg-[#c8f0a9] cursor-pointer text-white  w-20 h-6 rounded-lg shadow-md text-center border-[1px] border-gray-400 flex justify-center items-center text-xs'>Craft</div>
            <div className='bg-[#9cb274] hover:bg-[#f0f6ba] cursor-pointer text-white  w-20 h-6 rounded-lg shadow-md text-center border-[1px] border-gray-400 flex justify-center items-center text-xs'>Economy</div>
            </div>
    </div>
  )
}
