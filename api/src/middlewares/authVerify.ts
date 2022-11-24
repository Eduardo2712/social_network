import { Request, Response } from "express";
import jwt from "jsonwebtoken";

class AuthVerify {
    static verifyToken = async (req: Request, res: Response) => {
        const token = req.headers.authorization?.split(" ")[1];
        const key_token = String(process.env.KEY_TOKEN);

        if (!token) {
            return res.status(401).json({
                message: "Invalid token"
            });
        }

        jwt.verify(token, key_token, (error: any) => {
            if (error) {
                return res.status(401).json({
                    message: "Unauthorized user"
                });
            }

            return res.status(200).json({
                autenticado: true,
                mensagem: "Authorized user"
            });
        });
    };
}

export default AuthVerify;
