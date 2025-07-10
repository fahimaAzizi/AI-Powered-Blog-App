import React from 'react'
import { dummyTrailers } from '../assets/assets'

const TraierSection = () => {


  const [currentTrailer ,setCurrentTrailer] =usseState(dummyTrailers[0])
  return (
    <div  className='px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden'>
      <p className='text-gray-300 font-medium text-lg max-w-[960px]mx-auto'>
        Trailers
      </p>
      <div>
        <reactPlayer url={currentTrailer.videoUrl} controls ={false}/> 

      </div>
    </div>
  )
}

export default TraierSection