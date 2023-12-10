'use client'
import ItemCard from '@/components/ItemCard';
import React, { useState, useEffect } from 'react';
import { useSession, status } from 'next-auth/react';

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

export default function Profile({ params }) {
  const { slug } = params;
  const {session, status} = useSession()
  const [user, setUser] = useState(null);
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

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

  if (error) {
    return <div>Error loading data: {error}</div>;
  }

  return (
    <>
      <div className="profile-bg flex flex-col items-center">
        <div className="m-auto flex flex-col items-center">
          <h1 className="background-h lg:text-5xl text-xl w-fit mx-auto px-4 text-gray-200">
           {user ?  
           <p>Welcome, {user.name}!</p> : 'Loading...'}
          </h1>
          <p className="background-p lg:text-2xl text-lg lg:mt-4 mt-2 w-fit mx-auto px-4 text-gray-300">
            Your journey has just started...
          </p>
        </div>
      </div>
      <div className='pt-10 min-h-screen max-w-[80%] mx-auto'>
        <div className="text-2xl mt-5 font-bold ml-4 first-letter:uppercase">Your items on sale</div>
        <hr className="my-2" />
        <div className="flex mt-10 justify-center items-center flex-wrap mx-auto gap-10">
    {items.map(item => (
          <ItemCard key={item.id} item={item} />
        ))}
    </div>
      </div>
    </>
  );
}
