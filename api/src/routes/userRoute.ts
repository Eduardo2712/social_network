import express from "express";
import UserController from "../controllers/userController";

const routerUser = express.Router();

routerUser.post("/auth", UserController.auth);

export default routerUser;
