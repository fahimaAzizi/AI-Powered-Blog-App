import Show from "../models/Show.js"


const checkSeatsAvailability =async (showId,selectedSeats)=>{
 try{
    const showData = await showId.findById(showId)
    if(!showData) return false;

    const occupiedSeats =showData.occupiedSeats;
    const isAnySeatTaken =selectedSeats.some(seat => occupiedSeats[seat])
 }catch(error){
   console.log(error.message);
   return false;
 }

  
}

export const createBooking = ascy(req,res)=>{
   try {
      const {userId} = req.auth();
      const {showId, selectedSeats}= req.body;
      const {origin} = req.headers;


      const isAvailabe = await checkSeatsAvailability(showId,selectedSeats)

      if(!isAvailabe){
         
      }
   } catch(error){

   }
}