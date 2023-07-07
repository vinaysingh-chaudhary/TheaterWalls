import React from "react";
import Noposter from "../../public/Noposter.png";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

function SearchQueryCard({ data, poster, mediaType,id,title, manualMedia, rating }) {
const navigate = useNavigate();

  return (
    <div
      className={`max-w-[48%] max-h-[400px] relative rounded-md p-2 bg-[#151515] flex justify-center items-center flex-col gap-1`}
      onClick={() =>navigate(`/${data?.media_type ? data?.media_type : manualMedia || mediaType}/${data?.id}`)}
    >
      <img
        src={
          poster === "https://image.tmdb.org/t/p/originalnull" 
            ? Noposter
            : poster
        }
        alt=""
        className="rounded-md h-[80%]"
      />

      <p className="w-[90%] h-[15%] bg-[#bbbbbc] mt-[-13%] rounded-md flex justify-center items-center gap-2 ">{rating} <AiFillStar className="text-yellow-500"/></p>
      <p className="text-white text-xl text-center h-[40px] flex justify-center items-center">
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
