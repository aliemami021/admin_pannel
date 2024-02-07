import React from "react";
import Navbar from "../Main/Navbar";

const MainLayout = ({children}) => {

    return (
        <main className=" flex items-start justify-center min-h-[804px]  max-w-[1106px] m-auto bg-red-50 rounded-[30px]  overflow-hidden">
            <Navbar />
            {children}
        </main>
    );
}

export default MainLayout;