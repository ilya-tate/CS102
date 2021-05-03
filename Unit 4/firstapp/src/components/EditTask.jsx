import { useState } from 'react';

const EditTask = ({ onEdit, newTask }) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);
  const [id, setId] = useState(4);
  const [editing, setEditing] = useState(false);

  const setup = () => {
    if (text) return;
    setId(newTask.id);
    setText(newTask.text);
    setDay(newTask.day);
    setReminder(newTask.reminder);
  }

  const onSubmit = e => {
    e.preventDefault();

    if (!text) {
      return alert('Please type task in.');
    }
    if (!day) {
      return alert('Please type date / time in.');
    }

    onEdit({ text, day, reminder });
    setId(id);
    setText('');
    setDay('');
    setReminder(false);
  }

  return (
    <>
      {editing ? (
        <form className="taskForm" onSubmit={ onSubmit } onFocus={ setup }>

          <div className="formInput">
            <label htmlFor="text">Task</label>
            <input
              type="text"
              name="text"
              id="text"
              placeholder="Add Task"
              value={ text }
              onChange={ e => setText(e.target.value) }
            />
          </div>

          <div className="formInput">
            <label htmlFor="day">Task</label>
            <input
              type="day"
              name="day"
              id="day"
              placeholder="Add Day and Time"
              value={ day }
              onChange={ e => setDay(e.target.value) }
            />
          </div>

          <div className="formCheck">
            <label htmlFor="">Reminder</label>
            <input
              type="checkbox"
              name="reminder"
              id="reminder"
              checked={ reminder }
              onChange={ e => setReminder(e.target.checked) }
            />
          </div>

          <input
            type="submit"
            name="submit"
            id="submit"
            value="Apply Changes"
            className="btn"
            style={ { backgroundColor: 'green' } }
          />

        </form>
      ) : (
        <form>
          <input
            type="submit"
            name="submit"
            id="submit"
            value="Edit Task?"
            className="btn"
            style={ { backgroundColor: 'green' } }
            onClick= { () => setEditing(true) }
            onFocus={ setup }
          />
        </form>
      )}
    </>
  );
}

export default EditTask
