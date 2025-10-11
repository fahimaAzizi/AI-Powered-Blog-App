import express from "express"
import { addShow, getNowPlayingMovies } from "./showController";


const showRoute = express.Router();
showRoute.get('/now-playing', getNowPlayingMovies)
showRoute.post('/add',addShow)   

export default showRoute;