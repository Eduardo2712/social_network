import express from "express";
import cors from "cors";
import "dotenv/config";
import routes from "./routes";

const app = express();
const porta = process.env.PORTA;

app.use(cors());
app.use(express.json());

routes(app);

app.listen(process.env.PORT || 3333, () => {
    console.log(`Running port ${process.env.PORT || 3333}`);
});
