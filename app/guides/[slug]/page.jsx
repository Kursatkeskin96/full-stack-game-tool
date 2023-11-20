import React from "react";
import Menu from "@/components/Menu";
import pic1 from "@/images/pic1.png";
import Image from "next/image";



export default function page() {
  return (
    <div className="flex gap-12 flex-wrap lg:flex-nowrap max-w-[80%] mx-auto pt-28">
    <div className="mx-auto lg:w-4/6 w-full">
      <h1 className="text-center text-4xl font-bold ">
        How To Become A Crafter
      </h1>
      <hr className="mt-2" />
      <div className="flex justify-between items-center">
        <div>
          <h5 className="text-sm">
            <span className="font-bold">Author:</span> Shwarzfit
          </h5>
        </div>
        <div className="">
          <span className="text-xs text-gray-400">03.12.2022 - </span>
          <span className="text-sm mr-10 text-[#9cb274] font-bold">
            Economy
          </span>
        </div>
      </div>
      <div className="w-[70%] mt-8 mx-auto h-[400px] relative">
        <Image src={pic1} fill alt="pic1" className="object-contain"></Image>
      </div>
      <p className="mt-10 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed hic accusantium possimus alias expedita reiciendis odit in, nihil iusto veniam, error placeat cum blanditiis unde doloribus provident. Maiores expedita omnis illum. Nihil quidem nulla magni temporibus facilis, tempora aperiam sapiente veniam ullam reprehenderit corrupti hic corporis, nobis officiis. Sed consequatur reiciendis vero praesentium soluta porro exercitationem, minima iusto minus dolor!</p>
    <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, minus minima, sequi aperiam nostrum, animi nobis magni nulla eligendi dignissimos aspernatur tenetur veritatis quisquam placeat quo laboriosam fuga id expedita? Vitae nesciunt consequatur cupiditate numquam corporis praesentium molestias perspiciatis culpa exercitationem officia? Omnis eligendi aut error architecto voluptatem assumenda provident deleniti sunt aperiam iusto culpa eveniet enim repellat, pariatur explicabo esse blanditiis tempore facere itaque tempora. Temporibus labore impedit autem pariatur fuga, repudiandae saepe totam? Qui sunt, officia impedit illo quis quae. Excepturi impedit asperiores facere? Odit officia, ad, maiores ex ullam pariatur architecto nemo, in id animi consectetur molestias quod eius ratione laboriosam. Fugiat vel, cum accusamus dolorum consequatur esse, repellendus autem eius, unde accusantium quia nobis? Quia autem dignissimos maiores laboriosam hic rem consequuntur officiis odit possimus sit reprehenderit unde rerum esse alias explicabo atque, tempora quaerat ducimus assumenda facere fuga cum. Dolore ex aspernatur nihil? Excepturi, cumque ducimus quis soluta distinctio quibusdam dicta necessitatibus, atque error nobis qui obcaecati dolorem totam nisi aut numquam nostrum quas. Optio soluta dolor accusamus magnam nihil, esse quisquam. Sed sunt quae totam itaque error? Optio cupiditate odit, debitis magnam, officiis dolorem, consectetur minus laborum quibusdam sapiente dolorum illo quasi placeat aliquid.</p>
    </div>
    <Menu />
    </div>
  );
}
