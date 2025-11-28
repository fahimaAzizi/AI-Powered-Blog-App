import React from 'react'
import MovieCard from '../components/MovieCard'
import BlurCircle from '../components/BlurCircle'
import { useAppContext } from '../context/AppContext'

const Movies = () => {
  const { shows } = useAppContext();

  // Safe fallback if "shows" is undefined/null
  const movieList = Array.isArray(shows) ? shows : [];

  return movieList.length > 0 ? (
    <div className="relative my-32 px-6 md:px-16 lg:px-40 xl:px-44 overflow-hidden min-h-[80vh]">
      <BlurCircle top="150px" left="0px" />
      <BlurCircle bottom="50px" right="50px" />

      <h1 className="text-xl font-semibold my-6">Now Showing</h1>

      <div className="flex flex-wrap gap-8 sm:justify-start justify-center">
        {movieList.map((movie, index) => (
          <MovieCard movie={movie} key={movie?._id || index} />
        ))}
      </div>
    </div>
  ) : (
    <div className="min-h-[70vh] flex items-center justify-center">
      <p className="text-gray-400 text-lg">No movies to show.</p>
    </div>
  );
};

export default Movies;
