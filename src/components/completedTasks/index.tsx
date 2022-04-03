/**
 * npm install UUID модуль для генерации uuid
 */
//@ts-nocheck

import React from "react";

interface CompletedTasksProps {
    completedTasks: {title: string, id: string}[];
}
class CompletedTasks extends React.Component<CompletedTasksProps> {
    render() {
        return (
            <section>
                <div className="tasks-head">Completed-tasks</div>
                <ul id="completedTasks" className="completed-tasks">
                    {this.props.completedTasks ? (
                        this.props.completedTasks.map(task => {
                            return (
                                <li key={task.id}>
                                    <p>{task.title}</p>
                                    <div className="time-completed">
                                        {'Выполнено: ' + task.date}
                                    </div>
                                </li>
                            );
                        })
                    ) : (
                        <p>no tasks</p>
                    )}
                </ul>
            </section>
        );
    }
}
export default CompletedTasks;
