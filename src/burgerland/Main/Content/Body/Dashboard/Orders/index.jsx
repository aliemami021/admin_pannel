import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const Orders = () => {
  return (
    <section className="w-full h-full  capitalize ">
      <h1 className="tags">Orders</h1>
      <div className="h-[80%] w-full absolute bottom-0 ">
        <div className=" pb-[5px] border-b-2 ">
          <div className="flex justify-between gap-3  pr-[15px]">
            <div className="basis-1/4  pl-[25px] flex items-center justify-start">
              <h2 className=" text-xs text-muted-foreground mr-1">restaurant</h2>
              <IoIosArrowDown size={8} />
            </div>
            <div className="basis-2/4 flex items-center justify-start">
              <h2 className=" text-xs text-muted-foreground mr-1">order</h2>
              <IoIosArrowDown size={8} />
            </div>
            <div className="basis-1/4  pl-[15px] flex items-center justify-end">
              <h2 className=" text-xs text-muted-foreground mr-1">value</h2>
              <IoIosArrowDown size={8} />
            </div>
            <div className="basis-1/4  pl-[15px] flex items-center justify-end">
              <h2 className=" text-xs text-muted-foreground mr-1">delivery</h2>
              <IoIosArrowDown size={8} />
            </div>
          </div>
        </div>
        <div className=" flex w-full h-full pr-[15px] pb-[15px] gap-3 justify-end">
          <div className="w-[22%] pl-[25px] ">
            <ul className="order-list text-[14px] ">
              <div>felanja st</div>
              <div>felanja st</div>
              <div>felanja st</div>
              <div>felanja st</div>
              <div>felanja st</div>
            </ul>
          </div>
          <div className="w-[34%] ">
            <ul className="order-list text-[14px] truncate">
              <div className="truncate">felanfelanfelanfelanfelanfelan</div>
              <div>felanfelanfelanfelan</div>
              <div>felanfelanfelanfelan</div>
              <div>felanfelanfelanfelan</div>
              <div>felanfelanfelanfelan</div>
            </ul>
          </div>
          <div className="w-[22%] ">
            <ul className="order-list text-[14px] flex flex-col items-end">
              <div>felanfelan</div>
              <div>felanfelan</div>
              <div>felanfelan</div>
              <div>felanfelan</div>
              <div>felanfelan</div>
            </ul>
          </div>
          <div className="w-[22%] ">
            <ul className="order-list text-[14px] flex flex-col items-end">
              <div>felanfelan</div>
              <div>felanfelan</div>
              <div>felanfelan</div>
              <div>felanfelan</div>
              <div>felanfelan</div>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Orders;
