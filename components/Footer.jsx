import React from 'react'

export default function Footer() {
  return (
    <div className='flex justify-evenly min-h-52 h-fit items-center py-10 text-[#ECECEC] bg-black lg:mt-10 mt-20 text-sm flex-wrap'>
        <div className='lg:max-w-[30%] max-w-[50%] text-center'>
            <ul className='flex flex-col justify-between items-center h-40'>
                <li>Home</li>
                <li>Guides</li>
                <li>Item Calculator</li>
                <li>Refine Calculator</li>
            </ul>
        </div>

        <div className='lg:max-w-[30%] max-w-[50%] text-center'>
            <ul className='flex flex-col justify-between items-center h-40'>
                <li>English</li>
                <li>Turkish</li>
                <li>Espanol</li>
                <li>Russian</li>
            </ul>
        </div>
        
        <div className='lg:max-w-[30%] max-w-[50%] text-center'>
            <ul className='flex flex-col justify-between items-center h-40'>
                <li>All Albion Online related materials are property of Sandbox Interactive GmbH</li>
                <li>Imprint/Legal Notice</li>
                <li>Buy me a coffe</li>
                <li>Contact: kursatkeskinn@gmail.com</li>
            </ul>
        </div>
    </div>
  )
}
