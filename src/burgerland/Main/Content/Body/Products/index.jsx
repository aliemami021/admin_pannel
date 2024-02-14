
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductNavbar from "./ProductNavbar";
import ProductContent from "./PoductContent";


const Products = () => {
  
  return (
    <section className=" w-full h-full flex flex-col ">
      <BrowserRoute>
        <ProductNavbar />
        <ProductContent>
        <Routes>
          <Route path="" element={}></Route>
        </Routes>
        </ProductContent>
      </BrowserRoute>
     
    </section>
  );
};

export default Products;
