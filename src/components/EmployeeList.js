import React from 'react';
import { Link } from 'react-router-dom';
import './EmployeeList.css';

const EmployeeList = ({ employees, deleteEmployee }) => {
  return (
    <div className="employee-list">
      <h2>Employee List</h2>
      <ul>
        {employees.map((employee, index) => (
          <li key={index}>
            <Link to={`/employee/${index}`}>{employee.name}</Link>
            <button onClick={() => deleteEmployee(index)} className="delete-button">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
