import React from "react";
import { PiShoppingBagFill } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import orders from "./orders.json"


const Orders = () => {
  return (
    <div className="order flex gap-8 flex-col h-full w-full justify-between items-center">
      {/* --------------------------------------- top sec --------------------------------------- */}
      <div className=" basis-2/12 w-full bg-white rounded-xl flex py-1 shadow-md">
        <div className="basis-1/3 flex w-full items-center justify-between  border-r-2 border-green-50">
          <div className="flex items-center px-8">
            <div className="flex items-center ">
              <div className=" p-2 bg-red-50 rounded-md">
                <PiShoppingBagFill size={20} />
              </div>

              <div className="flex flex-col ml-2">
                <span className=" text-xl font-semiboldbold">121</span>
                <span className="capitalize text-sm">ongoing</span>
              </div>
            </div>

            <div className="flex items-center ml-3">
              <div className=" p-2 bg-red-50 rounded-md">
                <PiShoppingBagFill size={20} />
              </div>

              <div className="flex flex-col ml-2">
                <span className=" text-xl font-semiboldbold">244</span>
                <span className="capitalize text-sm">delivered</span>
              </div>
            </div>
          </div>
        </div>
        {/* ----------------------------------------------- */}

        <div className="basis-2/3 flex items-center">
          <div className="flex w-full items-center justify-between px-8">
            <div className="flex items-center ">
              <div className=" p-2 bg-red-50 rounded-md">
                <PiShoppingBagFill size={20} />
              </div>

              <div className="flex flex-col ml-2">
                <span className=" text-xl font-semiboldbold">$1240</span>
                <span className="capitalize text-sm">sales today</span>
              </div>
            </div>

            <div className="flex items-center ml-3">
              <div className=" p-2 bg-red-50 rounded-md">
                <PiShoppingBagFill size={20} />
              </div>

              <div className="flex flex-col ml-2">
                <span className=" text-xl font-semiboldbold">$45,200</span>
                <span className="capitalize text-sm">sales this mounth</span>
              </div>
            </div>

            <div className="flex items-center ml-3">
              <div className=" p-2 bg-red-50 rounded-md">
                <PiShoppingBagFill size={20} />
              </div>

              <div className="flex flex-col ml-2">
                <span className=" text-xl font-semiboldbold">229,710</span>
                <span className="capitalize text-sm">sales this year</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* --------------------------------------- bottom sec --------------------------------------- */}
      <div className=" basis-10/12 w-full bg-white rounded-xl shadow-md">
        <span className="p-5 block">orders</span>

        <div className="w-full pb-2 px-5 border-b-2 border-gray-100 flex items-center">
          <div className="basis-1/6 flex items-center bas text-sm font-thin text-muted-foreground">
            <span className="capitalize mr-1">restaurant</span>
            <IoIosArrowDown size={12} />
          </div>

          <div className="basis-1/6 flex items-center text-sm font-thin text-muted-foreground">
            <span className="capitalize text-sm font-thin text-muted-foreground mr-1">
              order ID
            </span>
            <IoIosArrowDown size={12} />
          </div>

          <div className="basis-2/6 flex items-center text-sm font-thin text-muted-foreground">
            <span className="capitalize text-sm font-thin text-muted-foreground mr-1">
              order
            </span>
            <IoIosArrowDown size={12} />
          </div>

          <div className="basis-1/6 flex justify-end items-center text-sm font-thin text-muted-foreground">
            <span className="capitalize text-sm font-thin text-muted-foreground mr-1">
              value
            </span>
            <IoIosArrowDown size={12} />
          </div>

          <div className="basis-1/6 flex justify-end items-center text-sm font-thin text-muted-foreground">
            <span className="capitalize text-sm font-thin text-muted-foreground mr-1">
              delivery
            </span>
            <IoIosArrowDown size={12} />
          </div>

          <div className="basis-1/6 flex justify-end items-center text-sm font-thin text-muted-foreground">
            <span className="capitalize text-sm font-thin text-muted-foreground mr-1">
              driver
            </span>
            <IoIosArrowDown size={12} />
          </div>
          <div className="basis-1/6 flex items-center text-sm font-thin text-muted-foreground"></div>
        </div>
        {/* --------------------------------------------------- */}

        <div className="h-full ">
          <div className="px-5 flex h-full">
            <ul className="basis-1/6 text-left truncate">
              {orders.map((order,index) => <li key={index}>{(order.name)}</li>)}
            </ul>
            <ul className="basis-1/6 ">
            {orders.map(order => <li>{(order.number)}</li>)}
            </ul>
            <ul className="basis-2/6 ">
              <li className="px-0">asasas</li>
              <li className="px-0">asasas</li>
              <li className="px-0">asasas</li>
              <li className="px-0">asasas</li>
              <li className="px-0">asasas</li>
              <li className="px-0">asasas</li>
            </ul>
            <ul className="basis-1/6  flex flex-col items-end">
              <li className="px-0">asasas</li>
              <li className="px-0">asasas</li>
              <li className="px-0">asasas</li>
              <li className="px-0">asasas</li>
              <li className="px-0">asasas</li>
              <li className="px-0">asasas</li>
            </ul>
            <ul className="basis-1/6  flex flex-col items-end">
              <li className="px-0">asasas</li>
              <li className="px-0">asasas</li>
              <li className="px-0">asasas</li>
              <li className="px-0">asasas</li>
              <li className="px-0">asasas</li>
              <li className="px-0">asasas</li>
            </ul>
            <ul className="basis-1/6 flex flex-col items-end">
              <li className="px-0">asasas</li>
              <li className="px-0">asasas</li>
              <li className="px-0">asasas</li>
              <li className="px-0">asasas</li>
              <li className="px-0">asasas</li>
              <li className="px-0">asasas</li>
            </ul>
            <ul className="basis-1/6 flex flex-col items-center ">
              <li className="px-0">...</li>
              <li className="px-0">...</li>
              <li className="px-0">...</li>
              <li className="px-0">...</li>
              <li className="px-0">...</li>
              <li className="px-0">...</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
