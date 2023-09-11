import React, { useState } from "react";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchApi } from "../../API_Service/api";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import SearchQueryCard from "../../Components/SearchQueryCard";


const SearchResultPage = () => {

  const [loading, setLoading] = useState(false);
  const [pageNum, setPageNum] = useState(1);
  const [data, setData] = useState(null);

  const { query } = useParams();

  const { imgUrl } = useSelector((state) => state.homeSlice);

  useEffect(() => {
    setPageNum(1)
    fetchInititalData();
  }, [query]);

  const fetchInititalData = () => {
    setLoading(true);
    fetchApi(`/search/multi?query=${query}&page=${pageNum}`).then(
      (response) => {
        setData(response);
        setPageNum((previous) => previous + 1);
        setLoading(false);
      }
    );
  };

  const fectNextScroll = () => {
    fetchApi(`/search/multi?query=${query}&page=${pageNum}`).then(
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
      }
    );
  };

  const dataLength = data?.results.length;
  return (
    <div className="w-full h-full bg-black">
      <p className="text-[#ffffff4c] text-xl text-center  mb-2">Your search results of <span className="text-white">"{query}"</span></p>
      {loading ? (
        <div className="w-full h-full flex justify-center items-center bg-black ">
          <span className="text-white text-6xl w-full h-full bg-black flex justify-center items-center">
            loading
          </span>
        </div>
      ) : (
        <div className="flex flex-wrap w-full items-center justify-center">
          {data?.results.length > 0 ? (
            <InfiniteScroll
              dataLength={dataLength || []}
              className="w-full h-full flex flex-row flex-wrap justify-evenly gap-y-4 overflow-y-auto  pt-2 sm:gap-y-4 sm:justify-center sm:gap-x-4 bg-black"
              next={fectNextScroll}
              hasMore={pageNum <= data?.total_pages}
            >
              {data?.results?.map((item, index) => {
                if (data.media_type === "person") return;
                return (
                  <SearchQueryCard
                    data={item}
                    key={index}
                    poster={`${imgUrl?.poster}${
                      item?.poster_path ? item?.poster_path : item?.profile_path
                    }`}
                    mediaType={item?.media_type}
                    id={item?.id}
                    title={item?.original_name || item?.original_title}
                    rating={item?.vote_average?.toFixed(2)}
                  />
                );
              })}
            </InfiniteScroll>
          ) : (
            <div className="text-white w-full h-[25vh] flex justify-center items-center text-3xl">
              No Results
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchResultPage;
