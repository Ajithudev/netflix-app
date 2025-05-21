import VideoTitle from "./VideoTitle";
import VideoBackgroud from "./VideoBackgroud";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector(store => store.movies?.nowPlayingMovies);  
  if(!movies) return;
  const mainMovie = movies[0];
  const {id, original_title, overview} = mainMovie; 
  return (
    <div className="pt-[30%] bg-black md:pt-0">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackgroud movieId ={id} />
    </div>
  );
};

export default MainContainer;
