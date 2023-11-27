import React from 'react'
import sword from '@/images/sword.png'
import Image from 'next/image'

export default function ItemCard() {
  return (
    <div className=' w-60 mt-5 shadow-lg rounded-md'>
        <div className='h-8'>
        <h2 className='text-lg mt-2 text-center font-bold'>Broadsword</h2>
        </div>
        <Image className='mx-auto mt-2' src={sword} alt="sword" width={100} />
        <hr className='my-2' />
        <div className='flex mt-4 justify-center items-start gap-2 text-sm'>
            <div >Tier / Enchanment:</div>
            <div className='text-gray-400'>8.3</div>
        </div>
        <div className='flex justify-center items-start gap-2 text-sm'>
            <div>Quality:</div>
            <div  className='text-gray-400'>Excellent</div>
        </div>
        <div className='flex justify-center items-start gap-2 text-sm'>
            <div>Price:</div>
            <div  className='text-gray-400'>1.250.000</div>
        </div>
        <div className='flex justify-center items-start gap-2 text-sm'>
            <div>Seller:</div>
            <div  className='text-gray-400'>Shwarzfit</div>
        </div>
        <div className='flex justify-center items-start gap-2 text-sm'>
            <div>Date:</div>
            <div  className='text-gray-400'>21.02.2023</div>
        </div>
        <div className='flex justify-center items-center'>
        <button className='bg-orange-600 mb-4 w-32 text-white mx-auto rounded-md mt-4'>Contact</button>
        </div>
    </div>
  )
}
