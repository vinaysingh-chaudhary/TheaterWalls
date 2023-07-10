import React from "react";
import HeroBanner from "../../Components/HeroBanner";
import TrendingCarousel from "../homePage/TrendingCarousel";
import PopularCarousel from "../homePage/PopularCarousel";
import TopRatedCarousel from "../homePage/TopRatedCarousel";
import Footer from "../../Components/Footer"

const HomePage = () => {
  return (
    <div className="max-w-[100vw] h-[100%] scrollbar-hide">
      <HeroBanner />
      <TrendingCarousel />
      <PopularCarousel />
      <TopRatedCarousel />
      <Footer/>
    </div>
  );
};

export default HomePage;
