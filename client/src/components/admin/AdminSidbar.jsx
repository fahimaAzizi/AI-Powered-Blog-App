import React from "react";
import { NavLink } from "react-router-dom";
import { Home, Film, Users, Settings } from "lucide-react";

const AdminSidebar = ({ user }) => {
  const adminNavLinks = [
    { name: "Dashboard", path: "/admin", icon: Home },
    { name: "Shows", path: "/admin/shows", icon: Film },
    { name: "Users", path: "/admin/users", icon: Users },
    { name: "Settings", path: "/admin/settings", icon: Settings },
  ];

  return (
    <div className="h-[calc(100vh-64px)] md:flex flex-col items-center pt-8 max-w-13 md:max-w-60 w-full border-r border-gray-300/20 text-sm">
      {/* User Profile */}
      <img
        className="h-9 md:h-14 w-9 md:w-14 rounded-full mx-auto"
        src={user.imageUrl}
        alt="sidebar"
      />
      <p className="mt-2 text-base max-md:hidden">
        {user.firstName} {user.lastName}
      </p>

      {/* Navigation Links */}
      <div className="w-full mt-6">
        {adminNavLinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            className={({ isActive }) =>
              `relative flex items-center gap-2 w-full py-2.5 px-4 md:pl-10 text-gray-400 hover:text-primary transition 
              ${isActive ? "bg-primary/15 text-primary font-semibold" : ""}`
            }
          >
            {({isActive})=>(
           <>
            <link.icon className="w-5 h-5" />
            <p className="max-md:hidden">{link.name}</p>
            <span className={`w-.5 h-10 rounded-l right-0 absolute ${isActive&& 'bg-primary'}`}></span>
          </NavLink>
          </>
          )}
        ))}
      </div>
    </div>
  );
};

export default AdminSidebar;
