import { PiHamburgerFill } from "react-icons/pi";
import { BiSolidBowlHot } from "react-icons/bi";
import { LuCupSoda } from "react-icons/lu";
import { GiCupcake } from "react-icons/gi";
import { NavLink } from 'react-router-dom';


const ProductNavbar = () => {
  return (
    <div className=" w-full bg-white shadow-md rounded-lg flex items-center">
        <NavLink to="main-course" className={`${({isActive})=>isActive?"hover:border-b-[.25rem] hover:border-b-black hover:transition-all": "text-black"} py-5 ml-8 cursor-pointer flex items-center justify-center border-b-[.25rem] border-b-white `}>
          <PiHamburgerFill className=" translate-y-1" size={20} />
          <span className="ml-2  translate-y-1">Main courses</span>
        </NavLink>
        <NavLink to="side-dishes" className=" py-5 ml-8 cursor-pointer flex items-center justify-center border-b-[.25rem] border-b-white hover:border-b-[.25rem] hover:border-b-black hover:transition-all">
          <BiSolidBowlHot className=" translate-y-1" size={20} />
          <span className="ml-2  translate-y-1">Side dishes</span>
        </NavLink>
        <NavLink to="drinks" className=" py-5 ml-8 cursor-pointer flex items-center justify-center border-b-[.25rem] border-b-white hover:border-b-[.25rem] hover:border-b-black hover:transition-all">
          <LuCupSoda className=" translate-y-1" size={20} />
          <span className="ml-2  translate-y-1">Drinks</span>
        </NavLink>
        <NavLink to="other" className=" py-5 ml-8 cursor-pointer flex items-center justify-center border-b-[.25rem] border-b-white hover:border-b-[.25rem] hover:border-b-black hover:transition-all">
          <GiCupcake className=" translate-y-1" size={20} />
          <span className="ml-2  translate-y-1">Other</span>
        </NavLink>
      </div>
  )
}

export default ProductNavbar