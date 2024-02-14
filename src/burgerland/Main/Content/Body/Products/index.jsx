import React, { useState } from "react";


import ProductInfo from "./ProductInfo";





const Products = () => {


  return (
    <section className=" w-full h-full flex flex-col ">
      <ProductNavbar/>
      
      {for(i=0;i<Array.length;i++){
        <ProductInfo />
      }}
    </section>
  );
};

export default Products;
