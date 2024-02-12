import React from "react";
import { IoIosSearch } from "react-icons/io";

const Search = () => {
  return (
    <div className="w-full flex items-center justify-start mb-8">
      <form className="w-[calc(60%-.6rem)] flex items-center justify-between  border-b-2 ">
        <input
          type="search"
          className="w-full bg-transparent capitalize cursor-text order-1 outline-none"
          placeholder="search"
          dir="rtl"
        />
        <button className="flex items-center justify-center bg-transparent text-black border-none pr-5">
          <IoIosSearch size={23} className="" />
        </button>
      </form>
    </div>
  );
};

export default Search;
