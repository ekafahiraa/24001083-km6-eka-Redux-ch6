import axios from "axios";
import { setDetailMovie } from "../reducers/detailReducers";

const API_KEY = "af37b503324b91c3940d26917c0251fc";

export const detailMovie = (movieId) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US&api_key=${API_KEY}`,
      { headers: { accept: "application/json" } }
    );
    dispatch(setDetailMovie(response.data)); // Detail film ke Reducers
    console.log("response", response);
  } catch (error) {
    console.error("Error fetching movie detail: ", error);
  }
};
