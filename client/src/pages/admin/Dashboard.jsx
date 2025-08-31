import React, { useState, useEffect } from "react";
import {
  ChartLineIcon,
  CircleDollarSignIcon,
  PlayCircleIcon,
  UsersIcon,
} from "lucide-react";


const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    totalBookings: 0,
    totalRevenue: 0,
    activeShows: [],
    totalUser: 0,
  });

  const [loading, setLoading] = useState(true);

  const dashboardCards = [
    {
      title: "Total Bookings",
      value: dashboardData.totalBookings.toLocaleString() || "0",
      icon: ChartLineIcon,
    },
    {
      title: "Total Revenue",
      value: `$${dashboardData.totalRevenue.toLocaleString()}` || "0",
      icon: CircleDollarSignIcon,
    },
    {
      title: "Active Shows",
      value: dashboardData.activeShows.length.toLocaleString() || "0",
      icon: PlayCircleIcon,
    },
    {
      title: "Total Users",
      value: dashboardData.totalUser.toLocaleString() || "0",
      icon: UsersIcon,
    },
  ];

  

}

export default Dashboard;
