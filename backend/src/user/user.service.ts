import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./entities/user.entity";
import * as bcrypt from "bcrypt";
import { Prisma } from "@prisma/client";

@Injectable()
export class UserService {
    constructor(private readonly prisma: PrismaService) {}

    async create(createUserDto: CreateUserDto): Promise<User> {
        const data: Prisma.UserCreateInput = {
            ...createUserDto,
            use_password: bcrypt.hashSync(createUserDto.use_password, 10)
        };

        const createdUser = await this.prisma.user.create({ data });

        return {
            ...createdUser,
            use_password: undefined
        };
    }

    findByEmail(use_email: string) {
        return this.prisma.user.findFirst({ where: { use_email } });
    }
}
