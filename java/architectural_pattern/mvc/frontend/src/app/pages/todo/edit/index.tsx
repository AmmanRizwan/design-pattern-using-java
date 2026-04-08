import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getTodoBydId, updateTodoById } from "../../../../services/todo";

interface ITodo {
    task: string;
}

const EditTodo = () => {
    const navigate = useNavigate();
    const [data, setData] = useState<ITodo>({ task: "" });
    const { id } = useParams();

    const updateTodo = async () => {
        const response = await updateTodoById(id!, data);
        console.log(response.data);
        navigate("/");
    } 

    useEffect(() => {
        const fetchSingleTodo = async () => {
            const response = await getTodoBydId(id!);
            console.log(response.data);
            console.log(response.data.task);
            setData({task: response.data.task});
        }
        fetchSingleTodo();
    }, [id])

    return (
        <div>
            <div>Editing the Todo</div>

            <input type="text" value={data.task} onChange={(e) => setData({task: e.target.value})} />

            <button onClick={async () => { await updateTodo(); }}>Update</button>

        </div>
    )
}

export default EditTodo;