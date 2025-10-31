import { useContext } from "react"
import { useState } from "react"
import { Children } from "react"
import { createContext } from "react"
import axios from 'axios';
 import axios from "axios";
import { useEffect } from "react";
import { toast } from "react-hot-toast"; // optional, for error messages


axios.defaults.baseURL = import.meta.env.VITE_BASE_URL


export const AppContext = createContext()

export const AppProvider = ({Children})=>{

    const [isAdmin, setIsAdmin] = useState(false)
    const [shows, setShows] = useState([])
    const [favoriteMovies, setFavoriteMovies] = useState([])
   
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
const fetchShows = async ()=>{
    try{

    } catch (error){
        
    }
}

useEffect(() => {
     if(user){
      fetchIsAdmin();   
     }
 
}, [user]);

    const value ={axios}
    return(
        <AppContext.Provider value ={value}>
            {Children}
        </AppContext.Provider>
    )
}

export const useAppContext =() => useContext(AppContext)