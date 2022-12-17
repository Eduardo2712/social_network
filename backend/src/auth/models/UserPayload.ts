export interface UserPayload {
    sub: number;
    use_email: string;
    use_name: string;
    iat?: number;
    exp?: number;
}
