"use client";
import React from "react";
import items from "@/items.json";
import Link from "next/link";
import ItemCardList from "@/components/ItemCardList";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

export default function Market({searchParams}) {
  const router = useRouter();
  const page = parseInt(searchParams.page) || 1;
  const tier = searchParams.tier || "";
  const ench = parseInt(searchParams.ench) || "";
  const quality = searchParams.quality || "";
  const search = searchParams.search || "";
  const pathname = usePathname();

  const updateQueryParams = (newParam) => {
    const currentParams = new URLSearchParams(window.location.search);
  
    Object.keys(newParam).forEach(key => {
      if (newParam[key] === "") {
        currentParams.delete(key);
      } else {
        currentParams.set(key, newParam[key]);
      }
    });
  
    router.push(`/market?${currentParams.toString()}`, undefined, { shallow: true });
  };

  return (
    <div>
      <div className="text-2xl pt-20 font-bold ml-4">Albion Journey Market</div>
      <hr className="my-2" />
      <div className="ml-4">
        <Link href="/">
          <span>Home</span>
        </Link>{" "}
        /{" "}
        <Link href="/market">
          <span className="font-bold cursor-pointer">Market</span>
        </Link>
      </div>
      <div className=" bg-gray-900 pb-5 mt-10">
          <div className="flex lg:justify-around justify-center gap-10 lg:gap-0  items-center">
          <div className="flex flex-col lg:flex-row justify-center items-start mt-5 lg:ml-10 flex-wrap">
             <div> 
              <p className="text-gray-300 mb-2 lg:mb-2 underline lg:text-left text-center">
                Tier
                </p> 

             <div className="flex flex-col lg:flex-row  flex-wrap justify-center items-center gap-4">
             <button
 onClick={() => updateQueryParams({ tier: "T4" })}
                className="bg-[#356079] text-white w-10 rounded-md shadowl-lg"
              >
                T4
              </button>
              <button
 onClick={() => updateQueryParams({ tier: "T5" })}
                className="bg-[#76221A]  text-white w-10 rounded-md shadowl-lg"
              >
                T5
              </button>
              <button
 onClick={() => updateQueryParams({ tier: "T6" })}
                className="bg-[#C06B29] text-white w-10 rounded-md shadowl-lg"
              >
                T6
              </button>
              <button
 onClick={() => updateQueryParams({ tier: "T7" })}
                className="bg-[#D1B045]  text-white w-10 rounded-md shadowl-lg"
              >
                T7
              </button>
              <button
 onClick={() => updateQueryParams({ tier: "T8" })}
                className="bg-white text-black w-10 rounded-md shadowl-lg"
              >
                T8
              </button>
             </div>
             </div>
            </div>
            
            <div className="flex flex-col lg:flex-row l justify-center items-start gap-2 mt-5 lg:ml-10 flex-wrap">
             <div> 
              <p className="text-gray-300 underline  mb-2 lg:mb-2 lg:text-left text-center ">
                Enchanment
                </p> 
                <div className="flex flex-col lg:flex-row flex-wrap  justify-center items-center gap-4">
              <button
onClick={() => updateQueryParams({ ench: "0" })}
                
                className="w-10 bg-white rounded-md shadow-lg text-black"
              >
                0
              </button>
              <button
onClick={() => updateQueryParams({ ench: "1" })}
                className="w-10  bg-[#61D984] rounded-md shadow-lg text-black"
              >
                .1
              </button>
              <button
onClick={() => updateQueryParams({ ench: "2" })}
                className="w-10 bg-[#47D8E5] rounded-md shadow-lg text-black"
              >
                .2
              </button>
              <button
onClick={() => updateQueryParams({ ench: "3" })}
                className="w-10  bg-[#A87DE2] rounded-md shadow-lg text-black"
              >
                .3
              </button>
              <button
onClick={() => updateQueryParams({ ench: "4" })}
               
                className="w-10 bg-[#F6E169] rounded-md shadow-lg text-black"
              >
               .4
              </button>
            </div>
            </div>
            </div>


            <div className="flex flex-col lg:flex-row  justify-center items-start gap-2 mt-5 lg:ml-10 flex-wrap">
             <div> 
              <p className="text-gray-300 underline  mb-2 lg:mb-2 lg:text-left text-center">
                Quality
                </p> 

                <div className="flex flex-col lg:flex-row  flex-wrap justify-center items-center gap-4">
              <button
onClick={() => updateQueryParams({ quality: "normal" })}
                className="bg-black w-24 border-2 border-[#969592] text-sm text-white rounded-md"
              >
                Normal
              </button>
              <button
onClick={() => updateQueryParams({ quality: "good" })}
                className="bg-black  w-24 border-2 border-[#99ABC7] text-sm text-white rounded-md"
              >
                Good
              </button>
              <button
onClick={() => updateQueryParams({ quality: "outstanding" })}
                className="bg-black w-24 border-2 border-[#FAC57E] text-sm text-white rounded-md"
              >
                Outstanding
              </button>
              <button
onClick={() => updateQueryParams({ quality: "excellent" })}
                className="bg-black  w-24 border-2 border-[#F4FBFD] text-sm text-white rounded-md"
              >
                Excellent
              </button>
              <button
onClick={() => updateQueryParams({ quality: "masterpiece" })}
                className="bg-black w-24 border-2 border-[#FDDD83] text-sm text-white rounded-md"
              >
                Masterpiece
              </button>
            </div>
            </div>
            </div>  

          </div>
          <div className="flex justify-center items-center"><Link href='/market'><button className="bg-red-600 text-white w-32 rounded-md mt-8">Reset Filter</button></Link></div>
          </div>
      <div className="flex mt-10 justify-center items-center flex-wrap mx-auto gap-10">
        <ItemCardList ench={ench} quality={quality} tier={tier} search={search} page={page} />
      </div>
    </div>
  );
}
