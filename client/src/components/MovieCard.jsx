import React from "react";
import { extractYear } from "../lib/extractYear";
import { runtimeFormat } from "../lib/runtimeFormat"; // assuming this exists
import { useNavigate } from "react-router-dom";
import { StarIcon } from "lucide-react";

const MovieCard = ({ movie }) => {
  const { id, poster_path, backdrop_path, title, release_date, runtime, genres, vote_average } = movie;
  const navigate=useNavigate();

  return (
    <div className="flex flex-col justify-between p-3 bg-gray-800 rounded-2xl hover:-translate-y-1 transition duration-300 w-66">
      
      {/* Poster */}
      <img
        onClick={()=> {navigate(`/movies/${id}`); scrollTo(0,0)}}
        src={backdrop_path}
        alt={title}
        className="rounded-lg h-52 w-full object-cover object-right-bottom cursor-pointer"
      />
        <p className="font-semibold text-base line-clamp-1">{title}</p>

        {/* Year + Genres + Runtime */}
        <div className="text-xs text-gray-300 mt-1 flex flex-wrap gap-1">
          {/* Year */}
          <span>{extractYear(release_date)}</span>

          {/* Divider */}
          <span>|</span>

          {/* Genres */}
          <span className="line-clamp-1">
            {genres.map((g, i) => (
              <span key={i}>
                {g.name}
                {i < genres.length - 1 && ", "}
              </span>
            ))}
          </span>

          {/* Divider */}
          <span>|</span>

          {/* Runtime */}
          <span>{runtimeFormat(runtime)}</span>
        </div>
        <div className="flex justify-between items-center mt-4 pb-3">
            <button
            onClick={()=>{
                navigate(`/movies/${id}`); scrollTo(0,0)
            }}
            className="px-4 py-2 text-xs bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer"
          >
            Buy Tickets
          </button>
            <p className="flex items-center gap-1 text-sm text-gray-400 mt-1 pr-1">
                <StarIcon className="w-4 h-4 text-primary fill-primary"/>
                {
                    vote_average.toFixed(1)
                }
            </p>
        </div>

    </div>
  );
};

export default MovieCard;
