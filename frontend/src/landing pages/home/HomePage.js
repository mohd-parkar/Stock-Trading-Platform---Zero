import React from "react";
import Award from "./Awards";
import Stats from "./Stats";
import Pricing from "./pricing";
import Education from "./EduInfo";
import Hero from "./Hero";
import Navbar from "../Navbar";
import OpenAccount from "../OpenAccount";
import Footer from "../Footer";



function HomePage(){
    return(
        <>
            <Navbar/>
            <Hero/>
            <Award/>
            <Stats/>
            <Pricing/>
            <Education/>
            <OpenAccount/>
            <Footer/>

        </>
    );
}

export default HomePage;
