'use client'
import React, { useEffect } from 'react';
import {signIn, signOut, useSession} from 'next-auth/react'
import logo from '@/images/logo.png'
import Image from 'next/image'
import { FaDiscord } from "react-icons/fa";
import { redirect } from "next/navigation";


const Home = () => {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      redirect("/");
    }
  }, [status]);

  return (
    <div className='pt-20 '>
        {session && (
      <button className='pt-20' onClick={() => signOut('discord')}>Sign Out</button>
      )}
      {!session && (
            <>
            <div className='flex lg:flex-row flex-col justify-center items-center shadow-lg mt-10 border-[1px] rounded-md border-black lg:w-[60%] w-[80%] h-[500px] lg:h-96 mx-auto'>
            <div className='lg:w-1/2 w-full h-full relative'>
              <Image src={logo} alt="logo" fill className="object-contain"  />
            </div>
            <div className='flex flex-col justify-evenly items-center lg:w-1/2 w-full bg-[#081E3B] h-full'>
              <h1 className='text-white text-center text-3xl'>Welcome To Albionjourney.com!</h1>
              <h3 className='text-gray-300 text-center text-lg'>If you want to begin your Journey, you can login with your Discord..</h3>
            <button className='text-[#081E3B] rounded-md w-40 hover:bg-slate-200 py-1 bg-white flex justify-center items-center gap-2' onClick={() => signIn('discord')}>Sign In with <FaDiscord/> </button>
            </div>
            </div>

          </>
      )}

    </div>
  )
}

export default Home
