import CardList from '@/components/CardList'
import CategoryList from '@/components/CategoryList'
import Featured from '@/components/Featured'
import Menu from '@/components/Menu'
import React, { Suspense } from 'react'
import Loading from './loading'

export default function Guides({searchParams}) {
const page = parseInt(searchParams.page) || 1

  return (
    <div className='pt-20 max-w-[80%] mx-auto'>
         <div className='text-2xl font-bold'>Albion Online Guides</div>
        <hr className='my-2' />
        <div>Home / Guides</div>
        <CategoryList />
        <div className='flex gap-12 flex-wrap lg:flex-nowrap'>
          <CardList page={page}/>
        </div>
    </div>
  )
}
