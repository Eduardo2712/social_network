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
                use_date_birth: create_user_dto.use_date_birth,
                use_name: create_user_dto.use_name,
                use_phone: create_user_dto.use_phone,
                use_username: create_user_dto.use_username,
                photo: {
                    create: {
                        ...create_user_dto.photo
                    }
                },
                address: {
                    create: {
                        ...create_user_dto.address
                    }
                }
            }
        });

        return {
            ...user,
            address: create_user_dto.address,
            photo: create_user_dto.photo,
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
