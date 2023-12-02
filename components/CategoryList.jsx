import React from 'react'
import Link from 'next/link'


const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store"
  });

  if(!res.ok){
    throw new Error("Failed")
  }
  return res.json()
}

export default async function CategoryList() {

  const data = await getData();
  return (
    <div>
        <h2 className='mt-12 font-bold text-lg'>Popular Categories</h2>
        <hr className='mb-8 mt-2'/>
        <div className='flex justify-center items-center mb-4 gap-12 flex-wrap'>
         {data?.map(item=> ( 
          <div key={item.id}>
         <Link href={`/guides/categories?cat=${item.slug}`}>
         <div className={`uppercase ${item.slug}`}>{item.title}</div>
         </Link>
         </div>
         ))}
           
        </div>
    </div>
  )
}
