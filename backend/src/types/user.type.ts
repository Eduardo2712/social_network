import { File } from "./file.type";

export class User {
    id?: number;
    use_id_type_user: number;
    use_id_photo?: number;
    use_name: string;
    email: string;
    use_phone: string;
    use_birth_data: string | Date;
    password: string;
    use_date_status?: string | Date;
    use_delete: boolean;
    use_text_status?: string;
    created_at?: Date;
    updated_at?: Date;
    photo?: File;
}
