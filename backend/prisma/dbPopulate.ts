import { PrismaClient } from '../src/generated/prisma';
const prisma = new PrismaClient();

// 1. Clean the db

async function cleanDb(): Promise<void> {
    await prisma.rikishi.deleteMany();
    console.log('- - - Database cleaned - - -');
}

// 2. Add some rikishi
async function addRikishi(): Promise<void> {
    await prisma.rikishi.createMany({
        data: newRikishi,
    });
    console.log('- - - Rikishi added to the database - - -');
}

// A Rikishi table
type Rikishi = {
    name: string;
    age: number;
}

const newRikishi: Array<Rikishi> = [
    {name: 'Hakuho', age: 35},
    {name: 'Asashoryu', age: 40},
    {name: 'Kisenosato', age: 36},
    {name: 'Kakuryu', age: 37},
    {name: 'Harumafuji', age: 38},
    {name: 'Takanohana', age: 45},
]

async function main() {
    console.log('--- Populating the database ---');
    await cleanDb();
    await addRikishi();
    console.log('--- Database populated ---');
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        throw e;
    });