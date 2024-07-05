import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './EmployeeDetails.css';

const EmployeeDetails = ({ employees }) => {
  const { id } = useParams();
  const employee = employees[id];
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { task, completed: false }]);
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = tasks.slice();
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  return (
    <div>
      <h2>Employee Details</h2>
      <p>Name: {employee.name}</p>
      <p>ID: {employee.id}</p>
      <p>Email: {employee.email}</p>
      <p>Phone: {employee.phone}</p>
      <p>Department: {employee.department}</p>
     
      <h3>Assign Task</h3>
      <form onSubmit={(e) => {
        e.preventDefault();
        const task = e.target.elements.task.value;
        addTask(task);
        e.target.elements.task.value = '';
      }}>
        <input type="text" name="task" placeholder="Task" required />
        <button type="submit">Add Task</button>
      </form>

      <h3>Tasks</h3>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <label>
              <input type="checkbox" checked={task.completed} onChange={() => toggleTaskCompletion(index)} />
              {task.task}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeDetails;
