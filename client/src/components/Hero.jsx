import React from "react";
import { assets, dummyShowsData } from "../assets/assets";
import {runtimeFormat} from "../lib/runtimeFormat";
import { extractYear } from "../lib/extractYear";
import { ClockIcon, CalendarIcon, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";


const Hero = () => {
  const movie = dummyShowsData[0]; // first movie
  const genres = movie.genres;
  
    const navigate=useNavigate();

  return (

    <div
      className=' flex flex-col items-start justify-center gap-4 px-6 md:px-16 lg:px-36 bg-[url("/backgroundImage.png")]
        bg-cover bg-center h-screen' >
      {/* Gradient Overlay
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div> */}

        {/* Marvel Logo */}
        <img
          src={assets.marvelLogo}
          alt="Marvel Logo"
          className="max-h-11 lg:h-11 mt-20"
        />

        {/* Title */}
        <h1 className="text-5xl md:text-[70px] md:leading-18 font-semibold max-w-110">
          Guardians <br /> of the Galaxy
        </h1>

        {/* Genre + year + duration */}
        <div className="flex items-center gap-4 text-gray-300">
          {genres.map((g, i) => (
            <span key={i}>
              {g.name}{i < genres.length - 1 && " | "}
            </span>
          ))}
          {/* Year */}
          <div className="flex items-center gap-1 ">
            <CalendarIcon className='w-4.5 h-4.5'/>
            {extractYear(movie.release_date)}
            </div>

          {/* Duration */}
          <div className="flex items-center gap-1">
            <ClockIcon className='w-4.5 h-4.5'/>
            {runtimeFormat(movie.runtime)}
            </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 max-w-md">
          {movie.overview}
        </p>

        {/* Button */}
        <button onClick={()=> navigate("/movies")}
          className="
           flex items-center gap-1 px-6 py-6 text-xs bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer
          "
        >
          Explore Movies <ArrowRight className=" w-5 h-5"/>     
        </button>
    </div>
  );
};

export default Hero;
