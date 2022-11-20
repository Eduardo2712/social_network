import bodyParser from "body-parser";
import express from "express";
import cors from "cors";

const routes = (app: any) => {
    app.use(
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
        express.static("public"),
        cors()
    );
};

export default routes;
