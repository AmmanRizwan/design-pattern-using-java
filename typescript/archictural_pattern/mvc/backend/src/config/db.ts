import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const USER = process.env.DB_USER as string;
const PORT = parseInt(process.env.DB_PORT as string);
const NAME = process.env.DB_NAME as string;
const HOST = process.env.DB_HOST as string;
const PASS = process.env.DB_PASSWORD as string;

const sequelize = new Sequelize(
    NAME,
    USER,
    PASS,
    {
        host: HOST,
        port: PORT,
        dialect: "postgres"
    }
);

export { sequelize };