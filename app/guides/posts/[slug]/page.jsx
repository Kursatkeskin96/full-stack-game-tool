import React from "react";
import Menu from "@/components/Menu";
import pic1 from "@/images/pic1.png";
import Image from "next/image";
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const getData = async (slug) => {
  const res = await fetch(
    `http://localhost:3000/api/posts/${slug}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};



export default async function singlePage({params}) {
  const { slug } = params;
  const data = await getData(slug);
  const desc = data?.post?.desc
  return (
    <div className="flex gap-12 flex-wrap lg:flex-nowrap max-w-[80%] mx-auto pt-28">
    <div className="mx-auto lg:w-4/6 w-full">
      <h1 className="text-center text-4xl font-bold ">
        {data?.post?.title}
      </h1>
      <hr className="mt-2" />
      <div className="flex justify-between items-center">
        <div>
          <h5 className="text-sm">
            Author: {data?.post?.userName}
          </h5>
        </div>
        <div className="">
          <span className="text-xs text-gray-400">{data?.post?.createdAt.substring(0,10)}- </span>
          <span className="text-sm mr-10 text-[#9cb274] font-bold capitalize">

          </span>
        </div>
      </div>
      {data?.post?.img && (
      <div className="w-[70%] mt-8 mx-auto h-[400px] relative">
            <Image fill src={data?.post?.img} alt="" className="object-contain" />
          </div>
        )}
    <div dangerouslySetInnerHTML={{__html:data?.post?.desc}}></div>
    <Markdown>{desc}</Markdown>
    </div>
    <Menu />
    </div>
  );
}
