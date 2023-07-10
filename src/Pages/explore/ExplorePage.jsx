import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { MdMovie } from "react-icons/md";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect } from "react";
import { fetchApi } from "../../API_Service/api";
import useFetch from "../../Hooks/useFetch";
import SearchQueryCard from "../../Components/SearchQueryCard";
import Select from "react-select";

const ExplorePage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [pageNum, setPageNum] = useState(1);

  let filter = {};

  const [genre, setGenre] = useState(null);

  const { mediaType } = useParams();

  const { data: exploreGenres } = useFetch(`/genre/${mediaType}/list`);

  useEffect(() => {
    setData(null);
    setGenre(null);
    filter = {};
    fetchInititalData();
    setPageNum(1);
  }, [mediaType]);

  const fetchInititalData = () => {
    setLoading(true);
    fetchApi(`/discover/${mediaType}`, filter).then((response) => {
      setData(response);
      setPageNum((previous) => previous + 1);
      setLoading(false);
    });
  };

  const fetchNextData = () => {
    setLoading(true);
    fetchApi(`/discover/${mediaType}?page=${pageNum}`, filter).then(
      (response) => {
        if (response?.results) {
          setData({
            ...data,
            results: [...data?.results, ...response?.results],
          });
        } else {
          setData(response);
        }
        setPageNum((previous) => previous + 1);
        setLoading(false);
      }
    );
  };

  const dataLength = data?.results.length;
  
  const { imgUrl } = useSelector((state) => state.homeSlice);

  const onChangeHandler = (selectedOption, action) => {
    if (action.name === "Genre") {
      setGenre(selectedOption);
      if (action.action !== "clear") {
        let genreID = selectedOption.map((genre) => genre.id);
        genreID = JSON.stringify(genreID).slice(1, -1);
        filter.with_genres = genreID;
      } else {
        delete filter.with_genres;
      }
    }
    setPageNum(1);
    fetchInititalData();
  };

  return (
    <div className="w-[100%] h-[100%] flex flex-col items-center">
      <div className="w-[100%] h-[10vh] flex flex-col justify-evenly items-center md:w-[60%]">
        <Select
          className=" w-[90%] react-select-container sortbyDD "
          isMulti
          name="Genre"
          value={genre}
          options={exploreGenres?.genres}
          getOptionLabel={(option) => option.name}
          getOptionValue={(option) => option.id}
          placeholder="Genres"
          classNamePrefix="react-select"
          onChange={onChangeHandler}
          closeMenuOnSelect={false}
        />
      </div>

      {loading ? (
        <div className="w-[100%] h-[100vh] bg-black flex justify-center items-center ">
          <div className="flex justify-center items-center gap-3 pb-8 bg-black">
            <div className="w-[100%] min-h-[100%] flex justify-center items-center text-white text-4xl">
              Theater <span className="text-pink-500">Walls</span>
            </div>
            <div className="w-[100%] min-h-[100%] flex justify-center items-center text-white text-4xl">
              <MdMovie />
            </div>
          </div>
        </div>
      ) : (
        <InfiniteScroll
          next={fetchNextData}
          dataLength={dataLength || []}
          hasMore={pageNum <= data?.total_pages}
          className="w-[100%] min-h-[100vh] flex flex-row flex-wrap justify-evenly gap-y-6 overflow-y-auto  pt-2 sm:gap-y-4 sm:justify-center sm:gap-x-4 bg-black"
        >
          {data?.results?.map((item, index) => {
            return (
              <SearchQueryCard
                data={item}
                key={index}
                poster={`${imgUrl?.poster}${
                  item?.poster_path ? item?.poster_path : item?.profile_path
                }`}
                mediaType={item?.media_type}
                manualMedia={mediaType}
                id={item?.id}
                title={item?.original_name || item?.original_title}
                rating={item?.vote_average?.toFixed(1)}
                loading={loading}
              />
            );
          })}
        </InfiniteScroll>
      )}
    </div>
  );
};

export default ExplorePage;
