import React from 'react'
import AdminNavbar from '../../components/admin/AdminNavbar'
import AdminSidbar from '../../components/admin/AdminSidbar'

function Layout() {
  return (
    <>
    <AdminNavbar/>
    <div>
        <AdminSidbar/>
    </div>
    </>
  )
}

export default Layout