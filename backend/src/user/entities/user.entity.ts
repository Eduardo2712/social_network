import { Prisma } from "@prisma/client";

export class User {
    id?: number;
    use_name: string;
    email: string;
    use_phone: string;
    use_birth_data: string | Date;
    password: string;
    use_date_status?: string | Date;
    use_delete?: boolean;
    use_text_status?: string;
    files?: Prisma.FileCreateNestedOneWithoutUsersInput;
    post?: Prisma.PostCreateNestedManyWithoutUsersInput;
}
