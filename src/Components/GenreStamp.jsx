import React from 'react'
import { useSelector } from 'react-redux';

function GenreStamp({genre}) {

  // console.log(genre);
  const genreData = useSelector((state) => state.homeSlice.genres)
//   console.log(data);

  return (
    <div >
      {genre?.map((gen) => {

        // for safe case
        if(!genreData[gen]?.name) return;

          return (
            <p key={gen}>
                {genreData[gen]?.name}
            </p> 
          )
      })}
    </div>
  )
}

export default GenreStamp
