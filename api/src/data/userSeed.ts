import { faker } from "@faker-js/faker/locale/pt_BR";
import { User } from "../types";
import bcrypt from "bcrypt";

const userSeed = async () => {
    const salt_rounds = 10;
    const text_password = "123456";
    const data: Omit<User, "created_at" | "updated_at" | "id">[] = [];

    for (let i = 0; i < 100; i++) {
        const password = await bcrypt
            .hash(text_password, salt_rounds)
            .then((hash) => hash);

        const user: Omit<User, "created_at" | "updated_at" | "id"> = {
            use_id_type_user: 1,
            use_name: faker.name.fullName(),
            use_email: faker.internet.email(),
            use_phone: faker.phone.number(),
            use_birth_data: faker.date.birthdate(),
            use_password: password
        };

        data.push(user);
    }

    return data;
};

export default userSeed;
