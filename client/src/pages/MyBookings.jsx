import React, { useState } from 'react';
import { dummyBookingData } from '../assets/assets';

const MyBookings = () => {
  const currency = import.meta.env.VITE_CURRENCY;

  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getMyBookings = async () => {
    setBookings(dummyBookingData);
    setIsLoading(false);
  };

  return (
    <div>
      {/* JSX output here */}
    </div>
  );
};
