import Header from './components/Header.jsx';
import AddTask from './components/AddTask.jsx';
import Tasks from './components/Tasks.jsx';
import { useState } from 'react';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctor\'s Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: false
    },
    {
      id: 2,
      text: 'Food Shopping',
      day: 'Feb 6th at 4:30pm',
      reminder: false
    },
    {
      id: 3,
      text: 'Take Test',
      day: 'Monday 5pm',
      reminder: true
    }
  ]);

  const onDelete = id => {
    setTasks(tasks.filter(task => task.id !== id));
  }

  const toggleReminder = id => {
    setTasks(
      tasks.map(task => (
        task.id === id ? { ...task, reminder: !task.reminder } : task
      ))
    );
  }

  const onAdd = task => {
    setTasks([...tasks, task]);
  }

  return (
    <div className="container">
      <Header
        onShowAdd={ () => setShowAddTask(!showAddTask) }
        showAdd = { showAddTask }
      />
      { showAddTask ? <AddTask onAdd={ onAdd } /> : '' }
      <Tasks tasks={ tasks } onDelete={ onDelete } onToggle={ toggleReminder } />
    </div>
  );
}

export default App;
