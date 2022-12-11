import { Injectable } from "@nestjs/common";
import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

@Injectable()
export class UserService {
    create(createUserDto: Prisma.UserCreateInput) {
        return "This action adds a new user";
    }

    findAll() {
        return `This action updates all user`;
    }

    findOne(id: number) {
        const user = prisma.user.findUniqueOrThrow({
            where: {
                id
            }
        });

        return user;
    }

    update(id: number, updateUserDto: Prisma.UserUpdateInput) {
        return `This action updates a #${id} user`;
    }

    remove(id: number) {
        return `This action removes a #${id} user`;
    }
}
