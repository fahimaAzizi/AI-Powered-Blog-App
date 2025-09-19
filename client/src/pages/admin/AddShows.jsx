import React, { useEffect, useState } from 'react'
import Loading from '../../components/Loading';
import { dummyShowsData } from '../../assets/assets';
import { kConverter } from '../../lib/kConverter';
import {StarIcon} from 'lucide-react'


const AddShows = () =>{
 const currency = import.meta.env.VITE_CURRENCY;


  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [selectedMovies, setSelectedMovies] = useState(null);
  const [dateTimeSelection, setDateTimeSelection] = useState({});
  const [dateTimeInput, setDateTimeInput] = useState("");
  const [showPrice, setShowPrice] = useState("");

  const fetchNowplayingMovies =async ()=>{
    setNowPlayingMovies(dummyShowsData)
  };
  useEffect(() =>{
    fetchNowplayingMovies();
  },[]);

  return nowPlayingMovies.length > 0? (
    <>
    <title text1="add" text2="Show"/>
    <p className='mt-10 text-lg font-medium'> Now Playing Movies</p>
    <div className='overflow-x-auto pb-4'>
      <div className='group flex flrx-wrap gap-4 mt-4 w-max'>
        {nowPlayingMovies.map((movie)=>(
         <div key={movie.id} className={`relative max-w-40 cursor-point group-hover:not-hover:opacity-40 hover:-translate-y-1transition duration-300`}
         onClick={()=>setSelectedMovies(movie._id)}>

           <div className='relative rounded-lg overflow-hidden'>
            <img src={movie.poster_path} className='w-full object-cover brightness-90' alt="" />
            <div className='text-sm flex item-center justify-btween p-2 bg-black/70 w-full absolute bottom-0 left-0'>
          <p className='flex item-center gap-1 text-gray-400'>
            <StarIcon className=" w-4 h-4 text-primary fill-primary"/>
            {movie.vote_average.toFixed(1)}

          </p>
          <p className='text-gray-300'> {kConverter(movie.vote_count)}Votes

          </p>
            </div>
            </div> 
         </div>
      ))}
      </div>
    </div>
    </>
  ): <Loading/>
}

export default AddShows