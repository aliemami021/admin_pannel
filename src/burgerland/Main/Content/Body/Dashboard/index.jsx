import React from "react";

import Sales from "./Sales";
import CurrentOffer from "./CurrentOffer.jsx";
import Orders from "./Orders/index.jsx";
import Drivers from "./Drivers/index.jsx";
import ShowMap from "./ShowMap/index.jsx";

const Dashboard = () => {
  return (
    <div className="dashboard grid grid-cols-5 grid-rows-10 gap-5  w-full">
      <div className="item1 col-start-1 col-span-3 row-start-1 row-end-5 bg-white drop-shadow-md  flex flex-col overflow-hidden rounded-xl">
        <Sales />
      </div>
      <div className="item2 col-start-1 col-span-3 row-start-5 row-end-10 bg-white drop-shadow-md  flex flex-col overflow-hidden rounded-xl">
        <Orders />
      </div>
      <div className="item3  col-end-6 col-span-2 row-start-1 row-end-4 bg-white drop-shadow-md  flex flex-col overflow-hidden rounded-xl">
        <CurrentOffer />
      </div>
      <div className="item4  col-end-6 col-span-2 row-start-4 row-end-8  bg-white drop-shadow-md  flex flex-col overflow-hidden rounded-xl">
        <Drivers />
      </div>
      <div className="item5  col-end-6 col-span-2 row-start-8 row-end-10 bg-white drop-shadow-md  flex flex-col overflow-hidden rounded-xl">
        <ShowMap />
      </div>
    </div>
  );
};

export default Dashboard;


