import useFetch from "../../Hooks/useFetch";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import GenreStamp from "../../Components/GenreStamp";
import dayjs from "dayjs";
import Credits from "../../Components/Credits";
import CastContainer from "../../Components/CastContainer";
import { AiFillStar } from "react-icons/ai";
import Noposter from '../../../public/Noposter.png'

const DetailedPage = () => {
  const { imgUrl } = useSelector((state) => state.homeSlice);
  const backdrop = imgUrl?.backdrop;
  const { id } = useParams();
  const { mediaType } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}`);
  const genresId = data?.genres?.map((genre) => genre.id);
  const backdropImg = `${backdrop}${
    data?.poster_path ? data?.poster_path : data?.backdrop_path
  }`

  return (
    <div className="w-[100%] h-[auto] flex flex-col items-center bg-black ">
      <div className="w-[100%] h-[70vh] relative md:h-[80vh]">
        <img
          className="w-[100%] h-[100%] object-cover md:object-top 2xl:object-center "
          src={backdropImg ===  "https://image.tmdb.org/t/p/originalnull" ?  Noposter : backdropImg  }
          alt=""
        />

        <div className="w-[100%] h-[100%] absolute bottom-[-5px] bg-gradient-to-t from-[black] to-[#ffffff00]"></div>

        <div className=" absolute bottom-[7%]  z-[10000] w-[100%] flex flex-col gap-3 md:flex md:justify-center md:items-center  sm:pl-4 ">
          <h1 className="text-white text-5xl pl-2 pr-1">
            {data?.original_title
              ? `${data?.original_title}`
              : `${data?.original_name}`}
          </h1>
          <p className="text-[#ffffff96] pl-2 text-lg">{data?.tagline}</p>
        </div>

        <div className="w-[15%] h-[30px] absolute top-3 right-2 bg-[#00000082] rounded-lg flex justify-center items-center backdrop-blur-sm md:w-[8%] 2xl:w-[5%]">
          <p className="text-white flex justify-center items-center gap-2 text-lg pl-2 pr-2">
            {data?.vote_average?.toFixed(1)} <AiFillStar />
          </p>
        </div>
      </div>

      <div className=" z-[12000] mt-[-20px] ">
        <GenreStamp genre={genresId} />
      </div>

      <div className="mt-4 pl-2 md:w-[80%] sm:w-[80%]">
        <p className="text-white text-xl pr-2 text-center">{data?.overview}</p>
      </div>

      <div className=" w-[100%] flex flex-col justify-around items-center mt-6">
        <div className="w-[95%] flex justify-between items-center gap-3 px-3 border-b-2 border-[#ffffff48] ">
          <p className="text-[#ffffff86]  text-2xl">Release date</p>
          <p className="text-[#ffffff86] ">
            {data?.release_date
              ? dayjs(data?.release_date).format("MMM D, YYYY")
              : dayjs(data?.first_air_date).format("MMM D, YYYY")}
          </p>
        </div>

        <div className="w-[95%] flex justify-between items-center gap-3 px-3 border-b-2 border-[#ffffff48]">
          <p className="text-[#ffffff86] text-2xl">Status</p>
          <p className="text-[#ffffff86] ">
            {data?.release_date ? "Released" : data?.status}
          </p>
        </div>

        <div className="w-[95%]  flex justify-between items-center gap-3 px-3 border-b-2 border-[#ffffff48]">
          <p className="text-[#ffffff86]  text-2xl">
            {data?.runtime ? "Duration" : "Seasons"}
          </p>
          <p className="text-[#ffffff86] ">
            {data?.runtime
              ? `${data?.runtime}mins`
              : `${
                  data?.number_of_seasons
                    ? data?.number_of_seasons
                    : data?.seasons
                } Seasons`}
          </p>
        </div>
      </div>

      <div className="w-[100%] h-[20vh] text-red text-lg">
        <Credits id={id} mediaType={mediaType} />
      </div>

      <div className="w-[100%] h-[35vh] flex flex-col gap-4 items-center sm:h-[35vh] md:h-[30vh] xl:h-[34vh] ">
        <p className=" w-full text-3xl text-white text-center">Cast </p>
        <CastContainer id={id} mediaType={mediaType} />
      </div>
    </div>
  );
};

export default DetailedPage;
