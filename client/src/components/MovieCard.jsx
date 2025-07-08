import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  return (
    <div className='flex flex-col justify-between p-3 bg-gray-800 rounded-2xl hover:-translate-y-1 transition duration-300 w-66'>
      <img
        onClick={() => {
          navigate(`/movies/${movie.id}`);
          window.scrollTo(0, 0);
        }}
        src={movie.backdrop_path}
        alt={movie.title}
        className='rounded-lg h-52 w-full object-cover object-right-bottom cursor-pointer'
      />

      <p className='font-semibold mt-2 truncate'>{movie.title}</p>

      <p className='text-sm text-gray-400 mt-2'>
        {new Date(movie.release_date).getFullYear()} •{' '}
        {movie.genres.slice(0, 2).map(genre => genre.name).join(' | ')} •{' '}
        {movie.runtime}
      </p>
      <div>
        <button >

        </button>
      </div>
    </div>
  );
};

// Optional: Define expected props for better safety
MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    backdrop_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired
      })
    ).isRequired,
    runtime: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieCard;
