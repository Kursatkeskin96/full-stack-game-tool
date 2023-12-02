// SearchComponent.js
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { IoSearchOutline } from "react-icons/io5";

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = () => {
    // Update the URL with the search term
    router.push(`/market?search=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <div className='flex justify-center items-center gap-2'>
<div className="input-icon-container">
    <input 
        type="text" 
        value={searchTerm}
        onChange={handleSearchChange}
        className="w-60 h-8 rounded-md pl-8 border-2 border-black text-black" // Note the left padding
    />
    <IoSearchOutline className="input-icon"/>
</div>
      <button 
        onClick={handleSearchSubmit}
        className="bg-blue-500 text-white w-20 h-8 rounded-md"
      >
        Search
      </button>
    </div>
  );
};

export default SearchComponent;
