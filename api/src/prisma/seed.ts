import { PrismaClient } from "@prisma/client";
import userSeed from "../data/userSeed";

const prisma = new PrismaClient();

const main = async () => {
    await prisma.users.createMany({
        data: await userSeed()
    });
};

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(() => {
        prisma.$disconnect();
    });
