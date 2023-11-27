import React from "react";
import pic1 from '@/images/pic1.png'
import Image from 'next/image'
import Link from "next/link";

export default function Card({item}) {
  return (
      <div className="mb-12 flex flex-col lg:flex-row gap-12 items-center">
        <div className=" lg:flex-1 h-[350px] w-full relative">
          <Image src={pic1} alt="pic" fill className="object-cover" /> 
        </div>
        <div className="lg:flex-1 flex flex-col gap-8 w-full"> 
            <div>
                <span className="text-xs text-gray-400">{item.createdAt.substring(0,10)} </span>
                <span className="text-sm mr-10 text-[#9cb274] font-bold">{item.catSlug}</span>
            </div>
            <Link href={`/guides/posts/${item.slug}`}><h1 className="text-xl font-bold">{item.title}</h1></Link> 
            <p className="text-sm font-light text-gray-500">{item.desc.substring(0, 60)}</p>
            <Link href={`/guides/posts/${item.slug}`}><button className="p-2 rounded-md w-fit bg-[#14213D] text-white">Read More</button></Link>
        </div>
      </div>
  );
}
