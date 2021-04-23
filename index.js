const inquirer = require('inquirer');

const questions = [
    'What is your role in the company? Please select the most relevant',
    'What is your employee ID number?',
    'What is your E-Mail address?',
    'What is your office number?',
    'What is your Github username?',
    'What is the name of your shool?'
]

const promptUser = () => {
    return inquirer.prompt([
    {
        type: 'list',
        name: 'employeeRole',
        message: questions[0],
        choices: ['Employee', 'Intern', 'Manager', 'Engineer']
    },
    {
        type: 'input',
        name: 'id',
        message: questions[1],
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log('Please enter your employee ID!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: questions[2],
        validate: emailInput => {
        if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: questions[3],
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
        message: questions[4],
        when: (answers) => {
            if (answers.employeeRole === "Engineer") {
            return true
            }
        },
        validate: githubNameInput => {
            if (githubNameInput) {
                    return true;
                } else {
                    console.log('Please enter your Github username!');
                    return false;
                }
            }
    },
    {
        type: 'input',
        name: 'internSchool',
        message: questions[5],
        when: (answers) => {
            if (answers.employeeRole === "Intern") {
            return true
            }
        },
        validate: schoolInput => {
            if (schoolInput) {
                    return true;
                } else {
                    console.log("Please enter your school's name!");
                    return false;
                }
            }
    },
    ])
}

promptUser()