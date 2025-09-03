import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Movies from './pages/Movies'
import MoviesDetails from './pages/MoviesDetails'
import Favorite from './pages/Favorite'
import SeatLayout from './pages/SeatLayout'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'
import AddShows from "./pages/admin/AddShows"; // if that's the correct name
import Dashboard from './pages/admin/Dashboard'
import ListShows from './pages/admin/ListShows'
import ListBookings from './pages/admin/ListBookings'
import  Layout  from './pages/admin/Layout'
import MyBookings from './pages/MyBookings'


const App = () => {
  
  const isAdminRoute = useLocation().pathname.startsWith('/admin')
  
  return (
    <>
      <Toaster />
      {!isAdminRoute && <Navbar />}
      <Routes>
        
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/movies/:id' element={<MoviesDetails />} />
        <Route path='/movies/:id/:date' element={<SeatLayout/>} />
        <Route path='/MyBookings' element={<MyBookings/>} />
        <Route path='/favorite' element={<Favorite />} />
        <Route path='/admin/*' element={<Layout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path='add-shows' element={<AddShows/>}/>
          <Route path='list-shows' element={<ListShows/>}/>
          <Route path='list-bookings' element={<ListBookings/>}/>
        </Route>
      </Routes>
      {!isAdminRoute && <Footer />}
    </>
  )
}

export default App
