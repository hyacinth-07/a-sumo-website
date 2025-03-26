// INIT EXPRESS 

import express from 'express';
import { Request, Response } from 'express';
const app = express();
app.use(express.json());

// INIT DOTENV
import dotenv from 'dotenv';
require('dotenv').config()
const port = process.env.PORT || 5000;



app.get("/", (req: Request, res: Response) => {
    res.send("Hello World");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});