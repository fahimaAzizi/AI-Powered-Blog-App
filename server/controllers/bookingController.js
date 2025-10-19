import Show from "../models/Show.js"


const checkSeatsAvailability =async (showId,selectedSeats)=>{
 try{
    const showData = await showId.findById(showId)
    if(!showData) return false;

    const occupiedSeats =showData.occupiedSeats;
    const isAnySeatTaken =selectedSeats.some(seat => occupiedSeats[seat])
 }catch(error){

 }

  
}