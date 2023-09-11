import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Noposter from '../../public/Noposter.png'
import LazyLoader from "./LazyLoader";

function Card({
  img,
  id,
  title,
  rating,
  release,
  genre,
  naviFunc,
  media,
  css,
  loading

}) {
  const navigate = useNavigate();

  return (
    <div
      className="min-w-[180px] h-[350px] relative rounded-md p-2 bg-[#3b3b3b] cursor-pointer"
      onClick={
        naviFunc
          ? () => naviFunc(media === "movie" ? "movie" : "tv", id)
          : () => navigate(`/${data?.media_type || mediaType}/${data?.id}`)
      }
    >
      <div className={`w-full h-[74%] relative mb-8`}>
        <LazyLoader
        image={loading? Noposter : img}
          // src={}
          // alt=""
        />

        <div className="w-[90%] h-[15%] absolute bottom-[-20px] left-[5%] bg-[#636363] p-1 rounded-md flex justify-center items-center">
          <p>{rating}</p>
          <p>
            <AiFillStar className="text-yellow-400" />
          </p>
        </div>
      </div>

      <div className="w-[100%]  bottom-0">
        <h5 className="text-white text-md uppercase sm:text-[1.1rem] text-center">
          {title?.substring(0, 13)}
        </h5>
        <p className="text-[#ffffff82] text-center">{release}</p>
      </div>
    </div>
  );
}

export default Card;
