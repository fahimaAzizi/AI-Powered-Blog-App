import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowRightIcon, ClockIcon } from 'lucide-react';
import toast from 'react-hot-toast';
import MyBookings from './MyBookings';
import Loading from '../components/Loading';
import BlurCircle from '../components/BlurCircle';
import isoTimeFormat from '../lib/isoTimeFormat';
import { dummyDateTimeData, dummyShowsData, assets } from '../assets/assets';
import axios from 'axios';
import { useAppContext } from '../context/AppContext';

const SeatLayout = () => {
  const { id, date } = useParams();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);
  const [show, setShow] = useState(null);
  const navigate = useNavigate();


  const {axios ,getToken , user} = useAppContext();
  const getShow = async()=>{
    try {
      const {data} = await axios.get(`/api/show/${id}`)
      if (data.success){
        setShow(data)
      }
    } catch (error) {
      
    }
  }


  const topRows = ['A', 'B'];         // Center top section
  const leftRows = ['C', 'D', 'E'];   // Left side of hall
  const rightRows = ['F', 'G', 'H']; // Right side of hall
  

  useEffect(() => {
    const foundShow = dummyShowsData.find((show) => show._id === id);
    if (foundShow) {
      setShow({
        movie: foundShow,
        dateTime: dummyDateTimeData,
      });
    }
  }, [id]);

  const handleSeatClick = (seatId) => {
    if (!selectedTime) {
      return toast('Please select time first');
    }
    if (!selectedSeats.includes(seatId) && selectedSeats.length >= 5) {
      return toast('You can only select up to 5 seats');
    }

    setSelectedSeats((prev) =>
      prev.includes(seatId)
        ? prev.filter((seat) => seat !== seatId)
        : [...prev, seatId]
    );
  };

  const renderSeats = (row, count = 9) => (
    <div key={row} className="flex gap-2 mt-2">
      <div className="flex flex-wrap items-center justify-center gap-2">
        {Array.from({ length: count }, (_, i) => {
          const seatId = `${row}${i + 1}`;
          return (
            <button
              key={seatId}
              onClick={() => handleSeatClick(seatId)}
              className={`h-8 w-8 rounded border border-primary-60 cursor-pointer ${
                selectedSeats.includes(seatId) ? 'bg-primary text-white' : ''
              }`}
            >
              {seatId}
            </button>
          );
        })}
      </div>
    </div>
  );

  const getOccupiedSeats = async ()=>{
     try {
      const {data} = await axios.get(`/api/bopking/seats/${selectedTime.showId}`)
      if (data.success) {
        setSelectedSeats(data.occupiedSeats)
      } else{
        toast.error(data.message)
      }
     } catch (error) {
      console.log(error)
     }
  }

  if (!show) return <Loading />;

  return (
    <div className="flex flex-col md:flex-row px-6 md:px-16 lg:px-40 py-30 md:pt-50">
      {/* Timing Sidebar */}
      <div className="w-60 bg-primary/10 border border-primary/20 rounded-lg py-10 h-max md:sticky md:top-30">
        <p className="text-lg font-semibold px-6">Available Timings</p>
        <div className="mt-5 space-y-1">
          {show.dateTime[date]?.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedTime(item)}
              className={`flex items-center gap-2 px-6 py-2 w-max rounded-r-md cursor-pointer transition ${
                selectedTime?.time === item.time
                  ? 'bg-primary text-white'
                  : 'hover:bg-primary/20'
              }`}
            >
              <ClockIcon className="w-4 h-4" />
              <p className="text-sm">{isoTimeFormat(item.time)}</p>
            </div>
          )) || <p className="px-6 text-sm text-red-500">No times found</p>}
        </div>
      </div>

      {/* Seats Layout */}
      <div className="relative flex-1 flex flex-col items-center max-md:mt-16">
        <BlurCircle top="-100px" left="-100px" />
        <BlurCircle bottom="0" right="0" />

        <h1 className="text-2xl font-semibold mb-4">Select your seat</h1>
        <img src={assets.screenImage} alt="screen" />
        <p className="text-gray-400 text-sm mb-6">SCREEN SIDE</p>

        <div className="flex flex-col items-center mt-10 text-xs text-gray-300">
  {/* Top Centered Rows */}
  <div className="flex flex-col items-center space-y-2 mb-8">
    {topRows.map((row) => renderSeats(row))}
  </div>

  {/* Side-by-side rows */}
  <div className="grid grid-cols-2 gap-11">
    {/* Left Block */}
    <div className="flex flex-col space-y-2">
      {leftRows.map((row) => renderSeats(row))}
    </div>

    {/* Right Block */}
    <div className="flex flex-col space-y-2">
      {rightRows.map((row) => renderSeats(row))}
    </div>
    
  </div>
</div>


        {/* Proceed Button */}
        <button
        onClick={() =>
  selectedTime && selectedSeats.length
    ? navigate('/MyBookings', {
        state: {
          movie: show.movie,
          time: selectedTime,
          seats: selectedSeats,
        },
      })
    : toast.error('Please select time and seats')
}

          
          className="bg-primary text-white px-6 py-2 rounded mt-6 flex items-center gap-2"
        >
          Continue <ArrowRightIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default SeatLayout;
