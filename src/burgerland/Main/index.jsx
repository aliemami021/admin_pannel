
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Content/Body/Dashboard";
import Products from "./Content/Body/Products";
import Orders from "./Content/Body/Orders";
import Restaurant from "./Content/Body/Restaurants";
import Drivers from "./Content/Body/Drivers";

import Navbar from "./Navbar";
import Content from "./Content";

const Main = () => {
  return (
    <main className=" flex  justify-center h-[804px]  max-w-[1106px] m-auto bg-red-50 rounded-[30px]  overflow-hiden">
      <BrowserRouter>
        <Navbar />
        <Content>
        <Routes>
          <Route path="/dashboard" exact element={<Dashboard />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/orders" element={<Orders />}></Route>
          <Route path="/restaurants" element={<Restaurant />}></Route>
          <Route path="/drivers" element={<Drivers />}></Route>
        </Routes>
        </Content>
      </BrowserRouter>
    </main>
  );
};

export default Main;
