import React from "react";
import useFetch from "../Hooks/useFetch";
import { useSelector } from "react-redux";
import CastCard from "./CastCard";

function CastContainer({ id, mediaType }) {
  const { imgUrl } = useSelector((state) => state.homeSlice);

  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );

  return (
    <div className="w-[100%] h-[100%] flex gap-4  overflow-x-scroll border-2 border-red-500">
      {credits?.cast?.map((mem, index) => {
        return (
          <CastCard
            key={index}
            profilePic={`${imgUrl?.profile}${mem?.profile_path}`}
            character={mem?.character}
          />
        );
      })}
    </div>
  );
}

export default CastContainer;
