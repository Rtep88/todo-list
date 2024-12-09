import { useState } from "react";
import { Task } from "./Task"
import { TaskIf } from "../App"

function TaskList({tasks}: {tasks: TaskIf[]}) {

    return (
        <>
            <ul>
                {tasks.map((task) => (
                    <Task key={task.id} id={task.id}  text={task.title} completed={task.completed}/>
                ))}
            </ul>
        </>
    )
}

export default TaskList