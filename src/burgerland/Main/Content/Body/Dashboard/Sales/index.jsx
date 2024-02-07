import React from "react";
import FirstValue from "./FirstValue";
import SecondValue from "./SecondValue";
import ThirdValue from "./ThirdValue";
import Chart from "./Chart";


const Sales = () => {
  return (
    <>
      <div className="w-full h-1/6 pl-5 pt-5 flex font-semibold text-lg ">
        <span className="capitalize">sales</span>
      </div>

      <div className="h-3/6 border-b-2 px-5">
       <Chart/>
      </div>

      <div className="h-2/6 flex justify-between items-center px-[25px] ">
        <div className="w-[25%] h-full">
          <FirstValue />
        </div>
        <div className="w-[35%] h-full">
          <SecondValue />
        </div>
        <div className="w-[40%] h-full">
          <ThirdValue />
        </div>
      </div>
    </>
  );
};

export default Sales;
