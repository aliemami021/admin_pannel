import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import res1 from "../../../../../assets/images/restaurantmages/restaurant1.jpg";
import datas from "../foodData.json";

const Card = () => {
  return (
    <div className="flex ">
      <div className="basis-5/12 bg-red-400">
        <img src={res1} alt="" />
      </div>
      <div className="basis-7/12 bg-red-100 p-4">
        {datas.map(data=>(<p>{data.address}</p>))}
        <div className="flex items-center justify-between">
          <p className="basis-3/5">sdsd</p>
          <BsFillTelephoneFill />
          <BsFillTelephoneFill />
        </div>
      </div>
    </div>
  );
};

export default Card;
