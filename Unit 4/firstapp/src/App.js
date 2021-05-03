import Header from './components/Header.jsx';
import AddTask from './components/AddTask.jsx';
import EditTask from './components/EditTask.jsx';
import Tasks from './components/Tasks.jsx';
import { useState } from 'react';

function App() {
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
  const [showAddTask, setShowAddTask] = useState(false);
  const [showEditTask, setShowEditTask] = useState(false);
  const [newTask, setNewTask] = useState({ });

  const onDelete = id => {
    setTasks(tasks.filter(task => task.id !== id));
  }

  const toggleReminder = id => {
    setTasks(tasks.map(task => (
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )));
  }

  const onAdd = task => {
    setTasks([...tasks, task]);
  }

  const onEdit = (editedTask, id) => {
    setTasks(tasks.map(task => (
      task.id === id ? editedTask : task
    )));
    setShowEditTask(false);
    console.log(tasks);
  }

  const toggleEdit = task => {
    setShowEditTask(true);
    setShowAddTask(false);
    setNewTask(task);
  }

  return (
    <div className="container">
      <Header
        onShowAdd={ () => setShowAddTask(!showAddTask) }
        showAdd={ showAddTask }
      />
      { showAddTask && <AddTask onAdd={ onAdd } /> }
      { showEditTask && <EditTask onEdit={ onEdit } newTask={ newTask } /> }
      <Tasks
        tasks={ tasks }
        onDelete={ onDelete }
        onToggle={ toggleReminder }
        toggleEdit={ toggleEdit }
      />
    </div>
  );
}

export default App;
