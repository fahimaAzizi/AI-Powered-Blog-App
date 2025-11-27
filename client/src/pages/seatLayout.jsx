import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowRightIcon, ClockIcon } from 'lucide-react';
import toast from 'react-hot-toast';
import Loading from '../components/Loading';
import BlurCircle from '../components/BlurCircle';
import isoTimeFormat from '../lib/isoTimeFormat';
import { dummyDateTimeData, dummyShowsData, assets } from '../assets/assets';
import { useAppContext } from '../context/AppContext';

const SeatLayout = () => {
  const { id, date } = useParams();

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [occupiedSeats, setOccupiedSeats] = useState([]);   // ✅ FIX ADDED
  const [selectedTime, setSelectedTime] = useState(null);
  const [show, setShow] = useState(null);

  const navigate = useNavigate();
  const { axios } = useAppContext();

  // ----------------------
  // GET SHOW FROM API
  // ----------------------
  const getShow = async () => {
    try {
      const { data } = await axios.get(`/api/show/${id}`);
      if (data.success) {
        setShow(data);
      }
    } catch (error) {
      console.log(error);

      // fallback to dummy data
      const foundShow = dummyShowsData.find((show) => show._id === id);
      if (foundShow) {
        setShow({
          movie: foundShow,
          dateTime: dummyDateTimeData,
        });
      }
    }
  };

  useEffect(() => {
    getShow();
  }, [id]);

  // ----------------------
  // GET OCCUPIED SEATS
  // ----------------------
  const getOccupiedSeats = async () => {
    if (!selectedTime) return;

    try {
      const { data } = await axios.get(
        `/api/booking/seats/${selectedTime.showId}`
      );

      if (data.success) {
        setOccupiedSeats(data.occupiedSeats); // ⬅ CORRECT
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Call when time changes
  useEffect(() => {
    getOccupiedSeats();
    setSelectedSeats([]); // Reset after time change
  }, [selectedTime]);

  // ------------------------
  // SEAT CLICK HANDLER
  // ------------------------
  const handleSeatClick = (seatId) => {
    if (!selectedTime) {
      return toast('Please select time first');
    }

    if (occupiedSeats.includes(seatId)) return; // prevent clicking occupied

    if (!selectedSeats.includes(seatId) && selectedSeats.length >= 5) {
      return toast('You can only select up to 5 seats');
    }

    setSelectedSeats((prev) =>
      prev.includes(seatId)
        ? prev.filter((seat) => seat !== seatId)
        : [...prev, seatId]
    );
  };

  // ------------------------
  // RENDER SEATS
  // ------------------------
  const renderSeats = (row, count = 9) => (
    <div key={row} className="flex gap-2 mt-2">
      <div className="flex flex-wrap items-center justify-center gap-2">
        {Array.from({ length: count }, (_, i) => {
          const seatId = `${row}${i + 1}`;
          const isOccupied = occupiedSeats.includes(seatId);
          const isSelected = selectedSeats.includes(seatId);

          return (
            <button
              key={seatId}
              onClick={() => handleSeatClick(seatId)}
              disabled={isOccupied}
              className={`h-8 w-8 rounded border border-primary-60 cursor-pointer
                ${isSelected ? 'bg-primary text-white' : ''}
                ${isOccupied ? 'opacity-50 cursor-not-allowed' : ''}
              `}
            >
              {seatId}
            </button>
          );
        })}
      </div>
    </div>
  );

  if (!show) return <Loading />;

  const topRows = ['A', 'B'];
  const leftRows = ['C', 'D', 'E'];
  const rightRows = ['F', 'G', 'H'];

  return (
    <div className="flex flex-col md:flex-row px-6 md:px-16 lg:px-40 py-30 md:pt-50">

      {/* TIMINGS SIDEBAR */}
      <div className="w-60 bg-primary/10 border border-primary/20 rounded-lg py-10 h-max md:sticky md:top-30">
        <p className="text-lg font-semibold px-6">Available Timings</p>

        <div className="mt-5 space-y-1">
          {show.dateTime[date]?.length ? (
            show.dateTime[date].map((item, index) => (
              <div
                key={index}
                onClick={() => setSelectedTime(item)}
                className={`flex items-center gap-2 px-6 py-2 w-max rounded-r-md cursor-pointer transition
                  ${
                    selectedTime?.time === item.time
                      ? 'bg-primary text-white'
                      : 'hover:bg-primary/20'
                  }
                `}
              >
                <ClockIcon className="w-4 h-4" />
                <p className="text-sm">{isoTimeFormat(item.time)}</p>
              </div>
            ))
          ) : (
            <p className="px-6 text-sm text-red-500">No times found</p>
          )}
        </div>
      </div>

      {/* SEAT LAYOUT */}
      <div className="relative flex-1 flex flex-col items-center max-md:mt-16">
        <BlurCircle top="-100px" left="-100px" />
        <BlurCircle bottom="0" right="0" />

        <h1 className="text-2xl font-semibold mb-4">Select your seat</h1>

        <img src={assets.screenImage} alt="screen" />
        <p className="text-gray-400 text-sm mb-6">SCREEN SIDE</p>

        <div className="flex flex-col items-center mt-10 text-xs text-gray-300">
          
          {/* Top Rows */}
          <div className="flex flex-col items-center space-y-2 mb-8">
            {topRows.map((row) => renderSeats(row))}
          </div>

          {/* Left & Right Blocks */}
          <div className="grid grid-cols-2 gap-11">
            <div className="flex flex-col space-y-2">
              {leftRows.map((row) => renderSeats(row))}
            </div>

            <div className="flex flex-col space-y-2">
              {rightRows.map((row) => renderSeats(row))}
            </div>
          </div>
        </div>

        {/* Continue Button */}
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
