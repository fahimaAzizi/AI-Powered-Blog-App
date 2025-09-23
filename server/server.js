import express from 'express';
import cors from 'cors';
import 'dotenv/config'

const app =express();

const port = 3000 ;

app.use(express.json())
app.use(cors())

app.getMaxListeners('/')
