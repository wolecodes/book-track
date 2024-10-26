import { PrismaClient } from '@prisma/client';

// This allows using PrismClient in other files as single cached instance
const prisma = new PrismaClient();

export default prisma;
