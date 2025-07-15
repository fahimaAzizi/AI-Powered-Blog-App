import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const MoviesDetails = () => {
  const {id} =useParams()
  const [Show ,setShow] =useState(null)
  const getShow = async ()=>{
    
  }
  return (
    <div>

    </div>
  )
}

export default MoviesDetails