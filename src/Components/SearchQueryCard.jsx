import React from "react";
import Noposter from "../../public/Noposter.png";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

function SearchQueryCard({ data, poster, mediaType,id,title, manualMedia, rating, loading}) {
const navigate = useNavigate();

  return (
    <div
      className={`max-w-[45%] sm:max-w-[30%] md:max-w-[26%] lg:max-w-[23%] xl:max-w-[15%] 2xl:max-w-[13%] max-h-[400px] relative rounded-md p-2 bg-[#151515] flex justify-center items-center flex-col gap-1 pt-3`}
      onClick={() =>navigate(`/${data?.media_type ? data?.media_type : manualMedia || mediaType}/${data?.id}`)}
    >
      <img
        src={
          poster === "https://image.tmdb.org/t/p/originalnull" || loading === true
            ? Noposter
            : poster
        }
        alt=""
        className="rounded-md h-[80%]"
      />

      <div className="min-w-[65%] min-h-[10%] bg-[#bbbbbc] mt-[-13%] rounded-md flex justify-center items-center gap-2 text-sm text-center">{rating? rating : "No"} <AiFillStar className="text-yellow-500"/></div>
      <p className="text-white text-lg text-center h-[40px] flex justify-center items-center">
        {title?.substring(0, 18)}
      </p>
      <p className="text-[#ffffff57] text-md mt-2">
        {data?.release_date
          ? dayjs(data?.release_date).format("MMM D, YYYY")
          : dayjs(data?.first_air_date).format("MMM D, YYYY")}
      </p>f
    </div>
  );
}

export default SearchQueryCard;
