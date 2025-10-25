import Booking from"../models/Booking.js"
import Show from "../models/Show.js"
import User from "../models/user.js"

export const isAdmin = async (req,res)=>{
    res.json({success: true, isAdmin: true})
}




export const getDashboardData = async (req, res) => {
  try {
    // Find all paid bookings
    const bookings = await Booking.find({ isPaid: true });

    // Find all active shows (where the date is greater than or equal to current date)
    const activeShows = await Show.find({
      showDateTime: { $gte: new Date() },
    }).populate('movie');

    // Count total users
    const totalUser = await User.countDocuments();

    // Prepare dashboard data
    const dashboardData = {
      totalBookings: bookings.length,
      totalRevenue: bookings.reduce(
        (acc, booking) => acc + booking.amount,
        0
      ),
      activeShows,
      totalUser,
    };

    // Send response
    res.json({ success: true, dashboardData });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: 'Error fetching dashboard data' });
  }
};
 
export const getAllShows = async (req,res)=>{
    try{
        const show = await Show.find({showDateTime:{$gte:new Date()}}).populate
        ('movie').sort({showDateTime:1})
        res.json({success:true, show})
    } catch (error) {
       console.error(error);
       res.json({success : flase , message: error.message})
    }
}

export const getAllBooking = async (req,res)=>{
   try{
    const bookings = await Booking.find({}).populate('user').populate({
      path: " show",
      populate: {path: "movie"}
    }).sort({createdAt: -1})
    res.json({success :true , bookings})

   }catch (error){
     console.error(error);
    res.json({success : flase , message: error.message})
   }
}
