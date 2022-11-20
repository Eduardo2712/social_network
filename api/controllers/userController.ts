import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

class UserController {
    static auth = async (req: Request, res: Response) => {};
}

module.exports = UserController;
