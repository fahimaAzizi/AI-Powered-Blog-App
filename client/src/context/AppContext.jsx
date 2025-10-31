import axios from "axios";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast"; // optional, for error messages

const fetchIsAdmin = async () => {
  try {
    // Make a GET request to your backend route
    const { data } = await axios.get("/api/admin/is-admin", {
      headers: {
        Authorization: `Bearer ${await getToken()}`, // getToken() returns user's auth token
      },
    });

    // Set admin state (if using context)
    setIsAdmin(data.isAdmin);

    // If the user is NOT admin and is trying to access admin routes
    if (!data.isAdmin && location.pathname.startsWith("/admin")) {
      navigate("/");
      toast.error("You are not authorized to access admin dashboard");
    }
  } catch (error) {
    console.error(error);
  }
};

useEffect(() => {
  fetchIsAdmin();
}, []);
