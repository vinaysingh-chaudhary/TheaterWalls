import { Suspense, useEffect } from "react";
import { fetchApi } from "./API_Service/api";
import { useDispatch } from "react-redux";
import { Routes, Route,} from "react-router-dom";
import {getAPIConfiguration,genresAPICall,} from "./Redux/Slices/HomePageSlice";
import HomePage from "./Pages/homePage/HomePage";
import Navbar from "./Components/Navbar";
import LoadingScreen from "./Components/LoadingScreen";

import {lazy} from 'react'

const SearchResultPage = lazy(() => import("./Pages/searchResult/SearchResultPage"));
const ExplorePage = lazy(() => import("./Pages/explore/ExplorePage"));
const DetailedPage = lazy(() => import( "./Pages/detailed/DetailedPage"));
const Error404 = lazy(() => import("./Pages/error404/Error404"))

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchConfiguration = async () => {
      try {
        const res = await fetchApi("/configuration");
        const { secure_base_url } = res?.images;

        const imageTypes = ['backdrop', 'poster', 'profile'];
        const imagesUrl = imageTypes?.reduce((acc, type) => {
          acc[type] = secure_base_url + 'original';
          return acc;
        }, {});

        dispatch(getAPIConfiguration(imagesUrl));
      } catch (error) {
        console.error("Error fetching configuration:", error);
      }
    };
  

    const callForGenre = async () => {
      try {
        const fetchGenreData = async (category) => {
          return await fetchApi(`/genre/${category}/list`);
        };
        
        const genreCategory = ["tv", "movie"];
        const data = await Promise.all(genreCategory?.map(fetchGenreData));
       
        const allGenre = {};

        data?.forEach(({ genres }) => {
          genres?.forEach((item) => {
            allGenre[item?.id] = item;
          });
        });

        dispatch(genresAPICall(allGenre));
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };
  
    fetchConfiguration();
    callForGenre();
  }, []);


  return (
    <div className="w-=[100vw] h-[100vh] bg-[#000000]">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:mediaType/:id" element={<Suspense fallback={<LoadingScreen/>}><DetailedPage /></Suspense>} />
        <Route path="/search/:query" element={<Suspense fallback={<LoadingScreen/>}><SearchResultPage /></Suspense>} />
        <Route path="/explore/:mediaType" element={<Suspense fallback={<LoadingScreen/>}><ExplorePage /></Suspense>} />
        <Route path="*" element={<Suspense fallback={<LoadingScreen/>}><Error404 /></Suspense>} />
      </Routes>
      
    </div>
  );
}

export default App;
