import React from 'react'
import { LayoutDashboardIcon, PlusSquareIcon, ListIcon, ListCollapseIcon } from 'lucide-react'
import assets from '../assets/assets' // adjust path if needed

const AdminSidebar = () => {
  const user = {
    firstName: 'Admin',
    lastName: 'User',
    imageUrl: assets.profile,
  }

  const adminNavlinks = [
    { name: 'Dashboard', path: '/admin', icon: LayoutDashboardIcon },
    { name: 'Add Shows', path: '/admin/add-shows', icon: PlusSquareIcon },
    { name: 'List Shows', path: '/admin/list-shows', icon: ListIcon },
    { name: 'List Bookings', path: '/admin/list-bookings', icon: ListCollapseIcon },
  ]

  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen p-4">
      {/* User Info */}
      <div className="flex items-center space-x-3 mb-6">
        <img
          src={user.imageUrl}
          alt="profile"
          className="w-12 h-12 rounded-full border border-gray-500"
        />
        <div>
          <h2 className="font-semibold">{user.firstName} {user.lastName}</h2>
          <p className="text-sm text-gray-400">Administrator</p>
        </div>
      </div>

      {/* Navigation Links */}
      <nav>
        <ul className="space-y-2">
          {adminNavlinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.path}
                className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-700 transition"
              >
                <link.icon size={20} />
                <span>{link.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default AdminSidebar
