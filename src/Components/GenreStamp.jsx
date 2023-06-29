import React from "react";
import { useSelector } from "react-redux";

function GenreStamp({ genre }) {
  const genreData = useSelector((state) => state.homeSlice.genres);

  return (
    <div>
      {genre?.map((gen) => {
        // for safe case
        if (!genreData[gen]?.name) return;

        return <p key={gen}>{genreData[gen]?.name}</p>;
      })}
    </div>
  );
}

export default GenreStamp;
