import React from "react";
import useFetch from "../../Hooks/useFetch";
import CarouselContainer from "../../Components/CarouselContainer";
import SwitchTabs from "../../Components/SwitchTabs";
import { useState } from "react";
import { MdOutlineCallToAction } from "react-icons/md";

function TopRatedCarousel() {
  const [ratedMediaType, setRatedMediaType] = useState("movie");
  const [compTitle, setCompTitle] = useState("home");
  const { data, loading } = useFetch(`/${ratedMediaType}/top_rated`);

  const onTabFunction = (tab) => {
    setRatedMediaType(tab === "Movies" ? "movie" : "tv");
  };

  return (
    <div className="w-[100%] flex flex-col border-none">
      <div className="flex justify-between items-center gap-2 px-4 h-[12%] mb-3 ">
        <h1 className="text-2xl text-white">TOP RATINGS</h1>

        <div className=" w-[50%] min-h-[40px] border-pink-500 border-2 rounded-md flex justify-center items-center">
          <SwitchTabs
            data={["Series", "Movies"]}
            onTabFunction={onTabFunction}
          />
        </div>
      </div>

      <div className="w-[100%] h-[88%]">
        {!loading ? (
          <CarouselContainer
            movieData={data?.results}
            loading={loading}
            endpoint={ratedMediaType}
            css={compTitle}
          />
        ) : (
          <div className="w-[100%] h-[40vh] text-white flex justify-center flex-col items-center">
            <div className="flex justify-center items-center gap-3 pb-8">
              <div className="w-[100%] min-h-[100%] flex justify-center items-center text-white text-4xl">
                Action...
              </div>
              <div className="w-[100%] min-h-[100%] flex justify-center items-center text-white text-4xl">
                <MdOutlineCallToAction />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TopRatedCarousel;
