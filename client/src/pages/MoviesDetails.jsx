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
  },(id))
  return (
    <div>

    </div>
  )
}

export default MoviesDetails