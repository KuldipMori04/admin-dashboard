# Admin Dashboard

This is a React-based admin dashboard where the admin can manage employees and assign tasks. The application includes functionality to add, view, and delete employees, as well as assign and manage tasks for each employee.

## Features

- **Add Employees:** Create a form to add new employees and display a list of all employees.
- **Employee Details:** Clicking on an employee's name in the list navigates to that employee’s detailed page, where the admin can assign tasks.
- **Task Assignment:** Tasks for employees are calls they need to make. There is a mechanism for the employee to tick off the calls they have made and those they have not.
- **Delete Employee:** Allows the admin to delete an employee from the list.

## Getting Started

These instructions will help you set up and run the project on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v12 or later)
- [npm](https://www.npmjs.com/) (v6 or later)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/admin-dashboard.git
cd admin-dashboard

2. Install the dependencies:

npm install

npm install react-router-dom

3. Running the Application
To start the development server:

npm start


PROJECT STRUCTURE

admin-dashboard/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── AddEmployee.js
│   │   ├── AddEmployee.css
│   │   ├── Dashboard.js
│   │   ├── Dashboard.css
│   │   ├── EmployeeDetails.js
│   │   ├── EmployeeDetails.css
│   │   ├── EmployeeList.js
│   │   ├── EmployeeList.css
│   ├── App.js
│   ├── index.js
│   └── index.css
├── .gitignore
├── package.json
└── README.md

Acknowledgements

  React
  React Router
  Create React App
