import React from 'react'
import BlurCircle from './BlurCircle'
const DateSelect = ({dateTime ,id}) => {
  return (
    <div id='dateStelect' className='pt-30'>
      <div className='flex flex-col md:flex-row items-center justify-berween gap-10 relative p-8 bg-primary/10 border border-primary/20 rounded-lg'>
      <BlurCircle />

      </div>
  
    </div>
  )
}

export default DateSelect