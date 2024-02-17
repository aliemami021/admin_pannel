import React, { useState } from "react";
import { IoMdEye, IoIosSettings } from "react-icons/io";
import Card from "../Card";
import NewProductPage from "../../../../../SideData/NewProductPage";

const ProductContent = () => {
  const [showAddProductPage, setShowAddProductPage] = useState(false);
  const [products, setProducts] = useState([]);

  const handleShowAddProductPage = () => {
    setShowAddProductPage(true);
  };

  const handleCloseAddProductPage = () => {
    setShowAddProductPage(false);
  };

  const handleSubmit = (newProduct) => {
    setShowAddProductPage(false);
    if (newProduct) {
      setProducts((prevProducts) => [...prevProducts, newProduct]);
    }
  };

  return (
    <div className="flex flex-wrap  max-h-[593px] mt-8 mb-3 gap-5 overflow-y-auto">
      <Card />

      {products.map((product, index) => (
        <>
          <div className="flex bg-white flex-col justify-start shadow-md rounded-2xl  max-w-[190px] h-[280px] overflow-hidden mb-2">
            <div className="products-container">
              <div key={index} className="product-card">
                <img src={product.img} />
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
  );
};

export default ProductContent;
