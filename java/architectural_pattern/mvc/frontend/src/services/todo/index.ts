import api from "../api";

interface ICreateTask {
    task: string;
}

const getTodos = async () => {
    const response = await api.get(`/v1/api/todo`);
    return response.data; 
}

const getTodoBydId = async (id: string) => {
    const response = await api.get(`/v1/api/todo/${id}`);
    return response.data;
}

const createTodo = async (payload: ICreateTask) => {
    const response = await api.post(`/v1/api/todo`, payload);
    return response.data;
}

const updateTodoById = async (id: string, payload: ICreateTask) => {
    const response = await api.put(`/v1/api/todo/${id}`, payload);
    return response.data;
}

const deleteTodoById = async (id: string) => {
    const response = await api.delete(`/v1/api/todo/${id}`);
    return response.data;
}

const setCompleteTodoById = async (id: string) => {
    const response = await api.put(`/v1/api/todo/completed/${id}`);
    return response.data;
}

export {
    createTodo,
    getTodos,
    getTodoBydId,
    updateTodoById,
    deleteTodoById,
    setCompleteTodoById
}