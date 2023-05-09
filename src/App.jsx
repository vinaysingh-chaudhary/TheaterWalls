import { useEffect } from "react"
import { fetchApi } from "./API_Service/api"
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { getAPIConfiguration, genresAPICall } from "./Redux/Slices/HomepageSlice";
import HomePage from "./Pages/HomePage/HomePage";
import SearchResultPage from './Pages/searchResult/SearchResultPage'
import Error404 from './Pages/error404/Error404'
import ExplorePage from './Pages/explore/ExplorePage'
import DetailedPage from './Pages/detailed/DetailedPage'
import Footer from './Components/Footer'
import Header from './Components/Header'


function App() {

  
  const dispatch = useDispatch();
  const {imgUrl} = useSelector((state)=> state.homeSlice);
  
  

  useEffect(() => {
    testapi();
  },[]);

const testapi = ( ) => {
  fetchApi("/discover/movie")
  .then((res) => {
    // console.log(res);
    dispatch(getAPIConfiguration(res));
  })
}

console.log(imgUrl);

  return (
    <>
    {/* <Header/> */}
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/:mediaType/:id" element={<DetailedPage/>}/>
        <Route path="/search/:query" element={<SearchResultPage/>}/>
        <Route path="/explore/:mediaType" element={<ExplorePage/>}/>
        <Route path="*" element={<Error404/>}/>
      </Routes>
      {/* <Footer/> */}
    </>
  )
}

export default App
