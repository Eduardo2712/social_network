import { Prisma } from "@prisma/client";

export class User implements Prisma.UserCreateInput {
    id: number;
    created_at?: string | Date;
    updated_at?: string | Date;
    use_id_type_user: number;
    use_name: string;
    use_email: string;
    use_phone: string;
    use_birth_data: string | Date;
    use_password: string;
    use_date_status?: string | Date;
    use_delete?: boolean;
    use_text_status?: string;
    files?: Prisma.FileCreateNestedOneWithoutUsersInput;
    post?: Prisma.PostCreateNestedManyWithoutUsersInput;
}
