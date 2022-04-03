import { useContext } from 'react';
import './index.css';
import { ThemeContext } from '../common/theme/context';
import TaskManager from '../components/taskManager';
import { darkTheme, lightTheme } from '../common/theme';



function App() {
  const { mode, handleToggle } = useContext(ThemeContext)
  const currentTheme = mode === 'light'? lightTheme : darkTheme; 
  return (
    <div className="app">
      <button style= {{backgroundColor: currentTheme.palette.primary.main }} onClick={handleToggle}>Change theme</button>
      <TaskManager />
    </div>
  );
}

export default App;