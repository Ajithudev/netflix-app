import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../../utils/moviesSlice";
import { useEffect } from "react";
import { TMDB_API_OPTIONS } from "../../utils/constants";

const useMovieTrailer = (movieId) => {
  const dispath = useDispatch();
  const getMovieVideoDetails = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      TMDB_API_OPTIONS
    );
    const json = await data.json();
    const filterData = json.results.filter((video) => video.type == "Trailer");
    const trailer = filterData.length ? filterData[1] : json.results[0];
    dispath(addTrailerVideo(trailer));
  };
  useEffect(() => {
    getMovieVideoDetails();
  }, []);
};

export default useMovieTrailer;
