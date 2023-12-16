import React from 'react'
import Link from 'next/link'
import { FaDiscord } from "react-icons/fa";


export default function Footer() {
  return (
    <>
<div>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
  <path fill="#1b1b1b" fill-opacity="1" d="M0,128L120,133.3C240,139,480,149,720,149.3C960,149,1200,139,1320,133.3L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
</svg>
</div>
    <div className='min-h-52 h-fit items-center pt-2 text-[#ECECEC] bg-[#1b1b1b] text-sm flex-wrap'>
    <div className='flex flex-col lg:flex-row justify-evenly items-center gap-4 lg:gap-0'>
        <div className='lg:w-[30%] w-[100%] text-center'>
            <ul className='flex flex-col justify-between items-center gap-5'>
                <Link href='/'><li>Home</li></Link>
                <Link href='/profit-calculator/item-calculator'><li>Item Calculator</li></Link>
                <Link href='/profit-calculator/refine-calculator'><li>Refine Calculator</li></Link>
            </ul>
        </div>

        <div className='lg:w-[30%] w-[100%]  text-center'>
            <ul className='flex flex-col justify-between items-center gap-5'>
            <Link href='/guides'><li>Guides</li></Link>
               <Link href='/market'> <li>Market</li></Link>
               <Link href='/market/sell-item'><li>Sell Item</li></Link>
            </ul>
        </div>

        <div className='lg:w-[30%] w-[100%]  text-center'>
            <ul className='flex flex-col justify-between items-center gap-5'>
                <li>All Albion Online related materials are property of Sandbox Interactive GmbH. </li>
                <li>Sandbox Interactive GmbH does not endorse, and is not in any way affiliated with, albionjourney.</li>
            </ul>
        </div>
    </div>
    <div className='text-white w-[90%] mt-10 mb-4 mx-auto'>
            <hr />
        </div>
    <div className='flex justify-center flex-wrap items-center  text-xs  gap-6 pb-1'><p className='text-centertext-xs'>© 2023 by Shwarzfit</p> <p>|</p> <Link href='https://discord.gg/N6Nbts8Z'> <p className='flex justify-center items-center gap-2 underline'><FaDiscord className='text-[#7289da]' /> Join Community</p> </Link>      <p className='hidden sm:block md:block lg:block'>|</p>           <p>Contact: kursatkeskinn@gmail.com</p></div>
    </div>
    </>
  )
}
