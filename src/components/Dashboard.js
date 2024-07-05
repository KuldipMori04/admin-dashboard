import React from 'react';
import AddEmployee from './AddEmployeeForm';
import EmployeeList from './EmployeeList';
import './Dashboard.css';

const Dashboard = ({ employees, addEmployee, deleteEmployee }) => {
  return (
    <div className="dashboard">
      <h1>Admin Dashboard</h1>
      <AddEmployee addEmployee={addEmployee} />
      <EmployeeList employees={employees} deleteEmployee={deleteEmployee} />
    </div>
  );
};

export default Dashboard;
