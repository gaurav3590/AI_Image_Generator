import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';

import connectDB from './mongoDB/connect.js';
import postRoutes from './routes/postRoutes.js';
import aiRoutes from './routes/aiRoutes.js';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use('/api/v1/post',postRoutes);
app.use('/api/v1/AI',aiRoutes);
app.get('/', async (req, res) => {
    res.send('Hello From AI Bot');
})

const startServer = async () => {
    try {
        connectDB(process.env.MONGODB_URL)
        app.listen(8000, () => { console.log('Server has Started on port https://localhost:8000') })
    } catch (error) {
        console.log(error);
    }
}

startServer();