import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../../utils/moviesSlice";
import { useEffect } from "react";
import { TMDB_API_OPTIONS } from "../../utils/constants";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movies.popularMovies);
  const getPopularMivies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      TMDB_API_OPTIONS
    );
    const json = await data.json();
    // console.log("Popular", json.results);
    dispatch(addPopularMovies(json.results));
  };
  useEffect(() => {
    !popularMovies && getPopularMivies();
  }, []);
};

export default usePopularMovies;
