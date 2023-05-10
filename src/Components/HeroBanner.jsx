import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import { useSelector } from "react-redux";
import LazyLoader from "./LazyLoader";

const HeroBanner = () => {
  const [heroBnrBg, setHeroBnrBg] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const { data, loading } = useFetch("/movie/upcoming");
  const imgBnrUrl = useSelector((state) => state.homeSlice.imgUrl.backdrop);

  useEffect(() => {
    const backGround =
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setHeroBnrBg(imgBnrUrl + backGround);
  }, [data]);

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && searchQuery.length > 0) {
      navigate(`/search/${searchQuery}`);
    }
  };

  // console.log(heroBnrBg);

  return (
    <div className=" relative">
      <div> {!loading && <LazyLoader image={heroBnrBg}/>} </div>

    <div>
      <div className="absolute top-0">
        <h1>TheaterWalls</h1>
      </div>

      <div className="absolute bottom-0">
        <input
          type="text"
          placeholder="Search here..."
          className="border-[1.5px] border-black"
          onKeyUp={searchQueryHandler}
          onChange={(event) => setSearchQuery(event.target.value)}
        />

        <button>Search</button>
      </div>
      </div>
    </div>
  );
};

export default HeroBanner;
