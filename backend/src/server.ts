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

// PRISMA ORM
import { PrismaClient } from './generated/prisma';
const prisma = new PrismaClient();

async function main() {
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});

// BASIC ROUTES    
app.get("/", async (req: Request, res: Response) => {

	// commented out because for now we don't need to access the volume
	// in the future it should be properly implemented
	
    // const allRikishi = await prisma.rikishi.findMany();
    // res.json(allRikishi);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});