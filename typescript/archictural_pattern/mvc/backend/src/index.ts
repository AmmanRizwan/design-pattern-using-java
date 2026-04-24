import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import Route from "./routes";
import { sequelize } from "./config/db";

dotenv.config();

const PORT = process.env.PORT || 8000;
const ENV = process.env.NODE_ENV;

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    methods: process.env.CORS_METHODS?.split(","),
    credentials: Boolean(process.env.CORS_CREDENTIAL),
    maxAge: parseInt(process.env.CORS_AGE as string)
}))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (_req: Request, res: Response) => {
    res.status(200).json({ message: "Server is ready!" });
})

app.use("/v1/api", Route);

sequelize.sync({ alter: ENV === "development"}).then(() => {
    app.listen(PORT, () => {
        console.log(`Application is in the ${ENV === "development" ? "Development" : "On"}`);
        console.log(`Server is running on port ${PORT}`);
    })
})
.catch((err) => {
    console.log(err);
})