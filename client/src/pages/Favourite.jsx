import React from "react";
import { dummyShowsData } from "../assets/assets";
import MovieCard from "../components/MovieCard";

const Favourite = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-14">

      {/* Page Title */}
      <h1 className="text-3xl font-semibold text-center mb-10">
        Explore Movies
      </h1>

      {/* Movies List */}
      {dummyShowsData.length > 0 ? (
        <div
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4 
            gap-8 
            justify-items-center
          "
        >
          {dummyShowsData.map((movie) => (
            <MovieCard key={movie._id} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center h-40">
          <p className="text-gray-500 text-lg">No movies available</p>
        </div>
      )}
    </div>
  );
};

export default Favourite;
