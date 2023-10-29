import React from 'react'
import {PiBookOpen} from 'react-icons/Pi'
import {LiaCoinsSolid} from 'react-icons/Lia'
import {GiCrossedSwords} from 'react-icons/gi'
import Image from 'next/image'
import pic2 from '@/images/pic2.jpg'
import pic3 from '@/images/pic3.png'

function Info() {
  return (
    <>
    <div className='bg-[#ECECEC] mt-40 lg:mt-0 md:mt-0 w-full flex justify-evenly items-center py-2 flex-wrap'>
        <div className='w-40'>
            <PiBookOpen className='text-4xl mx-auto' />
            <p className='text-xs text-center mt-1'>You can find any guide you need in the Blog page.</p>
        </div>
        <div className='w-40'>
            <LiaCoinsSolid className='text-4xl mx-auto' />
            <p className='text-xs text-center mt-1'>You can find any guide you need in the Blog page.</p>
        </div>
        <div className='w-40'>
            <GiCrossedSwords className='text-4xl mx-auto' />
            <p className='text-xs text-center mt-1'>You can find any guide you need in the Blog page.</p>
        </div>
    </div>
    
    <div className='lg:max-w-[80%] mt-24 max-w-[90%] mx-auto shadow-lg p-5 rounded-md bg-[#edf7fa]'>
        <h1 className='text-2xl text-black text-center'>What’s the purpose of albionprofit.com</h1>
        <p className='text-center mt-10 text-gray-600'>Albion Online is one of the hardest game to start over if you are alone. Main purpose of albionprofit.com is helping new players by blog guides. But this website not only for newbies. You can be expeienced and want to start to craft or refine and don’t know where to start. This website is for you. You can read guides and use profit calculators for making silver!</p>
    </div>

    <hr className='mt-20 w-[80%] mx-auto'></hr>

    <div className='flex mt-10 justify-center items-center lg:gap-20 lg:max-w-[80%] max-w-[90%] mx-auto flex-wrap'>
    <div className=''>
        <Image src={pic2} alt='pic1' width={250} className='rounded-md' />
        </div>
        <div className='lg:w-1/2 text-center flex flex-col justify-around h-72'>
            <div><h1 className='text-2xl text-[#EFAE71]'>Albion Online Guides</h1></div>
            <div><h5>Our guides page is like a library. You can find many resources to improve your knowledge of game. You can find many blog guides in many categories like PVP, PVE, Craft, Refine and etc... </h5></div>
            <div><button className='bg-[#EFAE71] text-white w-40 p-1 rounded-md'>GUIDES</button></div>
        </div>
    </div>

    <div className='flex my-20 justify-center items-center lg:gap-20 lg:max-w-[80%] max-w-[90%] mx-auto flex-wrap'>
        <div className='lg:w-1/2 text-center flex flex-col justify-around h-72'>
            <div><h1 className='text-2xl text-[#EFAE71]'>Albion Online Profit Calculators</h1></div>
            <div><h5>We have two different profit calculators. Refine and Craft. With our calculator, you just need to type values. We will do calculation for you! You can easily learn if you do that craft / refine, how much silver you will make.</h5></div>
            <div><button className='bg-[#EFAE71] text-white w-40 p-1 rounded-md'>CALCULATORS</button></div>
        </div>
        <div className=''>
        <Image src={pic3} alt='pic1' width={250} className='rounded-md' />
    </div>
    </div>
    </>
  )
}

export default Info