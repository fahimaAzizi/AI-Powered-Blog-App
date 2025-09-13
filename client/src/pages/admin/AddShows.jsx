import React from 'react'
import Title from '../../components/admin/Title';

function AddShow() {
  return (
    <div>
       <Title text1="Add" text2="Shows" />
      <p className="mt-10 text-lg font-medium">Now Playing Movies</p>

      <div className="overflow-x-auto pb-4">
        <div className="group flex flex-wrap gap-4 mt-4 w-max">
          {nowPlayingMovies.map((movie) => (
            <div
              key={movie.id}
              className="relative max-w-40 cursor-pointer 
                         group-hover:not-hover:opacity-40 
                         hover:-translate-y-1 
                         transition duration-300"
            >
              {/* Movie content goes here */}
              <img
                src={movie.poster_path} className='w-full'/>
               
               
              
              <p className="mt-2 text-sm text-center">{movie.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
   
  )
}

export default AddShow