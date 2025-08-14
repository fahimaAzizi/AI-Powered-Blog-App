import React, { useEffect, useState } from 'react'
import { dummyBookingData } from '../assets/assets'
import Loading from '../components/Loading'

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
    <div>
       <h1>sdfuiho</h1>
    </div>
 
 
  ): <Loading/>
}
export default MyBookings