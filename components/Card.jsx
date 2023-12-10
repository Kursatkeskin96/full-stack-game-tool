import React from "react";
import Image from 'next/image'
import Link from "next/link";

function getColorClass(catSlug) {
  const colorClasses = {
    general: "generaltext",
    "pvp-pve": "pvp-pvetext", // Enclose in quotes
    gather: "gathertext",
    refine: "refinetext",
    craft: "crafttext",
    economy: "economytext",
  };

  return colorClasses[catSlug] || ""; // Fallback to a default class if catSlug doesn't match
}

export default function Card({item}) {
  const itemDescSubstring = item.desc.substring(0, 120);
  const colorClass = getColorClass(item.catSlug);

  return (
      <div className="mb-12 flex flex-col lg:flex-row gap-12 items-center">
        <div className=" lg:flex-1 h-[350px] lg:h-[250px] md:h-[500px] lg:w-[250px] w-full md:w-[500px] relative">
        <Link href={`/guides/posts/${item.slug}`}>
          <Image src={item.img} alt="pic" fill className="object-cover" /> 
          </Link>
        </div>

        <div className="lg:flex-1 flex flex-col h-[250px] gap-6 w-full"> 
            <div className="flex justify-between items-center  text-sm">
            <div><span className="font-bold">Author:</span> {item.userName}</div>
              <div>
                <span className="text-xs text-gray-400">{item.createdAt.substring(0,10)} </span>
                <Link href={`/guides/categories?cat=${item.catSlug}`}><span className={`text-sm mr-10 ${colorClass} font-bold`}>{item.catSlug}</span></Link>     
              </div>

            </div>
            <Link href={`/guides/posts/${item.slug}`}><h1 className="text-xl font-bold">{item.title}</h1></Link> 
            <div className="text-sm font-light text-gray-500" dangerouslySetInnerHTML={{ __html: itemDescSubstring }}></div>

            <Link href={`/guides/posts/${item.slug}`}><button className="p-2 rounded-md w-fit bg-[#14213D] text-white">Read More</button></Link>
        </div>
      </div>
  );
}
