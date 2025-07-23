import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { dummyDateTimeData, dummyShowsData } from '../assets/assets'
import BlurCircle from '../components/BlurCircle'
import { Heart, PlayCircleIcon, StarIcon } from 'lucide-react'
import timeFormat from '../lib/timeFormat'
import DateSelect from '../components/DateSelect'

const MoviesDetails = () => {
  const { id } = useParams()
  const [show, setShow] = useState(null)

  const getShow = async () => {
    const foundShow = dummyShowsData.find(show => show._id === id)
    if (!foundShow) return
    setShow({
      movie: foundShow,
      dataTime: dummyDateTimeData
    })
  }

  useEffect(() => {
    getShow()
  }, [id])

  return show ? (
    <div className='px-6 md:px-16 lg:px-40 pt-30 md:pt-50'>
      <div className='flex flex-col md:flex-row gap-8 max-w-6xl mx-auto'>
        <img
          src={show.movie.poster_path}
          alt={show.movie.title}
          className='max-md:mx-auto rounded-xl h-104 max-w-70 object-cover'
        />
        <div className='relative flex flex-col gap-3'>
          <BlurCircle top="-100px" left="-100px" />
          <p className='text-primary'>ENGLISH</p>
          <h1 className='text-4xl font-semibold max-w-69'>{show.movie.title}</h1>
          <div className='flex items-center gap-2 text-gray-300'>
            <StarIcon className='w-5 h-5 text-primary fill-primary' />
            {show.movie.vote_average.toFixed(1)} User Rating
          </div>
          <p className='text-gray-400 mt-2 text-sm leading-tight max-w-xl'>
            {show.movie.overview}
          </p>
          <p>
            {timeFormat(show.movie.runtime)} •{' '}
            {show.movie.genres.map(genre => genre.name).join(', ')} •{' '}
            {show.movie.release_date.split('-')[0]}
          </p>
          <div className='flex gap-4 mt-4'>
            <button className='flex items-center gap-2 bg-primary px-4 py-2 rounded text-white'>
              <PlayCircleIcon className='w-5 h-5' />
              Watch Trailer
            </button>
            <a href="#dateSelect" className='text-blue-500 underline'>Buy Tickets</a>
            <Heart className='w-5 h-5 text-red-500 cursor-pointer' />
          </div>
        </div>
      </div>
      <p className='text-lg font-medium mt-20'> Your Favorite Cast</p>
      <div className=' overflow-x-auto no-scrollbar mt-8 pb-4'>
        <div className='flex item-center gap-4 w-max px-4'>
          {show.movie.casts.slice(0,12).map((cast,index)=>(
            <div key={index} className=' flex flex-col items-center text-center'>
              <img src={cast.profile_path} alt="" className='rounded-full h-20 md:h-20 aspect-square object-cover' />
              <p className='font-medium text-xs' >{cast.name}</p>
            </div>
          ))}
        </div>
      </div>
      <DateSelect dateTime={show.dateTime} id={id}/>
    </div>
  ) : (
    <div>Loading...</div>
  )
}

export default MoviesDetails
