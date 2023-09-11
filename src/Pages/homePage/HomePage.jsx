import React from "react";
import HeroBanner from "../../Components/HeroBanner";
import TrendingCarousel from "../homePage/TrendingCarousel";
import Footer from "../../Components/Footer"

const HomePage = () => {
  return (
    <div className="w-full h-[93vh] scrollbar-hide flex flex-col ">
      <HeroBanner />
      <TrendingCarousel />
      <Footer/>
    </div>
  );
};

export default HomePage;
