import React from 'react'
import Pagination from './Pagination'
import pic1 from '@/images/pic1.png'
import Image from 'next/image'
import Card from './Card'

export default function CardList() {
  return (
    <div className='lg:w-4/6 w-full'>
        <h1 className='mt-12 mb-6 text-2xl font-bold'>Recent Posts</h1>
        <div>
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
        <Pagination />
    </div>
  )
}
