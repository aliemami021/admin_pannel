import React from "react";

import Sales from "./Sales";
import CurrentOffer from "./CurrentOffer.jsx";
import Orders from "./Orders/index.jsx";
import Drivers from "./Drivers/index.jsx";
import ShowMap from "./ShowMap/index.jsx";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-5 grid-rows-10 gap-5 w-full h-full bg-red-500">
      <div className="col-start-1 col-span-3 row-start-1 row-end-6 bg-white drop-shadow-md  l overflow-hidden rounded-xl">
        <Sales />
      </div>
      <div className="col-start-1 col-span-3 row-start-6 row-end-11 bg-white drop-shadow-md  l overflow-hidden rounded-xl">
        <Orders />
      </div>
      <div className="col-end-6 col-span-2 row-start-1 row-end-5 bg-white drop-shadow-md  l overflow-hidden rounded-xl">
        <CurrentOffer />
      </div>
      <div className="col-end-6 col-span-2 row-start-5 row-end-9  bg-white drop-shadow-md  l overflow-hidden rounded-xl">
        <Drivers />
      </div>
      <div className="col-end-6 col-span-2 row-start-9 row-end-11 bg-white drop-shadow-md  l overflow-hidden rounded-xl">
        <ShowMap />
      </div>
    </div>
  );
};

export default Dashboard;


