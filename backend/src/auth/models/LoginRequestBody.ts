import { IsEmail, IsString } from "class-validator";

export class LoginRequestBody {
    @IsEmail()
    use_email: string;

    @IsString()
    use_password: string;
}
