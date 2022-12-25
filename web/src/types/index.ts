export type ContextLogin = {
    auth: boolean;
    user: User | null;
    loading: boolean;
    logout: () => void;
    login: (email: string, password: string) => Promise<unknown>;
};

export type User = {
    id: number;
    use_id_type_user: number;
    use_name: string;
    email: string;
    use_phone: string;
    use_birth_data: Date;
    password: string;
    use_date_status: Date | null;
    use_delete: boolean;
    use_text_status: string | null;
    use_id_photo: number | null;
    files: File;
    created_at: Date;
    updated_at: Date;
};

export type File = {
    id: number;
    fil_id_post: number | null;
    fil_size: number;
    fil_name: string;
    fil_delete: boolean;
    fil_path: string;
    created_at: Date;
    updated_at: Date;
};
