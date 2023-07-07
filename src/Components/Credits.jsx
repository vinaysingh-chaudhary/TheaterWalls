import React from "react";
import useFetch from "../Hooks/useFetch";

function Credits({ id, mediaType }) {
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );

  const directors = credits?.crew?.filter((mem) => mem?.job === "Director");
  const writers = credits?.crew?.filter((mem) => mem?.job === "Writer");

  return (
    <div className="w-[100%] h-[100%] flex flex-col justify-center gap-2 items-center pl-2 pr-2">
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
    </div>
  );
}

export default Credits;
