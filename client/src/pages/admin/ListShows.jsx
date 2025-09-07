const currency =import.meta.env.VITE_CURRENCY
import React, { cache, useEffect, useState } from "react";
import Loading from "../../components/Loading";
import Title from "../../components/admin/Title";
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
    <Title text1= "List" text2="Shows"/>
    </>
  ) : (
    <Loading />
  );
};

export default ListShows;
