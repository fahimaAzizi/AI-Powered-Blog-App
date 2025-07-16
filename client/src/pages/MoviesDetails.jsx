import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {dummyDateTimeData, dummyShowsData} from '../assets/assets'
const MoviesDetails = () => {
  const {id} =useParams()
  const [Show ,setShow] =useState(null)
  const getShow = async ()=>{
    const show = dummyShowsData.find(Show=> Show._id ===id)
    setShow({
      moive :show,
      dataTime: dummyDateTimeData
    })
  }

  useEffect(()=>{
    getShow()
  },[id])
  return show ?(
    <div className=' px-6 md:px-16 lg:px-40 pt-30 md:pt-50'>
       <div className='flex flex-col md:flex-row gap-8 max-w-6xl mx-auto'>
        <img src={show.moive.poster_path} alt="" className='max-md:mx-auto rounded-xl h-104 max-w-70 object-cover' />
        <div className='relative flex flex-col gap-3'></div>
       </div>
    </div>
  ): <div>Losding...</div>

}

export default MoviesDetails