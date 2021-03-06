/**
 * npm install UUID модуль для генерации uuid
 */


import React from "react";

interface ActiveTasksProps {
    allTasks: {title: string, id: string}[];
    onComplete: any;
    onDelete: any;
}
class ActiveTasks extends React.Component<ActiveTasksProps> {
    render() {
        return (
            <section>
                <div className="tasks-head">Active-tasks</div>
                <ul id="activeTasks" className="active-tasks">
                    {this.props.allTasks ? (
                        this.props.allTasks.map(task => {
                            return (
                                <li key={task.id}>
                                    <p>{task.title}</p>
                                    <div className="li-drive-buttons">
                                        <button onClick={() => this.props.onComplete(task.id)}>completed</button>
                                        <button onClick={() => this.props.onDelete(task.id)}>delete</button>
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
export default ActiveTasks;
