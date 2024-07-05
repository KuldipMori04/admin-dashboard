import React, { useState } from 'react';
import './AddEmployeeForm.css';

const AddEmployee = ({ addEmployee }) => {
  const [employee, setEmployee] = useState({
    name: '',
    id: '',
    email: '',
    phone: '',
    department: ''
  });

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee(employee);
    setEmployee({ name: '', id: '', email: '', phone: '', department: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Employee</h2>
      <input type="text" name="name" placeholder="Name" value={employee.name} onChange={handleChange} required />
      <input type="text" name="id" placeholder="ID" value={employee.id} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" value={employee.email} onChange={handleChange} required />
      <input type="text" name="phone" placeholder="Phone" value={employee.phone} onChange={handleChange} required />
      <input type="text" name="department" placeholder="Department" value={employee.department} onChange={handleChange} required />
      <button type="submit">Add Employee</button>
    </form>
  );
};

export default AddEmployee;
