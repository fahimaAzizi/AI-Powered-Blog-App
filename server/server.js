import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import connectDB from './configs/db.js';
import { clerkMiddleware } from '@clerk/express'
import {serve} from "inngest/express";
import { inngest,functions } from './src/inngest';
import showRouter from './routes/showRouter'

const app = express();

const port = 3000;

await connectDB

app.use(express.json())
app.use(cors())
app.use(clerkMiddleware())

app.get('/', (req,res)=>res.send('Server is Live!'))
app.use('/api/inngset', serve({ client: inngest, functions }))
app.use('./api/show', showRouter)

app.listen(port ,()=> console.log(`server listening at http://localhost:${port}`));