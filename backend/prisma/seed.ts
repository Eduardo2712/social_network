import { PrismaClient } from "@prisma/client";
import addressesSeed from "data/addressesSeed";
import commentsFilesSeed from "data/commentsFilesSeed";
import commentsSeed from "data/commentsSeed";
import filesSeed from "../data/filesSeed";
import postsFilesSeed from "../data/postsFilesSeed";
import postsSeed from "../data/postsSeed";
import usersSeed from "../data/usersSeed";

const prisma = new PrismaClient();

const main = async () => {
    await prisma.address.createMany({
        data: await addressesSeed()
    });

    await prisma.user.createMany({
        data: await usersSeed()
    });

    await prisma.post.createMany({
        data: await postsSeed()
    });

    await prisma.comment.createMany({
        data: await commentsSeed()
    });

    await prisma.file.createMany({
        data: await filesSeed()
    });

    await prisma.postFile.createMany({
        data: await postsFilesSeed()
    });

    await prisma.commentFile.createMany({
        data: await commentsFilesSeed()
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
