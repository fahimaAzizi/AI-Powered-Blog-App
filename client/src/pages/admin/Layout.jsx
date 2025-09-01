import React from 'react'
import AdminNavbar from '../../components/admin/AdminNavbar'
import AdminSidbar from '../../components/admin/AdminSidbar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <AdminNavbar/>
    <div className='flex'>
        <AdminSidbar/>
        <div  className='flex-1 px-4 py-10 h-[calc(100vh-64px)] overflow-y-auto'>
          <Outlet />
        </div>
    </div>
    </>
  )
}

export default Layout