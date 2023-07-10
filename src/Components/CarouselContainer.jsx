import React from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import Card from "./Card";
import { useRef } from "react";

function CarouselContainer({ movieData, loading, endpoint }) {
  const crslContainer = useRef();
  const { backdrop } = useSelector((state) => state.homeSlice.imgUrl);
  const navigate = useNavigate();

  const slidingArrowFun = (direction) => {
    const container = crslContainer.current;

    const scrollAmount =
      direction === "left"
        ? container.scrollLeft - container.offsetWidth
        : container.scrollLeft + container.offsetWidth;

    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  const detailNavigation = (mediaType, id) => {
    navigate(`${mediaType}/${id}`);
  };

  return (

  <div className="w-[100%] h-[100%] flex justify-center items-center relative ">

        <div className="w-[6%] xl:w-[7%] min-h-[90%] absolute left-[10%]  xl:left-[9%]  z-[550000] mb-6 bg-gradient-to-r from-black to-[#00000000] opacity-0 xl:opacity-100 "></div>
        <div className="w-[6%] xl:w-[7%] min-h-[90%] absolute right-[10%]  xl:right-[9%] z-[550000] mb-6 bg-gradient-to-l from-black to-[#00000000]  opacity-0 xl:opacity-100"></div>

    <div className="w-[100%] h-[100%] relative xl:w-[80%]">
      <AiOutlineArrowLeft
        onClick={() => slidingArrowFun("left")}
        className="w-[5%] h-[100%] absolute left-0 z-10 xl:w-[3%]"
      />
      <AiOutlineArrowRight
        onClick={() => slidingArrowFun("right")}
        className="w-[5%] h-[100%] absolute right-0 z-10 xl:w-[3%]"
      />

      <div
        className=" w-[100%] h-[45vh] sm:h-[41vh] md:h-[46vh] md:mb-5 overflow-x-auto flex flex-row items-center gap-3 pl-3 2xl:pl-0 pr-2 mb-8 scrollbar-hide"
        ref={crslContainer}
      >
        {movieData?.map((item) => {
          return !loading ? (
            <Card
              key={item?.id}
              img={`${backdrop}${item?.poster_path}`}
              id={item?.id}
              media={item?.media_type || endpoint}
              title={
                item?.original_title ? item?.original_title : item?.original_name
              }
              rating={item?.vote_average?.toFixed(1)}
              release={
                item?.release_date
                  ? dayjs(item.release_date)?.format("MMM D, YYYY")
                  : dayjs(item.first_air_date)?.format("MMM D, YYYY")
              }
              genre={item?.genre_ids}
              naviFunc={detailNavigation}
              loading={loading}
            />
          ) : (
            <p>loading...</p>
          );
        })}
      </div>
    </div>

    </div>
  );
}

export default CarouselContainer;
