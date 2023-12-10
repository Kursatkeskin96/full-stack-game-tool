'use client'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { signIn, signOut, useSession } from "next-auth/react";

export default function HeroSection() {
  const { data: session } = useSession();
  return (
    <div>
  <div className='hero-bg flex flex-col items-center'>
    <div className="m-auto flex flex-col items-center">
    <h1 className="background-h lg:text-7xl md:text-5xl text-3xl w-fit mx-auto px-4 text-gray-200">Albion Journey</h1>
    <p className=" background-p lg:text-2xl text-lg lg:mt-4 mt-2 w-fit mx-auto px-4 text-gray-300">W<Typewriter   typeSpeed={70} deleteSpeed={0} delaySpeed={1000} words={["here Every Path Leads To Adventure..."]} loop={0} /></p>
    {!session && (
    <button  onClick={() => signIn("discord")} className='mb-16 bg-orange-600 text-white w-32 h-8 rounded-md mt-4'>Log In</button>
  )}
  </div>
  </div>
    </div>
  )
}
