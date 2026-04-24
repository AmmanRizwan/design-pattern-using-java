import { Request, Response } from "express";
import { Todo } from "../../models/Todo";

const get = async (req: Request, res: Response) => {
    try {
        const todos = await Todo.findAll({
            order: [["createdAt", "DESC"]],
        });

        if (!todos) {
            return res.status(404).json({ error: "cannot find the todos data"});
        }

        return res.status(200).json({ message: "Todos fetched Successfully", data: todos });
    }
    catch (err) {
        res.status(500).json({ error: "Internal Server Error"});
    }
}

const create = async (req: Request, res: Response) => {
    try {
        const { task } = req.body;

        if (!task) {
            return res.status(400).json({ error: "task field is required"});
        }

        const todoRecord = await Todo.create({
            task: task
        });

        if (!todoRecord) {
            return res.status(404).json({ error: "Something went wrong! Cannot create a todo record"});
        }

        res.status(201).json({ message: "Todo created Successfully", data: todoRecord.dataValues });

    }
    catch (err) {
        res.status(500).json({ error: "Internal Server Error"});
    }
}

const getById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ error: "invalid id or id not found!"});
        }

        const todoRecord = await Todo.findByPk(id as string);

        if (!todoRecord) {
            return res.status(404).json({ error: "Something went wrong! Cannot find the todo!"});
        }

        res.status(200).json({ message: "Todo fetched Successfully", data: todoRecord.dataValues });
    }
    catch (err) {
        res.status(500).json({ error: "Internal Server Error"});
    }
}

const updateById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { task } = req.body;

        if (!id) {
            return res.status(400).json({ error: "invalid id or id not found!"});
        }

        if (!task) {
            return res.status(400).json({ error: "task field is required!"});
        }

        const todoRecord = await Todo.findByPk(id as string);

        if (!todoRecord) {
            return res.status(404).json({ error: "something went wrong! cannot find the todo record"});
        }

        todoRecord.update({
            task
        });

        res.status(200).json({ message: "Todo updated Successfully!"});

    }
    catch (err) {
        res.status(500).json({ error: "Internal Server Error"});
    }
}

const deleteById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ error: "invalid id or id not found!"});
        }

        const todoRecord = await Todo.findByPk(id as string);

        if (!todoRecord) {
            return res.status(404).json({ error: "something went wrong! cannot find the todo record"});
        }

        todoRecord.destroy();

        return res.status(200).json({ message: "Todo deleted Successfully!"});
    }
    catch (err) {
        res.status(500).json({ error: "Internal Server Error"});
    }
}

export {
    get,
    getById,
    deleteById,
    updateById,
    create
}