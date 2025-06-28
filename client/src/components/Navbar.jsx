import React from 'react'
import {assets} from'../assets/assets'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32 coursor-ponter'>
       
        <img src={assets.logo} alt="logo" className='w-32sm:w-44' />
        <button onClick={()=>Navigate('/admin')}  className='flex items-ceter gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5'>Login
           <img src={assets.arrow} alt="arrow" className='w-3' /></button>
    </div>
  )
}
