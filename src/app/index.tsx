import React, { useState } from 'react';
import './index.css';
import AddTask from '../components/addTask/index';
import ActiveTasks from '../components/activeTasks';
import { v4 as uuid4 } from 'uuid';
 

function App() {
  const [appState, setAppState] = useState<{allTasks: {title: string; id: string}[], completedTasks: {title: string; id: string}[]}>({allTasks: [], completedTasks: []});
  
  const addTask = (task: string) => setAppState((prev) => ({...prev, allTasks:[...prev.allTasks, {title: task, id: uuid4()}]}));

  const handlerCompleted = (task: string) => {
    console.log(task);
  };
  const handlerDelete = (task: string) => {
    console.log(task);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>My Tasks</h1>
        <h3>Now: {new Date().toLocaleTimeString()}.</h3>
        <section className="add-task">
          <AddTask onAdd={addTask} />
        </section>
      </header>
      <main className="main-content">
        <ActiveTasks
          allTasks={appState.allTasks}
          onCompleted={handlerCompleted}
          onDelete={handlerDelete}
        />

        <section className="done-tasks">
          <div>Done-tasks</div>
          <div id="DoneTasks"></div>
        </section>
        <section className="completed-tasks">
          <div>Completed-tasks</div>
          <div id="completedTasks"></div>
        </section>
      </main>
    </div>
  );
}

export default App;