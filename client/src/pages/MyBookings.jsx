import React, { useEffect, useState } from "react";

// Example dummy booking data — replace with your import
const dummyBookingData = [
  {
    id: 1,
    amount: 1200,
    bookedSeats: ["A1", "A2", "B1"],
    isPaid: false,
    show: {
      movie: {
        title: "The Matrix",
        runtime: 136,
        poster_path: "https://via.placeholder.com/200x300?text=Poster"
      }
    }
  },
  {
    id: 2,
    amount: 800,
    bookedSeats: ["C3", "C4"],
    isPaid: true,
    show: {
      movie: {
        title: "Inception",
        runtime: 148,
        poster_path: "https://via.placeholder.com/200x300?text=Poster"
      }
    }
  }
];

// Simple loading placeholder
const Loading = () => <div className="p-8 text-center">Loading...</div>;

// Simple background blur placeholder
const BlurCircle = ({ top, left, bottom }) => (
  <div
    style={{
      position: "absolute",
      top,
      left,
      bottom,
      width: "200px",
      height: "200px",
      background: "rgba(255,0,150,0.3)",
      filter: "blur(100px)",
      borderRadius: "50%",
      zIndex: -1
    }}
  />
);

const MyBookings = () => {
  const currency = import.meta.env.VITE_CURRENCY || "$";
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getMyBookings = async () => {
    // Simulate fetching data
    setTimeout(() => {
      setBookings(dummyBookingData);
      setIsLoading(false);
    }, 500);
  };

  useEffect(() => {
    getMyBookings();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="relative px-6 md:px-16 lg:px-40 pt-30 md:pt-40 min-h-[80vh]">
      <BlurCircle top="100px" left="100px" />
      <BlurCircle bottom="0px" left="600px" />

      <h1 className="text-lg font-semibold mb-4">My Bookings</h1>

      {bookings.length === 0 && <p>No bookings found.</p>}

      {bookings.map((item) => {
        const movie = item.show?.movie || {};
        const title = movie.title || "Untitled Movie";
        const runtime = movie.runtime
          ? `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}m`
          : "Runtime not available";
        const poster = movie.poster_path || "https://via.placeholder.com/200x300";

        return (
          <div
            key={item.id}
            className="flex flex-col md:flex-row justify-between bg-primary/10 border border-primary/20 rounded-lg mt-4 p-2 max-w-3xl"
          >
            {/* Movie Poster & Details */}
            <div className="flex flex-col md:flex-row">
              <img
                src={poster}
                alt={title}
                className="w-full md:w-40 aspect-video object-cover object-bottom rounded"
              />
              <div className="flex flex-col p-4">
                <p className="text-lg font-semibold">{title}</p>
                <p>{runtime}</p>
              </div>
            </div>

            {/* Booking Info & Payment */}
            <div className="flex flex-col md:items-end md:text-right justify-between p-4">
              <div className="flex items-center gap-4">
                <p className="text-2xl font-semibold mb-3">
                  {currency}
                  {item.amount}
                </p>
                {!item.isPaid && (
                  <button className="bg-primary px-4 py-1.5 mb-3 text-sm rounded-full font-medium cursor-pointer">
                    Pay Now
                  </button>
                )}
              </div>
              <div className="text-sm">
                <p>
                  <span className="text-gray-400">Total Tickets:</span>{" "}
                  {item.bookedSeats?.length || 0}
                </p>
                <p>
                  <span className="text-gray-400">Seat Number:</span>{" "}
                  {item.bookedSeats?.join(", ") || "N/A"}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MyBookings;
