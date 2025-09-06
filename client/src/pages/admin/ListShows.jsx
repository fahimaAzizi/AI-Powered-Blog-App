import React, { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import Title from "../../components/admin/Title";
import { currency } from "../../App"; 
import dateFormat from "../../utils/dateFormat"; // ✅ make sure you have this util

const ListShows = () => {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchShows = async () => {
    try {
      // 👇 fetch shows from backend
      const res = await fetch("/api/show/list");
      const data = await res.json();
      setShows(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching shows:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchShows();
  }, []);

  return !loading ? (
    <>
      <Title text1="All" text2="Shows" />

      <div className="mt-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-primary/20 text-sm">
              <th className="p-2 text-left">Movie</th>
              <th className="p-2 text-left">Date</th>
              <th className="p-2 text-left">Bookings</th>
              <th className="p-2 text-left">Revenue</th>
            </tr>
          </thead>

          <tbody className="text-sm font-light">
            {shows.map((show, index) => (
              <tr
                key={index}
                className="border-b border-primary/10 odd:bg-primary/5 even:bg-primary/10"
              >
                {/* Movie Title */}
                <td className="p-2 min-w-45 pl-5">{show.movie.title}</td>

                {/* Show Date */}
                <td className="p-2">{dateFormat(show.showDateTime)}</td>

                {/* Total Bookings */}
                <td className="p-2">{Object.keys(show.occupiedSeats).length}</td>

                {/* Revenue */}
                <td className="p-2">
                  {currency}{" "}
                  {Object.keys(show.occupiedSeats).length * show.showPrice}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default ListShows;
