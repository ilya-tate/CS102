import Task from './Task.jsx';

const Tasks = ({ tasks, onDelete, onToggle, onEdit }) => {
  return (
    <>
      { tasks.map((task, index) => (
        <Task
          task={ task }
          key={ task.id }
          onDelete={ onDelete }
          onToggle={ onToggle }
          onEdit={ onEdit }
        />
      )) }
    </>
  );
}

export default Tasks
