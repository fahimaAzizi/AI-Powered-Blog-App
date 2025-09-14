import React, { useEffect, useState } from 'react'



const AddShows =()=>{
  const currency = import.meta.env.VITE_CURRENCY
  cosnt [nowPlayingMovies , setNowPlayingMovies] = useState([]);
  cosnt [selecedMovies , setSelecedMovies] = useState(null);
  cosnt [dateTimeSlelection , setDateTimeSlelection] = useState({});
  cosnt [dateTimeInput , setDateTimeInput] = useState("");
  cosnt [showPrice  , setShowPrice] = useState("");

  const fetchNowplayingMovies =async ()=>{
    setNowPlayingMovies(dummyShowsData)
  };
  useEffect(() =>{
    fetchNowplayingMovies();
  },[]);

  return nowPlayingMovies.length > 0? (
    <>
    <title text1="add" text2="Show"/>
    <p className='mt-10 text=lg font-medium'> Now Playing Movies</p>
    <div className='overflow-x-auto pb-4'>
      <div className='group flex flrx-wrap gap-4 mt-4 w-max'>

      </div>
    </div>
    </>
  )
}

export default AddShows