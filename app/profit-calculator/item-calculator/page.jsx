"use client";
import React, { useState, useEffect } from "react";
import armors from "@/items.json";
import Image from "next/image";

export default function ItemCalculator() {
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [subCategories, setSubCategories] = useState([])
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState("");
  const [tier, setTier] = useState("T4");
  const [enchantment, setEnchantment] = useState("0");
  const [name, setName] = useState("");
  const [recipe1, setRecipe1] = useState('')
  const [recipe2, setRecipe2] = useState('')
  const [q1, setQ1] = useState('')

  useEffect(() => {
    if (subCategory && selectedItem) {
      // Find the selected category in the armors array
      const selectedCategory = armors.armor.find(
        (category) => category.category === subCategory
      );
      if (selectedCategory) {
        // Find the selected item in the selected category
        const selectedArmor = selectedCategory.items.find(
          (item) => item.value === selectedItem
        );

        if (selectedArmor) {
          // Use the selected item's data (e.g., name, value) as needed
        }
      }
    }
  }, [subCategory, selectedItem]);

  let imageurl;

if (enchantment !== "0") {
  imageurl = `https://render.albiononline.com/v1/item/${tier}_${category}_${selectedItem}@${enchantment}`;
} else {
  imageurl = `https://render.albiononline.com/v1/item/${tier}_${category}_${selectedItem}`;
}
  
  const handleSelectedItem = (e) => {
    const selectedValue = e.target.value;
    setSelectedItem(selectedValue);
  
    // Find the selected item in the items array
    const selectedArmor = items.find((item) => item.value === selectedValue);

    const recipe1 = selectedArmor ? selectedArmor.recipe1 : null;
    const recipe2 = selectedArmor ? selectedArmor.recipe2 : null;

    const q1 = selectedArmor ? selectedArmor.q1 : null;
    setQ1(q1)
    setRecipe1(recipe1)
    setRecipe2(recipe2)
    console.log(recipe2)
  
    // Update the name state with the name of the selected item
    if (selectedArmor) {
      setName(selectedArmor.name);
    } else {
      setName("");
    }

  };

  let recipeImg1;

  if (enchantment !== "0") {
    recipeImg1 = `https://render.albiononline.com/v1/item/${tier}_${recipe1}_LEVEL${enchantment}`;
  } else {
    recipeImg1 = `https://render.albiononline.com/v1/item/${tier}_${recipe1}`;
  }
  let recipeImg2;

  if (enchantment !== "0") {
    recipeImg2 = `https://render.albiononline.com/v1/item/${tier}_${recipe2}_LEVEL${enchantment}`;
  } else {
    recipeImg2 = `https://render.albiononline.com/v1/item/${tier}_${recipe2}`;
  }


  const handleTier = (e) => {
    setTier(e.target.value);
  };

  const handleEnchantment = (e) => {
    setEnchantment(e.target.value);
  };

  const handleCategory = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
  
    // Find the selected category in the armors array
    const selectedCategoryData = armors[selectedCategory.toLowerCase()];
  
    if (selectedCategoryData) {
      // Update the subcategories state with the subcategories from the selected category
      setSubCategories(selectedCategoryData.map((item) => item.category));
    } else {
      setSubCategories([]);
    }
  };

  const handleSubCategory = (e) => {
    const selectedSubCategory = e.target.value;
    setSubCategory(selectedSubCategory);

    // Find the selected subcategory in the armors array
    const selectedArmor = armors[category].find((armor) => armor.category === selectedSubCategory);
    // Update the items state with the items from the selected subcategory
    if (selectedArmor) {
      setItems(selectedArmor.items);
      if (selectedArmor.items.length > 0) {
        setName(selectedArmor.items[0].name);
      }
    } else {
      setItems([]);
      setName("");
    }
  };

  return (
    <div className="min-h-screen pt-20 max-w-[90%] mx-auto">
      <div className="text-2xl font-bold">
        Albion Online Item Profit Calculator
      </div>
      <hr className="my-2"></hr>
      <div>Home / Calculator / Item Profit Calculator</div>

      <div className="bg-[rgb(55,62,77)] h-96 mt-10">
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
              <option value="armor">Armor</option>
              <option value="MAIN">1H Weapon</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label name="subcategory" className="text-white mb-1">
              Choose Sub Category
            </label>
            <select
    name="subcategory"
    id="subcategory"
    className="h-8 w-52"
    onChange={handleSubCategory}
  >
    <option value="empty">Choose Sub Category</option>
    {subCategories.map((subCategory) => (
      <option key={subCategory} value={subCategory}>
        {subCategory.charAt(0).toUpperCase() + subCategory.slice(1)}
      </option>
    ))}
  </select>
          </div>

          <div className="flex flex-col">
            <label name="items" className="text-white mb-1">
              Choose Item
            </label>

            <select
              name="items"
              id="items"
              className="h-8 w-52"
              onChange={handleSelectedItem}
            >
              <option value="empty">Choose an Item</option>
              {items.map((item, index) => (
                <option value={item.value}>{item.name}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col">
            <label name="tier" className="text-white mb-1">
              Choose Tier
            </label>
            <select
              name="tier"
              id="tier"
              className="h-8 w-24"
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
            <label name="ench" className="text-white mb-1">
              Choose Enchanment
            </label>
            <select
              name="ench"
              id="ench"
              className="h-8 w-24"
              onChange={handleEnchantment}
            >
              <option value="0">0</option>
              <option value="1">.1</option>
              <option value="2">.2</option>
              <option value="3">.3</option>
              <option value="4">.4</option>
            </select>
          </div>
        </div>
        <div className="flex justify-evenly items-center pt-20 flex-wrap">
        <div className="flex justify-center items-center gap-10">
            <div>
              {selectedItem && (
                <Image src={imageurl} alt="item-img" width={130} height={130} />
              )}
            </div>

              <div className="flex flex-col">
              {selectedItem && (
                <div>
                <h3 className="text-white text-2xl my-2">{name}</h3>
                </div>
                  )}

               <div className="flex flex-col mb-4">
                <label name='itemprice' className="text-center text-white">Item Price</label>
                <input name='itemprice' id='itemprice' type="number" min='0' className="text-center w-32 mx-auto" />
               </div>
               </div>
          </div>
          <div>
            <h3 className="text-center">Crafting Requirements</h3>
            <div className="flex justify-center items-center gap-4">
            <div>
              {selectedItem && (
                <Image src={recipeImg1} alt="item-img" width={50} height={50} />
              )}
            </div>
            <div className="flex">
              <p className="text-sm mr-4 text-white">{q1} x </p>
            <input name='itemprice' id='itemprice' type="number" min='0' className="text-center w-32 mx-auto" />
            </div>
            </div>
            {recipe2 && (
            <div className="flex justify-center items-center gap-4">
            <div>
                <Image src={recipeImg2} alt="item-img" width={50} height={50} />
            </div>
            <div className="flex">
              <p className="text-sm mr-4 text-white">{q1} x </p>
            <input name='itemprice' id='itemprice' type="number" min='0' className="text-center w-32 mx-auto" />
            </div>
            </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
