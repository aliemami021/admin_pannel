import React from "react";
// import Dashboard from "./Dashboard";
// import Products from "./Products";
// import AddNewProduct from "../../SideData/AddNewProduct";

// import { BrowserRouter, Route, Routes } from "react-router-dom";

const Body = ({children}) => {
  return (
    <div className="body w-full p-8">
      {/* <Dashboard/> */}
      {/* <Products/> */}
      {children}
    </div>
  );
};

export default Body;
