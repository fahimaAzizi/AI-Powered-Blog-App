import React, { useEffect, useState } from 'react';
import { dummyBookingData } from '../assets/assets';

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
      
    </div>
  );
};
