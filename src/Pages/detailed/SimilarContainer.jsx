import useFetch from "../../Hooks/useFetch";
import Card from "../../Components/Card";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

function SimilarContainer({ mediaType, id }) {
  const { data, loading } = useFetch(`/${mediaType}/${id}/similar`);
  const navigate = useNavigate();
  const { imgUrl } = useSelector((state) => state.homeSlice);
  const backdrop = imgUrl?.backdrop;

  const detailNavigation = (mediaType, id) => {
    navigate(`/${mediaType}/${id}`);
  };

  return (
    <div className="w-[100%] h-[100%] overflow-x-auto flex flex-row items-center gap-3">
      {data?.results.map((item) => {
        return (
          <Card
            key={item?.id}
            img={`${backdrop}${item.backdrop_path}`}
            id={item.id}
            media={mediaType}
            title={
              item.original_title ? item.original_title : item.original_name
            }
            rating={item.vote_average.toFixed(1)}
            release={
              item.release_date
                ? dayjs(item.release_date).format("MMM D, YYYY")
                : dayjs(item.first_air_date).format("MMM D, YYYY")
            }
            genre={item.genre_ids}
            naviFunc={detailNavigation}
          />
        );
      })}
    </div>
  );
}

export default SimilarContainer;
