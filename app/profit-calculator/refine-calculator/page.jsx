"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { TbCoins } from "react-icons/tb";
import Link from "next/link";

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
const [returnRate, setReturnRate] = useState(53.9)
const [fee, setFee] = useState(300)
const [sellPrice, setSellPrice] = useState('')
const [t4mastery, setT4mastery] = useState(1)
const [t5mastery, setT5mastery] = useState(0)
const [t6mastery, setT6mastery] = useState(0)
const [t7mastery, setT7mastery] = useState(0)
const [t8mastery, setT8mastery] = useState(0)
const [t4efficiency, setT4efficiency] = useState("")
const [t5efficiency, setT5efficiency] = useState("")
const [t6efficiency, setT6efficiency] = useState("")
const [t7efficiency, setT7efficiency] = useState("")
const [t8efficiency, setT8efficiency] = useState("")
const [fullFocusprofit ,setFullFocusprofit] = useState('')
const [updatedFocusCost, setUpdatedFocusCost] = useState('');

function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Spec Efficiency Calculate 
const calculateSpecEfficiency = () => {
    setT4efficiency(t4mastery*280+t5mastery*30+t6mastery*30+t7mastery*30+t8mastery*30)
    setT5efficiency(t4mastery*30+t5mastery*280+t6mastery*30+t7mastery*30+t8mastery*30)
    setT6efficiency(t4mastery*30+t5mastery*30+t6mastery*280+t7mastery*30+t8mastery*30)
    setT7efficiency(t4mastery*30+t5mastery*30+t6mastery*30+t7mastery*280+t8mastery*30)
    setT8efficiency(t4mastery*30+t5mastery*30+t6mastery*30+t7mastery*30+t8mastery*280)
}

const handleT4mastery = (e) => {
    setT4mastery(e.target.value)
}

const handleT5mastery = (e) => {
    setT5mastery(e.target.value)
}

const handleT6mastery = (e) => {
    setT6mastery(e.target.value)
}

const handleT7mastery = (e) => {
    setT7mastery(e.target.value)
}

const handleT8mastery = (e) => {
    setT8mastery(e.target.value)
}

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
        setQ1("5")
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
  
  useEffect(() => {
    calculateSpecEfficiency();
}, [tier, ench, t4mastery, t5mastery, t6mastery, t7mastery, t8mastery]);

const calculateFocusCost = () => {
    const tierNum = parseInt(tier);
    const enchNum = parseInt(ench);
    const totalTier = tierNum + enchNum;

    let efficiency = 0;
    switch (tierNum) {
        case 4:
            efficiency = t4efficiency;
            break;
        case 5:
            efficiency = t5efficiency;
            break;
        case 6:
            efficiency = t6efficiency;
            break;
        case 7:
            efficiency = t7efficiency;
            break;
        case 8:
            efficiency = t8efficiency;
            break;
        default:
            // Handle unexpected tier
            return;
    }

    let baseCost = 0;
    switch (totalTier) {
        case 4:
            baseCost = 54;
            break;
        case 5:
            baseCost = 94;
            break;
        case 6: 
            baseCost = 164;
            break;
        case 7:
            baseCost = 287;
            break;
        case 8:
            baseCost = 503;
            break;
        case 9: 
            baseCost = 880;
            break;
        case 10:
            baseCost = 1539
            break;
        case 11:
            baseCost = 2694
            break;
        default:
            baseCost = 0
            return;
    }

    if (efficiency > 0) {
        const focusCostValue = baseCost / (2 ** (efficiency / 10000));
        return Math.round(focusCostValue); // Apply Math.round here
    } else {
        return 0;
    }
};

const focusCostValue = calculateFocusCost();


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

let matImg3 = `https://render.albiononline.com/v1/item/${r3}`;

useEffect(() => {
    calculateSpecEfficiency();
    const focusCostValue = calculateFocusCost();
    setUpdatedFocusCost(focusCostValue);
}, [tier, ench, t4mastery, t5mastery, t6mastery, t7mastery, t8mastery]);


// Calculations

const calculateFee = itemValue / 8.9 * fee / 100
const roundedCalculateFee = Math.round(calculateFee)
const resourceCost = q1 * r1cost + q2 * r2cost + q3 * r3cost
const roundedResourceCost = Math.round(resourceCost);

const returnedResource = resourceCost * returnRate / 100
const roundedReturnedResource = Math.round(returnedResource)
const calculateTax = sellPrice * 0.065
const roundedCalculateTax = Math.round(calculateTax)
const totalCost = resourceCost + calculateFee + roundedCalculateTax
const isProfit = parseInt(returnedResource) + parseInt(sellPrice) - parseInt(totalCost);
const roundedIsProfit = Math.round(isProfit)
const itemSellPrice = sellPrice

