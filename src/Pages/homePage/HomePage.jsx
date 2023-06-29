import React from 'react'
import HeroBanner from '../../Components/HeroBanner'
import TrendingCarousel from '../homePage/TrendingCarousel'
import PopularCarousel from '../homePage/PopularCarousel'
import TopRatedCarousel from '../homePage/TopRatedCarousel'


const HomePage = () => {
  return (
    <div>
      <HeroBanner/>
      <TrendingCarousel/>
      <PopularCarousel/>
      <TopRatedCarousel/>

    </div>
  )
}

export default HomePage
