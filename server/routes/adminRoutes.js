import express from "express";
import {portectAdmin} from "../middleware/auth.js";
import {getAllBookings,getAllBookings,getDashboardData,isAdmin} from "../controllers/adminController.js"
const adminRouter = express.Router();

adminRouter.get('./is-admin',portectAdmin, isAdmin)
adminRouter.get('./dashboard',portectAdmin, getDashboardData)
adminRouter.get('./all-shows',portectAdmin, getAllShows)
adminRouter.get('./all-bookings',portectAdmin,getAllBookings )