// Use this for displaying the number with thousand separators
const formattedProfit = formatNumberWithCommas(roundedIsProfit);
const formattedFee = formatNumberWithCommas(roundedCalculateFee)
const formattedResourceCost = formatNumberWithCommas(roundedResourceCost)
const formattedReturnedResource = formatNumberWithCommas(roundedReturnedResource)
const formattedTax = formatNumberWithCommas(roundedCalculateTax)
const formattedSellPrice = formatNumberWithCommas(itemSellPrice)

const calculateFocusProfit = () => {
    const profit = (30000 / focusCostValue * roundedIsProfit);
    const roundedProfit = Math.round(profit);

    // This is the formatted value for display
    const formattedProfit = formatNumberWithCommas(roundedProfit);

    // Use this for displaying the number with thousand separators
    setFullFocusprofit(formattedProfit);
}

useEffect(() => {
    calculateFocusProfit()
}, [focusCostValue, roundedIsProfit]);

  return (
    <div className="min-h-screen pt-20 max-w-[90%] mx-auto">
      <div className="text-2xl font-bold">
        Albion Online Item Profit Calculator
      </div>
      <hr className="my-2"></hr>
      <div className="flex gap-2">
  <Link href="/" className="font-bold">Home</Link>
  <Link href="/profit-calculator/refine-calculator"> / Refine Calculator</Link>
      </div>

      <div className="bg-[rgb(55,62,77)] min-h-96 mt-10">
        <h3 className="pt-10 text-lg text-white ml-10">Mastery Levels</h3>
        <p className="text-md text-gray-200 ml-10">Type your mastery levels to learn your focus cost and profit per 30k focus</p>
      <div className="flex justify-evenly items-center pt-4 flex-wrap">
      <div className="flex flex-col">
          <label name="t4mastery" className="text-white text-sm text-center mb-1">T4</label>
            <input value={t4mastery} onChange={handleT4mastery} id="t4mastery" name="t4mastery" type="text" placeholder="0" className="h-8 w-20 text-center" />
          </div>
          <div className="flex flex-col">
          <label name="t5mastery" className="text-white text-sm text-center mb-1">T5</label>
            <input value={t5mastery} onChange={handleT5mastery} id="t5mastery" name="t5mastery" type="text" placeholder="0" className="h-8 w-20 text-center" />
          </div>
          <div className="flex flex-col">
          <label name="t6mastery" className="text-white text-sm text-center mb-1">T6</label>
            <input value={t6mastery}  onChange={handleT6mastery} id="t6mastery" name="t6mastery" type="text" placeholder="0" className="h-8 w-20 text-center" />
          </div>
          <div className="flex flex-col">
          <label name="t7mastery" className="text-white text-sm text-center mb-1">T7</label>
            <input value={t7mastery}  onChange={handleT7mastery} id="t7mastery" name="t7mastery" type="text" placeholder="0" className="h-8 w-20 text-center" />
          </div>
          <div className="flex flex-col">
          <label name="t8mastery" className="text-white text-sm text-center mb-1">T8</label>
            <input value={t8mastery}  onChange={handleT8mastery} id="t8mastery" name="t8mastery" type="text" placeholder="0" className="h-8 w-20 text-center" />
          </div>
      </div>
      <hr className="mt-10 mx-auto w-[90%]"></hr>
        <div className="flex justify-evenly items-center pt-10 flex-wrap">
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
              <option value="">Tier</option>
              <option value={4}>T4</option>
              <option value={5}>T5</option>
              <option value={6}>T6</option>
              <option value={7}>T7</option>
              <option value={8}>T8</option>
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
          <label name="fee" className="text-white text-sm text-left mb-1">Usage Fee</label>
            <input value={fee} onChange={handleFee} id="fee" name="fee" type="text" placeholder="Type Fee" className="h-8 w-28" />
          </div>
          <div className="flex flex-col">
          <label name="returnrate" className="text-white text-sm text-left mb-1">% Return Rate</label>
        <input value={returnRate} onChange={handleRRR} id="returnrate" name="returnrate" type="text" placeholder="53.9"  className="h-8 w-28" />
          </div>
        </div>

   
        <div className="flex justify-evenly items-center pt-20 flex-wrap">
        {category && tier && ench && (
             <div className="flex justify-center items-center gap-10 flex-wrap">
                <div className="flex justify-center items-center">
                <Image src={resourceImg} alt="item-img" width={130} height={130} />
                <div className="flex flex-col">
                <label name="mainresource" className="text-white text-sm text-left mb-1">Selling Price</label>
                <input onChange={handleSellPrice} id="mainresource" name="mainresource" type="text" placeholder="Type Unit Price" className="pl-1 h-6 w-32" />
                </div>
                </div>
     
                <div className="flex justify-center items-center">
                <p className="flex justify-center items-center text-white mr-4">{q1} x</p>
                <Image src={matImg1} alt="item-img" width={65} height={65} />
                <div className="flex flex-col">
                <label name="resource1" className="text-white text-sm text-left mb-1">Resource Price</label>
                <input onChange={handleR1cost} id="resource1" name="resource1" type="text" placeholder="Type Unit Price" className="pl-1 h-6 w-32" />
                </div>
                </div>
                {tier == 4 && ench >= 0 ? (
                    <div className="flex justify-center items-center">
                    <p className="flex justify-center items-center text-white mr-4">{q2} x</p>
                    <Image src="https://render.albiononline.com/v1/item/T3_LEATHER" alt="item-img" width={65} height={130} />
                    <div className="flex flex-col">
                <label name="resource2" className="text-white text-sm text-left mb-1">Resource Price</label>
                <input onChange={handleR2cost} id="resource2" name="resource2" type="text" placeholder="Type Unit Price" className="pl-1 h-6 w-32" />
                </div>
                </div>
                ) : (
                    <div className="flex justify-center items-center">
                    <p className="flex justify-center items-center text-white mr-4">{q2} x</p>
                    <Image src={matImg2} alt="item-img" width={65} height={130} />
                    <div className="flex flex-col">
                <label name="resource2" className="text-white text-sm text-left mb-1">Resource Price</label>
                <input onChange={handleR2cost} id="resource2" name="resource2" type="text" placeholder="Type Unit Price" className="pl-1 h-6 w-32" />
                </div>
                </div>
                )}
                {tier == 8 && ench >= 3 && (
                <div className="flex justify-center items-center">
                    <p className="flex justify-center items-center text-white mr-4">{q3} x</p>
                    <Image src={matImg3} alt="item-img" width={65} height={130} />
                    <div className="flex flex-col">
                <label name="resource3" className="text-white text-sm text-left mb-1">Heart Price</label>
                <input onChange={handleR3cost} id="resource3" name="resource3" type="text" placeholder="Type Unit Price" className="pl-1 h-6 w-32" />
                </div>
                </div>
                )}
             </div>
            )}
        </div>
        {category && tier && ench && fee && returnRate && sellPrice && r1cost && r2cost && (
        <div className="flex justify-center items-center pt-10 flex-wrap">
            {roundedIsProfit < 0 ? (
                <div className="bg-red-500 text-white min-h-32 w-1/3 flex justfiy-start items-start mb-10">
                <div className="mx-auto">
                    <h5 className="underline font-bold">PROFITABILITY WITH %{returnRate} RETURN RATE</h5>
                 <div className="flex justify-evenly items-center pb-2 mt-4 text-sm">
                    <div className="font-bold">
                    <p>Item Price</p>
                    <p>Returned Resource</p>
                    <p>- Material Cost</p>
                    <p>- Sell Order Tax %6.5</p>
                    <p>- Usage Fee</p>
                    <p>Total = </p>
                    <p>Focus Cost =</p>
                    <p>30K Focus Profit =</p>
                    </div>
                    <div>
                    <p>{formattedSellPrice}</p>
                    <p>{formattedReturnedResource}</p>
                    <p>{formattedResourceCost}</p>
                    <p>{formattedTax}</p>
                    <p>{formattedFee}</p>
                    <p>{formattedProfit} </p>
                    <p>{focusCostValue}</p> 
                    <p className="flex gap-1 underline">{fullFocusprofit}  <TbCoins className="mt-1" /></p>
                    </div>
                    </div>
                </div>
                </div>
            ) : (
                <div className="bg-green-500 shadow-xl rounded-md text-white min-h-32 w-1/3 flex justfiy-start items-start mb-10">
                <div className="mx-auto">
                    <h5 className="underline font-bold">PROFITABILITY WITH %{returnRate} RETURN RATE</h5>
                 <div className="flex justify-evenly items-center mt-4 pb-2 text-sm">
                    <div className="font-bold">
                    <p>Item Price</p>
                    <p>Returned Resource</p>
                    <p>- Material Cost</p>
                    <p>- Sell Order Tax %6.5</p>
                    <p>- Usage Fee</p>
                    <p>Total = </p>
                    <p>Focus Cost =</p>
                    <p>30K Focus Profit =</p>
                    </div>
                    <div>
                    <p>{formattedSellPrice}</p>
                    <p>{formattedReturnedResource}</p>
                    <p>{formattedResourceCost}</p>
                    <p>{formattedTax}</p>
                    <p>{formattedFee}</p>
                    <p>{formattedProfit} </p>
                    <p>{focusCostValue}</p> 
                    <p className="underline flex gap-1">{fullFocusprofit}  <TbCoins className="mt-1" /></p>
                    </div>
                    </div>
                </div>
                </div>
            )}
        </div>
        )}
      </div>
    </div>
  );
}