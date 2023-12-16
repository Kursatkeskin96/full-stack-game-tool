import CardList from '@/components/CardList'
import Menu from '@/components/Menu'
import React, { Suspense } from 'react'
 
export const metadata = {
  title: 'Albion Online Guides | Master the Game with Expert Strategies |  Albion Journey',
  description: 'Dive into our extensive collection of Albion Online guides. From beginner tips to advanced strategies, Albion Journey offers everything you need to enhance your gameplay and dominate the world of Albion. Start your strategic journey today!',
}
export default function Guides({searchParams}) {
const page = parseInt(searchParams.page) || 1

  return (
    <div className='pt-20 max-w-[80%] mx-auto'>
         <div className='text-2xl font-bold'>Albion Online Guides</div>
        <hr className='my-2' />
        <div>Home / Guides</div>
        <div className='flex gap-12 flex-wrap lg:flex-nowrap'>
          <CardList page={page}/>
          <Menu />
        </div>
    </div>
  )
}
