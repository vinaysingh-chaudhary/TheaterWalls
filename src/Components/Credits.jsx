import React from "react";
import useFetch from "../Hooks/useFetch";

function Credits({ id, mediaType }) {
  // const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );

  // const video = data?.results?.[0];

  const directors = credits?.crew.filter((mem) => mem.job === "Director");
  const writers = credits?.crew.filter((mem) => mem.job === "Writer");

  return (
    <div>
      {directors?.length > 0 && (
        <p> Directors : {`${directors?.map((n) => n.name)},`}</p>
      )}

      {writers?.length > 0 && (
        <p>Writers : {`${writers?.map((n) => n.name)},`}</p>
      )}
    </div>
  );
}

export default Credits;
