import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const seatLayout = () => {
  const {id,date} =useParams
  const[selectedSeats,setSelectedSeats] =useState([])
  const[selectedTime,setSelectedTime] =useState([null])
  const [show , setShow] = useState(null)
  
  const navigate =useNavigate
  const getShow = async() =>{
   const show = dummyShowsData.find(show => show._id === id)
   if(show){
    setShow({
    movie: show,
    dateTime : dummyDteTimeData
  })
   }
  }
  
  return show ? (
    <div className='flex  flex-col md:flex-row px-6 md:px-16 lg:px-40 py-30 md:pt-50'>
      {/* {available Timings} */}
      <div className='w-60 bg-primary/10 border boder-primary/20 rounded-lg py-10
      h-max md:sticky md:top-30'>
        <p className='text-lg font-semibold px-6'>
         Available Timings
        </p>
        {show.dateTime[date].mp((item)=>
        <div>
          <ClockIcon/>
        </div>
        )}
      </div>

    </div>
  ):(
    <Loading />
  )
}

export default seatLayout