import { useState } from "react";
import { DATABASE_URL, ITask } from "../App";


export function Task({ id, text, completed, tasks, setTasks }: { id: string, text: string, completed: boolean, tasks: ITask[], setTasks: any }) {
    const [completedState, setCompleted] = useState(completed);
    const [deleted, setDeleted] = useState(false);

    if (!deleted) {
        return (
            <li>
                <input type='checkbox' checked={completedState} onChange={(e) => { handleCheck(e.target.checked, id, text, setCompleted, tasks, setTasks) }}></input>
                <p className={completedState ? 'checked' : ''}>{text}</p>
                <button onClick={() => HandleDelete(id, setDeleted)}>Remove</button>
            </li>
        )
    }
}

function handleCheck(checked: boolean, id: string, text: string, setCompleted: any, tasks: ITask[], setTasks: any) {
    setCompleted(checked);

    fetch(DATABASE_URL + '/tasks/${id}', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title: text, completed: checked })
    });

    tasks.find((task: ITask) => task.id == id)!.completed = checked;

    setTasks([...tasks].sort((a: ITask, b: ITask) => (a.completed ? 1 : 0) - (b.completed ? 1 : 0)));
}

function HandleDelete(id: string, setDeleted: any) {
    fetch(DATABASE_URL + '/tasks/' + id, {
        method: 'DELETE',
    })

    setDeleted(true);
}