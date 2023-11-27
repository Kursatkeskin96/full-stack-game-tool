import React from 'react'
import {PiBookOpen} from 'react-icons/Pi'
import {LiaCoinsSolid} from 'react-icons/Lia'
import {GiCrossedSwords} from 'react-icons/gi'
import Image from 'next/image'
import kutuphane from '@/images/kutuphane.png'
import market from '@/images/market5.png'
import trader from '@/images/trader.png'
import Link from 'next/link'

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
        <div className='w-40'>
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
            <div><p>Dive into the world of Albion Online with Albion Journey's extensive library of Albion Online guides. Tailored for gamers seeking expertise in various aspects of the game, our guides cover everything from PVP strategies to crafting and refining techniques. These Albion Online guides are your compass in this vast universe, lighting the way towards mastery and legend. Elevate your gameplay with every click—a journey of discovery awaits in every guide.</p></div>
            <div><Link href='/guides'><button className='bg-orange-600 text-white w-40 p-1 rounded-md'>GUIDES</button></Link></div>
        </div>
    </div>

    <div className='flex my-20 justify-center items-center lg:gap-20 lg:max-w-[80%] max-w-[90%] mx-auto flex-wrap'>
        <div className='lg:w-1/2 text-center flex flex-col justify-around min-h-72 lg:gap-5'>
            <div><h2 className='text-4xl mb-6 lg:mb-0 font-bold text-black'>Albion Online Profit Calculators</h2></div>
            <div><p className='mb-6 lg:mb-0'>Boost your Albion Online earnings with Albion Journey's Profit Calculator. Tailored for crafting and refining, our Albion Online Craft Calculator helps you quickly assess profitability and make savvy trading decisions. Optimize your resource use and stay ahead in Albion Online's dynamic market with our easy-to-use, efficient tool.</p></div>
            <div><Link href='/profit-calculator/item-calculator'><button className='bg-orange-600 mb-8 lg:mb-0 text-white w-40 p-1 rounded-md'>CALCULATORS</button></Link></div>
        </div>
        <div className='mt-6 lg:mt-4'>
        <Image src={trader} alt='pic1' width={350} className='rounded-md' />
    </div>
    <div className='flex flex-col justify-center items-center my-20 lg:my-0 gap-10 lg:gap-0 lg:max-w-[80%] max-w-[90%] mx-auto flex-wrap'>
        <h2 className='text-4xl mb-6 font-bold text-black text-center'>Albion Online Profit Market</h2>
        <Image src={market} alt="market" width={500} />
        <p className='mt-10 mb-6'>Explore the bustling marketplace of Albion Online with Albion Journey's comprehensive market section. Designed for players to seamlessly list and discover in-game items, our platform is the ideal trading hub for all your Albion Online needs. Whether you're looking to acquire rare gear or offload valuable loot, our user-friendly market interface connects you to a vast network of Albion Online traders. Navigate through a diverse array of listings, from powerful weapons to essential resources, all at your fingertips. With Albion Journey, buying and selling in Albion Online becomes a streamlined, efficient experience, enhancing your gameplay and connecting you with the community. Step into our market – your next great Albion Online trade is just a click away.</p>
        <Link href='/market'><button className='bg-orange-600 text-white w-40 p-1 rounded-md'>MARKET</button></Link>
    </div>
    </div>
    </>
  )
}

export default Info