import React, { useState } from 'react'
import SwitchTabs from '../../Components/SwitchTabs'
import CarouselContainer from '../../Components/CarouselContainer'
import { fetchApi } from '../../API_Service/api';
import useFetch from '../../Hooks/useFetch';

function PopularCarousel() {


    const [ currentPopular, setCurrentPopular] = useState("movie");
    const {data, loading} = useFetch(`/${currentPopular}/popular`);
    // console.log(data, loading)


    const onTabFunction= (tab, index) => {
            setCurrentPopular(tab==="Movies" ? "movie" : "tv")
    }


    return (
        <div className='w-[100vw] h-[30vh] border-2 border-black flex flex-col'>
            <div className='flex justify-between px-4 h-[12%] border-red-500 border-2'>
                <h1>Popular</h1>
    
                <div className=' w-[20%]  border-pink-500 border-2'>
                    <SwitchTabs data={["Movies", "Series"]} onTabFunction={onTabFunction}/>
                </div>
            </div>
    
            <div className='w-[100%] h-[88%] border-2 border-green-600'>
                <CarouselContainer  movieData={data?.results} loading={loading} endpoint={currentPopular}/>
            </div>
          
        </div>
    )
}

export default PopularCarousel
