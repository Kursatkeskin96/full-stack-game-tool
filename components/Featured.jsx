import Image from "next/image";
import React from "react";
import pic1 from "@/images/pic1.png";

export default function Featured() {
  return (
    <div className="pt-10">
      <h1 className="lg:text-6xl text-2xl font-light">
        Hey, Lama Dev here! Discover my stories and creative ideas.
      </h1>
      <div className="mt-12 flex lg:flex-row flex-col justify-center items-center lg:gap-10 gap-5">
        <div className="lg:w-1/2 w-full h-[400px] relative">
          <Image src={pic1} fill alt="pic1" className="object-cover"></Image>
        </div>
        <div className="flex flex-1 flex-col gap-10">
          <h2 className="text-xl lg:text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut,
            corrupti!
          </h2>
          <p className="text-lg font-light text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure in
            nisi asperiores architecto, laudantium ducimus aliquam fugiat at
            unde qui saepe harum maiores quasi possimus repudiandae veritatis
            esse quia reiciendis.
          </p>
          <button className="p-4 rounded-md w-fit bg-[#14213D] text-white">Read More</button>
        </div>
      </div>
    </div>
  );
}
