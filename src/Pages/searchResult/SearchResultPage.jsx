import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../Hooks/useFetch';

const SearchResultPage = () => {

  const {query} = useParams();
  console.log(query)

  const {data, loading} = useFetch(`/search/${query}`);
  console.log(data)
  return (
    <div>
      
    </div>
  )
}

export default SearchResultPage
