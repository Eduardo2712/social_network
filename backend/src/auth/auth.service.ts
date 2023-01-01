import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";
import { UnauthorizedError } from "./errors/unauthorized.error";
import { UserService } from "../user/user.service";
import { UserPayload } from "./models/UserPayload";
import { UserToken } from "./models/UserToken";
import { User } from "src/types/user.type";

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly userService: UserService
    ) {}

    async login(
        user: Omit<User, "password">
    ): Promise<UserToken & { user: Omit<User, "password"> }> {
        const payload: UserPayload = {
            sub: user.id,
            email: user.email,
            use_name: user.use_name
        };

        return {
            access_token: this.jwtService.sign(payload),
            user
        };
    }

    async validateUser(email: string, password: string): Promise<User> {
        const user = await this.userService.findByEmail(email);

        if (user) {
            const is_password_valid = await bcrypt.compare(
                password,
                user.password
            );

            if (is_password_valid) {
                return {
                    ...user,
                    password: undefined
                };
            }
        }

        throw new UnauthorizedError(
            "Email address or password provided is incorrect."
        );
    }
}
