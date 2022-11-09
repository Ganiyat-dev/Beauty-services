import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Home from "../Pages/Home";


const MainLayout = () => {
    return(
        <>
        <Navbar/>
            <Outlet/>
        <Footer/>
        
        </>
    )
}

export default MainLayout;