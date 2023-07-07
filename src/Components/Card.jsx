import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

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
}) {
  const navigate = useNavigate();

  return (
    <div
      className={`${
        css === "explore" ? "max-w-[48%]" : "min-w-[45%]"
      } max-h-[500px] relative rounded-md p-2 bg-[#3b3b3b]`}
      onClick={
        naviFunc
          ? () => naviFunc(media === "movie" ? "movie" : "tv", id)
          : () => navigate(`/${data?.media_type || mediaType}/${data?.id}`)
      }
    >
      <div className={`w-[100%] relative mb-8`}>
        <img
          className={`w-[100%] h-[60%] object-cover relative rounded-md`}
          src={img}
          alt=""
        />

        <div className="w-[90%] h-[15%] absolute bottom-[-20px] left-[5%] bg-[#bbbbbc] p-1 rounded-md flex justify-center items-center">
          <p>{rating}</p>
          <p>
            <AiFillStar className="text-yellow-400" />
          </p>
        </div>
      </div>

      <div className="w-[100%]  bottom-0">
        <h5 className="text-white text-xl uppercase">
          {title?.substring(0, 13)}
        </h5>
        <p className="text-[#ffffffa9]">{release}</p>
      </div>
    </div>
  );
}

export default Card;
