import React, { useEffect, useState } from 'react';
import { dummyBookingData } from '../assets/assets';
import Loading from '../components/Loading';
import BlurCircle from '../components/BlurCircle';

const MyBookings = () => {
  const currency = import.meta.env.VITE_CURRENCY || "$";
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getMyBookings = async () => {
    setBookings(dummyBookingData);
    setIsLoading(false);
  };

  useEffect(() => {
    getMyBookings();
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div className="relative px-6 md:px-16 lg:px-40 pt-10 md:pt-20 min-h-[80vh]">
      <BlurCircle top="100px" left="100px" />
      <BlurCircle bottom="0px" left="600px" />

      <h1 className="text-lg font-semibold mb-4">My Bookings</h1>

      {bookings.length === 0 && <p>No bookings found.</p>}

      {bookings.map((item, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row justify-between bg-primary/8 border border-primary/20 rounded-lg mt-4 p-2 max-w-3xl"
        >
          {/* Movie Poster & Details */}
          <div className="flex flex-col md:flex-row">
            <img
              src={item.show?.movie?.poster_path}
              alt={item.show?.movie?.title || 'Movie Poster'}
              className="md:max-w-xs aspect-video h-auto object-cover object-bottom rounded"
            />
            <div className="flex flex-col p-4">
              <p className="text-lg font-semibold">{item.show?.movie?.title || "Untitled Movie"}</p>
              <p className="text-gray-400 text-sm">{item.show?.movie?.runtime || "Unknown runtime"}</p>
              <p className="text-gray-400 text-sm mt-auto">{item.show?.movie?.showDateTime || "Date N/A"}</p>
            </div>
          </div>

          {/* Booking Info & Payment */}
          <div className="flex flex-col md:items-end md:text-right justify-between p-4">
            <div className="flex items-center gap-4">
              <p className="text-2xl font-semibold mb-3">
                {currency}{item.amount}
              </p>
              {!item.isPaid && (
                <button className="bg-primary px-4 py-1.5 mb-3 text-sm rounded-full font-medium cursor-pointer">
                  Pay Now
                </button>
              )}
            </div>
            <div className="text-sm">
              <p>
                <span className="text-gray-400">Total Tickets:</span> {item.bookedSeats?.length || 0}
              </p>
              <p>
                <span className="text-gray-400">Seat Number:</span> {item.bookedSeats?.join(', ') || "N/A"}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyBookings;
