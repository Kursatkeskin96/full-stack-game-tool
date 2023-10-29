"use client"; 

import Link from 'next/link';
import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import tr from '@/images/tr.png'
import us from '@/images/us.png'
import Image from 'next/image';

function Navbar() {

const [nav, setNav] = useState(false)

const handleNav = () => {
  setNav(!nav)
}

  return (
    <>
    <div className='w-full h-14 shadow-xl z-[100] bg-[#14213D] p-2 fixed'>
     <div className='flex justify-between items-center w-full h-full pt-1 px-2 2xl:px-16'>
      <Link href='#home'>
      <span className='font text-md ml-5 hover:border-b text-white hover:border-[#FFAA00]'>albionprofit.com</span>
      </Link>
      <div>
        <ul className='hidden md:flex'>
          <Link href='/'>
            <li className='ml-10 text-sm hover:border-b hover:border-[#FFAA00] text-white'>Home</li>
          </Link>
          <Link href='/guides'>
            <li className='ml-10 text-sm text-white hover:border-b hover:border-[#FFAA00]'>Guides</li>
          </Link>
          <Link href='#skills'>
            <li className='ml-10 mr-5 text-sm text-white hover:border-b hover:border-[#FFAA00]'>Profit Calculator</li>
          </Link>
          <div className="flex justify-start items-center mt-2 lg:mt-0">
        <div className="lg:ml-2 ml-0 mr-2">
            <Image src={us} width={20} alt="en" style={{ cursor: "pointer" }} />
        </div>
        <div className="">
            <Image src={tr} width={20} alt="tr" style={{ cursor: "pointer" }} />
        </div>
        </div>
        </ul>

        <div className='flex justify-between items-center gap-6'>
        <div onClick={handleNav} className='md:hidden cursor-pointer'>
          <AiOutlineMenu className='text-white dark:text-white' size={25} />
        </div>
        </div>
      </div>
     </div>

    <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70  text-white ' : ''}> 
      <div className={nav 
      ? 'fixed left-0 top-0 w-[100%] sm:w-[60%] md:w-[45%]  h-screen bg-[#ecf0f3] dark:bg-black p-10 ease-in duration-500 ' 
      : 'fixed left-[-100%] h-screen top-0 p-10 ease-in duration-500 ' }>
        <div>
          <div className='flex  items-center justify-between'>
            <span className='font text-black'>albionprofit.com</span>
            <div onClick={handleNav} className='rounded-full shadow-lg bg-[#14213D] shadow-gray-400 p-3 cursor-pointer'>
              <AiOutlineClose />
            </div>
          </div>
          <div className='border-b border-[#FFAA00] pt-3 my-4'>

          </div>
        </div>
        <div className='flex flex-col'>
          <ul className=''>
            <Link href='#home'>
              <li onClick={() => setNav(false)} className='py-4 text-sm text-black'>Home</li>
            </Link>
            <Link href='#about'>
              <li onClick={() => setNav(false)} className='py-4 text-sm text-black'>Guide</li>
            </Link>
            <Link href='#skills'>
              <li onClick={() => setNav(false)} className='py-4 text-sm text-black'>Profit Calculator</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Navbar;