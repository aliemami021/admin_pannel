import React, { useState } from "react";
import Card from "./Card";
import { IoMdEye, IoIosSettings } from "react-icons/io";

import { PiHamburgerFill } from "react-icons/pi";
import { BiSolidBowlHot } from "react-icons/bi";
import { LuCupSoda } from "react-icons/lu";
import { GiCupcake } from "react-icons/gi";
import NewProductPage from "../../../SideData/NewProductPage";

const Products = () => {
  const [showAddProductPage, setShowAddProductPage] = useState(false);
  const [products, setProducts] = useState([]);

  const handleShowAddProductPage = () => {
    
    setShowAddProductPage(true);
  };

  const handleCloseAddProductPage = (newProduct) => {
  
    setShowAddProductPage(false);
    if (newProduct) {
      setProducts((prevProducts) => [...prevProducts, newProduct]);
    }
  };

  const handleSubmit = (e) => {
    setShowAddProductPage(false);
  };

  return (
    <section className=" w-full h-full flex flex-col ">
      <div className=" w-full bg-white shadow-md rounded-lg flex items-center">
        <div className="py-5 ml-8 cursor-pointer flex items-center justify-center border-b-[.25rem] border-b-white hover:border-b-[.25rem] hover:border-b-black hover:transition-all">
          <PiHamburgerFill className=" translate-y-1" size={20} />
          <span className="ml-2  translate-y-1">Main courses</span>
        </div>
        <div className=" py-5 ml-8 cursor-pointer flex items-center justify-center border-b-[.25rem] border-b-white hover:border-b-[.25rem] hover:border-b-black hover:transition-all">
          <BiSolidBowlHot className=" translate-y-1" size={20} />
          <span className="ml-2  translate-y-1">Side dishes</span>
        </div>
        <div className=" py-5 ml-8 cursor-pointer flex items-center justify-center border-b-[.25rem] border-b-white hover:border-b-[.25rem] hover:border-b-black hover:transition-all">
          <LuCupSoda className=" translate-y-1" size={20} />
          <span className="ml-2  translate-y-1">Drinks</span>
        </div>
        <div className=" py-5 ml-8 cursor-pointer flex items-center justify-center border-b-[.25rem] border-b-white hover:border-b-[.25rem] hover:border-b-black hover:transition-all">
          <GiCupcake className=" translate-y-1" size={20} />
          <span className="ml-2  translate-y-1">Other</span>
        </div>
      </div>

      <div className="flex flex-wrap  max-h-[593px] mt-8 mb-3 gap-5 overflow-y-auto">
        <Card />

        {products.map((product, index) => (
          <>
            <div className="flex bg-white flex-col justify-start shadow-md rounded-2xl  max-w-[190px] h-[280px] overflow-hidden mb-2">
              <div className="products-container">
                <div key={index} className="product-card">
                  <div className="flex flex-col items-center justify-center p-6">
                    <h1 className="capitalize font-bold">{product.name}</h1>
                    <span className="font-thin">{product.weight}</span>
                    <p className="text-xs font-thin text-center">
                      Folan folan, Felan felan, Filan filan
                    </p>
                  </div>
                  <div className="flex items-center justify-between px-6 gap-5">
                    <div className="flex justify-center items-center">
                      <span className="text-[20px]">${product.price}</span>
                    </div>
                    <div className="flex justify-center items-center border rounded">
                      <span className="p-1 cursor-pointer">
                        <IoMdEye size={20} />
                      </span>
                    </div>
                    <div className="flex justify-center items-center border rounded">
                      <span className="p-1 cursor-pointer">
                        <IoIosSettings size={20} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}

        <div
          className="mb-2 flex justify-center items-center bg-white flex-col cursor-pointer shadow-md rounded-2xl  w-[190px] h-[280px] overflow-hidden text-lg font-bold"
          onClick={handleShowAddProductPage}
        >
          <pre>+</pre>
          <pre>Add New</pre> <pre>Product</pre>
        </div>
        {showAddProductPage && (
          <NewProductPage
            onClose={handleCloseAddProductPage}
            onSubmit={handleSubmit}
          />
        )}
      </div>
    </section>
  );
};

export default Products;
