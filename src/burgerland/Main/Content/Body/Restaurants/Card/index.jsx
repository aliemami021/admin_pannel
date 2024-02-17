import React, { useState, useEffect } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import res1 from "../../../../../assets/images/restaurantmages/restaurant1.jpg";
import datas from '../foodData.json'
const Card = () => {
//   const [datas, setDatas] = useState([]);

  
  return (
    <div className="flex ">
      <div className="basis-5/12 bg-red-400">
        <img src={res1} alt="" />
      </div>
      <div className="basis-7/12 bg-red-100 p-4">
        {datas.map((item, index) => (
          <Info key={index} info={item} />
        ))}
        <div className="flex items-center justify-between">
          <p className="basis-3/5">asa</p>
          <BsFillTelephoneFill />
          <BsFillTelephoneFill />
        </div>
      </div>
    </div>
  );
};

const Info = ({ info }) => {
  return (
    <div>
      <p>name:{info.name}</p>
    </div>
  );
};

export default Card;
