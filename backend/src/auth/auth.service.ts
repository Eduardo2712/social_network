import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";
import { UnauthorizedError } from "./errors/unauthorized.error";
import { User } from "../user/entities/user.entity";
import { UserService } from "../user/user.service";
import { UserPayload } from "./models/UserPayload";
import { UserToken } from "./models/UserToken";

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly userService: UserService
    ) {}

    async login(user: User): Promise<UserToken> {
        const payload: UserPayload = {
            sub: user.id,
            use_email: user.use_email,
            use_name: user.use_name
        };

        return {
            access_token: this.jwtService.sign(payload)
        };
    }

    async validateUser(use_email: string, use_password: string): Promise<User> {
        const user = await this.userService.findByEmail(use_email);

        if (user) {
            const isPasswordValid = await bcrypt.compare(
                use_password,
                user.use_password
            );

            if (isPasswordValid) {
                return {
                    ...user,
                    use_password: undefined
                };
            }
        }

        throw new UnauthorizedError(
            "Email address or password provided is incorrect."
        );
    }
}
