


export const getNowPlayingMovies = async(req , res) =>{
    try{
       await axios.get('https://api.themoviedb.org/3/movie/now_playing')

    }catch (error ){

    }
  
}