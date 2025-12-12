import React from "react";
import { dummyShowsData } from "../assets/assets";
import MovieCard from "./MovieCard";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const FeaturedSection = () => {
    const navigate=useNavigate();
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-44 overflow-hidden">
      {/* Header */}
      <div className="relative flex items-center justify-between pt-20 pb-10">
        <p className="text-gray-300 font-medium text-lg">Now Showing</p>
        <button onClick={()=> navigate('/movies')} className="group flex items-center gap-2 text-sm text-gray-300">
          View All
          <ArrowRight className="group-hover:translate-x-0.5 transition w-4.5 h-4.5"/>
        </button>
      </div>

      {/* Movies Grid */}
      <div className="flex justify-center flex-wrap gap-6 px-4">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-4">
        {dummyShowsData.map((movie) => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </div>
      </div>
       <div className="flex justify-center mt-20">
          <button
            onClick={()=>{
                navigate("/movies"); scrollTo(0,0)
            }}
            className="px-6 py-2 text-sm bg-primary hover:bg-primary-dull transition rounded-md font-medium cursor-pointer"
           
          >
            Show More
          </button>
        </div>
    </div>
  );
};

export default FeaturedSection;
