import React, { useState } from "react";
import SwitchTabs from "../../Components/SwitchTabs";
import CarouselContainer from "../../Components/CarouselContainer";
import { fetchApi } from "../../API_Service/api";
import useFetch from "../../Hooks/useFetch";
import { BsCameraReelsFill } from "react-icons/bs";

function PopularCarousel() {
  const [compTitle, setCompTitle] = useState("home");
  const [currentPopular, setCurrentPopular] = useState("movie");
  const { data, loading } = useFetch(`/${currentPopular}/popular`);

  const onTabFunction = (tab, index) => {
    setCurrentPopular(tab === "Movies" ? "movie" : "tv");
  };

  return (
    <div className="w-[100%]flex flex-col">
      <div className="flex justify-between items-center gap-2 px-4 h-[12%] mb-2">
        <h1 className="text-2xl uppercase text-white">Popular</h1>

        <div className="w-[50%] min-h-[40px] border-pink-500 border-2 rounded-md flex justify-center items-center">
          <SwitchTabs
            data={["Series", "Movies"]}
            onTabFunction={onTabFunction}
          />
        </div>
      </div>

      <div className="w-[100%] h-[88%] ">
        {!loading ? (
          <CarouselContainer
            movieData={data?.results}
            loading={loading}
            endpoint={currentPopular}
            css={compTitle}
          />
        ) : (
          <div className="w-[100%] h-[40vh] text-white flex justify-center flex-col items-center">
            <div className="flex justify-center items-center gap-3 pb-8">
              <div className="w-[100%] min-h-[100%] flex justify-center items-center text-white text-4xl">
                Camera...
              </div>
              <div className="w-[100%] min-h-[100%] flex justify-center items-center text-white text-4xl">
                <BsCameraReelsFill />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PopularCarousel;
