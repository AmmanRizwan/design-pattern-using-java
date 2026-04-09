import { useEffect, useState } from "react";
import { createTodo, deleteTodoById, getTodos, setCompleteTodoById } from "../../../services/todo";
import type { ITodo } from "../../../services/todo/interface";
import { useNavigate } from "react-router-dom";

interface IData {
    task: string;
}

const Todos = () => {
    const navigate = useNavigate();
    const [data, setData] = useState<IData>({ task : "" });
    const [todos, setTodos] = useState([]);

    const submitData = async () => {
        const response = await createTodo(data);
        console.log(response.data);
    }

    const completedTodo = async (id: string) => {
        const response = await setCompleteTodoById(id);
        console.log(response);
    }

    const deleteData = async (id: string) => {
        const response = await deleteTodoById(id);
        console.log(response.data);
    }

    const fetchData = async () => {
        const response = await getTodos();
        setTodos(response.data);
    }
    
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <h1>Todo List</h1>

            <div>
                <input type="text" value={data.task} onChange={(e) => setData({task: e.target.value})} /> <button onClick={() => submitData()}>Submit</button>
                <button onClick={() => { console.log(todos) }}>Check the Data</button>
            </div>

            <div>
                <h3>Todo</h3>
                {
                    todos.map((value: ITodo, index) => {
                        return (
                            <div key={index} style={{ border: "1px"}}>
                                <p>Task: {value.task}</p>
                                <div>
                                    <p>Completed {value.is_completed ? "COMPLETED" : "NOT COMPLETED"}</p> 
                                    {
                                        !value.is_completed ? (
                                            <input type="checkbox" onClick={async () => await completedTodo(value.id)} />
                                        ) : null
                                    }
                                </div>
                                <button onClick={() => { navigate(`/edit/${value.id}`)}}>Edit</button> <button  onClick={async () => {
                                    await deleteData(value.id)
                                }}>delete</button>
                            </div>                            
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Todos;