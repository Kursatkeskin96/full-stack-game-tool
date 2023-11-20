"use client";
import React, { useState } from "react";
import Image from "next/image";
import plus from "@/images/plus.png";
import image from "@/images/image.png";
import external from "@/images/external.png";
import video from "@/images/video.png";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

export default function CreateBlog() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("")

  return (
    <div className="pt-20 w-[80%] mx-auto flex justify-center flex-col">
      <input type="text" placeholder="Title" className="p-6 w-[70%] mx-auto text-4xl bg-transparent bg-gray-100" />
      <div className="flex gap-5 h-96 relative">
        <button className="w-8 h-8 rounded-[50%] bg-transparent border-[1px] border-black flex justify-center items-center cursor-pointer" onClick={() => setOpen(!open)}>
          <Image src={plus} alt="plus" width={16} height={16} />
        </button>
        {open && (
          <div className="mt-12 flex flex-col gap-5 absolute z-[999] w-full">
            <button className="w-8 h-8 rounded-[50%] bg-transparent border-[1px] border-black flex justify-center items-center cursor-pointer">
              <Image src={image} alt="plus" width={16} height={16} />
            </button>
            <button className="w-8 h-8 rounded-[50%] bg-transparent border-[1px] border-black flex justify-center items-center cursor-pointer">
              <Image src={external} alt="plus" width={16} height={16} />
            </button>
            <button className="w-8 h-8 rounded-[50%] bg-transparent border-[1px] border-black flex justify-center items-center cursor-pointer">
              <Image src={video} alt="plus" width={16} height={16} />
            </button>
          </div>
        )}
        <ReactQuill className="w-[100%] mx-auto bg-gray-50 mt-5" theme="bubble" value={value} onChange={setValue} placeholder="Tell Your Story" />
      </div>
      <button className="mx-auto w-60 px-1 py-3 bg-green-400 text-white cursor-pointer rounded-md mt-10">Submit</button>
    </div>
  );
}
