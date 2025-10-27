import { populate } from "dotenv";



export const getUserBookings = async (req, res)=>{
   try {
       const user = req.auth().userId;

       const bookings = await Booking.find({user}).populate({
        path: "show",
        populate : {path: "movie"}
       }).sort({createdAt :-1})
       res.json({success: true , bookings})
   } catch (error) {
        console.error(error.message);
        res.json({success : false , message: error.message})
   }
}

export const addFavoriteMovie = async (req, res) => {
  try {
    const { movieId } = req.body;
    const userId = req.auth.userId;

    // Get user data from Clerk
    const user = await clerkClient.users.getUser(userId);

    // Initialize favorites array if not present
    if (!user.privateMetadata.favorites) {
      user.privateMetadata.favorites = [];
    }

    // Check if the movie already exists in favorites
    if (!user.privateMetadata.favorites.includes(movieId)) {
      user.privateMetadata.favorites.push(movieId);
    }

    // Update user metadata in Clerk
    await clerkClient.users.updateUserMetadata(userId, {
      privateMetadata: user.privateMetadata,
    });

    res.json({ success: true, message: "Movie added to favorites successfully" });

  } catch (error) {
    console.error(error.message);
    res.json({ success: false, message: error.message });
  }
};