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

  return (
    <div></div>
  )
}

export default AddShows