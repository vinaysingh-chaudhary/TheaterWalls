import React from "react";
import useFetch from "../Hooks/useFetch";

function Credits({ id, mediaType }) {
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );

  const directors = credits?.crew?.filter((mem) => mem?.job === "Director");
  const writers = credits?.crew?.filter((mem) => mem?.job === "Writer");

  return (

    <div className="w-full h-full">
      {
        directors 
        ? (<div className="w-full h-full flex flex-col justify-center items-center gap-2 pl-2 pr-2 sm:pl-5">
        {directors?.length > 0 && (
          <p className="text-white">
            {" "}
            <span className="text-2xl">Directors : </span>{" "}
            {`${directors?.map((n) => n?.name)},`}
          </p>
        )}
  
        {writers?.length > 0 && (
          <p className="text-white">
            <span className="text-2xl">Writers : </span> :{" "}
            {`${writers?.map((n) => n?.name)},`}
          </p>
        )}
      </div>)

      : (
        <div className="h-[0vh]"></div>
      )
      }
    </div>
  )
}

export default Credits;
