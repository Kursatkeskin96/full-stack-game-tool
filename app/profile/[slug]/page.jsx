import MiniItemCard from '@/components/MiniItemCard';
import React from 'react'

const getData = async (slug) => {
  const res = await fetch(
    `http://localhost:3000/api/users/${slug}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const getItem = async (slug) => {
  const res = await fetch(
    `http://localhost:3000/api/items/${slug}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};


export default async function Profile({params}) {
  const { slug } = params;
  const data = await getData(slug);
  const itemdata = await getItem(slug)
  
  return (
    <>  <div className="profile-bg flex flex-col items-center">
    <div className="m-auto flex flex-col items-center">
      <h1 className="background-h lg:text-5xl text-xl w-fit mx-auto px-4 text-gray-200">
        Welcome, {data.user.name}!
      </h1>
      <p className="background-p lg:text-2xl text-lg lg:mt-4 mt-2 w-fit mx-auto px-4 text-gray-300">
      Your journey has just started...
      </p>
    </div>
  </div>
    <div className='pt-10 min-h-screen max-w-[80%] mx-auto'>
         <div className="text-2xl mt-5 font-bold ml-4 first-letter:uppercase">Your items on sale</div>
      <hr className="my-2" />
      {data ? (
        <div className='flex justify-center flex-wrap items-center gap-10'>
          {itemdata.item && itemdata.item.map((item) => (
                <MiniItemCard key={item.id} item={item} />
              ))}
        </div>
      ) : (
        <div></div>
      )}
    </div>
    </>
  )
}
