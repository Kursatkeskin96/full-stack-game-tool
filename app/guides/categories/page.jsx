import CardList from '@/components/CardList'
import Menu from '@/components/Menu'
import React from 'react'

export default function Categories() {
  return (
    <div className='pt-20 max-w-[80%] mx-auto'>
        <h1>Style Blogs</h1>
        <div className='flex gap-12 flex-wrap lg:flex-nowrap'>
            <CardList />
            <Menu />
        </div>
    </div>
  )
}
