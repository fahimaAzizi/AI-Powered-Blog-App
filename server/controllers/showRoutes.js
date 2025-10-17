import express from "express"
import { addShow, getNowPlayingMovies, getShow } from "./showController";


const showRoute = express.Router();

showRoute.get('/now-playing', getNowPlayingMovies)
showRoute.post('/add',addShow)   
showRoute.get("all", getShow)
showRoute.get("/:movieId", getShow)

export default showRoute;