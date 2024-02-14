import React from "react";
import { RiMotorbikeFill } from "react-icons/ri";
import { GoPersonFill } from "react-icons/go";

const Drivers = () => {
  return (
    <section className="w-full h-full  capitalize">
      <h1 className="pl-7 pt-5 font-semibold text-xl">Drivers</h1>
      <div className="h-[80%] w-full absolute bottom-0  ">
        <div className="pl-7 pr-5">
          <div className="flex items-center justify-between pb-2">
            <div className="flex items-center flex-grow text-sm">
              <div className="if-online">
                <GoPersonFill size={30} />
              </div>
              <div className="flex flex-col ml-2">
                <div>aghaye folani</div>
                <div className=" text-xs font-light">filan folan folan</div>
              </div>
            </div>
            <div>
              <RiMotorbikeFill size={40} />
            </div>
          </div>
          <div className="flex items-center justify-between pb-2">
            <div className="flex items-center flex-grow text-sm">
              <div className="if-online ">
                <GoPersonFill size={30} />
              </div>
              <div className="flex flex-col ml-2">
                <div>aghaye folani</div>
                <div className=" text-xs font-light">filan folan folan</div>
              </div>
            </div>
            <div>
              <RiMotorbikeFill size={40} />
            </div>
          </div>
          <div className="flex items-center justify-between pb-2">
            <div className="flex items-center flex-grow text-sm">
              <div className="if-online ">
                <GoPersonFill size={30} />
              </div>
              <div className="flex flex-col ml-2">
                <div>aghaye folani</div>
                <div className=" text-xs font-light">filan folan folan</div>
              </div>
            </div>
            <div>
              <RiMotorbikeFill size={40} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Drivers;
