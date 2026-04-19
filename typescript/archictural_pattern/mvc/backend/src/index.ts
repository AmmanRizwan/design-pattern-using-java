import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";

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

app.get("/", (_req: Request, res: Response) => {
    res.status(200).json({ message: "Server is ready!" });
})

app.listen(PORT, () => {
    console.log(`Application is in the ${ENV === "development" ? "Development" : "On"}`);
    console.log(`Server is running on port ${PORT}`);
})