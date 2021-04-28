import Task from './Task.jsx';

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      { tasks.map((task, index) => (
        <Task
          task={ task }
          key={ task.id }
          onDelete={ onDelete }
          onToggle={ onToggle }
        />
      )) }
    </>
  );
}

export default Tasks
