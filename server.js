// import mysql2, inquirer and console.table//
const mysql = require('mysql2')
const inquirer = require('inquirer');
const cTable = require('console.table');

require('dotenv').config()
// connection to the db //
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.MYSQL_PASSWORD,
    database: 'employee_db'
});

connection.connect(err => {
    if (err) throw err;
    console.log('connected as id' + connection.threadId);
    afterConnection();
});

afterConnection = () => {
    console.log("+==========================+")
    console.log("+                          +")
    console.log("+    EMPLOYEE MANAGER      +")
    console.log("+                          +")
    console.log("+==========================+")
    promptUser();
};

//inq prmpt for 1st action//
const promptUser = () => {
    inquirer.prompt ([
        {
            type: 'list',
            name: 'choices',
            message: 'What would you like to do?',
            choices: ['View all departments', 
                'View all roles', 
                'View all employees', 
                'Add a department', 
                'Add a role', 
                'Add an employee', 
                'Update an employee role',
                'Update an employee manager',
                "View employees by department",
                'Delete a department',
                'Delete a role',
                'Delete an employee',
                'View department budgets',
                'No Action']
        }
    ])

    .then((answers) => {
        const { choices } = answers;

        if (choices === "View all departments") {
            showDepartments();
        }

        if (choices === "View all roles") {
            showRoles();
        }

        if (choices === "View all employees") {
            showEmployees();
          }
    
          if (choices === "Add a department") {
            addDepartment();
          }
    
          if (choices === "Add a role") {
            addRole();
          }
    
          if (choices === "Add an employee") {
            addEmployee();
          }
    
          if (choices === "Update an employee role") {
            updateEmployee();
          }
    
          if (choices === "Update an employee manager") {
            updateManager();
          }
    
          if (choices === "View employees by department") {
            employeeDepartment();
          }
    
          if (choices === "Delete a department") {
            deleteDepartment();
          }
    
          if (choices === "Delete a role") {
            deleteRole();
          }
    
          if (choices === "Delete an employee") {
            deleteEmployee();
          }
    
          if (choices === "View department budgets") {
            viewBudget();
          }
    
          if (choices === "No Action") {
            connection.end()
        };
    });
};

showDepartments = () => {
    console.log('Showing all departments...\n');
    const sql = `SELECT department.id AS id, department.name AS department FROM department`;

    connection.promise().query(sql, (err, rows) => {
        if (err) throw err;
        console.table(rows):
        promptUser();
    });
};

// FUNCTION SHOWS ALL ROLES //

showRoles = () => {
    console.log('Showing all roles...\n');

    const sql = `SELECT role.id, role.title, department.name AS department
                 FROM role
                 INNER JOIN department ON role.depatment_id = department.id`;

    connection.promise().query(sql, (err, rows) => {
        if (err) throw err;
        console.table(rows);
        promptUser();
    })
};

// FUNCTION TO SHOW ALL EMPLOYESS //

showEmployees = () => {
    console.log('Showing all employees...\n');
    const sql = `SELECT employee.id, 
    employee.first_name, 
    employee.last_name, 
    role.title, 
    department.name AS department,
    role.salary, 
    CONCAT (manager.first_name, " ", manager.last_name) AS manager
FROM employee
    LEFT JOIN role ON employee.role_id = role.id
    LEFT JOIN department ON role.department_id = department.id
    LEFT JOIN employee manager ON employee.manager_id = manager.id`;

connection.promise().query(sql, (err, rows) => {
if (err) throw err; 
console.table(rows);
promptUser();
});
};

