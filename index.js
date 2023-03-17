const inquirer = require("inquirer");
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Root',
    database: 'owner_db'
  });

const questions = () => {
    inquirer.prompt ({
    type: 'list',
    message: 'Which option would you like to choose?',
    name: 'options',
    choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role']}) 
    .then((data => {
    if (data.options === 'View all departments') {
        getAllDepartments();
    } else if (data.options === 'View all roles') {
        getAllRoles();
    } else if (data.options === 'View all employees') {
        getAllEmployees();
    } else if (data.options === 'Add a department') {
        addDepartment();
    } else if (data.options === 'Add a role') {
        addRole();
    } else if (data.options === 'Add an employee') {
        addEmployee();
    } else (data.options === 'Update an employee role'); {
        updateRole()
    }
}))
}