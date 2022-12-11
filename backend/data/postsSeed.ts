import { faker } from "@faker-js/faker/locale/pt_BR";
import { Post } from "@prisma/client";

const postsSeed = async () => {
    const data = [];

    for (let i = 0; i < 300; i++) {
        const post: Omit<Post, "created_at" | "updated_at" | "id"> = {
            pos_delete: false,
            pos_id_user: Math.floor(Math.random() * 100) + 1,
            pos_text: faker.lorem.sentences(1)
        };

        data.push(post);
    }

    return data;
};

export default postsSeed;
