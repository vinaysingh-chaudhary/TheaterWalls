import React from "react";
import { useSelector } from "react-redux";

function GenreStamp({ genre }) {
  const genreData = useSelector((state) => state.homeSlice.genres);

  return (
    <div className="w-[100%] h-[100%] flex gap-2 flex-wrap ">
      {genre?.map((gen) => {
        // for safe case
        if (!genreData[gen]?.name) return;

        return (
          <div
            className=" w-fit border-[0.5px] border-pink-400  text-pink-500 text-[1rem] px-1 rounded-md flex justify-center items-center"
            key={gen}
          >
            {genreData[gen]?.name}
          </div>
        );
      })}
    </div>
  );
}

export default GenreStamp;
