import React from 'react'
import BlurCircle from './BlurCircle'
import {ChevronRightIcon ,ChevronLeftIcon} from "lucide-react"

const DateSelect = ({dateTime ,id}) => {
  return (
    <div id='dateStelect' className='pt-30'>
      <div className='flex flex-col md:flex-row items-center justify-berween gap-10 relative p-8 bg-primary/10 border border-primary/20 rounded-lg'>
      <BlurCircle top='-100px' left='-100px' />
      <BlurCircle top='100px' right='0px' />
       <div>
        <p className='text-lg font-semibold'>
         Choose Date
        </p>
        <div className='flex items-center gap-6 text-sum mt-5'>
          <ChevronLeftIcon width={28} />
          <span className='grid grid-cols-3 md:flex-wrap md:max-w-lg gap-4'>
            {Object.keys(dateTime).map((date)=>(
            <button key={date} className='flex flex-col items-center justify-center h-4 w-14 aspect-square rounded cursor-pointer'>
          
         
          <span>{new Date(date).getDate()}</span>
          <span>{new Date(date).toLocaleDateString("en-US",{month:"short"})}</span>
            </button>
            ))} 
            </span>

            <ChevronRightIcon width={28} />
        </div>
       </div>
       <button >Book New</button>
      </div>
  
    </div>
  )
}

export default DateSelect