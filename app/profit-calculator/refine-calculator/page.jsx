"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Refinealculator() {
const [category, setCategory] = useState('LEATHER')
const [tier, setTier] = useState('')
const [decreasedTier, setDecreasedTier] = useState('')
const [ench, setEnch] = useState('')
const [r1, setR1] = useState('')
const [r2, setR2] = useState('')
const [r3, setR3] = useState('')
const [q1, setQ1] = useState('')
const [q2, setQ2] = useState('')
const [q3, setQ3] = useState('')
const [r1cost, setR1cost] = useState('')
const [r2cost, setR2cost] = useState('')
const [r3cost, setR3cost] = useState('')
const [itemValue, setItemValue] = useState('')
const [returnRate, setReturnRate] = useState('')
const [fee, setFee] = useState('')
const [sellPrice, setSellPrice] = useState('')

const handleR1cost = (e) => {
    setR1cost(e.target.value)
}

const handleR2cost = (e) => {
    setR2cost(e.target.value)
}

const handleR3cost = (e) => {
    setR3cost(e.target.value)
}

const handleCategory = (e) => { 
    setCategory(e.target.value)
}

const handleRRR = (e) => {
    setReturnRate(e.target.value)
}

const handleFee = (e) => {
    setFee(e.target.value)
}

const handleSellPrice = (e) => {
    setSellPrice(e.target.value)
}

const handleTier = (e) => { 
    const newTier = e.target.value;
    setTier(newTier);
    handleQ()
    handleItemValue()

    // Decrement the value of tier by 1
    const decreasedTier = parseInt(newTier) - 1;
    setDecreasedTier(decreasedTier);
    handleRecipe()
}

const handleEnch = (e) => { 
    setEnch(e.target.value)
    handleHeart()
    handleItemValue()
}

useEffect(() => {
    handleItemValue()
}, [tier, ench])

useEffect(() => {
    handleRecipe();
  }, [category]);

  useEffect(() => {
    handleQ();
  }, [tier]);

  useEffect(() => {
    handleHeart();
  }, [category, tier, ench])
  

const handleRecipe = () => {
    if(category === "LEATHER"){
        setR1("HIDE")
        setR2("LEATHER")
    }
    if(category === "CLOTH"){
        setR1("FIBER")
        setR2("CLOTH")
    }
    if(category === "METALBAR"){
        setR1("ORE")
        setR2("METALBAR")
    }
    if(category === "PLANKS"){
        setR1("WOOD")
        setR2("PLANKS")
    }
    if(category === "STONEBLOCK"){
        setR1("ROCK")
        setR2("STONEBLOCK")
    }
}

const handleQ = () => {
    if(tier == 4){
        setQ1("2")
        setQ2("1")
    }
    if(tier == 5){
        setQ1("3")
        setQ2("1")
    }
    if(tier == 6){
        setQ1("4")
        setQ2("1")
    }
    if(tier == 7){
        setQ1("5")
        setQ2("1")
    }
    if(tier == 8){
        setQ1("4")
        setQ2("1")
    }
}

const handleHeart = () => {
    if(category === "LEATHER" && tier == 8 && ench >= 3){
        setR3("T1_FACTION_STEPPE_TOKEN_1")
        setQ3("1")
    }
    if(category === "CLOTH" && tier == 8 && ench >= 3){
        setR3("T1_FACTION_SWAMP_TOKEN_1")
        setQ3("1")
    }
    if(category === "METALBAR" && tier == 8 && ench >= 3){
        setR3("T1_FACTION_MOUNTAIN_TOKEN_1")
        setQ3("1")
    }
    if(category === "PLANKS" && tier == 8 && ench >= 3){
        setR3("T1_FACTION_FOREST_TOKEN_1")
        setQ3("1")
    }
    if(category === "STONEBLOCK" && tier == 8 && ench >= 3){
        setR3("T1_FACTION_HIGHLAND_TOKEN_1")
        setQ3("1")
    }
}

const handleItemValue = () => {
    const total = Number(ench) + Number(tier);

    switch(total) {
        case 4:
            setItemValue('16');
            break;
        case 5:
            setItemValue('32');
            break;
        case 6:
            setItemValue('64');
            break;
        case 7:
            setItemValue('128');
            break;
        case 8:
            setItemValue('256');
            break;
        case 9:
            setItemValue('512');
            break;
        case 10:
            setItemValue('1024');
            break;
        case 11:
            setItemValue('2048');
            break;
        case 12:
            setItemValue('4096');
            break;
        default:
            // Handle cases that don't match any of the above conditions
            break;
    }
}


let resourceImg;

if (ench !== "0") {
    resourceImg = `https://render.albiononline.com/v1/item/T${tier}_${category}_LEVEL${ench}`;
} else {
    resourceImg = `https://render.albiononline.com/v1/item/T${tier}_${category}`;
}

let matImg1;

if (ench !== "0") {
    matImg1 = `https://render.albiononline.com/v1/item/T${tier}_${r1}_LEVEL${ench}`;
} else {
    matImg1 = `https://render.albiononline.com/v1/item/T${tier}_${r1}`;
}

let matImg2;

if (ench !== "0") {
    matImg2 = `https://render.albiononline.com/v1/item/T${decreasedTier}_${r2}_LEVEL${ench}`;
} else {
    matImg2 = `https://render.albiononline.com/v1/item/T${decreasedTier}_${r2}`;
}

const matImg3 = `https://render.albiononline.com/v1/item/${r3}`;

// Calculations

