import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import routerUser from "./userRoute";

const routes = (app: any) => {
    app.use(
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
        express.static("public"),
        routerUser,
        cors()
    );
};

export default routes;
