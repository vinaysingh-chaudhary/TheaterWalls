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
    <div className="w-[100%] h-[100%] flex gap-4 overflow-x-scroll pl-2 items-center scrollbar-hide">
      {credits?.cast?.length > 0 ? (
        credits?.cast?.map((mem, index) => {
          return (
            <CastCard
              key={index}
              profilePic={`${imgUrl?.profile}${mem?.profile_path}`}
              name={mem?.name}
              character={mem.character}
            />
          );
        })
      ) : (
        <p className="text-white text-2xl text-center w-[100%]">
          No Cast Data found
        </p>
      )}
    </div>
  );
}

export default CastContainer;
