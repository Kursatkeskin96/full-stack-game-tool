'use client'
import ItemCard from '@/components/ItemCard';
import React, { useState, useEffect } from 'react';
import { useSession, status } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { IoSearchOutline } from "react-icons/io5";

// Asynchronous function to get user data
const getUserData = async (slug) => {
    if (typeof window !== 'undefined') {
      var currentURL = window.location.href;
      var urlParts = currentURL.split("/");
      var domain = urlParts[1];
    }
  
    const api = domain;
    const res = await fetch(`${api}/api/users/${slug}`);
  
    if (!res.ok) {
      throw new Error("Failed to fetch user data");
    }
  
    return res.json();
  };

export default function ReferredBy({params}) {
    const { slug } = params;
    const {data: session} = useSession()
    const router = useRouter()

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
      };
    
      const handleSearchSubmit = () => {
        // Update the URL with the search term
        router.push(`/profile/${slug}?search=${encodeURIComponent(searchTerm)}`);
      };

    
  useEffect(() => {
    // Only fetch user data if there's a search term in the URL
    if (router.query.search) {
      getUserData(router.query.search)
        .then(data => {
          setUser(data.user);
        })
        .catch(error => {
          setError(error.message);
          console.error("Error fetching user data:", error);
        });
    }
    // Note: No else block, so nothing happens if there's no search term
  }, [router.query.search]); // Depend only on router.query.search
  return (
    <div>
           {user ? (
          <>
        {
  session.user.name == slug ? (
    <div>
      {
        user.referredBy == null ? (
          <div>
  <div className="text-2xl mt-10 font-bold ml-4 first-letter:uppercase">
          Referred By
        </div>
        
        <hr className="my-2" />
        <div className='flex flex-col justify-center items-center gap-4'>
        <div className='text-lg ml-4 text-center'>If you have referred by someone else, you can write that user's discord nick in search. </div>
        <div className='text-md ml-4 text-center'>We have valuable rewards for who refer our website.  </div>
        <div className='text-sm ml-4 text-center'><ul>
          <li><span className='font-bold '>10 refer:</span> 30x Tome Of Insight</li>
          <li><span className='font-bold '>50 refer:</span> 200x Tome Of Insight</li>
          <li><span className='font-bold '>100 refer:</span> 500x Tome Of Insight</li></ul></div>
          </div>
        <div className='flex mt-10 justify-center items-center gap-2'>
<div className="input-icon-container">
    <input 
    placeholder='search user'
    value={searchTerm}
    onChange={handleSearchChange}
        type="text" 
        className="w-60 h-8 rounded-md pl-8 border-2 border-black text-black" // Note the left padding
    />
    <IoSearchOutline className="input-icon"/>
</div>
      <button 
           onClick={handleSearchSubmit}
        className="bg-blue-500 text-white w-20 h-8 rounded-md"
      >
        Search
      </button>
    </div>
          </div>
        ) : (
          <div>    
               <div className="text-2xl  font-bold ml-4 first-letter:uppercase">
          Referred by {user.referredBy}
        </div>
        <hr className="my-2" /></div>
        )
      }
    </div>
  ) : (
    <div>baskasi</div>
  )
}

</>
): <p>
  Loading...
</p> }
    </div>
  )
}
