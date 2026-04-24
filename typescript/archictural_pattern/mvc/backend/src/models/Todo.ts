import { DataTypes } from "sequelize";
import { sequelize } from "../config/db";

const Todo = sequelize.define(
    "Todo",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        task: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        is_complete: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
    },
    {
        tableName: "todos",
        timestamps: true,
    }
)

export { Todo };