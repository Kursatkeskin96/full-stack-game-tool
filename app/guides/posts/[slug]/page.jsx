import React from "react";
import Menu from "@/components/Menu";
import Image from "next/image";
import Link from "next/link";

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

  return (
    <div className="flex gap-12 flex-wrap lg:flex-nowrap lg:max-w-[80%] md:max-w-[80%] max-w-[90%] mx-auto pt-28">
    <div className="mx-auto lg:w-5/6 w-full">
      <h1 className="text-center text-4xl font-bold ">
        {data?.post?.title}
      </h1>
      <hr className="mt-2" />
      <div className="flex md:text-sm lg:text-sm text-xs lg:mt-0 mt-2 justify-between items-center">
        <div>
          <h5 className="">
           <span className="font-bold">Author:</span> {data?.post?.userName}
          </h5>
        </div>
        <div className="">
          <span className="text-xs text-gray-400">{data?.post?.createdAt.substring(0,10)} - </span>
          <Link href={`/guides/categories?cat=${data.post.catSlug}`}><span className="text-sm mr-10 text-[#9cb274] font-bold capitalize">
          {data.post.catSlug}
          </span>
          </Link>
        </div>
      </div>
      {data?.post?.img && (
      <div className="w-[80%] lg:w-[70%] lg:mt-10 md:my-10 mx-auto h-[400px]  relative">
            <Image fill src={data?.post?.img} alt="" className="object-contain" />
          </div>
        )}
{data?.post?.desc && (
  <div className="lg:mt-10" dangerouslySetInnerHTML={{ __html: data?.post?.desc }}></div>
)}
{data.post.userName === "shwarzfit" && (
  <Link className="w-32 bg-black text-white rounded-md p-1" href={`/update-blog/${data?.post?.slug}`}>Update</Link>
  )}
    </div>
    <Menu />
    </div>
  );
}
