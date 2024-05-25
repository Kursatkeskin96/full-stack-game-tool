"use client";
import React, { useState, useEffect } from "react";
import items from "@/items.json";
import Image from "next/image";
import { TbCoins } from "react-icons/tb";
import { set } from "mongoose";
import Link from "next/link";
import { GiReceiveMoney } from "react-icons/gi";

export default function ItemCalculator() {
  const [category, setCategory] = useState("");
  const [subCategories, setSubCategories] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [displayItems, setDisplayItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState("");
  const [name, setName] = useState("");
  const [usageFee, setUsageFee] = useState(400);
  const [tier, setTier] = useState("");
  const [ench, setEnch] = useState("");
  const [withFocus, setWithFocus] = useState(48);
  const [withoutFocus, setWithoutFocus] = useState(24);
  const [q1, setQ1] = useState("");
  const [q2, setQ2] = useState("");
  const [q3, setQ3] = useState("")
  const [recipe1, setRecipe1] = useState("");
  const [recipe2, setRecipe2] = useState("");
  const [r1cost, setR1cost] = useState(0)
  const [r2cost, setR2cost] = useState(0)
  const [r3cost, setR3cost] = useState(0)
  const [artifact, setArtifact] = useState("");
  const [selectedItemObj, setSelectedItemObj] = useState(null);
  const [itemValue, setItemValue] = useState('')
  const [calculatedItemValue, setCalculatedItemValue] = useState(0);
  const [itemPrice, setItemPrice] = useState('')
  

  const handleItemPrice = (e) => {
    // Convert the input value to an integer
    const priceValue = parseInt(e.target.value, 10);

    // Check if the conversion result is a valid number
    if (!isNaN(priceValue)) {
        setItemPrice(priceValue);
    } else {
        setItemPrice(0); // Set to 0 or any other default value in case of invalid input
    }
};


  const handleR1cost = (e) => {
    const r1Value = parseInt(e.target.value, 10)
    if (!isNaN(r1Value)) {
      setR1cost(r1Value);
  } else {
      setR1cost(0); // Set to 0 or any other default value in case of invalid input
  }
}

const handleR2cost = (e) => {
    setR2cost(e.target.value)
}

const handleR3cost = (e) => {
setR3cost(e.target.value)
}

const handleUsageFee = (e) => {
    const usageFeeValue = parseInt(e.target.value, 10); // Convert string to integer
    if (!isNaN(usageFeeValue)) {
        setUsageFee(usageFeeValue);
    } else {
        setUsageFee(0); // Set to 0 or any default value in case of non-numeric input
    }
};

const handleTierChange = (newTier) => {
  setTier(newTier);
};

const handleEnchChange = (newEnch) => {
  setEnch(newEnch);
};

  const handleWithFocus = (e) => {
    setWithFocus(e.target.value);
  };

  const handleWithoutFocus = (e) => {
    setWithoutFocus(e.target.value);
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
  
  let linkValue;
  if (categoryData) {
      const matchedSubCategory = categoryData[mainCategory].find(subCat => subCat.category === subCategoryToFind);
      if (matchedSubCategory) {
          linkValue = matchedSubCategory.value;
      }
  }


  const handleItemValue = () => {
    const tierNumber = parseInt(tier.substring(1)); // Convert "T4" to 4, "T5" to 5, etc.
    const enchNumber = parseInt(ench); // Convert enchantment to a number

    const total = tierNumber + enchNumber;
    const increment = Math.max(total - 4, 0); // Calculate the increment over the base tier (T4)
    return itemValue * Math.pow(2, increment);
};

useEffect(() => {
    const newValue = handleItemValue();
    setCalculatedItemValue(newValue);
}, [tier, ench, itemValue]);

  useEffect(() => {
    handleItemValue()
  }, [tier, ench, category, subCategories, selectedItem])

  function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
  const nutritionFee = calculatedItemValue*0.1125
  const calculateUsageFee = nutritionFee*(usageFee/100) 
  const roundedCalculateFee = Math.round(calculateUsageFee)

  const resourceCost = (q1 * r1cost) + (q2 * r2cost) 
  const roundedResourceCost = Math.round(resourceCost);

  const returnedResources = roundedResourceCost * withFocus / 100
  const roundedReturnedResources = Math.round(returnedResources);

  const sellOrder = itemPrice * 0.065
  const roundedSellOrder = Math.round(sellOrder)

  const totalCost = roundedResourceCost + roundedSellOrder + roundedCalculateFee + (1 * r3cost)
  const roundedTotalCost = Math.round(totalCost)

  const isProfit = roundedReturnedResources + parseInt(itemPrice) - parseInt(roundedTotalCost)
  const roundedIsProfit = Math.round(isProfit)

  const formattedProfit = formatNumberWithCommas(roundedIsProfit);
  const formattedItemPrice = formatNumberWithCommas(itemPrice)
  const formattedReturnedResource = formatNumberWithCommas(roundedReturnedResources)
  const formattedResourceCost = formatNumberWithCommas(roundedResourceCost)
  const formattedSellOrder = formatNumberWithCommas(roundedSellOrder)
  const formattedUsageFee = formatNumberWithCommas(roundedCalculateFee)
  const isProfitNegative = roundedIsProfit < 0; 

  let imageurl;

  if (ench !== "0") {
    imageurl = `https://render.albiononline.com/v1/item/${tier}_${selectedItem}@${ench}`;
  } else {
    imageurl = `https://render.albiononline.com/v1/item/${tier}_${selectedItem}`;
  }

  let artifactImg;
  if (artifact) {
    artifactImg = `https://render.albiononline.com/v1/item/${tier}_${artifact}`;
  }
  if (selectedItemObj && selectedItemObj.name.includes("Royal")) {
    artifactImg = `https://render.albiononline.com/v1/item/${artifact}_${tier}`;
  }
  if (selectedItemObj && selectedItemObj.name.includes("Satchel")) {
    artifactImg = `https://render.albiononline.com/v1/item/T4_SKILLBOOK_STANDARD`;
  }

  let recipeImg1;
  if (selectedItem && ench!== "0") {
    recipeImg1 = `https://render.albiononline.com/v1/item/${tier}_${recipe1}_LEVEL${ench}`;
  } else {
    recipeImg1 = `https://render.albiononline.com/v1/item/${tier}_${recipe1}`;
  }

  let recipeImg2;
  if (selectedItem && ench!== "0") {
    recipeImg2 = `https://render.albiononline.com/v1/item/${tier}_${recipe2}_LEVEL${ench}`;
  } else {
    recipeImg2 = `https://render.albiononline.com/v1/item/${tier}_${recipe2}`;
  }
  let matImg3 = `https://render.albiononline.com/v1/item/${q3}`;

  return (
    <div className="min-h-screen pt-20 mx-auto">
      <div className="text-2xl px-2 font-bold">
        Albion Online Item Profit Calculator
      </div>
      <hr className="my-2 px-2"></hr>
      <div className="flex gap-2 px-2">
        <Link href="/" className="font-bold">Home</Link>
        <Link href="/profit-calculator/item-calculator"> / Item Calculator</Link>
      </div>
      <div><p className="text-sm px-2 mt-6 text-gray-500">If you are unsure how to use our Albion Online Crafting Calculator, please refer to our detailed guide <Link className=" font-bold underline text-blue-400" href='https://www.albionjourney.com/guides/posts/how-to-use-albion-craft-calculator'>here</Link>.</p></div>

      <div className="bg-[rgb(55,62,77)] min-h-fit pb-10 mt-10">
        <div className="flex justify-center lg:gap-0 gap-4 lg:justify-evenly items-center pt-10 flex-wrap">
          <div className="flex flex-col">
            <label name="category" className="text-white  mb-1">
              Choose Item Category
            </label>
            <select
              name="category"
              id="category"
              className="h-8 lg:w-52 w-60"
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
            <label htmlFor="subcategory" className="text-white  mb-1">
              Choose Subcategory
            </label>
            <select
              name="subcategory"
              id="subcategory"
              className="h-8 lg:w-52 w-60"
              onChange={handleSubCategory}
            >
              <option value="empty">Choose Sub Category</option>
              {subCategories != "empty" && (
                <>
                  {subCategories.map((subCategory) => (
                    <option key={subCategory} value={subCategory.toUpperCase()}>
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
              className="h-8 lg:w-52 w-60"
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
            <label name="fee" className="text-white mb-1">
              Usage Fee
            </label>
            <input
              onChange={handleUsageFee}
              name="fee"
              value={usageFee}
              id="fee"
              type="num"
              placeholder="400"
              className="pl-2 h-8 w-60 lg:w-28 text-black"
            />
          </div>

          <div className="flex flex-col">
            <label name="wfocus" className="text-white mb-1">
              Return Rate %
            </label>
            <input
              onChange={handleWithFocus}
              name="wfocus"
              value={withFocus}
              id="wfocus"
              type="text"
              className="h-8 w-60 lg:w-28 pl-2"
              placeholder="48"
            />
          </div>
          
        </div>
        <div className="flex justify-center lg:gap-20 gap-10 items-start mt-10 lg:mt-5 lg:ml-10 flex-wrap">
          <div className="flex flex-col">
             <div> 
              <p className="text-gray-300 mb-2 lg: underline lg:text-left text-center">
                Tier
                </p> 
                </div>
             <div className="flex flex-wrap justify-center items-center gap-4">
              <button
                onClick={() => handleTierChange('T4')}
                className={`bg-[#356079] text-white w-10  rounded-md shadowl-lg ${tier === 'T4' ? 'underline' : ''}`}
              >
                T4
              </button>
              <button
                onClick={() => handleTierChange('T5')}
                className={`bg-[#76221A] text-white w-10 rounded-md shadowl-lg ${tier === 'T5' ? 'underline' : ''}`}
              >
                T5
              </button>
              <button
                onClick={() => handleTierChange('T6')}
                className={`bg-[#C06B29] text-white w-10 rounded-md shadowl-lg ${tier === 'T6' ? 'underline' : ''}`}
              >
                T6
              </button>
              <button
                onClick={() => handleTierChange('T7')}
                className={`bg-[#D1B045]  text-white w-10 rounded-md shadowl-lg ${tier === 'T7' ? 'underline' : ''}`}
              >
                T7
              </button>
              <button
                onClick={() => handleTierChange('T8')}
                className={`bg-white text-black w-10 rounded-md shadowl-lg ${tier === 'T8' ? 'underline' : ''}`}
              >
                T8
              </button>
              </div>
              
             </div>
             <div className="flex flex-col">
             <div> 
              <p className="text-gray-300 mb-2 lg:underline lg:text-left text-center">
                Enchanment
                </p> 
                </div>
                <div className="flex flex-wrap  justify-center items-center gap-4">
              <button
                onClick={() => handleEnchChange('0')}
                className={`w-10 bg-white rounded-md shadow-lg text-black ${ench === '0' ? 'underline' : ''}`}
              >
                0
              </button>
              <button
                onClick={() => handleEnchChange('1')}
                className={`w-10  bg-[#61D984] rounded-md shadow-lg text-black ${ench === '1' ? 'underline' : ''}`}
              >
                .1
              </button>
              <button
                onClick={() => handleEnchChange('2')}
                className={`w-10 bg-[#47D8E5] rounded-md shadow-lg text-black ${ench === '2' ? 'underline' : ''}`}
              >
                .2
              </button>
              <button
                onClick={() => handleEnchChange('3')}
                className={`w-10  bg-[#A87DE2] rounded-md shadow-lg text-black ${ench === '3' ? 'underline' : ''}`}
              >
                .3
              </button>
              <button
                onClick={() => handleEnchChange('4')}
                className={`w-10 bg-[#F6E169] rounded-md shadow-lg text-black ${ench === '4' ? 'underline' : ''}`}
              >
               .4
              </button>
            </div>
              
             </div>
            </div>
          
        {selectedItem && selectedSubCategory && category && tier && ench && (
        <div className="flex justify-evenly items-center pt-20 flex-wrap">
          <div className="flex flex-wrap justify-center items-center flex-col md:gap-7 md:flex-row lg:flex-row w-[90%] lg:gap-10 bg-slate-600 p-2 mb-10 rounded-md shadow-lg">
            <div className="flex flex-col items-center">
              {selectedItem && (
                <Image src={imageurl} alt="item-img" width={130} height={130} unoptimized />
              )}
            </div>
                
            <div className="flex flex-col">
              {selectedItem && (
                <div>
                  <h3 className="text-white text-2xl my-2">{name}</h3>
                </div>
              )}

              <div className="flex flex-col mb-4">
                <label name="itemprice" className="text-center text-white">
                  Item Price
                </label>
                <input
                onChange={handleItemPrice}
                  name="itemprice"
                  id="itemprice"
                  type="number"
                  placeholder="Type Unit Price"
                  min="0"
                  className="text-center w-32 mx-auto"
                />
              </div>
              
            </div>

            <div className="lg:ml-32 mt-4 lg:mt-0">
              <h3 className="text-center text-xl text-white">
                Crafting Requirements
              </h3>
              <hr />
              <div className="flex justify-center items-center pt-4 gap-4">
                <div>
                  {selectedItem && (
                    <Image
                      src={recipeImg1}
                      alt="item-img"
                      width={50}
                      height={50}
                      unoptimized
                    />
                  )}
                </div>
                <div className="flex">
                  <p className="text-sm text-white">{q1}</p>
                  <p className="text-sm ml-2 mr-4 text-white">x</p>
                  <input
                    name="r1cost"
                    id="r1cost"
                    type="number"
                    min="0"
                    placeholder="Type Unit Price"
                    className="text-center w-32 mx-auto"
                    onChange={handleR1cost}
                  />
                </div>
               </div>
               {q2 && (
              <div className="flex justify-center items-center gap-4">
                <div>
                  <Image
                    src={recipeImg2}
                    alt="item-img"
                    width={50}
                    height={50}
                    unoptimized
                  />
                </div>
                <div className="flex">
                  <p className="text-sm text-white">{q2}</p>
                  <p className="text-sm ml-2 mr-4 text-white">x</p>
                  <input
                    onChange={handleR2cost}
                    name="r2cost"
                    id="r2cost"
                    type="number"
                    placeholder="Type Unit Price"
                    min="0"
                    className="text-center w-32 mx-auto"
                  />
                </div>
              </div>
              )}
              {artifact && (
              <div className="flex justify-center items-center gap-4">
                <div>
                  <Image
                    src={artifactImg}
                    alt="item-img"
                    width={50}
                    height={50}
                    unoptimized
                  />
                </div>
                <div className="flex">
                  <p className="text-sm text-white">1</p>
                  <p className="text-sm ml-2 mr-4 text-white">x</p>
                  <input
                    onChange={handleR3cost}
                    name="r3cost"
                    id="r3cost"
                    type="number"
                    placeholder="Type Unit Price"
                    min="0"
                    className="text-center w-32 mx-auto"
                  />
                </div>
              </div>
              )}

            </div>
          </div>

        </div>
        
         )}
               {category && tier && ench && selectedItem && r1cost && itemPrice &&(
             <>             
        <div className="flex justify-center items-center flex-wrap">
            {roundedIsProfit < 0 ? (
                <div className="bg-red-500 text-white min-h-32 lg:w-1/3 w-[90%] mt-10 flex justfiy-start items-start mb-10">
                <div className="mx-auto">
                    <h5 className="underline font-bold">PROFITABILITY WITH %{withFocus} RETURN RATE</h5>
                 <div className="flex justify-evenly items-center pb-2 mt-4 text-sm">
                 <div className="font-bold">
                    <p>Item Price</p>
                    <p>Returned Resource</p>
                    <p>- Material Cost</p>
                    <p>- Sell Order Tax %6.5</p>
                    <p>- Usage Fee</p>
                    <p>Total = </p>
                    </div>
                    <div>
                      <p>{formattedItemPrice}</p>
                    <p>{formattedReturnedResource}</p>
                    <p>{formattedResourceCost}</p>
                    <p>{formattedSellOrder}</p>
                    <p>{formattedUsageFee}</p>
                    <p>{formattedProfit} </p>
                    </div>
                    </div>
                </div>
                </div>
            ) : (
                <div className="bg-green-500 text-white min-h-32 lg:w-1/3 w-[90%] mt-10 flex justfiy-start items-start mb-10">
                <div className="mx-auto">
                    <h5 className="underline font-bold">PROFITABILITY WITH {withFocus}% RETURN RATE</h5>
                 <div className="flex justify-evenly items-center mt-4 pb-2 text-sm">
                    <div className="font-bold">
                    <p>Item Price</p>
                    <p>Returned Resource</p>
                    <p>- Material Cost</p>
                    <p>- Sell Order Tax %6.5</p>
                    <p>- Usage Fee</p>
                    <p>Total = </p>
                    </div>
                    <div>
                      <p>{formattedItemPrice}</p>
                    <p>{formattedReturnedResource}</p>
                    <p>{formattedResourceCost}</p>
                    <p>{formattedSellOrder}</p>
                    <p>{formattedUsageFee}</p>
                    <p>{formattedProfit} </p>
                    </div>
                    </div>
                </div>

                </div>

            )}

        </div>
        <div className="flex gap-1 justify-center items-center text-sm text-center mt-6 text-gray-100">List your items in our <Link className="font-bold underline text-blue-400" href='https://www.albionjourney.com/market'> market section</Link> for quick sales. <span className="flex text-xl justify-center items-center"> <GiReceiveMoney className=" ml-1 mb-1 text-white" /></span>
</div>
        </>
        )}

      </div>


    </div>
  );
}