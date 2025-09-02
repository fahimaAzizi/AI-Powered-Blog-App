import React from 'react'
import { assets } from '../../assets/assets'

function AdminNavbar() {
  return (
    <div className='felx items0center justify-between px-6 md:px-10 h-16 border-b border-gray-300/30'>
      <link to="/">
      <img src={assets.logo} alt="logo" />
      </link>
    </div>
  )
}

export default AdminNavbar