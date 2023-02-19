import { faker } from "@faker-js/faker/locale/pt_BR";
import { Address } from "@prisma/client";

const addressesSeed = async () => {
    const data = [];

    for (let i = 0; i < 300; i++) {
        const address: Omit<Address, "created_at" | "updated_at" | "id"> = {
            add_cep: faker.address.zipCode("#####-###"),
            add_city: faker.address.cityName(),
            add_complement: faker.address.streetAddress(),
            add_street: faker.address.street(),
            add_district: faker.address.secondaryAddress(),
            add_number: faker.random.numeric(),
            add_state: faker.address.state()
        };

        data.push(address);
    }

    return data;
};

export default addressesSeed;
