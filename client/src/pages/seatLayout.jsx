import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const seatLayout = () => {
  const {id,date} =useParams
  const[selectedSeats,setSelectedSeats] =useState([])
  const[selectedTime,setSelectedTime] =useState([null])
  const [show , setShow] = useState(null)
  
  const navigate =useNavigate
  const getShow = async() =>{

  }
  
  return (
    <div>

    </div>
  )
}

export default seatLayout