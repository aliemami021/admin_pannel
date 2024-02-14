
import { BiSolidBowlHot } from "react-icons/bi";
import { GiCupcake } from "react-icons/gi";
import { PiHamburgerFill } from "react-icons/pi";
import { LuCupSoda } from "react-icons/lu";

import { Link } from "react-router-dom";



const ProductNavbar = () => {



    return (


        <div className=" w-full bg-white shadow-md rounded-lg flex items-center">
            <Link to="./main-course" active >

                <div className="py-5 ml-8 cursor-pointer flex items-center justify-center border-b-[.25rem] border-b-white hover:border-b-[.25rem] hover:border-b-black hover:transition-all">
                    <PiHamburgerFill className=" translate-y-1" size={20} />
                    <span className="ml-2  translate-y-1">Main courses</span>
                </div>

            </Link>
            <Link to="./side-dishes"  >
                <div className=" py-5 ml-8 cursor-pointer flex items-center justify-center border-b-[.25rem] border-b-white hover:border-b-[.25rem] hover:border-b-black hover:transition-all">
                    <BiSolidBowlHot className=" translate-y-1" size={20} />
                    <span className="ml-2  translate-y-1">Side dishes</span>
                </div>
            </Link>
            <Link to="./drinks"  >
                <div className=" py-5 ml-8 cursor-pointer flex items-center justify-center border-b-[.25rem] border-b-white hover:border-b-[.25rem] hover:border-b-black hover:transition-all">
                    <LuCupSoda className=" translate-y-1" size={20} />
                    <span className="ml-2  translate-y-1">Drinks</span>
                </div>
            </Link>
            <Link to="./other"  >
                <div className=" py-5 ml-8 cursor-pointer flex items-center justify-center border-b-[.25rem] border-b-white hover:border-b-[.25rem] hover:border-b-black hover:transition-all">
                    <GiCupcake className=" translate-y-1" size={20} />
                    <span className="ml-2  translate-y-1">Other</span>
                </div>
            </Link>

        </div>
    )
}

export default ProductNavbar