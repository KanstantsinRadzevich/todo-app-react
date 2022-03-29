//@ts-nocheck
import React, { useState } from 'react';
import './index.css';
import AddTask from '../components/addTask/index';
import ActiveTasks from '../components/activeTasks';



function App() {
  
  const [appState, setAppState] = useState([]);
  const addTask = (task) => setAppState(prev => [...prev, task]);
  
  return (
    <div className="app">
      <header className="app-header">
        <h1>
          My Tasks
        </h1>
        <h3>Now: {new Date().toLocaleTimeString()}.</h3>
        <section className='add-task'>
            <AddTask onAdd={addTask} />
        </section>
      </header>
      <main className='main-content'>
        <ActiveTasks allTasks={appState}/>
        <section className='done-tasks'>
          <div>
            Done-tasks
          </div>
          <div id='DoneTasks'></div>
        </section>
        <section className='failed-tasks'>
          <div>Failed-tasks</div>
          <div id='failTasks'></div>
        </section>
      </main>
    </div>
  );
}

export default App;
