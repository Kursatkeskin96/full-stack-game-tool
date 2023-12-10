import React from 'react'
import Link from 'next/link'
import { FaDiscord } from "react-icons/fa";


export default function Footer() {
  return (
    <div className='min-h-52 h-fit items-center pt-10 text-[#ECECEC] bg-[#1b1b1b] lg:mt-10 mt-20 text-sm flex-wrap'>
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
               <Link href='/market/sell-item'> <li>Sell Item</li></Link>
            </ul>
        </div>
        
        <div className='lg:w-[30%] w-[100%]  text-center'>
            <ul className='flex flex-col justify-between items-center gap-5'>
                <li>All Albion Online related materials are property of Sandbox Interactive GmbH. </li>
                <li>Sandbox Interactive GmbH does not endorse, and is not in any way affiliated with, albionjourney.</li>
                <li>Contact: kursatkeskinn@gmail.com</li>
            </ul>
        </div>
    </div>
    <div className='flex justify-center items-center  mt-10 text-xs  gap-6 pb-1'><p className='text-centertext-xs'>© 2023 by Shwarzfit</p> <p>|</p> <Link href='https://discord.gg/N6Nbts8Z'> <p className='flex justify-center items-center gap-2 underline'><FaDiscord /> Join Community</p> </Link></div>
    </div>
  )
}
