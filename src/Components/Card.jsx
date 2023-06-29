import React from "react";
import CircleRating from "./CircularRating";
import GenreStamp from "./GenreStamp";
import { useSelector } from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Card({ img, id, title, rating, release, genre, naviFunc, media }) {
  return (
    <div
      className="min-w-[150px] h-[90%] border-red-900 border-2 relative"
      onClick={() => naviFunc(media === "movie" ? "movie" : "tv", id)}
    >
      <LazyLoadImage
        className="w-[100%] h-[100%] object-cover"
        src={img}
        alt=""
      />

      <div className=" h-[50%] w-[100%] absolute bottom-0">
        <h5>{title}</h5>
        <p>{release}</p>
      </div>

      <div className="w-[40%] h-[10%] border-2 border-white flex justify-between">
        <CircleRating rating={rating} />
      </div>

      <div className="flex flex-row text-[1rem]">
        <GenreStamp genre={genre} />
      </div>
    </div>
  );
}

export default Card;
