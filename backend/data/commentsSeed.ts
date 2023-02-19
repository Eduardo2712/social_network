import { faker } from "@faker-js/faker/locale/pt_BR";
import { Comment } from "@prisma/client";

const commentsSeed = async () => {
    const data = [];

    for (let i = 0; i < 300; i++) {
        const comment: Omit<Comment, "created_at" | "updated_at" | "id"> = {
            com_delete: false,
            com_id_user: Math.floor(Math.random() * 100) + 1,
            com_text: faker.lorem.text(),
            com_id_post: Math.floor(Math.random() * 300) + 1
        };

        data.push(comment);
    }

    return data;
};

export default commentsSeed;
