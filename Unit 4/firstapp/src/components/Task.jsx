import { FaTimes } from 'react-icons/fa';

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={ `task ${ task.reminder ? 'remind' : '' }` }
      onDoubleClick={ () => onToggle(task.id) }
    >

      <div className="left">
        <h3>{ task.text }</h3>
        <p>{ task.day }</p>
      </div>
      <div className="right">
        <FaTimes
          onClick={ () => onDelete(task.id) }
          style={ { color: 'red', cursor: 'pointer' } }
        />
      </div>

    </div>
  );
}

export default Task
