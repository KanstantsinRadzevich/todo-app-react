import { useState } from "react";
import { parseDate } from "../../common/theme/utils";
import ActiveTasks from "../activeTasks";
import AddTask from "../addTask";
import CompletedTasks from "../completedTasks";
import { v4 as uuid4 } from 'uuid';



const TaskManager = () => {
    const [tasks, setTasks] = useState<{ undone: { title: string; id: string; date?: string }[], done: { title: string; id: string; date?: string }[] }>({ undone: [], done: [] });
    const handleAdd = (task: string) => setTasks((prev) => ({ done: prev.done, undone: [...prev.undone, { title: task, id: uuid4() }] }));

    const handleComplete = (taskID: string) => setTasks(prev => ({ undone: prev.undone.filter(el => el.id !== taskID), done: [...prev.done, { ...prev.undone.find(el => el.id === taskID)!, date: parseDate(new Date()) }] }));

    const handleDelete = (task: string) => setTasks((prev) => ({ ...prev, undone: tasks.undone.filter(el => el.id !== task) }));

    return (
        <div>
            <AddTask onAdd={handleAdd} />
            <main className="main-content">
                <ActiveTasks
                    allTasks={tasks.undone}
                    onComplete={handleComplete}
                    onDelete={handleDelete}
                />
                <CompletedTasks completedTasks={tasks.done} />
                <section className="failed-tasks">
                    <div>Failed-tasks</div>
                    <div id="failedTasks"></div>
                </section>
            </main>
        </div>
    )
}

export default TaskManager;


