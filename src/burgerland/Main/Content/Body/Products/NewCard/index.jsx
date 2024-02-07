import React, { useState } from "react";
import { IoMdEye, IoIosSettings } from "react-icons/io";


const NewCard = (products) => {
    const[products, setProducts] = useState();

  return (
    {
products.map((product,index)=>(

    
    <div className="flex bg-white flex-col justify-start shadow-md rounded-2xl  max-w-[190px] h-[280px] overflow-hidden">
      <img src={burger1} />

      <div className="flex flex-col items-center justify-center p-6">
        <h1 className=" capitalize font-bold">folan burger</h1>
        <span className=" font-thin">360g</span>
        <p className=" text-xs font-thin text-center">
          Folan folan, Felan felan, Filan filan
        </p>
      </div>
      <div className="flex items-center justify-between  px-6 gap-5">
        <div className=" flex justify-center items-center  ">
          <span className="text-[20px]">$179</span>
        </div>
        <div className=" flex justify-center items-center border rounded ">
          <span className="p-1 cursor-pointer">
            <IoMdEye size={20} />
          </span>
        </div>

        <div className=" flex justify-center items-center border rounded">
          <span className="p-1 cursor-pointer">
            <IoIosSettings size={20} />
          </span>
        </div>
      </div>
    </div>
    ))
    }
    );
};

export default NewCard;
