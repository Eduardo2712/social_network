import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import { User } from "../types/index";
import * as Yup from "yup";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

class UserController {
    static auth = async (req: Request, res: Response) => {
        const { use_password, use_email } = req.body;
        const key_token = String(process.env.KEY_TOKEN);

        const schema = Yup.object().shape({
            use_email: Yup.string()
                .email("Fill in a valid e-mail!")
                .required("Fill in this field!"),
            use_password: Yup.string()
                .min(6, "Password must be at least 6 characters long!")
                .required("Fill in this field!")
        });

        try {
            await schema.validate(req.body);
        } catch (error) {
            if (typeof error === "string") {
                return res.status(400).json({ error: error });
            } else if (error instanceof Error) {
                return res.status(400).json({
                    error: error.message
                });
            }
        }

        try {
            const user: User | null = await prisma.users.findFirst({
                where: {
                    use_email
                },
                include: {
                    files: true
                }
            });

            if (!user) {
                return res.status(400).json({ error: "User not found!" });
            }

            bcrypt.compare(
                use_password,
                user.use_password ?? "",
                (err, result) => {
                    if (!result) {
                        return res
                            .status(400)
                            .json({ error: "User not found!" });
                    } else {
                        const token = jwt.sign(
                            { id: user.id, email: user.use_email },
                            key_token,
                            {
                                expiresIn: 604800
                            }
                        );

                        delete user.use_password;

                        return res.status(200).json({ user, token });
                    }
                }
            );
        } catch (error) {
            if (typeof error === "string") {
                return res.status(500).json({ error: error });
            } else if (error instanceof Error) {
                return res.status(500).json({
                    error: error.message
                });
            }
        }
    };
}

export default UserController;
