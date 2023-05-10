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
import Navbar from './Components/Navbar'


function App() {

  
  const dispatch = useDispatch();
  const {imgUrl} = useSelector((state)=> state.homeSlice);
  
  

  useEffect(() => {
    fetchConfiguration();
  },[]);

const fetchConfiguration = ( ) => {
  fetchApi("/configuration")
  .then((res) => {

    const imagesUrl = {
        backdrop : res.images.secure_base_url + "original",
        poster : res.images.secure_base_url + "original",
        profile : res.images.secure_base_url+ "original",
    }

    dispatch(getAPIConfiguration(imagesUrl));
  })
}

// console.log(imgUrl);

  return (
    <>
    <Navbar/>
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
