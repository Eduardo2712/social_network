import { faker } from "@faker-js/faker/locale/pt_BR";
import bcrypt from "bcrypt";

const userSeed = async () => {
    const salt_rounds = 10;
    const text_password = "123456";
    const data = [];

    for (let i = 0; i < 100; i++) {
        const password = await bcrypt
            .hash(text_password, salt_rounds)
            .then((hash) => hash);

        const user = {
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
