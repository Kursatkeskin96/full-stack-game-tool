import CardList from '@/components/CardList'
import Menu from '@/components/Menu'
import React from 'react'

export default function Categories({searchParams}) {
  const page = parseInt(searchParams.page) || 1
  const { cat } = searchParams || {}  
  return (
    <div className='pt-20 max-w-[80%] mx-auto'>
        <h1 className='capitalize'>{cat} Blogs</h1>
        <div className='flex gap-12 flex-wrap lg:flex-nowrap'>
            <CardList page={page} cat={cat} />
            <Menu />
        </div>
    </div>
  )
}
