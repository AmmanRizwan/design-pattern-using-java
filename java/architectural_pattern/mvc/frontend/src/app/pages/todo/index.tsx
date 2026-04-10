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
            <h1>Todo List</h1>

            <div>
                <input type="text" value={task} onChange={(e) => setTask(e.target.value)} /> <button onClick={async () => { await submit({task: task}); setTask("") }}>Submit</button>
            </div>

            <div>
                <h3>Todo</h3>
                {
                    todo.data.map((value: ITodo, index: number) => {
                        return (
                            <div key={index} style={{ border: "1px"}}>
                                <p>Task: {value.task}</p>
                                <div>
                                    <p>Completed {value.is_completed ? "COMPLETED" : "NOT COMPLETED"}</p> 
                                    {
                                        !value.is_completed ? (
                                            <input type="checkbox" onClick={async () => await updateComplete(value.id)} />
                                        ) : null
                                    }
                                </div>
                                <button onClick={() => {
                                    navigate(`/edit/${value.id}`)
                                }}>Edit</button> <button onClick={async () => { await deleteById(value.id)} }>delete</button>
                            </div>                            
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Todos;