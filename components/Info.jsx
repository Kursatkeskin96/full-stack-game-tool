import React from 'react'
import {PiBookOpen} from 'react-icons/pi'
import {LiaCoinsSolid} from 'react-icons/lia'
import {GiCrossedSwords} from 'react-icons/gi'
import Image from 'next/image'
import kutuphane from '@/images/kutuphane.webp'
import market2 from '@/images/market2.webp'
import trader from '@/images/trader.webp'
import Link from 'next/link'
import { LuGift } from "react-icons/lu";



function Info() {
  return (
    <>

    <div className='mt-20 lg:mt-20 md:mt-0 w-full flex justify-evenly items-center py-2 flex-wrap'>
        <div className='w-40'>
            <PiBookOpen className='text-4xl mx-auto' />
            <p className='text-xs text-center mt-1'>You can find any guide you need in the Blog page.</p>
        </div>

        <div className='w-40'>
            <LiaCoinsSolid className='text-4xl mx-auto' />
            <p className='text-xs text-center mt-1'>You can make tons of silver via using our calculators.</p>
        </div>
        <div className='w-40 lg:mt-0 mt-5'>
            <GiCrossedSwords className='text-4xl mx-auto' />
            <p className='text-xs text-center mt-1'>You can find the items that you want in the market.</p>
        </div>
    </div>

    <hr className='mt-20 w-[80%] mx-auto'></hr>

    <div className='flex mt-10 justify-center items-center lg:gap-20 lg:max-w-[80%] max-w-[90%] mx-auto flex-wrap'>
    <div className=''>
        <Image src={kutuphane} alt='pic1' width={350} className='rounded-md mb-6 lg:mb-0' />
        </div>
        <div className='lg:w-1/2 text-center flex flex-col justify-around gap-10 lg:gap-5 min-h-72'>
            <div><h2 className='text-4xl font-bold text-black'>Albion Online Guides</h2></div>
            <div><p>Dive into the world of Albion Online with Albion Journey&apos;s extensive library of Albion Online guides. Tailored for gamers seeking expertise in various aspects of the game, our guides cover everything from PVP strategies to crafting and refining techniques. These Albion Online guides are your compass in this vast universe, lighting the way towards mastery and legend. Elevate your gameplay with every click—a journey of discovery awaits in every guide.</p></div>
        </div>
    </div>

    <div className='flex mt-10 justify-center items-center lg:gap-20 lg:max-w-[80%] max-w-[90%] mx-auto flex-wrap'>
        <div className='lg:w-1/2 text-center flex flex-col justify-around gap-10 lg:gap-5 min-h-72'>
            <div><h2 className='text-4xl font-bold text-black'>Albion Online Profit Calculators</h2></div>
            <div><p>Boost your Albion Online earnings with Albion Journey&apos;s Profit Calculator. Tailored for crafting and refining, our Albion Online Craft Calculator helps you quickly assess profitability and make savvy trading decisions. Optimize your resource use and stay ahead in Albion Online&apos;s dynamic market with our easy-to-use, efficient tool.</p></div>
        </div>
        <div className=''>
        <Image src={trader} alt='pic1' width={350} className='rounded-md mb-6 lg:mb-0' />
        </div>
    </div>

    <div className='flex mt-10 justify-center items-center lg:gap-20 lg:max-w-[80%] max-w-[90%] mx-auto flex-wrap'>
    <div className=''>
        <Image src={market2} alt='pic1' width={350} className='rounded-md mb-6 lg:mb-0' />
        </div>
        <div className='lg:w-1/2 text-center flex flex-col justify-around gap-10 lg:gap-5 min-h-72'>
            <div><h2 className='text-4xl font-bold text-black'>Albion Online Profit Market</h2></div>
            <div><p>Explore the bustling marketplace of Albion Online with Albion Journey&apos;s comprehensive market section. Designed for players to seamlessly list and discover in-game items, our platform is the ideal trading hub for all your Albion Online needs. Whether you are looking to acquire rare gear or offload valuable loot, our user-friendly market interface connects you to a vast network of Albion Online traders. With Albion Journey, buying and selling in Albion Online becomes a streamlined, efficient experience, enhancing your gameplay and connecting you with the community.</p></div>
        </div>
    </div>
    </>
  )
}

export default Info