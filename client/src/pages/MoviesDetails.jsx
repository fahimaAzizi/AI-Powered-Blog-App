import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {dummyDateTimeData, dummyShowsData} from '../assets/assets'
import BlurCircle from '../components/BlurCircle'
import {Heart ,StarIcon} from 'lucide-react'
import timeFormat from '../lib/timeFormat'

const MoviesDetails = () => {
  const {id} =useParams()
  const [show ,setShow] =useState(null)
  const getShow = async ()=>{
    const show = dummyShowsData.find(show=> show._id ===id)
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
        <div className='relative flex flex-col gap-3'>
          <BlurCircle top=" -100px" left="-100px"/>
          <p className='text-primary'>ENGLISH</p>
          <h1 className='text-4xl font-semibold max-w-69 text-blance'>{show.movie.title}</h1>
          <div className='flex items-cener gap-2 text-gray-300'>
           <StarIcon className='w-5 h-5 text-primary fill-primary'/>
          
            {show.movie.vote_average.toFixed(1)}Uaer Rathing
          </div>
          <p className='text-gray-400 mt-2 text-sm leading-tight max-w-xl'>{
            show.movie.overview}
            </p>
            <p >{timeFormat(show.moive.runtime)} . {show.movie.genrs.map(genre=>genre.name).join(",")} . {show.moive.release_date.splt("-")[0]}</p>
            <div>
              <button>
                <button>Watch Trailer</button>
                <a href=""> Buy Tickets</a>
                <Heart className={`w-5 h-5`}/>
              </button>
            </div>
        </div>
       </div>
    </div>
  ): <div>Losding...</div>

}

export default MoviesDetails