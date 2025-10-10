import axios from "axios";
import Movie from "../models/Movie.js"

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
            
            axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits`,{
              headers: {Authorization: `Bearer ${process.env.TMDB_API_KEY}`}
            })
          
         ])
         const movieApiData = movieDetailsResponse.data;
         const movieCareditsData = movieCareditsResponse.data;
          const movieDetail ={
            
        _id : movieId,
        title: movieApiData.title,
        overview:movieApiData. overview,
        poster_path :movieApiData.poster_path,
        backdrop_path:movieApiData.backdrop_path ,
        release_date :movieApiData.release_date,
        original_language:movieApiData.original_languag,
        genres:movieApiData.genres,
        casts:movieApiData.casts,
        tagline:movieApiData.tagline||"",
        vote_average:movieApiData.vote_average,
        runtime:movieApiData.runtime,

          }
          movie = await Movie.create(movieDetails),
      }
      
  }catch(error){
    console.error(error);
    res.json({success:false,message: error.message})
  }
 }