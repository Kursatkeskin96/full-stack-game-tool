"use client";

import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import tr from "@/images/tr.png";
import us from "@/images/us.png";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import { IoIosArrowDropdown } from "react-icons/io";

function Navbar() {
  const { data: session } = useSession();
  const [nav, setNav] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);
  const dropdownRef = useRef(null);
  const dropdownRefCalculator = useRef(null);
  const dropDownRefMarket = useRef(null);

  const handleNav = () => {
    setNav(!nav);
  };
  const slug = session?.user?.name ? session.user.name : "";

  // Function to handle the dropdown toggle
  const handleDropDown = () => {
    setDropdown(!dropdown);
  };
  const handleDropDown2 = () => {
    setDropdown2(!dropdown2);
  };
  const handleDropDown3 = () => {
    setDropdown3(!dropdown3);
  };

  // Close dropdown when clicked outside
  useEffect(() => {
    const pageClickEvent = (e) => {
      if (
        dropdownRef.current !== null &&
        !dropdownRef.current.contains(e.target)
      ) {
        setDropdown(!dropdown);
      }
    };

    // If the item is active (ie open) then listen for clicks
    if (dropdown) {
      window.addEventListener("click", pageClickEvent);
    }

    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [dropdown]);

  // Close dropdown when clicked outside
  useEffect(() => {
    const pageClickEvent = (e) => {
      if (
        dropDownRefMarket.current !== null &&
        !dropDownRefMarket.current.contains(e.target)
      ) {
        setDropdown3(!dropdown3);
      }
    };

    // If the item is active (ie open) then listen for clicks
    if (dropdown3) {
      window.addEventListener("click", pageClickEvent);
    }

    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [dropdown3]);

  // Handle outside click for calculator dropdown
  useEffect(() => {
    const pageClickEvent = (e) => {
      if (
        dropdownRefCalculator.current !== null &&
        !dropdownRefCalculator.current.contains(e.target)
      ) {
        setDropdown2(false);
      }
    };

    if (dropdown2) {
      window.addEventListener("click", pageClickEvent);
    }

    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [dropdown2]);

  return (
    <>
      <div className="w-full h-14 shadow-xl z-[100] bg-[#14213D] p-2 fixed">
        <div className="flex justify-between items-center w-full h-full pt-1 px-2 2xl:px-16">
          <Link href="/">
            <span className="font text-md ml-5 hover:border-b text-white hover:border-[#FFAA00]">
              albionjourney.com
            </span>
          </Link>
          <div>
            <ul className="hidden md:flex h-full">
              <Link href="/">
                <li className="ml-10 text-sm hover:border-b hover:border-[#FFAA00] text-white">
                  Home
                </li>
              </Link>
              <Link href="/guides">
                <li className="ml-10 text-sm text-white hover:border-b hover:border-[#FFAA00]">
                  Guides
                </li>
              </Link>
              <div className="relative ml-8 cursor-pointer flex text-sm text-white">
                <div
                  onMouseEnter={() => setDropdown2(true)}
                  onMouseLeave={() => setDropdown2(false)}
                  ref={dropDownRefMarket}
                  className="ml-1 flex"
                >
                  <div>Profit Calculators</div>
                  <span className="pt-1 pl-1">
                    <IoIosArrowDropdown />
                  </span>
                  {dropdown2 && (
                    <div className="absolute bg-[#14213D] rounded-md shadow text-center w-full mt-5 p-1">
                      <ul className="text-sm text-white ">
                        <li
                          onClick={() => setDropdown2(false)}
                          className="block py-2 hover:bg-[#1b2c52]"
                        >
                          <Link href="/profit-calculator/item-calculator">Craft Calculator</Link>
                        </li>                        <li
                          onClick={() => setDropdown2(false)}
                          className="block py-2 hover:bg-[#1b2c52]"
                        >
                          <Link href="/profit-calculator/refine-calculator">Refine Calculator</Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              <div className="relative ml-8 cursor-pointer flex text-sm text-white">
                <div
                  onMouseEnter={() => setDropdown3(true)}
                  onMouseLeave={() => setDropdown3(false)}
                  ref={dropDownRefMarket}
                  className="ml-1 flex "
                >
                  <Link href="/market">Market</Link>{" "}
                  <span className="pt-1 pl-1">
                    <IoIosArrowDropdown />
                  </span>
                  {dropdown3 && (
                    <div className="absolute bg-[#14213D] rounded-md shadow text-center mt-5 p-1">
                      <ul className="text-sm w-20 text-white ">
                        <li
                          onClick={() => setDropdown3(false)}
                          className="block py-2 hover:bg-[#1b2c52]"
                        >
                          <Link href="/market/sell-item">Sell Item</Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              {session && (
                  <>
               
                <div
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                  className="relative ml-8 cursor-pointer flex mr-5 text-sm text-white"
                >
         
                  <Image
                    className="rounded-[50%]"
                    src={session?.user?.image}
                    alt=""
                    width={20}
                    height={20}
                  />
 
                  <div
                    onClick={handleDropDown}
                    ref={dropdownRef}
                    className="ml-1 flex"
                  >
                    
                    {session?.user?.name}{" "}                                                
                    <span className="pt-1 pl-1">
                      <IoIosArrowDropdown />
                    </span>

                    {dropdown && (
                      <div className="absolute bg-[#14213D] rounded-md h-20 shadow text-center w-full mt-5">
                        <ul className="text-sm text-white ">
                          <li
                            onClick={() => setDropdown(false)}
                            className="block py-2 hover:bg-[#1b2c52]"
                          >
                            <Link href={`/profile/${slug}`}>Profile</Link>
                          </li>
                          <li
                            onClick={() => setDropdown(false)}
                            className="block py-2 hover:bg-[#1b2c52]"
                          >
                            <button onClick={() => signOut()}>Logout</button>
                          </li>
                        </ul>
                      </div>
                    )}
                          </div>
                </div>
                </>
              )}
     
              {!session && (
                <li className="ml-10 mr-5 text-sm text-white">
                  <button
                    onClick={() => signIn("discord")}
                    className="bg-orange-600 px-4 rounded-md"
                  >
                    Login
                  </button>
                </li>
              )}
            </ul>

            <div className="flex justify-between items-center gap-6">
              <div onClick={handleNav} className="md:hidden cursor-pointer">
                <AiOutlineMenu
                  className="text-white dark:text-white"
                  size={25}
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70  text-white "
              : ""
          }
        >
          <div
            className={
              nav
                ? "fixed left-0 top-0 w-[100%] sm:w-[60%] md:w-[45%]  h-screen bg-[#ecf0f3] dark:bg-black p-10 ease-in duration-500 "
                : "fixed left-[-100%] h-screen top-0 p-10 ease-in duration-500 "
            }
          >
            <div>
              <div className="flex  items-center justify-between">
                <span className="font text-black">albionprofit.com</span>
                <div
                  onClick={handleNav}
                  className="rounded-full shadow-lg bg-[#14213D] shadow-gray-400 p-3 cursor-pointer"
                >
                  <AiOutlineClose />
                </div>
              </div>
              <div className="border-b border-[#FFAA00] pt-3 my-4"></div>
            </div>
            <div className="flex flex-col">
              <ul className="">
                <Link href="#home">
                  <li
                    onClick={() => setNav(false)}
                    className="py-4 text-sm text-black"
                  >
                    Home
                  </li>
                </Link>
                <Link href="/guides">
                  <li
                    onClick={() => setNav(false)}
                    className="py-4 text-sm text-black"
                  >
                    Guides
                  </li>
                </Link>
                <Link href="#skills">
                  <li
                    onClick={() => setNav(false)}
                    className="py-4 text-sm text-black"
                  >
                    Profit Calculator
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
