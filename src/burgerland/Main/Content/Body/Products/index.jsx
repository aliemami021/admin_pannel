
import ProductNavbar from "./PoductContent/ProductNavbar";
import MainCourse from "./PoductContent/MainCourse"
import { Outlet } from "react-router-dom";


const Products = () => {
  
  return (
    <section className=" w-full h-full flex flex-col ">
      
        <ProductNavbar />
        <MainCourse/>
        
        
     
     
    </section>
  );
};

export default Products;
