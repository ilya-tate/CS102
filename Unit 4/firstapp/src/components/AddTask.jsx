import { useState } from 'react';

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);
  const [id, setId] = useState(4);

  const onSubmit = e => {
    e.preventDefault();

    if (!text) {
      return alert('Please type task in.');
    }
    if (!day) {
      return alert('Please type date/time in.');
    }

    onAdd({ text, day, reminder });
    setId(id + 1);
    setText('');
    setDay('');
    setReminder(false);
  }

  return (
    <form className="taskForm" onSubmit={ onSubmit }>

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
        value="Save Task"
        className="btn"
      />

    </form>
  )
}

export default AddTask
