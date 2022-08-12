import { PrismaClient } from '@prisma/client';

declare global {
    var prisma: PrismaClient | undefined
}

const prisma = new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
    global.prisma = prisma;
}

export const dbClient = global.prisma || prisma;
