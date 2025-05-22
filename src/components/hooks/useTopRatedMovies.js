import { useDispatch, useSelector } from "react-redux";
import { TMDB_API_OPTIONS } from "../../utils/constants";
import { addTopRatedMovies } from "../../utils/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {

    const dispath = useDispatch();
    const topRatedMovies = useSelector(store => store.movies.topRatedMovies);
    const getTopRatedMovies = async ()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/top_rated",
            TMDB_API_OPTIONS
        );
        const json = await data.json();
        // console.log("Top Rated Movies ",json);
        dispath(addTopRatedMovies(json.results));
    }

    useEffect(()=>{
      !topRatedMovies && getTopRatedMovies();
    },[]);

}


export default useTopRatedMovies;