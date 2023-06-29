import React from 'react'
import useFetch from '../../Hooks/useFetch'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import GenreStamp from '../../Components/GenreStamp';
import CircleRating from '../../Components/CircularRating';
import dayjs from 'dayjs';
import Credits from '../../Components/Credits';
import CastContainer from '../../Components/CastContainer';



const DetailedPage = () => {


  
  const {imgUrl} = useSelector((state) => state.homeSlice)
  const backdrop = imgUrl?.backdrop;


  const {id} = useParams();
  const{mediaType} = useParams();


  const {data} = useFetch(`/${mediaType}/${id}`)


  // console.log(data)


  const genresId = data?.genres?.map((genre) => genre.id)


  return (
    <div className='w-[100%] h-[auto] border-2 border-red-900 flex flex-col items-center'>
      <div className='w-[90%] h-[45vh] border-2 border-red-900 mt-8'>
          <img className='w-[100%] h-[100%] object-cover' src={`${backdrop}${data?.backdrop_path}`} alt="" />
      </div>

      <div>
        <h1>{data?.original_title ? `${data?.original_title}` : `${data?.original_name}`}</h1>
        <p>{data?.tagline}</p>
      </div>
      
      <div>
          <GenreStamp genre={genresId} />
      </div>

      <div className='w-[20%]'>
          <CircleRating rating={data?.vote_average.toFixed(1)} />
      </div>

      <div>
        <h3>Overview</h3>
        <p>{data?.overview}</p>
      </div>



      <div className=' w-[100%] flex flex-row justify-between items-center'>
        <div>
          <p>Release date</p>
          <p>{data?.release_date ?dayjs( data?.release_date).format("MMM D, YYYY") : dayjs(data?.first_air_date).format("MMM D, YYYY")}</p>
        </div>

        <div>
          <p>Status</p>
          <p>{data?.release_date? "Released" : data?.status}</p>
        </div>


        <div>
          <p>{data?.runtime? "Duration" : "Seasons"}</p>
          {/* <p>{`${data?.runtime}mins`}</p> */}
          <p>{data?.runtime? `${data?.runtime}mins` : `${data?.seasons.length} Seasons`}</p>
        </div>

      </div>

      <div className='w-[100%] h-[20vh] text-red text-lg'>
        <Credits id={id} mediaType={mediaType} />
      </div>

      <div className='w-[100%] h-[20vh]'>
        <CastContainer id={id} mediaType={mediaType} />
      </div>
    </div>
  )
}

export default DetailedPage
