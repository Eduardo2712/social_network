import bodyParser from "body-parser";
import express, { Router } from "express";
import cors from "cors";
import routerUser from "./userRoute";
import AuthVerify from "../middlewares/authVerify";

const routes = (app: Router) => {
    const unauthorizedPaths = ["/auth"];

    app.all("*", (req, res, next) => {
        if (unauthorizedPaths.indexOf(req.path) === -1) {
            AuthVerify.verifyToken(req, res);
        }

        next();
    });

    app.use(
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
        express.static("public"),
        routerUser,
        cors()
    );
};

export default routes;
