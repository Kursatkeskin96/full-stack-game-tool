import React from "react";
import Menu from "@/components/Menu";
import Image from "next/image";
import Link from "next/link";

const getData = async (slug) => {

  const res = await fetch(
    `https://albionjourney.vercel.app/api/posts/${slug}`,
  );

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

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


export default async function singlePage({params}) {
  const { slug } = params;
  const data = await getData(slug);
  const colorClass = getColorClass(data.post.catSlug);



  return (
    <div className="flex gap-4 flex-wrap lg:flex-nowrap lg:max-w-[80%] md:max-w-[80%] max-w-[90%] mx-auto pt-28">
    <div className="mx-auto lg:w-5/6 w-full">
      <h1 className="text-center text-4xl font-bold ">
        {data?.post?.title}
      </h1>
      <hr className="mt-2" />
      <div className="flex mb-10 md:text-sm lg:text-sm text-xs lg:mt-0 mt-2 justify-between items-center">
        <div>
          <h5 className="">
           <span className="font-bold">Author:</span> {data?.post?.userName}
          </h5>
        </div>
        <div className="">
          <span className="text-xs text-gray-400">{data?.post?.createdAt.substring(0,10)} - </span>
          <Link href={`/guides/categories?cat=${data.post.catSlug}`}><span className={`text-sm mr-10 ${colorClass} font-bold capitalize`}>
          {data.post.catSlug}
          </span>
          </Link>
        </div>
      </div>
      {data?.post?.img && (
      <div className="w-[80%] lg:w-[70%] lg:mt-0 md:my-10 mx-auto h-[300px] relative">
            <Image fill src={data?.post?.img} alt="" className="object-contain" />
          </div>
        )}
{data?.post?.desc && (
  <div className="" dangerouslySetInnerHTML={{ __html: data?.post?.desc }}></div>
)}
{data.post.userName === "shwarzfit" && (
  
  <div className="mt-10 flex justify-center items-center">
    <Link className=" w-52 text-center  bg-black text-white rounded-md p-1" href={`/update-blog/${data?.post?.slug}`}>Update</Link>
  </div> 
  )}
    </div>
    <Menu />
    </div>
  );
}
