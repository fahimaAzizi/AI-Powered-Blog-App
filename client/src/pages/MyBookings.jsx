import React, { useEffect, useState } from 'react';
import { dummyBookingData } from '../assets/assets';
import Loading from '../components/Loading';

const MyBookings = () => {
  const currency = import.meta.env.VITE_CURRENCY;

  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getMyBookings = async () => {
    setBookings(dummyBookingData);
    setIsLoading(false);
  };
  useEffect(()=>{
    getMyBookings()
  },[])

  return !isLoading (
    <div className='relative px-6 md:px-16 lg:px-40 pt-30 md:pt-40 min-h[80vh]'>
      <BlurCircle top="100px" left="100px" />
      <div>
        <BlurCircle bottom ="0px" left="600px"/>
      </div>
      <h1 className='text-lg font-semibold md-4'> My Bookings</h1>
      {
        bookings.map((item ,index)=>(
         <div key={index} className='flex flex-col md:flex-row justify-between bg-primary/8 border boder-primary/20 rounded-lg mt-4 p-2 max-w-3xl'>
          <div>
           <p className="text-lg font-semibold">
          {item.show?.movie?.title || 'Untitled Movie'}
        </p>
        <p>
          {item.show?.movie?.runtime
            ? `${Math.floor(item.show.movie.runtime / 60)}h ${item.show.movie.runtime % 60}m`
            : 'Runtime not available'}
        </p>
          </div>

         </div>
        ))
      }
    </div>
  ) , <Loading/>
}

export default MyBookings
