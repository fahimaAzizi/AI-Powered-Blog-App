import React from 'react'
import { assets } from '../assets/assets'
import {MenuIcon ,SearchIcon} from 'lucide-react'


const Navbar = () => {
  return (
    <div className='fixed top-0 left-0 z-50 w-full flex items-center
     justif-between px-6 md:px-16 lg:px-36 py-5'>
      <Link to='/' className="max-md:flex-1">
      <img src={assets.logo} alt=""  className='w-36 h-auto'/>
      </Link>
      <div>

      </div>
      <div>
           <SearchIcon/>
      </div>
      <MenuIcon className='max-md: ml-4 md:hidden w-8 h-8 cursor-pointer'/>
     </div>
  )
}

export default Navbar