import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import EmployeeDetails from './components/EmployeeDetails';

function App() {
  const [employees, setEmployees] = useState([]);

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  const deleteEmployee = (index) => {
    setEmployees(employees.filter((_, i) => i !== index));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard employees={employees} addEmployee={addEmployee} deleteEmployee={deleteEmployee} />} />
        <Route path="/employee/:id" element={<EmployeeDetails employees={employees} />} />
      </Routes>
    </Router>
  );
}

export default App;
