import {axios} from 'axios';
const KEY = "dace3ba60ee82f0a15c6bb8af3a62e30";
axios.defaults.baseURL = "https://api.themoviedb.org/3/trending/movie/day";

export async function fetchMovies() {
  const response = await axios("movies", {
    params: {
      apikey: KEY,
      size: 20,
    },
  });
   console.log(response.data)
  return response.data;
 
}

