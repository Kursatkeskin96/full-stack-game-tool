import React from "react";
import Image from "next/image";
import { TbCoins } from "react-icons/tb";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { MdDelete } from "react-icons/md";


const capitalizeFirstLetter = (string) => {
  if (!string) return string;
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

const handleRemoveItem = async (itemId) => {
  if (typeof window !== 'undefined') {
    var currentURL = window.location.href;
    var urlParts = currentURL.split("/");
    var domain = urlParts[1];
  }

  const api = domain;
  try {
    const response = await fetch(`${api}/api/items`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ itemId }),
    });

    if (response.ok) {
      alert("Item successfully deleted.");
      window.location.reload();
    } else {
      alert("Failed to delete the item.");
    }
  } catch (error) {
    console.error("Failed to delete the item:", error);
  }
};

export default function ItemCard({ item }) {
  const { data: session } = useSession();

  function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  const formattedSellPrice = formatNumberWithCommas(item.price);
  return (
    <div className="w-60 mt-5 shadow-lg rounded-md">
      {item.quantity ? (
        <div className="h-8">
          <h2 className="text-lg mt-2 text-center font-bold">
            {item.quantity}x {capitalizeFirstLetter(item.resource)}
          </h2>
        </div>
      ) : (
        <div className="h-8">
          <h2 className="text-lg mt-2 text-center font-bold">{item.title}</h2>
        </div>
      )}
      {item.quality ? (
        <Image
          className="mx-auto mt-2"
          src={item.img}
          alt="sword"
          height={100}
          width={100}
        />
      ) : (
        <Image
          className="mx-auto mt-2"
          src={item.resourceImg}
          alt="sword"
          height={100}
          width={100}
        />
      )}

      <hr className="my-2" />
      <div className="flex mt-4 justify-center items-start gap-2 text-sm">
        <div>Tier / Enchanment:</div>
        <div className="text-gray-400">
          {item.tier}.{item.ench}
        </div>
      </div>

      <div className="flex justify-center items-start gap-2 text-sm">
        <div>Quality:</div>
        <div className="text-gray-400 first-letter:uppercase underline">
          {item.quality}
        </div>
      </div>
      <div className="flex justify-center items-start gap-2 text-sm">
        <div>Price:</div>
        <div className="text-gray-400">{formattedSellPrice}</div>
        <div className="mt-1 text-green-700 font-bold">
          <TbCoins />
        </div>
      </div>
      <div className="flex justify-center items-start gap-2 text-sm">
        <div>Seller:</div>
        <div className="text-gray-400">{item.seller}</div>
      </div>
      <div className="flex justify-center items-start gap-2 text-sm">
        <div>Date:</div>
        <div className="text-gray-400">{item.createdAt.substring(0, 10)}</div>
      </div>

      {session?.user?.name === item.seller ? (
        <div>
          <div className="flex justify-center items-center">
            <button
              className="bg-red-600 mb-4 w-32 text-white mx-auto text-center rounded-md mt-4"
              onClick={() => handleRemoveItem(item.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex justify-center items-center">
            <Link
              className="bg-orange-600 mb-4 w-32 text-white mx-auto text-center rounded-md mt-4"
              href={`https://discord.com/users/${item.discordId}`}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
