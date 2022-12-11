import { faker } from "@faker-js/faker/locale/pt_BR";
import { File } from "@prisma/client";

const filesSeed = async () => {
    const data = [];

    for (let i = 0; i < 300; i++) {
        const file: Omit<File, "created_at" | "updated_at" | "id"> = {
            fil_delete: false,
            fil_id_post: Math.floor(Math.random() * 300) + 1,
            fil_path: faker.image.imageUrl(),
            fil_name: faker.lorem.word(),
            fil_size: 2000
        };

        data.push(file);
    }

    return data;
};

export default filesSeed;
