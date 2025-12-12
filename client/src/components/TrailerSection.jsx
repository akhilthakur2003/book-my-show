import React, { useState } from "react";
import { dummyTrailers } from "../assets/assets";

const TrailerSection = () => {
  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0]);

  // Convert watch URL to embed format
  const getEmbedUrl = (url) => {
    return url.replace("watch?v=", "embed/");
  };

  return (
    <div className="flex flex-col items-center gap-8 py-10">

      {/* Section Title */}
      <p className="text-2xl font-semibold text-white">Trailers</p>

      {/* Selected Trailer Video */}
      <div className="w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-xl">
        <iframe
          src={getEmbedUrl(currentTrailer.videoUrl)}
          title="Movie Trailer"
          className="w-full h-full"
          allowFullScreen
        />
      </div>

      {/* Thumbnail List */}
      <div className="flex gap-4 flex-wrap justify-center">
        {dummyTrailers.map((trailer, index) => (
          <div
            key={index}
            onClick={() => setCurrentTrailer(trailer)}
            className={`cursor-pointer border-2 rounded-lg overflow-hidden transition 
              ${currentTrailer.videoUrl === trailer.videoUrl ? "border-red-500" : "border-transparent"}`}
          >
            <img
              src={trailer.image}
              alt="Trailer Thumbnail"
              className="w-32 h-20 object-cover hover:opacity-80 duration-200"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrailerSection;
