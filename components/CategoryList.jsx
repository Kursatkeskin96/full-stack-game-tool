import React from 'react'
import pic1 from '@/images/pic1.png'
import Image from 'next/image'
import Link from 'next/link'
import {PiSwordFill, PiHandshakeFill} from 'react-icons/Pi'
import {GiOpenChest, GiStoneCrafting, GiStagHead, GiForestCamp} from 'react-icons/gi'
import {BiWorld} from 'react-icons/bi'

export default function CategoryList() {
  return (
    <div>
        <h2 className='mt-12 font-bold text-lg'>Popular Categories</h2>
        <hr className='mb-8 mt-2'/>
        <div className='flex justify-center items-center mb-4 gap-12 flex-wrap'>
            <div className='bg-[#A1CCD1] hover:bg-[#b2e2e8] cursor-pointer text-white font-bold w-32 h-12 rounded-lg shadow-md border-[1px] border-gray-400 text-center flex justify-center items-center gap-1'><PiSwordFill/> PVP</div>
            <div className='bg-[#dedcc9] hover:bg-[#eeecd9] cursor-pointer text-white font-bold w-32 h-12 rounded-lg shadow-md text-center border-[1px] border-gray-400 flex justify-center items-center gap-1'><GiOpenChest /> PVE</div>
            <div className='bg-[#E9B384] hover:bg-[#f8bf8e] cursor-pointer text-white font-bold w-32 h-12 rounded-lg shadow-md text-center border-[1px] border-gray-400 flex justify-center items-center gap-1'><GiForestCamp /> Gather</div>
            <div className='bg-[#7C9D96] hover:bg-[#95bab1] cursor-pointer text-white font-bold w-32 h-12 rounded-lg shadow-md text-center border-[1px] border-gray-400 flex justify-center items-center gap-1'><GiStagHead /> Refine</div>
            <div className='bg-[#BCE29E] hover:bg-[#c8f0a9] cursor-pointer text-white font-bold w-32 h-12 rounded-lg shadow-md text-center border-[1px] border-gray-400 flex justify-center items-center gap-1'><GiStoneCrafting /> Craft</div>
            <div className='bg-[#9cb274] hover:bg-[#f0f6ba] cursor-pointer text-white font-bold w-32 h-12 rounded-lg shadow-md text-center border-[1px] border-gray-400 flex justify-center items-center gap-1'><PiHandshakeFill /> Economy</div>
        </div>
    </div>
  )
}
