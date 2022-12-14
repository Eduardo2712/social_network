import {
    IsEmail,
    IsString,
    Matches,
    MaxLength,
    MinLength,
    IsDate
} from "class-validator";
import { User } from "src/types/user.type";

export class CreateUserDto extends User {
    @IsEmail()
    @IsString()
    email: string;

    @IsString()
    @MinLength(4)
    @MaxLength(20)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: "password too weak"
    })
    @IsString()
    password: string;

    @IsString()
    @MaxLength(255)
    use_name: string;

    use_phone: string;

    @IsDate()
    use_birth_data: Date;
}
