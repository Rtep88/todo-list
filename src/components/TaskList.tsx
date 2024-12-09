import { useEffect, useState } from "react";
import { Task } from "./Task"

function TaskList() {
    const [data, setData] = useState<{ id: string, title: string, completed: boolean }[]>([]);


    useEffect(() => {
        fetch('http://localhost:3000/tasks', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => setData(data));
        return;
    }, []);

    return (
        <>
            <ul>
                {data.map((task) => (
                    <Task key={task.id} id={task.id}  text={task.title} completed={task.completed}/>
                ))}
            </ul>
        </>
    )
}

export default TaskList