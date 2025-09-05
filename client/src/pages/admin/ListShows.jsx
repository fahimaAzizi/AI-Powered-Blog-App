import React, { useState } from 'react'

function ListShows() {
  const currency = import.meta.env.VITE_CURRENCY

  const [shows ,setShows] = useState([]); 
  cost [loading ,setLoadsing] = useState(true);

  const getAllShows = async () =>{
    
  }
 
  return (
    <div>
      <tbody className="text-sm font-light">
  {shows.map((show, index) => (
    <tr
      key={index}
      className="border-b border-primary/10 odd:bg-primary/5 even:bg-primary/10"
    >
      <td className="p-2 min-w-45 pl-5">{show.movie.title}</td>
      <td className="p-2">{dateFormat(show.showDateTime)}</td>
      <td className="p-2">{Object.keys(show.occupiedSeats).length}</td>
      <td className="p-2">
        {currency} {Object.keys(show.occupiedSeats).length * show.showPrice}
      </td>
    </tr>
  ))}
</tbody>

    </div>
  ): <Loading/>
}

export default ListShows 