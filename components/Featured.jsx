import Image from "next/image";
import React from "react";
import Link from "next/link";


const getData = async () => {
  const res = await fetch(`https://albionjourney.vercel.app/api/posts/maximizing-profits-in-albion-online-transmutation`, {
    cache: "no-store"
  });

  if(!res.ok){
    throw new Error("Failed")
  }
  return res.json()
}

export default async function Featured() {
  const data = await getData()
  const itemDescSubstring = data.post.desc.substring(0, 200);
  return (
    <div className="pt-10">
      <h1 className="lg:text-5xl text-2xl font-light">
        Discover Our Albion Online Guide Blogs And Start Your Journey!
      </h1>
      <div className="mt-12 flex lg:flex-row flex-col justify-center items-center lg:gap-10 gap-5">
        <div className="lg:w-1/2 w-full h-[350px] relative">
          <Image src={data.post.img} fill alt="pic1" className="object-cover"></Image>
        </div>
        <div className="flex flex-1 flex-col gap-10">
          <h2 className="text-xl font-bold lg:text-2xl">
          {data.post.title}
          </h2>
          <div className="" dangerouslySetInnerHTML={{ __html: itemDescSubstring }}></div>
          <Link href='/guides/posts/maximizing-profits-in-albion-online-transmutation'><button className="p-4 rounded-md w-fit bg-[#14213D] text-white">Read More</button></Link>
        </div>
      </div>
    </div>
  );
}
