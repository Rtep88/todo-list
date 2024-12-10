import { Task } from "./Task"
import { ITask } from "../App"

function TaskList({tasks, setTasks}: {tasks: ITask[], setTasks: any}) {

    return (
        <>
            <ul>
                {tasks.map((task) => (
                    <Task key={task.id} id={task.id}  text={task.title} completed={task.completed} tasks={tasks} setTasks={setTasks}/>
                ))}
            </ul>
        </>
    )
}

export default TaskList