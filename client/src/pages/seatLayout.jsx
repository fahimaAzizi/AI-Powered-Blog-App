import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { dummyShowsData, dummyDateTimeData } from '../assets/assets';
import { ClockIcon } from 'lucide-react';
import Loading from './Loading';
import isoTimeFormat from './isoTimeFormat'; // Make sure this path is correct

const SeatLayout = () => {
  const { id, date } = useParams();
  const navigate = useNavigate();

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);
  const [show, setShow] = useState(null);

  useEffect(() => {
    const getShow = async () => {
      const matchedShow = dummyShowsData.find((show) => show._id === id);
      if (matchedShow) {
        setShow({
          movie: matchedShow,
          dateTime: dummyDateTimeData,
        });
      }
    };
    getShow();
  }, [id]);

  const handleSeatClick = (seatId) => {
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
                selectedSeats.includes(seatId) && 'bg-primary text-white'
              }`}
            >
              {seatId}
            </button>
          );
        })}
      </div>
    </div>
  );

  return show ? (
    <div className="flex flex-col md:flex-row px-6 md:px-16 lg:px-40 py-30 md:pt-50">
      {/* Available Timings */}
      <div className="w-60 bg-primary/10 border border-primary/20 rounded-lg py-10 h-max md:sticky md:top-30">
        <p className="text-lg font-semibold px-6">Available Timings</p>
        <div>
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
          ))}
        </div>
      </div>

      {/* Seat Selection */}
      <div className="flex flex-col flex-1 mt-6 md:mt-0 md:ml-10">
        <p className="text-lg font-semibold mb-4">Select Your Seats</p>
        {/* You can customize rows like ['A', 'B', 'C'] */}
        {['A', 'B', 'C'].map((row) => renderSeats(row))}
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default SeatLayout;
