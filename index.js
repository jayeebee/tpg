const inquirer = require('inquirer');
const fs = require('fs');
//const generateHTML = require('./dist/');

const questions = [
    "Please enter the employee's name",
    'Please choose a role for the employee',
    'What is the employee ID number?',
    'What is the E-Mail address?',
    'What is the office number?',
    'What is the Github username?',
    'What is the name of the shool?',
    'Would you like to add another team member?'
]

const promptUser = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'employeeName',
        message: questions[0],
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a name!');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'employeeRole',
        message: questions[1],
        choices: ['Employee', 'Intern', 'Manager', 'Engineer']
    },
    {
        type: 'input',
        name: 'id',
        message: questions[2],
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log('Please enter the employee ID!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: questions[3],
        validate: emailInput => {
        if (emailInput) {
                return true;
            } else {
                console.log("Please enter the employee's email!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: questions[4],
        when: (answers) => {
            if (answers.employeeRole === "Manager") {
            return true
            }
        },
        validate: officeNumberInput => {
            if (officeNumberInput) {
                    return true;
                } else {
                    console.log('Please enter your office number!');
                    return false;
                }
            }
    },
    {
        type: 'input',
        name: 'githubName',
        message: questions[5],
        when: (answers) => {
            if (answers.employeeRole === "Engineer") {
            return true
            }
        },
        validate: githubNameInput => {
            if (githubNameInput) {
                    return true;
                } else {
                    console.log("Please enter the employee's Github username!");
                    return false;
                }
            }
    },
    {
        type: 'input',
        name: 'internSchool',
        message: questions[6],
        when: (answers) => {
            if (answers.employeeRole === "Intern") {
            return true
            }
        },
        validate: schoolInput => {
            if (schoolInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's school's name!");
                    return false;
                }
            }
    },
    {
        type: 'confirm',
        name: 'confirmAddMember',
        message: questions[7],
        default: false,
    }
    ])

}

promptUser()