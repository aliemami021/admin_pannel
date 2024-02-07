import React from "react";
import Search from "../Search";


const Content = ({ children }) => {
  return (
    <section className=" content max-w-[80%] grow h-full p-8 relative">
      <Search />
      {children}
    </section>
  );
};

export default Content;
