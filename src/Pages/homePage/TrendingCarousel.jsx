import React from 'react'
import useFetch from '../../Hooks/useFetch'
import SwitchTabs from '../../Components/SwitchTabs'

const TrendingCarousel = () => {



    const trending = useFetch("/trending/all/week")
    console.log(trending);

    const onTabFunction = (tab) => {
        if(tab===tab[0]){
            console.log("Day")
        }else{
            console.log("week")
        }
    }

  return (
    <div className='w-[100vw] h-[30vh] border-2 border-black flex flex-col'>
        <div className='flex justify-between px-4 h-[12%] border-red-500 border-2'>
            <h1>Trending</h1>

            <div className=' w-[20%]  border-pink-500 border-2'>
                <SwitchTabs data={["Day", "Week"]} onTabFunction={onTabFunction}/>
            </div>
        </div>

        <div className='w-[100%] h-[88%] border-2 border-green-600'>
 
        </div>
      
    </div>
  )
}

export default TrendingCarousel
