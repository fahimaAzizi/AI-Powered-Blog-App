import React, { useState, useEffect } from "react";
import {
  ChartLineIcon,
  CircleDollarSignIcon,
  PlayCircleIcon,
  UsersIcon,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

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

  // Dummy chart data (later connect with backend)
  const chartData = [
    { month: "Jan", bookings: 20, revenue: 2000 },
    { month: "Feb", bookings: 35, revenue: 3500 },
    { month: "Mar", bookings: 50, revenue: 5000 },
    { month: "Apr", bookings: 40, revenue: 4200 },
    { month: "May", bookings: 70, revenue: 6500 },
  ];

  const fetchDashboardData = async () => {
    try {
      // Replace with actual API endpoint later
      const dummyDashboardData = {
        totalBookings: 120,
        totalRevenue: 15000,
        activeShows: ["Show1", "Show2", "Show3"],
        totalUser: 80,
      };

      setDashboardData(dummyDashboardData);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching dashboard data", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  if (loading) {
    // Skeleton Loader
    return (
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-4">
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className="bg-gray-200 animate-pulse rounded-xl p-6 h-28"
            ></div>
          ))}
      </div>
    );
  }

  return (
    <div className="p-6 space-y-8">
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {dashboardCards.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center hover:shadow-xl transition"
          >
            <card.icon size={36} className="text-blue-600 mb-2" />
            <h2 className="text-lg font-semibold">{card.title}</h2>
            <p className="text-2xl font-bold">{card.value}</p>
          </div>
        ))}
      </div>

      {/* Chart Section */}
      <div className="bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-lg font-semibold mb-4">Bookings & Revenue Trend</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="bookings" stroke="#2563eb" strokeWidth={2} />
            <Line type="monotone" dataKey="revenue" stroke="#16a34a" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
