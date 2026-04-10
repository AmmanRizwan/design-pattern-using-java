import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getTodoBydId, updateTodoById } from "../../../../services/todo";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const EditTodo = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const [task, setTask] = useState("");
    const { id } = useParams();

    const { data, isLoading } = useQuery({
        queryFn: () => getTodoBydId(id as string),
        queryKey: ['todo'],
    });

    const { mutateAsync: submit } = useMutation({
        mutationFn: (task: {task: string}) => updateTodoById(id as string, task),
        onSuccess: () => {
            queryClient.invalidateQueries(['todos']);
        }
    })
    
    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <div>Editing the Todo</div>

            <input type="text" defaultValue={data.data.task} onChange={(e) => setTask(e.target.value)}  />

            <button onClick={async () => { 
                await submit({ task: task });
                navigate("/");
             }}>Update</button>

        </div>
    )
}

export default EditTodo;