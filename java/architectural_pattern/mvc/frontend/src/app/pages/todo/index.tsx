import "./index.css";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { createTodo, deleteTodoById, getTodos, setCompleteTodoById } from "../../../services/todo";
import type { ITodo } from "../../../services/todo/interface";
import { useNavigate } from "react-router-dom";

const Todos = () => {
    const queryClient = useQueryClient();

    const { data: todo, isLoading } = useQuery({
        queryFn: () => getTodos(),
        queryKey: ['todos'],
    })

    const { mutateAsync: submit } = useMutation({
        mutationFn: (d: { task: string }) => createTodo(d),
        onSuccess: () => {
            queryClient.invalidateQueries(["todos"]);
        },
    });

    const { mutateAsync: deleteById } = useMutation({
        mutationFn: (id: string) => deleteTodoById(id),
        onSuccess: () => {
            queryClient.invalidateQueries(['todos']);
        }
    })

    const { mutateAsync: updateComplete } = useMutation({
        mutationFn: (id: string) => setCompleteTodoById(id),
        onSuccess: () => {
            queryClient.invalidateQueries(['todos']);
        }
    })

    const navigate = useNavigate();
    const [task, setTask] = useState("");
    
    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <div className="todo-title">
                <h1>Todo List</h1>
            </div>

            <div className="todo-input">
                <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Enter your Task" /> <button onClick={async () => { await submit({task: task}); setTask("") }}>Submit</button>
            </div>

            <div>
                <div className="todo-list-title">
                    <h3>Todo</h3>
                </div>
                {
                    todo.data.map((value: ITodo, index: number) => {
                        return (
                            <div className="list-todo-body" key={index} style={{ border: "1px"}}>
                                <div className="todo-content">
                                    <p>Task: {value.task}</p>
                                    <p>Completed {value.is_completed ? "COMPLETED" : "NOT COMPLETED"}</p> 
                                    {
                                        !value.is_completed ? (
                                            <input type="checkbox" onClick={async () => await updateComplete(value.id)} />
                                        ) : null
                                    }
                                </div>
                                <div className="todo-option">
                                    <button onClick={() => {
                                        navigate(`/edit/${value.id}`)
                                    }}>Edit</button> <button onClick={async () => { await deleteById(value.id)} }>delete</button>
                                </div>
                            </div>                            
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Todos;