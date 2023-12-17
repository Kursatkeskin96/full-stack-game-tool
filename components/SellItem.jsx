"use client";
import React, { useState, useEffect } from "react";
import items from "@/items.json";
import Link from "next/link";
import { useRouter, redirect } from "next/navigation";
import { useSession, signIn } from "next-auth/react";

export default function SellItem() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [category, setCategory] = useState("");
  const [subCategories, setSubCategories] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [displayItems, setDisplayItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState("");
  const [name, setName] = useState("");
  const [tier, setTier] = useState("");
  const [ench, setEnch] = useState("");
  const [selectedItemObj, setSelectedItemObj] = useState(null);
  const [choose, setChoose] = useState("");
  const [q1, setQ1] = useState("");
  const [q2, setQ2] = useState("");
  const [q3, setQ3] = useState("");
  const [recipe1, setRecipe1] = useState("");
  const [recipe2, setRecipe2] = useState("");
  const [artifact, setArtifact] = useState("");
  const [itemValue, setItemValue] = useState("");
  const [calculatedItemValue, setCalculatedItemValue] = useState(0);
  const [quality, setQuality] = useState("");
  const [price, setPrice] = useState("");
  const [resource, setResource] = useState("");
  const [quantity, setQuantity] = useState("");
  const [discordId, setDiscordId] = useState("");
  const [server, setServer] = useState("West")

  const handleTier = (e) => {
    setTier(e.target.value);
  };

  const handleQuantity = (e) => {
    setQuantity(e.target.value);
  };

  const handleResource = (e) => {
    setResource(e.target.value);
  };

  const handleServer = (e) => {
    setServer(e.target.value)
  }

  const handleRadioChange = (e) => {
    setChoose(e.target.value);
  };

  const handleQuality = (e) => {
    setQuality(e.target.value);
  };

  const handlePrice = (e) => {
    setPrice(e.target.value);
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
      setName(selectedItemObj.name);
      setQ1(selectedItemObj.q1);
      setQ2(selectedItemObj.q2);
      setQ3(selectedItemObj.q3);
      setRecipe1(selectedItemObj.recipe1);
      setRecipe2(selectedItemObj.recipe2);
      setArtifact(selectedItemObj.artifact);
      setItemValue(selectedItemObj.itemValue);
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
    const isArmorOrHead = [
      "armor",
      "head",
      "shoes",
      "magic",
      "melee",
      "ranged",
      "off-hand",
      "accessories",
    ].includes(category.toLowerCase());

    if (isArmorOrHead) {
      const categoryData = items.find((item) =>
        item.hasOwnProperty(category.toLowerCase())
      );
      if (categoryData) {
        const subCategoryData = categoryData[category.toLowerCase()];
        setSubCategories(subCategoryData.map((cat) => cat.category));
      } else {
        setSubCategories([]);
      }
    }
  }, [category]);

  useEffect(() => {
    if (selectedSubCategory) {
      const categoryData = items.find((item) =>
        item.hasOwnProperty(category.toLowerCase())
      );
      if (categoryData) {
        const itemsInSubCategory = categoryData[category.toLowerCase()].find(
          (cat) => cat.category === selectedSubCategory.toLowerCase()
        );
        if (itemsInSubCategory) {
          setDisplayItems(itemsInSubCategory.items);
        } else {
          setDisplayItems([]);
        }
      }
    }
  }, [selectedSubCategory]);

  const mainCategory = "armor"; // or 'head', etc., based on user selection
  const subCategoryToFind = "leather hood"; // This should be the subcategory you're looking for

  const categoryData = items.find((item) => item.hasOwnProperty(mainCategory));

  // Item Images
  let imageurl;

  if (ench !== "0") {
    imageurl = `https://render.albiononline.com/v1/item/${tier}_${selectedItem}@${ench}`;
  } else {
    imageurl = `https://render.albiononline.com/v1/item/${tier}_${selectedItem}`;
  }

  let resourceImg;

  if (ench !== "0") {
    resourceImg = `https://render.albiononline.com/v1/item/${tier}_${resource}_LEVEL${ench}`;
  } else {
    resourceImg = `https://render.albiononline.com/v1/item/${tier}_${resource}`;
  }

  const handleSubmit = async () => {
    if (typeof window !== "undefined") {
      var currentURL = window.location.href;
      var urlParts = currentURL.split("/");
      var domain = urlParts[1];
    }

    const api = domain;
    const res = await fetch(`${api}/api/items`, {
      method: "POST",
      body: JSON.stringify({
        title: name || resource,
        tier,
        ench,
        quality,
        resource,
        price,
        quantity,
        discordId,
        seller: session?.user?.name,
        img: imageurl,
        resourceImg: resourceImg,
        server,
      }),
    });
    if (res.status === 200) {
      const data = await res.json();
      router.push(`/market`);
    } else if (res.status === 400) {
      // Display an error message to the user specifically for the 400 status
      alert(
        "You have already 10 items on listed. You can either delete them or wait for 24h."
      );
    } else {
      // Handle other non-200, non-400 cases (like 500 errors, etc.)
      alert("An error occurred. Please try again later.");
    }
  };

  const handleDiscordId = () => {
    if (session?.user?.discordId) {
      setDiscordId(session.user.discordId);
    }
  };

  useEffect(() => {
    handleDiscordId();
  }, [session]);

  return (
    <>
      <div className="market-bg flex flex-col items-center">
        <div className="m-auto flex flex-col items-center">
          <h1 className="background-h lg:text-5xl text-xl w-fit mx-auto px-4 text-gray-200">
            Albion Journey Market{" "}
          </h1>
          <p className="background-p lg:text-3xl text-lg lg:mt-4 mt-2 w-fit mx-auto px-4 text-gray-300">
            List Your Items
          </p>
        </div>
      </div>
      <div className="min-h-screen pt-20 max-w-[90%] mx-auto">
        <div className="text-2xl font-bold">
          Albion Online Item Profit Calculator
        </div>
        <hr className="my-2"></hr>
        <div className="ml-4">
          <Link href="/">
            <span>Home</span>
          </Link>{" "}
          /{" "}
          <Link href="/market">
            <span>Market</span>
          </Link>{" "}
          /{" "}
          <Link href="/market/sell-item">
            <span className="font-bold cursor-pointer">Sell Item</span>
          </Link>
        </div>
{session ? (
          <div className="bg-[rgb(55,62,77)] min-h-fit pb-10 mt-10">
          <p className="text-white text-lg text-center pt-2">
            What Do You Want To Sell?
          </p>
          <div className="pt-4 flex justify-center items-center gap-10">
            <div>
              <label className="text-white mr-2">Item</label>
              <input
                type="radio"
                name="calculatorType"
                value="item"
                onChange={handleRadioChange}
              />
            </div>
            <div>
              <label className="text-white mr-2">Refine</label>
              <input
                type="radio"
                name="calculatorType"
                value="refine"
                onChange={handleRadioChange}
              />
            </div>
          </div>
          {choose === "item" && (
            <>
              <div className="flex justify-evenly items-center pt-10 flex-wrap">
                <div className="flex flex-col">
                  <label name="category" className="text-white mb-1">
                    Choose Item Category
                  </label>
                  <select
                    name="category"
                    id="category"
                    className="h-8 w-52"
                    onChange={handleCategory}
                  >
                    <option value="empty">Choose Category</option>
                    <option value="ACCESSORIES">Accessories</option>
                    <option value="ARMOR">Armor</option>
                    <option value="MAGIC">Magic</option>
                    <option value="MELEE">Melee</option>
                    <option value="OFF-HAND">Off-hand</option>
                    <option value="RANGED">Ranged</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="subcategory" className="text-white mb-1">
                    Choose Subcategory
                  </label>
                  <select
                    name="subcategory"
                    id="subcategory"
                    className="h-8 w-52"
                    onChange={handleSubCategory}
                  >
                    <option value="empty">Choose Sub Category</option>
                    {subCategories != "empty" && (
                      <>
                        {subCategories.map((subCategory) => (
                          <option
                            key={subCategory}
                            value={subCategory.toUpperCase()}
                          >
                            {subCategory.charAt(0).toUpperCase() +
                              subCategory.slice(1)}
                          </option>
                        ))}
                      </>
                    )}
                  </select>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="item" className="text-white mb-1">
                    Choose Item
                  </label>
                  <select
                    onChange={handleSelectedItem}
                    name="item"
                    id="item"
                    className="h-8 w-52"
                  >
                    <option value="">Choose Item</option>
                    {displayItems.length > 0 && (
                      <>
                        {displayItems.map((item) => (
                          <option key={item.value} value={item.value}>
                            {item.name}
                          </option>
                        ))}
                      </>
                    )}
                  </select>
                </div>
                   <div className="flex flex-col">
                  <label name="tier" className="text-white mb-1">
                    Server
                  </label>
                  <select
                    name="tier"
                    id="tier"
                    className="h-8 w-52"
                    onChange={handleServer}
                  >
                    <option value="West">West</option>
                    <option value="East">East</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-evenly items-center pt-10 flex-wrap">
                <div className="flex flex-col">
                  <label name="tier" className="text-white mb-1">
                    Tier
                  </label>
                  <select
                    name="tier"
                    id="tier"
                    className="h-8 w-52"
                    onChange={handleTier}
                  >
                    <option value="empty">Choose Tier</option>
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
                    className="h-8 w-52"
                    onChange={handleEnch}
                  >
                    <option value="0">Choose Enchanment</option>
                    <option value="0">0</option>
                    <option value="1">.1</option>
                    <option value="2">.2</option>
                    <option value="3">.3</option>
                    <option value="4">.4</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label name="quality" className="text-white mb-1">
                    Quality
                  </label>
                  <select
                    name="quality"
                    id="quality"
                    className="h-8 w-52"
                    onChange={handleQuality}
                  >
                    <option value="0">Choose Quality</option>
                    <option value="normal">Normal</option>
                    <option value="good">Good</option>
                    <option value="outstanding">Outstanding</option>
                    <option value="excellent">Excellent</option>
                    <option value="masterpiece">Masterpiece</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label name="price" className="text-white mb-1">
                    Sell Price
                  </label>
                  <input
                    name="price"
                    id="price"
                    type="text"
                    className="h-8 w-52 pl-2"
                    placeholder="1.000.000"
                    onChange={handlePrice}
                  />
                </div>
              </div>
              <div className="flex justify-center items-center">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="bg-orange-600 w-60 py-2 font-bold rounded-md mx-auto mt-10 text-white"
                >
                  Sell Item
                </button>
              </div>
            </>
          )}
          {choose === "refine" && (
            <>
              <div className="flex justify-evenly items-center pt-10 flex-wrap">
                <div className="flex flex-col">
                  <label name="category" className="text-white mb-1">
                    Choose Resource Category
                  </label>
                  <select
                    name="category"
                    id="category"
                    className="h-8 w-52"
                    onChange={handleResource}
                  >
                    <option value="empty">Choose Category</option>
                    <option value="LEATHER">Leather</option>
                    <option value="HIDE">Hide</option>
                    <option value="CLOTH">Cloth</option>
                    <option value="FIBER">Fiber</option>
                    <option value="METALBAR">Metal Bar</option>
                    <option value="ORE">Ore</option>
                    <option value="PLANKS">Plank</option>
                    <option value="WOOD">Wood</option>
                    <option value="STONEBLOCK">Stone Block</option>
                    <option value="ROCK">Rock</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label name="category" className="text-white mb-1">
                    Choose Tier
                  </label>
                  <select
                    name="category"
                    id="category"
                    className="h-8 w-28"
                    onChange={handleTier}
                  >
                    <option value="">Tier</option>
                    <option value='T4'>T4</option>
                    <option value='T5'>T5</option>
                    <option value='T6'>T6</option>
                    <option value='T7'>T7</option>
                    <option value='T8'>T8</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label name="category" className="text-white mb-1">
                    Enchanment
                  </label>
                  <select
                    name="category"
                    id="category"
                    className="h-8 w-28"
                    onChange={handleEnch}
                  >
                    <option value="empty">Enchanment</option>
                    <option value="0">0</option>
                    <option value="1">.1</option>
                    <option value="2">.2</option>
                    <option value="3">.3</option>
                    <option value="4">.4</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label name="tier" className="text-white mb-1">
                    Server
                  </label>
                  <select
                    name="tier"
                    id="tier"
                    className="h-8 w-28"
                    onChange={handleServer}
                  >
                    <option value="West">West</option>
                    <option value="East">East</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label name="q" className="text-white text-sm text-left mb-1">
                    Quantity
                  </label>
                  <input
                    onChange={handleQuantity}
                    id="q"
                    name="q"
                    type="text"
                    placeholder="999"
                    className="h-8 w-28"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    name="fee"
                    className="text-white text-sm text-left mb-1"
                  >
                    Sell Price
                  </label>
                  <input
                    onChange={handlePrice}
                    id="fee"
                    name="fee"
                    type="text"
                    placeholder="300.000"
                    className="h-8 w-28"
                  />
                </div>
              </div>
              <div className="flex justify-center items-center">
                <button
                  onClick={handleSubmit}
                  className="bg-orange-600 w-60 py-2 font-bold rounded-md mx-auto mt-10 text-white"
                >
                  Sell Item
                </button>
              </div>
            </>
          )}
        </div>
) : (
  <div className="bg-[rgb(55,62,77)] flex justify-center items-center flex-col h-32 gap-4 mt-10">
     <p className="text-white text-center">You need to login first.</p>
     <button
                    onClick={() => signIn("discord")}
                    className="bg-orange-600 w-32 px-4 text-white rounded-md"
                  >
                    Login
                  </button>
</div>
)}
      </div>
    </>
  );
}
