import React, { useEffect, useState } from 'react'
import useFetch from '../../Hooks/useFetch'
import SwitchTabs from '../../Components/SwitchTabs'
import CarouselContainer from '../../Components/CarouselContainer'


const TrendingCarousel = () => {

    const [time_window, setTime_Window] = useState("week")
    // console.log(time_window);

    const {data, loading} = useFetch(`/trending/all/${time_window}`)


    
    const onTabFunction = (tab, index) => {
        if(index===0){
            console.log(tab);
            setTime_Window(tab==="Day"? "day" : "Day");
        }else{
            console.log(tab);
            setTime_Window(tab==="Week"? "week" : "Week");
        }
    }

    // console.log(data, loading);

  return (
    <div className='w-[100vw] h-[30vh] border-2 border-black flex flex-col'>
        <div className='flex justify-between px-4 h-[12%] border-red-500 border-2'>
            <h1>Trending</h1>

            <div className=' w-[20%]  border-pink-500 border-2'>
                <SwitchTabs data={["Day", "Week"]} onTabFunction={onTabFunction}/>
            </div>
        </div>

        <div className='w-[100%] h-[88%] border-2 border-green-600'>
            <CarouselContainer movieData={data?.results} loading={loading} />
        </div>
      
    </div>
  )
}

export default TrendingCarousel
