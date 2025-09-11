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
         
    </>
  ): <Loading/>
}

export default ListBookings