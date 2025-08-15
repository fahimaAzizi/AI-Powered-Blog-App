import React, { useEffect, useState } from 'react'
import { dummyBookingData } from '../assets/assets'
import Loading from '../components/Loading'
import BlurCircle from '../components/BlurCircle'

const MyBookings = () => {
  const currency = import.meta.env_VITE_CURRENCY
  const [bookings ,setBookings] =useState([])
  const [isLoading ,setIsLoading] =useState(true)

  const getMyBookings = async ()=>{
    setBookings(dummyBookingData)
    setIsLoading(false)
  }
  useEffect(()=>{
    getMyBookings
  },[])

  return !isLoading ?(
     <div className="relative px-6 md:px-16 lg:px-40 pt-10 md:pt-20 min-h-[80vh]">
      <BlurCircle top="100px" left="100px"/>
      <div>
        <BlurCircle/>
      </div>
      <h1>
        MyBookings
      </h1>
     </div>
 
 
  ): <Loading/>
}
export default MyBookings