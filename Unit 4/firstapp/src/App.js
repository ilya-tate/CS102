import Header from './components/Header.jsx';
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
      id: 3,
      text: 'Food Shopping',
      day: 'Feb 6th at 4:30pm',
      reminder: false
    },
    {
      text: 'Take Test',
      day: 'Monday 5pm',
      reminder: true,
      id: 4
    }
  ]);

  const onDelete = id => {
    setTasks(tasks.filter(task => (
      task.id !== id
    )));
  }
  const toggleReminder = id => {
    setTasks(
      tasks.map(task => (
        task.id === id ?
          { ...tasks, reminder: !task.reminder } :
          task
      ))
    );
  }

  return (
    <div className="container">
      <Header />
      <Tasks tasks={ tasks } onDelete={ onDelete } onToggle={ toggleReminder } />
    </div>
  );
}

export default App;
