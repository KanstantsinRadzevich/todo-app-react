/**
 * npm install UUID модуль для генерации uuid
 */

import React from 'react'
import { v4 as uuid4 } from 'uuid';

interface ActiveTasksProps {allTasks: string[]}

class ActiveTasks extends React.Component<ActiveTasksProps> {
    render() {
        return (
            <section >
                <div className='active-tasks-head'>
                    Active-tasks
                </div>
                <ul id='activeTasks' className='active-tasks'>
                    {this.props.allTasks?this.props.allTasks.map(val => {
                        return  <li key={uuid4()}>
                                    <p>{val}</p> 
                                    <button>completed</button>
                                    <button>delete</button>
                                </li>
                            }):<p>no tasks</p>}
                </ul>
            </section>
        );
    }
}
export default ActiveTasks;