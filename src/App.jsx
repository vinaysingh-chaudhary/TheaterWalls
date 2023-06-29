import { useEffect } from "react"
import { fetchApi } from "./API_Service/api"
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route, BrowserRouter, useParams } from "react-router-dom";
import { getAPIConfiguration, genresAPICall } from "./Redux/Slices/HomePageSlice";
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
    callForGenre();
  },[]);


const fetchConfiguration = ( ) => {
  fetchApi("/configuration")
  .then((res) => {

    const imagesUrl = {
        backdrop : res.images.secure_base_url + "original",
        //here original is the size of the image
        poster : res.images.secure_base_url + "original",
        profile : res.images.secure_base_url+ "original",
    }

    dispatch(getAPIConfiguration(imagesUrl));
  })
}



const callForGenre = async () => {
  let genreArr = [];
  let genreCategory = [ "tv", "movie"];
  let allGenre = {}

  genreCategory.forEach((url) => {
    genreArr.push(fetchApi(`/genre/${url}/list`))
  })

  const data = await Promise.all(genreArr);

  data.map(({genres})=> {
    //see here genres get destructured first 
    return genres.map((item) => (allGenre[item.id] = item))
  })

  dispatch(genresAPICall(allGenre));
}

// const {genres} = useSelector((state) => state.homeSlice)
// console.log(genres)


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
