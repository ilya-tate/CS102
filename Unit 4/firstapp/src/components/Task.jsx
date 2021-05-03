import { FaTimes, FaRegEdit } from 'react-icons/fa';

const Task = ({ task, onDelete, onToggle, toggleEdit }) => {
  
  
  return (
    <div
      onDoubleClick={ () => onToggle(task.id) }
      className={ `task ${ task.reminder ? 'remind' : '' }` }
    >

      <div className="left">
        <h3>{ task.text }</h3>
        <p>{ task.day }</p>
      </div>
      <div className="right">
        <FaRegEdit
          onClick={ () => toggleEdit(task)}
          style={ { color: 'green', cursor: 'pointer' } }
        />
        <FaTimes
          onClick={ () => onDelete(task.id) }
          style={ { color: 'red', cursor: 'pointer' } }
        />
      </div>

    </div>
  );
}

export default Task
