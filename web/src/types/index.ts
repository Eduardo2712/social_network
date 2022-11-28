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
    use_email: string;
    use_phone: string;
    use_password: string;
    use_birth_data: Date;
    created_at: Date;
    updated_at: Date;
};
