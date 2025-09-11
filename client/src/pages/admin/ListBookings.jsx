import React, { useEffect } from 'react'
import { dummyBookingData } from '../../assets/assets';



const ListBookings = () => {
  const currency =import.meta.VITE_CURRENCY
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllBookings = async () =>{
    setBookings(dummyBookingData)
    setLoading(false);
  };
   useEffect(()=>{
    getAllBookings();

   },[]);

  return !isLoading?(
    <>
    <Title text1 ="list" text2="Bookings" />
         <thead>
            <tr className="bg-primary/20 text-left text-white">
              <th className="p-2 font-medium pl-5">User Name</th>
              <th className="p-2 font-medium">Movie Name</th>
              <th className="p-2 font-medium">Show Time</th>
              <th className="p-2 font-medium">Seats</th>
              <th className="p-2 font-medium">Amount</th>
            </tr>
          </thead>
    </>
  ): <Loading/>
}

export default ListBookings