const calculateFee = itemValue / 8.9 * fee / 100
const resourceCost = q1 * r1cost + q2 * r2cost + q3 * r3cost
const roundedResourceCost = Math.round(resourceCost);

const returnedResource = resourceCost * returnRate / 100
const calculateTax = sellPrice * 0.065
const roundedCalculateTax = Math.round(calculateTax)
const totalCost = resourceCost + calculateFee + roundedCalculateTax
const isProfit = parseInt(returnedResource) + parseInt(sellPrice) - parseInt(totalCost);
const roundedIsProfit = Math.round(isProfit)

console.log(returnedResource)
console.log(sellPrice)
console.log(totalCost)
console.log(roundedIsProfit)

  return (
    <div className="min-h-screen pt-20 max-w-[90%] mx-auto">
      <div className="text-2xl font-bold">
        Albion Online Item Profit Calculator
      </div>
      <hr className="my-2"></hr>
      <div>Home / Calculator / Item Profit Calculator</div>

      <div className="bg-[rgb(55,62,77)] min-h-96 mt-10">
        <div className="flex justify-evenly items-center pt-20 flex-wrap">
        <div className="flex flex-col">
            <label name="category" className="text-white mb-1">
              Choose Refine Category
            </label>
            <select
              name="category"
              id="category"
              className="h-8 w-52"
              onChange={handleCategory}
            >
              <option value="empty">Choose Category</option>
              <option value="LEATHER">Leather</option>
              <option value="CLOTH">Cloth</option>
              <option value="METALBAR">Metal Bar</option>
              <option value="PLANKS">Plank</option>
              <option value="STONEBLOCK">Stone Block</option>
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
              <option value="">Choose Tier</option>
              <option value={4}>T4</option>
              <option value={5}>T5</option>
              <option value={6}>T6</option>
              <option value={7}>T7</option>
              <option value={8}>T8</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label name="category" className="text-white mb-1">
              Choose Enchanment
            </label>
            <select
              name="category"
              id="category"
              className="h-8 w-28"
              onChange={handleEnch}
            >
              <option value="empty">Choose Enchanment</option>
              <option value="0">0</option>
              <option value="1">.1</option>
              <option value="2">.2</option>
              <option value="3">.3</option>
              <option value="4">.4</option>
            </select>
          </div>
          <div className="flex flex-col">
          <label for="fee" className="text-white text-sm text-left mb-1">Refine Fee</label>
            <input onChange={handleFee} id="fee" name="fee" type="text" placeholder="Type Fee"  className="h-8 w-28" />
          </div>
          <div className="flex flex-col">
          <label for="returnrate" className="text-white text-sm text-left mb-1">Return Rate</label>
        <input onChange={handleRRR} id="returnrate" name="returnrate" type="text" placeholder="53.9"  className="h-8 w-28" />
          </div>
        </div>


        <div className="flex justify-evenly items-center pt-20 flex-wrap">
             <div className="flex justify-center items-center gap-10 flex-wrap">
                <div className="flex justify-center items-center">
                <Image src={resourceImg} alt="item-img" width={130} height={130} />
                <div className="flex flex-col">
                <label for="mainresource" className="text-white text-sm text-left mb-1">Selling Price</label>
                <input onChange={handleSellPrice} id="mainresource" name="mainresource" type="text" placeholder="Type Price" className="pl-1 h-6 w-32" />
                </div>
                </div>
     
                <div className="flex justify-center items-center">
                <p className="flex justify-center items-center text-white mr-4">{q1} x</p>
                <Image src={matImg1} alt="item-img" width={65} height={65} />
                <div className="flex flex-col">
                <label for="resource1" className="text-white text-sm text-left mb-1">Resource Price</label>
                <input onChange={handleR1cost} id="resource1" name="resource1" type="text" placeholder="Type Price" className="pl-1 h-6 w-32" />
                </div>
                </div>
                {tier == 4 && ench >= 0 ? (
                    <div className="flex justify-center items-center">
                    <p className="flex justify-center items-center text-white mr-4">{q2} x</p>
                    <Image src="https://render.albiononline.com/v1/item/T3_LEATHER" alt="item-img" width={65} height={130} />
                    <div className="flex flex-col">
                <label for="resource2" className="text-white text-sm text-left mb-1">Resource Price</label>
                <input onChange={handleR2cost} id="resource2" name="resource2" type="text" placeholder="Refined Price" className="pl-1 h-6 w-32" />
                </div>
                </div>
                ) : (
                    <div className="flex justify-center items-center">
                    <p className="flex justify-center items-center text-white mr-4">{q2} x</p>
                    <Image src={matImg2} alt="item-img" width={65} height={130} />
                    <div className="flex flex-col">
                <label for="resource2" className="text-white text-sm text-left mb-1">Resource Price</label>
                <input onChange={handleR2cost} id="resource2" name="resource2" type="text" placeholder="Type Price" className="pl-1 h-6 w-32" />
                </div>
                </div>
                )}
                {tier == 8 && ench >= 3 && (
                <div className="flex justify-center items-center">
                    <p className="flex justify-center items-center text-white mr-4">{q3} x</p>
                    <Image src={matImg3} alt="item-img" width={65} height={130} />
                    <div className="flex flex-col">
                <label for="resource3" className="text-white text-sm text-left mb-1">Heart Price</label>
                <input onChange={handleR3cost} id="resource3" name="resource3" type="text" placeholder="Type Price" className="pl-1 h-6 w-32" />
                </div>
                </div>
                )}
             </div>
        </div>
      </div>
    </div>
  );
}
