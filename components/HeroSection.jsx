import React from 'react'
import Image from 'next/image'
import pic1 from '@/images/pic1.png'

export default function HeroSection() {
  return (
    <div className='flex justify-center items-center h-screen lg:gap-20 lg:max-w-[80%] max-w-[90%] mx-auto flex-wrap'>
        <div className='mt-20 mb-20 lg:mb-0 md:mb-0 lg:mt-0 md:mt-0'>
        <Image src={pic1} alt='pic1' width={300} className='rounded-md' />
        </div>
        <div className='lg:w-1/2 text-center flex flex-col justify-around h-96'>
            <div><h1 className='text-4xl font-bold text-[#EFAE71]'>From guides to profit calculators. Everything you need...</h1></div>
            <div><h5 className='my-10'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </h5></div>
            <div><button className='bg-[#EFAE71] text-white w-40 p-1 rounded-md'>LOGIN</button></div>
        </div>
    </div>
  )
}
