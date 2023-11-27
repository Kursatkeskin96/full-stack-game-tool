"use client";
import React, { useState, useEffect } from "react";
import items from "@/items.json";
import Image from "next/image";

export default function ItemCalculator() {
  const [category, setCategory] = useState("");
  const [subCategories, setSubCategories] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [displayItems, setDisplayItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState("");
  const [name, setName] = useState("");
  const [usageFee, setUsageFee] = useState("");
  const [tier, setTier] = useState("");
  const [ench, setEnch] = useState("");
  const [withFocus, setWithFocus] = useState("");
  const [withoutFocus, setWithoutFocus] = useState("");
  const [q1, setQ1] = useState("");
  const [q2, setQ2] = useState("");
  const [q3, setQ3] = useState('')
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
  const r3Value = parseInt(e.target.value, 10)
  if (!isNaN(r3Value)) {
    setR3cost(r3Value);
} else {
    setR3cost(0); // Set to 0 or any other default value in case of invalid input
}
}

const handleUsageFee = (e) => {
    const usageFeeValue = parseInt(e.target.value, 10); // Convert string to integer
    if (!isNaN(usageFeeValue)) {
        setUsageFee(usageFeeValue);
    } else {
        setUsageFee(0); // Set to 0 or any default value in case of non-numeric input
    }
};

  const handleTier = (e) => {
    setTier(e.target.value);
  };

  const handleEnch = (e) => {
    setEnch(e.target.value);
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

  const nutritionFee = calculatedItemValue*0.1125
  const calculateUsageFee = nutritionFee*(usageFee/100) 
  const roundedCalculateFee = Math.round(calculateUsageFee)

  const resourceCost = q1 * r1cost
  const roundedResourceCost = Math.round(resourceCost);

  const returnedResources = roundedResourceCost * withFocus / 100
  const roundedReturnedResources = Math.round(returnedResources);

  const sellOrder = itemPrice * 0.065
  const roundedSellOrder = Math.round(sellOrder)

  const totalCost = roundedResourceCost + roundedSellOrder + roundedCalculateFee + r3cost
  const roundedTotalCost = Math.round(totalCost)

  const isProfit = roundedReturnedResources + parseInt(itemPrice) - parseInt(roundedTotalCost)
  const roundedIsProfit = Math.round(isProfit)
  const withoutFocusReturnedResources = roundedResourceCost * withoutFocus / 100
  const roundedWithoutFocusReturnedResources = Math.round(withoutFocusReturnedResources)
  const withoutFocusIsProfit = roundedWithoutFocusReturnedResources + parseInt(itemPrice) - parseInt(roundedTotalCost)
  const roundedWithoutFocusProfit = Math.round(withoutFocusIsProfit)

  // Item Images
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
    <div className="min-h-screen pt-20 max-w-[90%] mx-auto">
      <div className="text-2xl font-bold">
        Albion Online Item Profit Calculator
      </div>
      <hr className="my-2"></hr>
      <div>Home / Calculator / Item Profit Calculator</div>

      <div className="bg-[rgb(55,62,77)] min-h-fit pb-10 mt-10">
        <div className="flex justify-evenly items-center pt-20 flex-wrap">
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
            <label name="fee" className="text-white mb-1">
              Usage Fee
            </label>
            <input
              onChange={handleUsageFee}
              name="fee"
              id="fee"
              type="num"
              placeholder="400"
              className="pl-2 h-8 w-52 text-black"
            />
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
            <label name="wfocus" className="text-white mb-1">
              Return rate with Focus %
            </label>
            <input
              onChange={handleWithFocus}
              name="wfocus"
              id="wfocus"
              type="text"
              className="h-8 w-52 pl-2"
              placeholder="48"
            />
          </div>

          <div className="flex flex-col">
            <label name="wofocus" className="text-white mb-1">
              Return rate without focus %
            </label>
            <input
              onChange={handleWithoutFocus}
              name="wofocus"
              id="wofocus"
              type="text"
              className="h-8 w-52 pl-2"
              placeholder="24"
            />
          </div>
        </div>
        {selectedItem && selectedSubCategory && category && tier && ench && (
        <div className="flex justify-evenly items-center pt-20 flex-wrap">
          <div className="flex flex-wrap justify-center items-center gap-10 bg-slate-600 p-2 mb-10 rounded-md shadow-lg">
            <div className="pt-4">
              {selectedItem && (
                <Image src={imageurl} alt="item-img" width={130} height={130} />
              )}
            </div>

            <div className="flex flex-col pt-4">
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
                  min="0"
                  className="text-center w-32 mx-auto"
                />
              </div>
            </div>

            <div className="ml-32">
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
                    min="0"
                    className="text-center w-32 mx-auto"
                  />
                </div>
              </div>
              )}
             {q3 && (
              <div className="flex justify-center items-center gap-4">
                <div>
                  <Image
                    src={matImg3}
                    alt="item-img"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="flex">
                  <p className="text-sm text-white">1</p>
                  <p className="text-sm ml-2 mr-4 text-white">x</p>
                  <input
                    onChange={handleR3cost}
                    name="r2cost"
                    id="r2cost"
                    type="number"
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
      </div>
    </div>
  );
}
