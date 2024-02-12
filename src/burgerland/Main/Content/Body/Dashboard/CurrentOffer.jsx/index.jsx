import React from "react";
import { IoIosSettings } from "react-icons/io";

const CurrentOffer = () => {
  return (
    <div className="w-full h-full p-7 whitespace-pre-wrap capitalize flex justify-start items-center  bg-gradient-to-r from-[#181818] to-[#363636]">
      <div className="w-[70%] h-full flex flex-col items-start justify-between leading-relaxed ">
        <h1 className="  text-[20px] text-white">current offers</h1>
        <p className="text-[10px] font-semibold text-white">
          Lorem ipsum, dolor sit amet consectetur adipis icing elit. Velit,
          autem!
        </p>
        <div className=" w-full ">
          <button type="button" className=" bg-gradient-to-r  mt-4 from-[#44d7a3] border-none to-[#6fdc77] text-white font-semibold text-md p-3 rounded-lg text-sm flex items-center justify-center w-full">
          <IoIosSettings className="mr-2" size={18}/>
            manage offers
          </button>
        </div>
      </div>
    </div>
  );
};

export default CurrentOffer;
