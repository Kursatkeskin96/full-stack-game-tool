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

const getPlayer = async (slug) => {
  const res = await fetch(
    `https://gameinfo.albiononline.com/api/gameinfo/search?q=${slug}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }

  const data = await res.json();

  // Find the player whose name exactly matches the slug
  const matchingPlayer = data.players.find(player => player.Name === slug);

  return matchingPlayer || null; // Return the matching player or null if not found
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
  const playerdata = await getPlayer(slug)
  const itemdata = await getItem(slug)
  console.log(itemdata)
  
  return (
    <>  <div className="profile-bg flex flex-col items-center">
    <div className="m-auto flex flex-col items-center">
      <h1 className="background-h lg:text-5xl text-xl w-fit mx-auto px-4 text-gray-200">
        Welcome, {playerdata.Name}!
      </h1>
      <p className="background-p lg:text-2xl text-lg lg:mt-4 mt-2 w-fit mx-auto px-4 text-gray-300">
      Your journey has just started...
      </p>
    </div>
  </div>
    <div className='pt-10 min-h-screen max-w-[80%] mx-auto'>
         <div className="text-2xl mt-5 font-bold ml-4 first-letter:uppercase">{data.user.name}'s Profile</div>
      <hr className="my-2" />
      {data.user.ign ? (
        <div className='flex justify-between items-start'>
                  <div className=' bg-gray-300 h-72 w-1/3 rounded-md shadow-lg'>
        </div>
        <div className='bg-gray-300 h-fit w-1/2 rounded-md shadow-lg'>
          <h3>Your Items On Market</h3>
<div className='flex justify-center items-center flex-wrap gap-5'>
{itemdata.item && itemdata.item.map((item) => (
                <MiniItemCard key={item.id} item={item} />
              ))}
</div>
        </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
    </>
  )
}
