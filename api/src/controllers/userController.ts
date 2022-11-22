import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import * as Yup from "yup";

const prisma = new PrismaClient();

class UserController {
    static auth = async (req: Request, res: Response) => {
        const { use_password, use_email } = req.body;
        const key_token = process.env.KEY_TOKEN;

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
                return res.status(400).json({ erro: error });
            } else if (error instanceof Error) {
                return res.status(400).json({
                    erro: error.message
                });
            }
        }

        try {
            const user = await prisma.users.findFirst({
                where: {
                    use_email
                }
            });
        } catch (error) {
            if (typeof error === "string") {
                return res.status(500).json({ erro: error });
            } else if (error instanceof Error) {
                return res.status(500).json({
                    erro: error.message
                });
            }
        }
    };
}

export default UserController;
