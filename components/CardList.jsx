import React from "react";
import Pagination from "@/components/Pagination";
import Card from "@/components/Card";

const getData = async (page, cat) => {
  const res = await fetch(
    `https://albionjourney.vercel.app/api/posts?page=${page}&cat=${cat || ""}`,
  );

  if (!res.ok) {
    throw new Error("Failed");
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
