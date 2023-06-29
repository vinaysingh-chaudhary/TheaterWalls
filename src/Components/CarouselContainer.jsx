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
    <div className="w-[100%] h-[100%] relative">
      <AiOutlineArrowLeft
        onClick={() => slidingArrowFun("left")}
        className="w-[5%] h-[100%] absolute left-0"
      />
      <AiOutlineArrowRight
        onClick={() => slidingArrowFun("right")}
        className="w-[5%] h-[100%] absolute right-0"
      />

      <div
        className=" w-[100%] h-[100%] overflow-x-auto flex flex-row items-center gap-3"
        ref={crslContainer}
      >
        {movieData?.map((item) => {
          return !loading ? (
            <Card
              key={item.id}
              img={`${backdrop}${item.backdrop_path}`}
              id={item.id}
              media={item.media_type || endpoint}
              title={
                item.original_title ? item.original_title : item.original_name
              }
              rating={item.vote_average.toFixed(1)}
              release={
                item.release_date
                  ? dayjs(item.release_date).format("MMM D, YYYY")
                  : dayjs(item.first_air_date).format("MMM D, YYYY")
              }
              genre={item.genre_ids}
              naviFunc={detailNavigation}
            />
          ) : (
            <p>loading...</p>
          );
        })}
      </div>
    </div>
  );
}

export default CarouselContainer;
