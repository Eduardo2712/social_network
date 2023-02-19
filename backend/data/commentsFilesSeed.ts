import { CommentFile } from "@prisma/client";

const commentsFilesSeed = async () => {
    const data = [];

    for (let i = 0; i < 300; i++) {
        const file: Omit<CommentFile, "created_at" | "updated_at" | "id"> = {
            cfi_id_post: Math.floor(Math.random() * 100) + 1,
            cfi_id_file: Math.floor(Math.random() * 100) + 1
        };

        data.push(file);
    }

    return data;
};

export default commentsFilesSeed;
