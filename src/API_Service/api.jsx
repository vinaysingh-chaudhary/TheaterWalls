import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OTBkMjA5OWJhYmRhNWY1YzE0YjM2NDk2NjE1MTU5OCIsInN1YiI6IjY0NThkOGE2NmFhOGUwMDEzOWJiNGI0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0L18VdmSKi_YohX-MRubbAf1LrsQVuRUU3ZJGc1QQNg";

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, { headers, params });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
