'use client'
import React from "react";
import Pagination from "@/components/Pagination";
import Card from "@/components/Card";

const getData = async (page, cat) => {
  const queryParams = {};

  // Add parameters to queryParams only if they exist
  if (page) queryParams.page = page;
  if (cat) queryParams.cat = cat;
  // Construct the query string
  const queryString = new URLSearchParams(queryParams).toString();
  if (typeof window !== 'undefined') {
    var currentURL = window.location.href;
    var urlParts = currentURL.split("/");
    var domain = urlParts[1];
  }

  const api = domain;   
  const url =  `https://albionjourney.com/api/posts?page=${page}&cat=${cat || ""}`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch items");
  }

  return res.json();
};

const CardList = async ({ page, cat }) => {
  const { posts, count } = await getData(page, cat);

  const POST_PER_PAGE = 2;

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;
  return (
    <div className='lg:w-4/6 w-full'>
        <h1 className='mt-12 mb-6 text-2xl font-bold'>Recent Posts</h1>
        <div>
          {posts?.map((item) => (
            <Card item={item} key={item.id}/>
          ))}
        </div>
        <Pagination cat={cat} page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  );
};

export default CardList;