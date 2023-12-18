import React from 'react'
import {PiBookOpen} from 'react-icons/pi'
import {LiaCoinsSolid} from 'react-icons/lia'
import {GiCrossedSwords} from 'react-icons/gi'
import Image from 'next/image'
import kutuphane from '@/images/kutuphane.webp'
import market from '@/images/market5.webp'
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

<div className='flex justify-center items-center'>
<h4 className=" text-4xl mt-20 font-bold gradient text-center mx-auto flex lg:flex-row md:flex-row flex-col gap-4">
<LuGift className='text-[#00DBDE] text-center mx-auto' /> Refer Your Friends & Earn Rewards!<LuGift className='text-[#16A34A] text-center mx-auto' />
</h4>
</div>

<div className='max-w-[80%] flex-col gap-2 mt-6 mx-auto flex justify-center text-center items-center'>
<p className='text-lg'>Welcome to Albion Journey, where your connections bring you rewards! We're excited to introduce our Refer & Reward System, a program designed to thank you for spreading the word about our community. It's simple, rewarding, and adds an extra layer of fun to your experience with us.</p>
<p>All you need to do is refer your friends and encourage them to enter your Discord username in the input field on their <span className='font-bold underline'>profile</span> page. That's all it takes! You can also easily track how many referrals you have. It's that simple! Start sharing and watch your rewards grow as your referrals increase.</p>
<div className='text-md ml-4 mt-5 text-center'>          <ul>
          <li className='flex'><span className='font-bold w-20'>10 refer:</span><span className='ml-2'><Image src='https://render.albiononline.com/v1/item/T4_SKILLBOOK_STANDARD' width={20} height={20} alt='tome-of-insight' /></span> 30x Tome Of Insight </li>
          <li className='flex '><span className='font-bold w-20'>50 refer:</span><span className='ml-2'><Image src='https://render.albiononline.com/v1/item/T4_SKILLBOOK_STANDARD' width={20} height={20} alt='tome-of-insight' /></span> 200x Tome Of Insight</li>
          <li className='flex'><span className='font-bold w-20'>100 refer:</span><span className='ml-2'><Image src='https://render.albiononline.com/v1/item/T4_SKILLBOOK_STANDARD' width={20} height={20} alt='tome-of-insight' /></span> 500x Tome Of Insight</li>
          </ul></div>
</div>          
<p className='text-center text-sm italic mx-auto mt-10'>This refer & reward system will last until January 20, 2024.</p>

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

    <div className='flex my-20 justify-center items-center lg:gap-20 lg:max-w-[80%] max-w-[90%] mx-auto flex-wrap'>
        <div className='lg:w-1/2 text-center flex flex-col justify-around min-h-72 lg:gap-5'>
            <div><h2 className='text-4xl mb-6 lg:mb-0 font-bold text-black'>Albion Online Profit Calculators</h2></div>
            <div><p className='mb-6 lg:mb-0'>Boost your Albion Online earnings with Albion Journey&apos;s Profit Calculator. Tailored for crafting and refining, our Albion Online Craft Calculator helps you quickly assess profitability and make savvy trading decisions. Optimize your resource use and stay ahead in Albion Online&apos;s dynamic market with our easy-to-use, efficient tool.</p></div>
        </div>
        <div className='mt-6 lg:mt-4'>
        <Image src={trader} alt='pic1' width={350} className='rounded-md' />
    </div>
    <div className='flex flex-col justify-center items-center my-20 lg:my-0 gap-2 lg:gap-0 lg:max-w-[80%] max-w-[90%] mx-auto flex-wrap'>
        <h2 className='text-4xl mb-6 font-bold text-black text-center'>Albion Online Profit Market</h2>
        <Image src={market} alt="market" width={500} />
        <p className='mt-10'>Explore the bustling marketplace of Albion Online with Albion Journey&apos;s comprehensive market section. Designed for players to seamlessly list and discover in-game items, our platform is the ideal trading hub for all your Albion Online needs. Whether you are looking to acquire rare gear or offload valuable loot, our user-friendly market interface connects you to a vast network of Albion Online traders. Navigate through a diverse array of listings, from powerful weapons to essential resources, all at your fingertips. With Albion Journey, buying and selling in Albion Online becomes a streamlined, efficient experience, enhancing your gameplay and connecting you with the community. Step into our market, your next great Albion Online trade is just a click away.</p>
    </div>
    </div>
    </>
  )
}

export default Info