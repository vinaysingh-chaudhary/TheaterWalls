import React, { useEffect, useState } from "react";
import useFetch from "../../Hooks/useFetch";
import SwitchTabs from "../../Components/SwitchTabs";
import CarouselContainer from "../../Components/CarouselContainer";
import { GiLightProjector } from "react-icons/gi";

const TrendingCarousel = () => {
  const [time_window, setTime_Window] = useState("week");
  const [compTitle, setCompTitle] = useState("home");

  const { data, loading } = useFetch(`/trending/all/${time_window}`);

  const onTabFunction = (tab, index) => {
    if (index === 0) {
      setTime_Window(tab === "Day" ? "day" : "Day");
    } else {
      setTime_Window(tab === "Week" ? "week" : "Week");
    }
  };

  return (
    <div className="w-full h-[75%] flex flex-col justify-start gap-4 bg-black">
      <div className=" flex flex-col items-center justify-between gap-2 px-4 h-[22%] z-50 ">
        <h1 className="text-6xl uppercase text-white">Trending</h1>

        <div className="w-[50%] min-h-[40px] md:w-[30%] xl:w-[20%] border-pink-500 border-2 rounded-lg flex justify-center items-center mt-2">
          <SwitchTabs data={["Day", "Week"]} onTabFunction={onTabFunction} />
        </div>
      </div>


      <div className="w-[100%] h-[80%] flex justify-center">
        {!loading ? (
          <CarouselContainer
            movieData={data?.results}
            loading={loading}
            css={compTitle}
          />
        ) : (
          <div className="w-[100%] h-[95%] text-white flex justify-center flex-col items-center">
            <div className="flex justify-center items-center gap-3 pb-8">
              <div className="w-[100%] min-h-[100%] flex justify-center items-center text-white text-4xl">
                Lights...
              </div>
              <div className="w-[100%] min-h-[100%] flex justify-center items-center text-white text-4xl">
                <GiLightProjector />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrendingCarousel;
