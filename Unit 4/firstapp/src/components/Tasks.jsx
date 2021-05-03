import Task from './Task.jsx';

const Tasks = ({ tasks, onDelete, onToggle, toggleEdit }) => {
  return (
    <>
      { tasks.map((task, index) => (
        <Task
          task={ task }
          key={ task.id }
          onDelete={ onDelete }
          onToggle={ onToggle }
          toggleEdit={ toggleEdit }
        />
      )) }
    </>
  );
}

export default Tasks
