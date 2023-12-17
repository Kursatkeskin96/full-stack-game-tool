'use client'
import ItemCard from '@/components/ItemCard';
import React, { useState, useEffect } from 'react';
import { useSession, status } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { IoSearchOutline } from "react-icons/io5";
import Image from 'next/image';

// Asynchronous function to get user data
const getData = async (slug) => {
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

// Asynchronous function to get user data
const getRefer = async (searchParams) => {
  if (typeof window !== 'undefined') {
    var currentURL = window.location.href;
    var urlParts = currentURL.split("/");
    var domain = urlParts[1];
  }

  const api = domain;
  const res = await fetch(`${api}/api/users/${searchParams.search}`);
console.log(res)
  if (!res.ok) {
    throw new Error("Failed to fetch user data");
  }

  return res.json();
};


// Asynchronous function to get items data
const getItem = async (slug) => {
  if (typeof window !== 'undefined') {
    var currentURL = window.location.href;
    var urlParts = currentURL.split("/");
    var domain = urlParts[1];
  }

  const api = domain;
  const res = await fetch(`${api}/api/items/${slug}`);

  if (!res.ok) {
    throw new Error("Failed to fetch items");
  }

  return res.json();
};

export default function Profile({ params, searchParams }) {
  const { slug } = params;
  const {data: session} = useSession()
  const router = useRouter()
  const search = searchParams.search || "";
  const searchParam = router && router.query ? router.query.search : null;
  const [user, setUser] = useState(null);
  const [items, setItems] = useState([]);
  const [refer, setRefer] = useState("")
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = () => {
    // Update the URL with the search term
    router.push(`/profile/${slug}?search=${encodeURIComponent(searchTerm)}`);
  };

  useEffect(() => {
    // Fetch user data
    getData(slug)
      .then(data => {
        setUser(data.user);
      })
      .catch(error => {
        setError(error.message);
        console.error("Error fetching user data:", error);
      });

    // Fetch items data
    getItem(slug)
      .then(data => {
        setItems(data.item);
      })
      .catch(error => {
        setError(error.message);
        console.error("Error fetching items:", error);
      });
  }, [slug]);
  useEffect(() => {
    if (searchParams && searchParams.search) {
      getRefer(searchParams)
        .then(response => {
          setRefer(response.user); // make sure this path matches your actual API response
        })
        .catch(error => {
          console.error("Error fetching referred user data:", error);
          setError(error.message);
        });
    }
  }, [searchParams]);
  
  const handleRef = async () => {
    try {
      const response = await fetch(`/api/users/${slug}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ referredby: refer.name }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to update user');
      }
  
     alert("Successfuly added refer")
     router.push('/')
      console.log('User updated successfully');
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

console.log(refer)

  if (error) {
    return <div>Error loading data: {error}</div>;
  }

  return (
    <>
    <title>Manage Your Profile & Listings in Albion Online | Albion Journey</title>
      <div className="profile-bg flex flex-col items-center">
        <div className="m-auto flex flex-col items-center">
          <h1 className="background-h">
            {user ? (
              <>
              <p className='lg:text-5xl text-xl w-fit mx-auto px-4 text-gray-200'>Welcome to {user.name}&apos;s Profile!</p>
              <p className="background-p lg:text-xl text-lg lg:mt-4 mt-2 w-fit mx-auto px-4 text-gray-300">
              Your journey has just started...
            </p>
            </>
            ) : (
              <p className='lg:text-5xl text-xl w-fit mx-auto px-4 text-gray-200'>Loading..</p>
            )}
          </h1>
        </div>
      </div>
      <div className="pt-10 min-h-screen max-w-[80%] mx-auto">
        <div className="text-2xl mt-5 font-bold ml-4 first-letter:uppercase">
          {user && `${user.name}'s items on sale`}
        </div>
        <hr className="my-2" />
        <div className="flex mt-10 justify-center items-center flex-wrap mx-auto gap-10">
          {items.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
        {user && session ? (
          <>
        {
  session.user.name == slug ? (
    <div>
      {
        user.referredby == null ? (
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
    {refer ? (
        <div className='flex justify-center items-center gap-4'>
        <div className='flex mt-5 w-fit mx-auto px-2 py-1 rounded-md text-xl justify-center items-center gap-2'><span><Image  className='rounded-[50%]' src={refer.image} width={30} height={30} alt='dcpic' /></span> {refer.name} <button className='bg-green-600 px-1 text-sm py-1 w-14 rounded-md text-white' onClick={handleRef}>Select</button></div>
        </div>
      ): (
<div></div>

      )}
          </div>
        ) : (
          <div>    
               <div className="text-2xl mt-10 font-bold ml-4 first-letter:uppercase">
          Referred by {user.referredby}
        </div>
        <hr className="my-2" /></div>
        )
      }
    </div>
  ) : (
    <div></div>
  )
}

</>
): <p>
  Loading...
</p> }

      </div>
    </>
  );
}