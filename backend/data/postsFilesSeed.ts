import { PostFile } from "@prisma/client";

const postsFilesSeed = async () => {
    const data = [];

    for (let i = 0; i < 300; i++) {
        const post_file: Omit<PostFile, "created_at" | "updated_at" | "id"> = {
            pfi_id_post: Math.floor(Math.random() * 100) + 1,
            pfi_id_file: Math.floor(Math.random() * 100) + 1
        };

        data.push(post_file);
    }

    return data;
};

export default postsFilesSeed;
