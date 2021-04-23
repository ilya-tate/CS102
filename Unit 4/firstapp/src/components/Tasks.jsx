const tasks = [
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
      reminer: true,
      id: 4
    }
];

const Tasks = () => {
  return (
    <>
      { tasks.map(task => (
        <>
          <h3>{ task.text }</h3>
          <p>{ task.day }</p>
        </>
      )) }
    </>
  );
}

export default Tasks
