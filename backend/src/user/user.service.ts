import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "src/types/user.type";
import * as bcrypt from "bcrypt";

@Injectable()
export class UserService {
    constructor(private readonly prisma: PrismaService) {}

    async create(create_user_dto: CreateUserDto): Promise<User> {
        const user = await this.prisma.user.create({
            data: {
                use_id_type_user: 1,
                use_delete: false,
                password: bcrypt.hashSync(create_user_dto.password, 10),
                email: create_user_dto.email,
                use_birth_data: create_user_dto.use_birth_data,
                use_name: create_user_dto.use_name,
                use_phone: create_user_dto.use_phone,
                photo: {
                    create: {
                        ...create_user_dto.photo
                    }
                }
            }
        });

        return {
            ...user,
            password: undefined
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
}
