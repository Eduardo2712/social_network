import { PrismaClient } from "@prisma/client";
import filesSeed from "../data/filesSeed";
import postsSeed from "../data/postsSeed";
import usersSeed from "../data/usersSeed";

const prisma = new PrismaClient();

const main = async () => {
    await prisma.user.createMany({
        data: await usersSeed()
    });

    await prisma.post.createMany({
        data: await postsSeed()
    });

    await prisma.file.createMany({
        data: await filesSeed()
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
