import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import { useSelector } from "react-redux";
import { BsSearch } from "react-icons/bs";
import HeroBannerImg from '../../public/HeroBannerImg.jpg'

const HeroBanner = () => {
  const [heroBnrBg, setHeroBnrBg] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const { data, loading } = useFetch("/movie/upcoming");
  const imgBnrUrl = useSelector((state) => state.homeSlice.imgUrl.backdrop);

  useEffect(() => {
    const backGround =
      data?.results?.[Math.ceil(Math.random() * 20)]?.backdrop_path;
    setHeroBnrBg(`${imgBnrUrl}${backGround}`);
  }, [data]);

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && searchQuery?.length > 0) {
      navigate(`/search/${searchQuery}`);
    }
  };

  const onSearchPress = () => {
    if (searchQuery?.length > 0) {
      navigate(`/search/${searchQuery}`);
    } else {
      return;
    }
  };

  return (
    <div className=" relative w-full h-[25%] md:h-[35%] xl:h-[40%] 2xl:h-[30%] bg-black">
      <div className="w-full h-full bg-black">
        {!loading && (
          <img src={heroBnrBg === "https://image.tmdb.org/t/p/originalundefined" ? HeroBannerImg : heroBnrBg} className="w-[100%] h-[100%] object-cover" alt="Banner Image"/>
        )}
      </div>

      <div className="absolute top-0 w-full h-[102%] bg-gradient-to-b from-[#00000024] to-[#000000]"></div>

      <div>
        <div className="w-[70%] h-[21%]  md:w-[50%] md:h-[17%] xl:w-[40%] xl:h-[20%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-between rounded-md p-1 bg-[#17171750]">
          <input
            type="text"
            placeholder="Search here..."
            className="rounded-md pl-4 focus:outline-black w-[80%] text-pink-400"
            onKeyUp={searchQueryHandler}
            onChange={(event) => setSearchQuery(event.target.value)}
          />

          <button
            className="rounded-md bg-white text-black w-[18%] flex justify-center items-center"
            onClick={onSearchPress}
          >
            <BsSearch className="text-pink-500"/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
