import React from "react";
import pic1 from '@/images/pic1.png'
import Image from 'next/image'
import Link from "next/link";

export default function Card() {
  return (
      <div className="mb-12 flex flex-col lg:flex-row gap-12 items-center">
        <div className=" lg:flex-1 h-[350px] w-full relative">
          <Image src={pic1} alt="pic" fill className="object-cover" /> 
        </div>
        <div className="lg:flex-1 flex flex-col gap-8 w-full"> 
            <div>
                <span className="text-xs text-gray-400">03.12.2022 - </span>
                <span className="text-sm mr-10 text-[#9cb274] font-bold">Economy</span>
            </div>
            <Link href='/'><h1 className="text-xl font-bold">Lorem testest ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, unde.</h1></Link> 
            <p className="text-sm font-light text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod voluptate minima ea nisi tempore pariatur velit, nemo sit nobis a repellendus aliquid itaque dicta eius expedita deleniti laudantium maiores aperiam.</p>
            <Link href='/'><button className="p-2 rounded-md w-fit bg-[#14213D] text-white">Read More</button></Link>
        </div>
      </div>
  );
}
