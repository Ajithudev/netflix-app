import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-36 px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="font-bold text-3xl">{title}</h1>
      <p className="py-4 w-1/2">{overview}</p>
      <div>
        <button className="bg-white text-black p-2 px-4 rounded-lg hover:bg-opacity-8 0">▶️ Play</button>
        <button className="mx-2 bg-gray-500 text-white p-2 px-4  bg-opacity-50 rounded-lg">More info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
