import axios from "axios";

export const getNowPlayingMovies = async (req, res) => {
  try {
    // Fetch now playing movies from TMDB API
    const { data } = await axios.get("https://api.themoviedb.org/3/movie/now_playing", {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
      },
    });

    // Extract movie list from response
    const movies = data.results;

    // Send success response
    res.json({ success: true, movies: movies });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};
 export const addShow = async (req, res) =>{
  try{
      const {movieId, showsInput ,showPrice} =req.body

      let movie = await Movie.findById(movieId)

      if (!movie){
         const[movieDetailsResponse ,movieCareditsResponse] =await Promise.all([
          axios.get(`https://api.themoviedb.org/3/movie/${movieId}`,{
            headers: {Authorization: `Bearer ${process.env.TMDB_API_KEY}`}}),
        

         ])
      }
      
  }catch(error){
    console.error(error);
    res.json({success:false,message: error.message})
  }
 }