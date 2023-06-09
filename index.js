const inquirer = require("inquirer");
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Root',
    database: 'owner_db'
});

const questions = () => {
    inquirer.prompt({
        type: 'list',
        message: 'Which option would you like to choose?',
        name: 'options',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role']
    })
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
            } else if (data.options === 'Update an employee role') {
                updateRole();
            } else {
                db.end()
            }
        }))
}

function getAllDepartments() {
    db.query('SELECT id, name FROM department', (error, data) => {
        if (error) {
            return error;
        } else {
            console.table(data);
        }
    })
};
function getAllRoles() {
    db.query('SELECT role.id, title, department_id, salary', (error, data) => {
        if (error) {
            return error;
        } else {
            console.table(data);
        }
    })
};
function getAllEmployees() {
    db.query('SELECT id, first_name, last_name, role_id, department_id, salary,', (error, data) => {
        if (error) {
            return error;
        } else {
            console.table(data);
        }
    })
};
function addDepartment() {
    inquirer.prompt(
        {
            type: 'input',
            name: 'department',
            message: 'Name for new department'
        })
        .then((data) => {
            db.query('INSERT INTO department (name) VALUES (?)', data.department, (error, data) => {
                if (error) {
                    return error;
                } else {
                    console.log('Deparment successfully added');
                }
            })
        })
}
function addRole() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'role',
            message: 'What is the name of the role?'
        },
        {
            type: 'input',
            name: 'salary',
            message: 'What is the salary of the role?'
        },
        {
            type: 'list',
            name: 'department_name',
            message: 'Which department does the role belong to?',
            choices: ['HR', 'Finance', 'Customer Service', 'Marketing', 'IT']
        }
    ]).then(data => {
        db.query('INSERT INTO role (title, salary, department_id) VALUES (?,?,?)', [role, salary, department_name], (error, data) => {
            if (error) {
                return error;
            } else {
                console.log('Role successfully added');
            }
        })
    })
}
function addEmployee() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Enter new employee first name',
            name: 'first_name'
        },
        {
            type: 'input',
            message: 'Enter new employee last name',
            name: 'last_name'
        },
        {
            type: 'list',
            message: 'Add employee role',
            name: 'role',
            choices: ['HR Specialist', 'Accountant', 'Customer Service Agent', 'Social Media Agent', 'Junior software Developer']
        }
    ])
        .then((data) => {
            db.query('INSERT INTO employee (first_name, last_name, role_id) VALUES (?,?,?)', [first_name, last_name, role_id], (error, data) => {
                if (error) {
                    return error;
                } else {
                    console.log('Employee successfully added');
                }
            })
        })
}
function updateRole() {
    inquirer.prompt(
        {
            type: 'list',
            message: 'Choose employee name',
            name: 'employeeName',
            choices: ['Merry Giron', 'Jonathan Hansen', 'Carlos Acevedo', 'Emily Richardson', 'Jamie Adams']
        },
        {
            type: 'list',
            message: 'Choose a role to assign to the employee',
            name: 'roleUpdate',
            choices: ['HR Specialist', 'Accountant', 'Customer Service Agent', 'Social Media Agent', 'Junior software Developer']
        })
        .then((data) => {
            console.log(data);
        })
}
questions();