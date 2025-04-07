// INIT EXPRESS 

import express from 'express';
import { Request, Response } from 'express';
const app = express();
app.use(express.json());

// INIT CORS
import cors from 'cors';
const allowedOrigins = ['http://localhost:5173', 'http://127.0.0.1:5173'];
app.use(cors({ origin: allowedOrigins, credentials: true }));

// INIT DOTENV
import dotenv from 'dotenv';
require('dotenv').config()
const port = process.env.PORT || 5000;


app.get("/", (req: Request, res: Response) => {
    res.json({
        message: "Hello World, and other stories"});
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});