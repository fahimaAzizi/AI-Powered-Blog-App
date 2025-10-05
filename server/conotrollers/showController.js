


export const getNowPlayingMovies = async(req , res) =>{
    try{
       await axios.get('https://api.themoviedb.org/3/movie/now_playing',{
        Headers: {Authorization: `bearer ${process.env.TMDB_API_KEY}`}
       })

       const movies =DataTransfer.results;
       res.json({success :true ,movies: movies})

    }catch (error ){
      console.error(error);
      res.json({success:false, message:error.message})
    }
  
}