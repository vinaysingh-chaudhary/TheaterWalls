import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../Hooks/useFetch'
import Card from '../../Components/Card'
import { useSelector } from 'react-redux'
import dayjs from 'dayjs'

const ExplorePage = () => {

    const {mediaType} = useParams()
    console.log(mediaType)

    const {data, loading} = useFetch(`/discover/${mediaType}`)
    console.log(data);

    const {imgUrl} = useSelector((state)=> state.homeSlice)
    const backdrop = imgUrl.backdrop;

  return (
    <div>
      <div>
        genre selection
      </div>

      <div>
        {data?.results?.map((item) => {
          return <Card 
          key={item.id}
              img={`${backdrop}${item.poster_path
              }`}
              id={item.id}
              media={item.media_type}
              title={
                item.original_title ? item.original_title : item.name
              }
              rating={item.vote_average.toFixed(1)}
              release={
                item.release_date
                  ? dayjs(item.release_date).format("MMM D, YYYY")
                  : dayjs(item.first_air_date).format("MMM D, YYYY")
              }
              genre={item.genre_ids}
          />
        })}
      </div>

    </div>
  )
}

export default ExplorePage
