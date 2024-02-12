import React from "react";
import logo from "../../assets/images/AusAvocados_RGB_AllGreen-300x83.png";
import woman from "../../assets/images/woman_image1.png";
import { PiPaperPlaneRightFill } from "react-icons/pi";
import { BiSolidDashboard } from "react-icons/bi";
import { RiShoppingBag2Fill } from "react-icons/ri";
import { FaHamburger } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BsPersonSquare } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" basis-2/6 max-w-[20%] flex flex-col items-center justify-center bg-white drop-shadow-md">
      <div className="w-full h-[93%] flex flex-col items-center justify-center border-b-2">
        <div className="h-[15%] w-full flex pt-5 pl-8 ">
          <img className="cursor-pointer h-10" src={logo} alt="logo" />
        </div>
        <div className="w-full h-[65%] ">
          <ul className=" h-fit w-full mt-5 grid ">
            <Link
              className="w-full  hover:bg-green-50 hover:border-r-4 hover:border-green-500"
              to="/dashboard"
            >
              <li className="py-5 pl-8 flex capitalize cursor-pointer">
                <BiSolidDashboard className="mr-3 font-thin" size={20} />
                dashboard
              </li>
            </Link>
            <Link
              className="w-full hover:bg-green-50 hover:border-r-4 hover:border-green-500"
              to="/orders"
            >
              <li className="py-5 pl-8 flex capitalize cursor-pointer">
                <RiShoppingBag2Fill className="mr-3 font-thin" size={20} />
                orders
              </li>
            </Link>
            <Link
              className="w-full hover:bg-green-50 hover:border-r-4 hover:border-green-500"
              to="/products"
            >
              <li className="py-5 pl-8 flex capitalize cursor-pointer">
                <FaHamburger className="mr-3 font-thin" size={20} />
                products
              </li>
            </Link>
            <Link
              className="w-full hover:bg-green-50 hover:border-r-4 hover:border-green-500"
              to="/restaurants"
            >
              <li className="py-5 pl-8 flex capitalize cursor-pointer">
                <FaLocationDot className="mr-3 font-thin" size={20} />
                restaurants
              </li>
            </Link>
            <Link
              className="w-full cursor-pointer hover:bg-green-50 hover:border-r-4 hover:border-green-500"
              to="/drivers"
            >
              <li className="py-5 pl-8 flex capitalize ">
                <BsPersonSquare className="mr-3" size={20} />
                drivers
              </li>
            </Link>
          </ul>
        </div>
        <div className=" w-full h-[20%] flex flex-col items-center justify-end p-3 ">
          <span>done for today?</span>
          <button
            type="button"
            className=" bg-gradient-to-r  mt-4 from-[#44d7a3] to-[#6fdc77] text-white font-semibold text-md p-3 rounded-lg flex items-center justify-center w-full"
          >
            <PiPaperPlaneRightFill className="mr-2" size={18} />
            sent daily report
          </button>
        </div>
      </div>
      <div className="flex items-end justify-center w-full h-[10%] pb-5">
        <div className="rounded-b-full if-online  w-10 overflow-hidden">
          <img
            className="align-middle cursor-pointer"
            src={woman}
            alt="help_online support"
          />
        </div>
        <span className="mx-2">annalise willas</span>
        <BsThreeDotsVertical className=" cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
