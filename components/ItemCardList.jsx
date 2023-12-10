'use client'
import React from "react";
import Pagination from "@/components/Pagination";
import ItemCard from "@/components/ItemCard";
import SearchComponent from "@/components/Search";

const getData = async (page, tier, ench, quality, search) => {
  const queryParams = {};

  // Add parameters to queryParams only if they exist
  if (page) queryParams.page = page;
  if (tier) queryParams.tier = tier;
  if (ench) queryParams.ench = ench;
  if (quality) queryParams.quality = quality;
  if (search) queryParams.search = search
  // Construct the query string
  const queryString = new URLSearchParams(queryParams).toString();
  if (typeof window !== 'undefined') {
    var currentURL = window.location.href;
    var urlParts = currentURL.split("/");
    var domain = urlParts[1];
  }

  const api = domain;
  const url = `${api}/api/items?${queryString}`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch items");
  }

  return res.json();
};

const ItemCardList = async ({ page, tier, ench, quality, search }) => {
  const { items, count } = await getData(page, tier, ench, quality, search);

  const ITEM_PER_PAGE = 8;

  const hasPrev = ITEM_PER_PAGE * (page - 1) > 0;
  const hasNext = ITEM_PER_PAGE * (page - 1) + ITEM_PER_PAGE < count;
  return (
    <div className='w-full'>
        <SearchComponent />
        <div className="flex justify-center items-center flex-wrap gap-10">
            {items?.map((item) => (
                <ItemCard key={item.id} item={item} />
            ))}
        </div>
        <div className='max-w-[50%] mx-auto mt-20'>
        <Pagination quality={quality} ench={ench} tier={tier} search={search} page={page} hasPrev={hasPrev} hasNext={hasNext} />
        </div>
    </div>
  );
};

export default ItemCardList;
