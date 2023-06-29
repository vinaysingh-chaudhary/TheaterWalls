import React from 'react'
import useFetch from '../../Hooks/useFetch'
import CarouselContainer from '../../Components/CarouselContainer'
import SwitchTabs from '../../Components/SwitchTabs'
import { useState } from 'react'


function TopRatedCarousel() {

    const [ratedMediaType, setRatedMediaType] = useState("movie");

    const {data, loading} = useFetch(`/${ratedMediaType}/top_rated`);
    // console.log(data);

    const onTabFunction =(tab) =>{
        setRatedMediaType(tab === "Movies" ? "movie" : "tv" )
    }

  return (
    <div className='w-[100vw] h-[30vh] border-2 border-black flex flex-col'>
        <div className='flex justify-between px-4 h-[12%] border-red-500 border-2'>
            <h1>Trending</h1>

            <div className=' w-[20%]  border-pink-500 border-2'>
                <SwitchTabs data={["Movies", "Series"]} onTabFunction={onTabFunction}/>
            </div>
        </div>

        <div className='w-[100%] h-[88%] border-2 border-green-600'>
            <CarouselContainer movieData={data?.results} loading={loading} endpoint={ratedMediaType} />
        </div>
      
    </div>
  )
}

export default TopRatedCarousel
