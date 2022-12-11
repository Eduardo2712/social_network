import { faker } from "@faker-js/faker/locale/pt_BR";
import { User } from "@prisma/client";
import * as bcrypt from "bcrypt";

const usersSeed = async () => {
    const data = [];

    for (let i = 0; i < 100; i++) {
        const salt_rounds = bcrypt.genSaltSync(10);
        const text_password = "123456";
        const hash = bcrypt.hashSync(text_password, salt_rounds);

        const user: Omit<User, "created_at" | "updated_at" | "id"> = {
            use_id_type_user: 1,
            use_name: faker.name.fullName(),
            use_email: faker.internet.email(),
            use_phone: faker.phone.number(),
            use_text_status: faker.lorem.paragraph(1),
            use_id_photo: Math.floor(Math.random() * 300) + 1,
            use_date_status: faker.date.recent(),
            use_birth_data: faker.date.birthdate(),
            use_password: hash,
            use_delete: false
        };

        data.push(user);
    }

    return data;
};

export default usersSeed;
