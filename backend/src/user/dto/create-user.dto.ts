import {
    IsEmail,
    IsString,
    Matches,
    MaxLength,
    MinLength
} from "class-validator";
import { User } from "../entities/user.entity";

export class CreateUserDto extends User {
    @IsEmail()
    @IsString()
    use_email: string;

    @IsString()
    @MinLength(4)
    @MaxLength(20)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: "password too weak"
    })
    @IsString()
    use_password: string;
}