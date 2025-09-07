import React, { cache, useEffect, useState } from "react";
import Loading from "../../components/Loading";
import Title from "../../components/admin/Title";
import { currency } from "../../App"; 
import dateFormat from "../../utils/dateFormat"; // make sure this file exists!
import { dummyShowsData } from "../../assets/assets";

const ListShows = () => {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);

 const getAllShows =async ()=>{
  try{

    setShows([{
      movie : dummyShowsData[0],
      showDateTime :"2025-06-30T02:30:00.000Z",
      showPrice :59,
      occupiedSeats:{
        A1:"uaer_1",
        B1:"uaer_2",
        C1:"uaer_3"
      }
    }]);
    setLoading(false);
  } catch(error){
      console.error(error)
  }
 }

  useEffect(() => {
    getAllShows();
  }, []);

  return !loading ? (
    <>
      <Title text1="All" text2="Shows" />

      <div className="mt-6 overflow-x-auto">
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
            {shows.map((show, index) => {
              // ✅ Safe booking count (works if array or object)
              const bookingCount = Array.isArray(show.occupiedSeats)
                ? show.occupiedSeats.length
                : Object.keys(show.occupiedSeats || {}).length;

              return (
                <tr
                  key={index}
                  className="border-b border-primary/10 odd:bg-primary/5 even:bg-primary/10"
                >
                  {/* Movie Title */}
                  <td className="p-2 min-w-45 pl-5">{show.movie.title}</td>

                  {/* Show Date */}
                  <td className="p-2">{dateFormat(show.showDateTime)}</td>

                  {/* Total Bookings */}
                  <td className="p-2">{bookingCount}</td>

                  {/* Revenue */}
                  <td className="p-2">
                    {currency} {bookingCount * show.showPrice}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default ListShows;
