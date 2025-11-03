import React, { useEffect, useState } from 'react';
import AdminNavbar from '../../components/admin/AdminNavbar';
import AdminSidbar from '../../components/admin/AdminSidbar';
import { Outlet } from 'react-router-dom';
import Loading from '../../components/Loading';
import { useAppContext } from '../../context/AppContext';

const Layout = () => {
  const { isAdmin, fetchIsAdmin } = useAppContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAdmin = async () => {
      await fetchIsAdmin();
      setLoading(false);
    };
    checkAdmin();
  }, []);

  if (loading) return <Loading />;

  return (
    <>
      <AdminNavbar />
      <div className="flex">
        <AdminSidbar />
        <div className="flex-1 px-4 py-10 h-[calc(100vh-64px)] overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
