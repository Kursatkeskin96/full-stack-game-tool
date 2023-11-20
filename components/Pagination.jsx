import React from 'react'

export default function Pagination() {
  return (
    <div className='flex justify-between'>
      <button className='w-24 p-2 bg-red-800 text-white cursor-pointer'>Previous</button>
      <button className='w-24 p-2 bg-red-800 text-white cursor-pointer'>Next</button>
    </div>
  )
}
