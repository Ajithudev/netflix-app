import { useDispatch, useSelector } from "react-redux";
import { TMDB_API_OPTIONS } from "../../utils/constants";
import { addUpComingMovies } from "../../utils/moviesSlice";
import { useEffect } from "react";

const useUpComingMovies = () => {
  const dispatch = useDispatch();
  const upComingMovies = useSelector((store) => store.movies.upComingMovies);
  const getUpComingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      TMDB_API_OPTIONS
    );
    const json = await data.json();
    console.log("UpComing Movies", json.results);
    dispatch(addUpComingMovies(json.results));
  };

  useEffect(() => {
    !upComingMovies && getUpComingMovies();
  }, []);
};

export default useUpComingMovies;
