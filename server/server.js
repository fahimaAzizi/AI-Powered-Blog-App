import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './configs/db.js';
import { clerkMiddleware } from '@clerk/express';
import { serve } from "inngest/express";
import { inngest, functions } from './Inngest/index.js'
import showRouter from './routes/showRoutes.js'; // ✅ fix name and path

 const app = express();
const port = 3000;

// ✅ You must CALL connectDB(), not just reference it
await connectDB();

app.use(express.json());
app.use(cors());
app.use(clerkMiddleware());

// ✅ Fix typo: 'inngset' → 'inngest'
app.use('/api/inngest', serve({ client: inngest, functions }));

// ✅ Fix route path: use '/api/show' not './api/show'
app.use('/api/show', showRouter);

app.get('/', (req, res) => res.send('Server is Live!'));


app.listen(port, () =>
  console.log(`Server listening at http://localhost:${port}`)
);
