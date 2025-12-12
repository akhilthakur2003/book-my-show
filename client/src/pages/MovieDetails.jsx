import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { dummyShowsData, dummyDateTimeData, dummyTrailers } from "../assets/assets";
import { StarIcon, Heart, PlayCircleIcon } from "lucide-react";
import { extractYear } from "../lib/extractYear";
import { runtimeFormat } from "../lib/runtimeFormat";
import toast from "react-hot-toast";
import DateSelect from "../components/DateSelect";
import MovieCard from "../components/MovieCard";
import Loading from "../components/Loading";



const MovieDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const navigate=useNavigate();

  useEffect(() => {
    const movie = dummyShowsData.find(
      (m) => String(m._id) === String(id)
    );

    if (movie) {
      setShow({
        movie,
        dateTime: dummyDateTimeData,
      });
    }
  }, [id]);

  // Loading state
  if (!show)
    return <Loading/>

  const movie = show.movie;

  const showTrailer = () => {
    // there is no date to match the trailer for a particular id
  }

  // ⭐ Add to Favourites Function
  const addToFavourites = () => {
    let favList = JSON.parse(localStorage.getItem("favourites")) || [];

    // Check if movie already exists
    const exists = favList.some((item) => item._id === movie._id);

    if (exists) {
      toast("Already in your favourites ❤️");
      return;
    }

    favList.push(movie);
    localStorage.setItem("favourites", JSON.stringify(favList));
    toast.success("Added to favourites ❤️");
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-5 py-28 text-white">

      {/* Top Section */}
      <div className="flex flex-col md:flex-row gap-10">

        {/* Poster */}
        <img
          src={movie.poster_path}
          alt={movie.title}
          className="w-72 rounded-xl shadow-xl"
        />

        {/* Movie Info */}
        <div className="flex-1 space-y-4">
          <p className="text-primary">English</p>
          <h1 className="text-4xl font-extrabold">{movie.title}</h1>

          {/* Rating */}
          <div className="flex items-center gap-2 text-yellow-400">
            <StarIcon className="w-6 h-6" />
            <span className="text-lg font-semibold">
              {movie.vote_average.toFixed(1)} IMDb Rating
            </span>
          </div>

          {/* Overview */}
          <p className="text-gray-300 leading-relaxed">{movie.overview}</p>

          {/* Year | Genres | Runtime */}
          <div className="text-sm text-gray-400 flex flex-wrap items-center gap-2 mt-2">
            <span>{extractYear(movie.release_date)}</span>
            <span>|</span>

            <span>
              {movie.genres.map((g, i) => (
                <span key={i}>
                  {g.name}
                  {i < movie.genres.length - 1 && ", "}
                </span>
              ))}
            </span>

            <span>|</span>
            <span>{runtimeFormat(movie.runtime)}</span>
          </div>

          {/* Buttons */}
          <div className="flex items-center flex-wrap gap-4 mt-4">
            <button onClick={showTrailer} className=" flex items-center gap-2 px-7 py-3 text-sm bg-gray-800 hover:bg-gray-900 transition rounded-md font-medium cursor-pointer active:scale-95">
              <PlayCircleIcon className={`w-5 h-5`}/>
              Watch Trailer
            </button>

            <a href="#dateSelect" className="px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-md font-medium cursor-pointer active:scale-95">
              Buy Tickets
            </a>

            <button
              onClick={addToFavourites}
               className="bg-gray-700 p-2.5 rounded-full transition cursor-pointer active:scale-95"
            >
              <Heart className={`w-5 h-5`} />
            </button>
          </div>
        </div>
      </div>
      <p className="text-lg font-medium mt-20">Your Favourite Cast</p>
      <div className="overflow-x-auto no-scrollbar mt-8 pb-4">
        <div className="flex items-center gap-4 w-max px-4">
              {
                show.movie.casts.slice(0,12).map((cast,index) => (
                  <div key={index} className="flex flex-col items-center text-center">
                    <img src={cast.profile_path} alt="actor" className='rounded-full h-20 md:h-20 aspect-square object-cover' />
                    <p className="font-medium text-xs mt-3">{cast.name}</p>
                    </div>
                ))
              }
        </div>
              
      </div>
      <DateSelect dateTime={show.dateTime}  id={id}/>
      <p className="text-lg font-medium mt-20 mb-8">You May Also Like</p>
      <div className="flex flex-wrap max-sm:justify-center gap-8">
              {dummyShowsData.slice(0,4).map((movie, index)=>(
                <MovieCard  key={index} movie={movie}/>
              ))

              }
      </div>
      <div className="flex justify-center mt-20">
             <button onClick={()=>(navigate('/movies'),scrollTo(0,0))} className="px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-md font-medium cursor-pointer">
               Show More
             </button>
      </div>
    </div>
  );
};

export default MovieDetails;
