import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { PrismaService } from "src/prisma/prisma.service";
import * as bcrypt from "bcrypt";

@Injectable()
export class UsersService {
    constructor(private readonly prisma: PrismaService) {}

    create(create_user_dto: CreateUserDto) {
        const user = this.prisma.user.create({
            data: create_user_dto
        });

        return {
            ...user,
            password: null
        };
    }

    findByEmail(email: string) {
        return this.prisma.user.findFirst({
            where: { email },
            include: {
                photo: true
            }
        });
    }

    findAll() {
        return `This action returns all users`;
    }

    findOne(id: number) {
        return `This action returns a #${id} user`;
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        return `This action updates a #${id} user`;
    }

    remove(id: number) {
        return `This action removes a #${id} user`;
    }
}
