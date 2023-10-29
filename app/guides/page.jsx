import React from 'react'
import Image from 'next/image'
import pic1 from '@/images/pic1.png'
import {PiSwordFill, PiHandshakeFill} from 'react-icons/Pi'
import {GiOpenChest, GiStoneCrafting, GiStagHead, GiForestCamp} from 'react-icons/gi'
import {BiWorld} from 'react-icons/bi'

export default function Guides() {
  return (
    <div className='min-h-screen pt-20 max-w-[90%] mx-auto'>
        <div className='text-2xl font-bold'>Albion Online Guides</div>
        <hr className='my-2' />
        <div>Home / Guides</div>

        <div className='flex w-full mt-10 justify-center items-center lg:gap-20 lg:max-w-[80%] max-w-[90%] mx-auto flex-wrap'>
        <div className='mt-4 lg:mb-0 md:mb-0 lg:mt-0 md:mt-0'>
        <Image src={pic1} alt='pic1' width={250} className='rounded-md' />
        </div>
        
        <div className='lg:w-1/2 text-center lg:text-left flex flex-col justify-around mt-10 lg:mt-0 md:mt-0'>
            <div><h1 className='text-2xl font-bold text-black'>From guides to profit calculators. Everything you need...</h1></div>
            <div><h5 className='my-5 text-gray-400'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </h5></div>
            <div><button className='bg-[#EFAE71] text-white px-10 p-1 rounded-md'>READ MORE</button></div>
        </div>
    </div>

    <div className='text-2xl mt-10 font-bold'>Categories</div>
        <hr className='my-2' />
        <div className='flex justify-center items-center gap-10 mt-10 flex-wrap'>
            <div className='bg-[#A1CCD1] hover:bg-[#b2e2e8] cursor-pointer text-white font-bold w-32 h-12 rounded-lg shadow-md border-[1px] border-gray-400 text-center flex justify-center items-center gap-1'><PiSwordFill/> PVP</div>
            <div className='bg-[#dedcc9] hover:bg-[#eeecd9] cursor-pointer text-white font-bold w-32 h-12 rounded-lg shadow-md text-center border-[1px] border-gray-400 flex justify-center items-center gap-1'><GiOpenChest /> PVE</div>
            <div className='bg-[#E9B384] hover:bg-[#f8bf8e] cursor-pointer text-white font-bold w-32 h-12 rounded-lg shadow-md text-center border-[1px] border-gray-400 flex justify-center items-center gap-1'><GiForestCamp /> Gather</div>
            <div className='bg-[#7C9D96] hover:bg-[#95bab1] cursor-pointer text-white font-bold w-32 h-12 rounded-lg shadow-md text-center border-[1px] border-gray-400 flex justify-center items-center gap-1'><GiStagHead /> Refine</div>
            <div className='bg-[#BCE29E] hover:bg-[#c8f0a9] cursor-pointer text-white font-bold w-32 h-12 rounded-lg shadow-md text-center border-[1px] border-gray-400 flex justify-center items-center gap-1'><GiStoneCrafting /> Craft</div>
            <div className='bg-[#9cb274] hover:bg-[#f0f6ba] cursor-pointer text-white font-bold w-32 h-12 rounded-lg shadow-md text-center border-[1px] border-gray-400 flex justify-center items-center gap-1'><PiHandshakeFill /> Trade</div>
            <div className='bg-[#F8C4B4] hover:bg-[#f4cabd] cursor-pointer text-white font-bold w-32 h-12 rounded-lg shadow-md text-center border-[1px] border-gray-400 flex justify-center items-center gap-1'><BiWorld /> General</div>
        </div>
        <div className='text-2xl mt-20 font-bold'>Recent Posts</div>
        <hr className='my-2' />

        <div className='grid lg:grid-cols-4 grid-cols-1'>
            <div className='lg:col-span-3'>
            <div className='flex w-full lg:mt-10 justify-center items-center gap-10 mx-auto flex-wrap'>
        <div className='mt-10 mb-10 lg:mb-0 md:mb-0 lg:mt-0 md:mt-0'>
        <Image src={pic1} alt='pic1' width={200} className='rounded-md' />
        </div>
        
        <div className='lg:w-1/2 lg:text-left text-center flex flex-col justify-around h-52'>
            <div><h1 className='text-2xl font-bold text-black'>From guides to profit calculators. Everything you need...</h1></div>
            <div><h5 className='my-5 text-gray-400'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and, </h5></div>
            <div className='w-fit mx-auto lg:mx-0 cursor-pointer border-b-2 border-[#EFAE71]'>Read More</div>
        </div>
    </div>
    <div className='flex w-full my-20 lg:mt-10 justify-center items-center gap-10 mx-auto flex-wrap'>
        <div className='mt-10 mb-10 lg:mb-0 md:mb-0 lg:mt-0 md:mt-0'>
        <Image src={pic1} alt='pic1' width={200} className='rounded-md' />
        </div>
        
        <div className='lg:w-1/2 lg:text-left text-center flex flex-col justify-around h-52'>
            <div><h1 className='text-2xl font-bold text-black'>From guides to profit calculators. Everything you need...</h1></div>
            <div><h5 className='my-5 text-gray-400'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and, </h5></div>
            <div><div className='w-fit mx-auto lg:mx-0 cursor-pointer border-b-2 border-[#EFAE71]'>Read More</div></div>
        </div>
    </div>
    <div className='flex w-full lg:mt-10 justify-center items-center gap-10 mx-auto flex-wrap'>
        <div className='mt-10 mb-10 lg:mb-0 md:mb-0 lg:mt-0 md:mt-0'>
        <Image src={pic1} alt='pic1' width={200} className='rounded-md' />
        </div>
        
        <div className='lg:w-1/2 lg:text-left text-center flex flex-col justify-around h-52'>
            <div><h1 className='text-2xl font-bold text-black'>From guides to profit calculators. Everything you need...</h1></div>
            <div><h5 className='my-5 text-gray-400'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and, </h5></div>
            <div><div className='w-fit mx-auto lg:mx-0 cursor-pointer border-b-2 border-[#EFAE71]'>Read More</div></div>
        </div>
    </div>
            </div>
            <div className='pb-8 h-fit mt-20 lg:mt-10'>

                <div className='text-xl pt-2 font-bold text-center text-[#2e393d]'>Most Popular</div>
                <hr className='mt-2 w-[90%] mx-auto'></hr>
                <div className='flex justify-center items-center cursor-pointer pt-6'>
                <div className=''><Image src={pic1} alt='pic1' width={80} className='rounded-md' /></div>
                <div className='flex flex-col ml-2 w-[60%] text-left'>
                    <p className='text-md text-gray-600 pt-2'>How To Start Crafting</p>
                    <p className='text-sm text-[#c9b186] pt-2'>Category: Economy</p>
                    <p className='text-xs text-[#CDC2AE] pt-2'>Date: 03/12/2023</p>
                </div>
            </div>
            <div className='flex justify-center items-center mt-8 cursor-pointer'>
                <div className=''><Image src={pic1} alt='pic1' width={80} className='rounded-md' /></div>
                <div className='flex flex-col ml-2 w-[60%] text-left'>
                    <p className='text-md text-gray-600 pt-2'>How To Start Crafting and Refining</p>
                    <p className='text-sm text-[#c9b186] pt-2'>Category: Economy</p>
                    <p className='text-xs text-[#CDC2AE] pt-2'>Date: 03/12/2023</p>
                </div>
            </div>
            <div className='flex justify-center items-center mt-8 cursor-pointer'>
                <div className=''><Image src={pic1} alt='pic1' width={80} className='rounded-md' /></div>
                <div className='flex flex-col ml-2 w-[60%] text-left'>
                    <p className='text-md text-gray-600 pt-2'>How To Start Crafting</p>
                    <p className='text-sm text-[#c9b186] pt-2'>Category: Economy</p>
                    <p className='text-xs text-[#CDC2AE] pt-2'>Date: 03/12/2023</p>
                </div>
            </div>
            </div>
            
        </div>
    </div>
  )
}
