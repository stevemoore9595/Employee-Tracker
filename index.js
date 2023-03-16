const inquirer = require("inquirer");
const mysql = require('mysql2');

const questions = [{
    type: 'list',
    message: 'Choose from the following options',
    name: 'options',
    choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role']
}]