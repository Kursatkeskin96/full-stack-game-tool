"use client";
import React, { useState, useEffect } from "react";
import items from "@/items.json";
import ItemCard from '@/components/ItemCard'
import Pagination from '@/components/Pagination'
import Link from "next/link";


export default function Market() {
  const [category, setCategory] = useState("");
  const [subCategories, setSubCategories] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [displayItems, setDisplayItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState("");
  const [name, setName] = useState("");
  const [usageFee, setUsageFee] = useState("");
  const [tier, setTier] = useState("");
  const [ench, setEnch] = useState("");
  const [selectedItemObj, setSelectedItemObj] = useState(null);


  const handleTier = (e) => {
    setTier(e.target.value);
  };

  const handleEnch = (e) => {
    setEnch(e.target.value);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
    setSelectedSubCategory(""); // Reset subcategory when category changes
    setDisplayItems([]);
  };

  const handleSubCategory = (e) => {
    setSelectedSubCategory(e.target.value);
  };

  const handleSelectedItem = (e) => {
    const selectedItemValue = e.target.value;
    setSelectedItem(selectedItemValue);

    // Find the selected item in the displayItems array
    const selectedItemObj = displayItems.find(
      (item) => item.value === selectedItemValue
    );
    setSelectedItemObj(selectedItemObj);
    if (selectedItemObj) {
      setName(selectedItemObj.name); // Update the name state with the selected item's name
      setQ1(selectedItemObj.q1);
      setQ2(selectedItemObj.q2);
      setQ3(selectedItemObj.q3);
      setRecipe1(selectedItemObj.recipe1);
      setRecipe2(selectedItemObj.recipe2);
      setArtifact(selectedItemObj.artifact);
      setItemValue(selectedItemObj.itemValue)
    } else {
      setName(""); // Reset the name if no item is selected
      setQ1("");
      setQ2("");
      setQ3("");
      setRecipe1("");
      setRecipe2("");
      setArtifact("");
    }
  };

  useEffect(() => {
    // Check if the selected category is either 'armor' or 'head'
    const isArmorOrHead = ['armor', 'head', 'shoes', 'magic', 'melee', 'ranged', "off-hand", "accessories"].includes(category.toLowerCase());
  
    if (isArmorOrHead) {
      const categoryData = items.find(item => item.hasOwnProperty(category.toLowerCase()));
      if (categoryData) {
        const subCategoryData = categoryData[category.toLowerCase()];
        setSubCategories(subCategoryData.map(cat => cat.category));
      } else {
        setSubCategories([]);
      }
    }
  }, [category]);
  
  useEffect(() => {
    if (selectedSubCategory) {
      const categoryData = items.find(item => item.hasOwnProperty(category.toLowerCase()));
      if (categoryData) {
        const itemsInSubCategory = categoryData[category.toLowerCase()].find(
          cat => cat.category === selectedSubCategory.toLowerCase()
        );
        if (itemsInSubCategory) {
          setDisplayItems(itemsInSubCategory.items);
        } else {
          setDisplayItems([]);
        }
      }
    }
  }, [selectedSubCategory]);

  
  const mainCategory = 'armor'; // or 'head', etc., based on user selection
  const subCategoryToFind = 'leather hood'; // This should be the subcategory you're looking for
  
  const categoryData = items.find(item => item.hasOwnProperty(mainCategory));
  


  // Item Images
  let imageurl;

  if (ench !== "0") {
    imageurl = `https://render.albiononline.com/v1/item/${tier}_${selectedItem}@${ench}`;
  } else {
    imageurl = `https://render.albiononline.com/v1/item/${tier}_${selectedItem}`;
  }

  return (
    <div>
  <div className='market-bg flex flex-col items-center'>
    <div className="m-auto flex flex-col items-center">
    <h1 className="background-h lg:text-5xl text-xl w-fit mx-auto px-4 text-gray-200">Albion Journey Market </h1>
    <p className="background-p lg:text-3xl text-lg lg:mt-4 mt-2 w-fit mx-auto px-4 text-gray-300">List Your Items</p>
    <Link href='/market/sell-item'><button className=' bg-orange-600 text-white w-32 h-8 rounded-md mt-4'>Sell Items</button></Link>
  </div>
  </div>
  <div className='text-2xl mt-10 font-bold ml-4'>Albion Journey Market</div>
        <hr className='my-2' />
        <div className='ml-4'><Link href='/'><span >Home</span></Link> / <Link href='/market'><span  className="font-bold cursor-pointer">Market</span></Link></div>
        <div className=' bg-gray-900 pb-10 mt-10 flex flex-wrap justify-around items-center'>
          <div>
          <p className="text-white text-lg  font-bold lg:ml-10 pt-4">Filter</p>
        <div className="flex justify-center items-start gap-5 mt-5 lg:ml-10 flex-wrap">
          <div className="flex flex-col">
            <label name="tier" className="text-white mb-1 ">
              Tier
            </label>
            <select
              name="tier"
              id="tier"
              className="h-8 w-20"
              onChange={handleTier}
            >
              <option value="T4">T4</option>
              <option value="T5">T5</option>
              <option value="T6">T6</option>
              <option value="T7">T7</option>
              <option value="T8">T8</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label name="enchanment" className="text-white mb-1">
              Enchanment
            </label>
            <select
              name="enchanment"
              id="enchanment"
              className="h-8 w-20"
              onChange={handleEnch}
            >
              <option value="0">0</option>
              <option value="1">.1</option>
              <option value="2">.2</option>
              <option value="3">.3</option>
              <option value="4">.4</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label name="enchanment" className="text-white mb-1">
              Quality
            </label>
            <select
              name="enchanment"
              id="enchanment"
              className="h-8 w-20"
              onChange={handleEnch}
            >
              <option value="Normal">Normal</option>
              <option value="Good">Good</option>
              <option value="Ooutstanding">Outstanding</option>
              <option value="Excellent">Excellent</option>
              <option value="Masterpiece">Masterpiece</option>
            </select>
          </div>
          </div>
          </div>
          <div>
          <div className="flex flex-col mt-12">
            <label name="enchanment" className="text-white mb-1">
              Search
            </label>
          <input type="text" className=" w-60 h-8 rounded-md pl-2" />
              </div>
              </div>
        </div>
        <div className='flex mt-10  justify-center items-center flex-wrap mx-auto gap-10'>
        <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </div>
        <div className='max-w-[50%] mx-auto mt-20'>
        <Pagination />
        </div>
    </div>
  )
}
