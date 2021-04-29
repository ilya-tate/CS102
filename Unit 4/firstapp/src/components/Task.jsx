import { FaTimes, FaRegEdit } from 'react-icons/fa';

const Task = ({ task, onDelete, onToggle, onEdit, key }) => {
  
  
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
          onClick={ () => onEdit(task)}
          style={ { color: 'grey', cursor: 'pointer' } }
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
