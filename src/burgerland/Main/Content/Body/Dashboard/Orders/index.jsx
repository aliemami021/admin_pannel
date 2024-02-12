import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const Orders = () => {
  return (
    <section className="w-full h-full p-7 flex flex-col capitalize ">
      <h1 className="text-xl font-semibold basis-2/12">Orders</h1>
      <div className="h-[80%] w-full absolute bottom-0 basis-10/12">
        <div className=" pb-[5px] border-b-2 ">
          <div className="flex justify-between gap-3 ">
            <div className="basis-2/12 flex items-center justify-start">
              <h2 className=" text-xs text-muted-foreground mr-1">
                restaurant
              </h2>
              <IoIosArrowDown size={8} />
            </div>
            <div className="basis-3/12 flex items-center justify-start">
              <h2 className=" text-xs text-muted-foreground mr-1">order</h2>
              <IoIosArrowDown size={8} />
            </div>
            <div className="basis-1/12  pl-[15px] flex items-center justify-end">
              <h2 className=" text-xs text-muted-foreground mr-1">value</h2>
              <IoIosArrowDown size={8} />
            </div>
            <div className="basis-1/12  pl-[15px] flex items-center justify-end">
              <h2 className=" text-xs text-muted-foreground mr-1">delivery</h2>
              <IoIosArrowDown size={8} />
            </div>
            <div className="basis-1/12  pl-[15px] flex items-center justify-end bg-red-800">asa
            </div>
          </div>
        </div>
        <div className=" flex   gap-3 justify-start">
          <div className="basis-2/12  ">
            <ul className="order-list text-[14px] ">
              <div>felanja st</div>
              <div>felanja st</div>
              <div>felanja st</div>
              <div>felanja st</div>
              <div>felanja st</div>
            </ul>
          </div>
          <div className="basis-3/12 ">
            <ul className="order-list text-[14px] truncate">
              <div className="truncate">felanfelanfelanfassaselan</div>
              <div className="truncate">felanfelanfelanfelan</div>
              <div className="truncate">felanfelanfelanfelan</div>
              <div className="truncate">felanfelanfelanfelan</div>
              <div className="truncate">felanfelanfelanfelan</div>
            </ul>
          </div>
          <div className="basis-1/12  ">
            <ul className="order-list text-[14px] flex flex-col items-end">
              <div>felanfelan</div>
              <div>felanfelan</div>
              <div>felanfelan</div>
              <div>felanfelan</div>
              <div>felanfelan</div>
            </ul>
          </div>
          <div className="basis-1/12  ">
            <ul className="order-list text-[14px] flex flex-col items-end">
              <div>felanfelan</div>
              <div>felanfelan</div>
              <div>felanfelan</div>
              <div>felanfelan</div>
              <div>felanfelan</div>
            </ul>
          </div>
          <div className="basis-1/12 ">
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Orders;
