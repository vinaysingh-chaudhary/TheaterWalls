import React from "react";
import Noposter from "../../public/Noposter.png";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import LazyLoader from "./LazyLoader";

function SearchQueryCard({ data, poster, mediaType,id,title, manualMedia, rating, loading}) {
const navigate = useNavigate();

  return (
    <div
    className="min-w-[180px] max-w-[180px] h-[350px] relative rounded-md p-2 bg-[#3b3b3b7e] flex flex-col items-center cursor-pointer"
      onClick={() =>navigate(`/${data?.media_type ? data?.media_type : manualMedia || mediaType}/${data?.id}`)}
    >
      <div className="h-[75%]">
      <LazyLoader
        image={
          poster === "https://image.tmdb.org/t/p/originalnull" || loading === true
            ? Noposter
            : poster
        }
      />
      </div>

      <div className="w-[65%] min-h-[10%] bg-[#bbbbbc] mt-[-11%] rounded-md flex justify-center items-center gap-2 text-sm z-[200]">{rating? rating : "No"} <AiFillStar className="text-yellow-500"/></div>
      <p className="text-white text-lg h-[40px] flex justify-center text-center mb-1 mt-2">
        {title?.substring(0, 18)}
      </p>
      <p className="text-[#ffffff57] text-md mt-2">
        {data?.release_date
          ? dayjs(data?.release_date).format("MMM D, YYYY")
          : dayjs(data?.first_air_date).format("MMM D, YYYY")}
      </p>
    </div>
  );
}

export default SearchQueryCard;
