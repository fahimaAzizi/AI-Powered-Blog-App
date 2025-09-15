import React, { useEffect, useState } from 'react'
import Loading from '../../components/Loading';
import { dummyShowsData } from '../../assets/assets';



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
         <div>
           
         </div>
      ))}
      </div>
    </div>
    </>
  ): <Loading/>
}

export default AddShows