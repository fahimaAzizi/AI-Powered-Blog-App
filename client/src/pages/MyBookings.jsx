import React, { useEffect, useState } from 'react';
import { dummyBookingData } from '../assets/assets';
import Loading from '../components/Loading';
import BlurCircle from '../components/BlurCircle';

const MyBookings = () => {
  const currency = import.meta.env.VITE_CURRENCY; // fixed env var
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getMyBookings = async () => {
    setBookings(dummyBookingData);
    setIsLoading(false);
  };

  useEffect(() => {
    getMyBookings(); // fixed function call
  }, []);

  return !isLoading ? (
    <div className="relative px-6 md:px-16 lg:px-40 pt-10 md:pt-20 min-h-[80vh]">
      <BlurCircle top="100px" left="100px" />
      <div>
        <BlurCircle bottom="0px" left="600px" />
      </div>
      <h1 className="text-lg font-semibold mb-4">My Bookings</h1>

      {bookings.map((item, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row justify-between bg-primary/8 border border-primary/20 rounded-lg mt-4 p-2 max-w-3xl"
        >
          <div className="flex flex-col md:flex-row">
            <img
              src={item.show.movie.poster_path}
              alt={item.show.movie.name || 'Movie Poster'}
              className="w-24 h-auto rounded-md"
            />
          </div>
          <div className="flex flex-col justify-center ml-4">
            <h2 className="font-semibold">{item.show.movie.name}</h2>
            <p>
              {currency}
              {item.price}
            </p>
            <p>{item.date}</p>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <Loading />
  );
};

export default MyBookings;
