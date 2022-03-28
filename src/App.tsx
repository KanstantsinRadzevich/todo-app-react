import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          My Tasks
        </h1>
        <section className='Add-task'>
            <label htmlFor="addTask">Add new task:</label>
            <input id="addTask" type="text" name='addTask' />
            <button>Add</button>
        </section>
      </header>
      <main className='Main-content'>
        <section className='Active-tasks'>
          <span>
            Active-tasks
          </span>
          <div id='activeTasks'></div>
        </section>
        <section className='Done-tasks'>
          <span>
            Done-tasks
          </span>
          <div id='DoneTasks'></div>
        </section >
        <section className='Failed-tasks'>
          <span>Failed-tasks</span>
          <div id='failTasks'></div>
        </section>
      </main>
    </div>
  );
}

export default App;
