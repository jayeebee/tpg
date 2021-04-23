const inquirer = require('inquirer');
const fs = require('fs');
//const generateHTML = require('./generateHTML.js');


const team = [];

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter the manager's name",
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
            type: 'input',
            name: 'id',
            message: 'Please enter the employee ID',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter a valid employee ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter  the employee's email",
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
            message: "Please enter the managers office number",
            validate: idInput => {
                if (idInput) {
                        return true;
                    } else {
                        console.log("Please enter the manager's office number!");
                        return false;
                    }
                }
        },
        {
            type: 'list',
            name: 'additional',
            message: 'Add another employee to the team?',
            choices: ['Intern', 'Engineer', 'None']
        }
    ])
}

const promptEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter the engineer's name",
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
            type: 'input',
            name: 'id',
            message: 'Please enter the employee ID',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter a valid employee ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter  the employee's email",
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
            name: 'github',
            message: "Please enter the engineer's Github username",
            validate: githubInput => {
            if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter the engineer's Github username!");
                    return false;
                }
            }
        }
    ])
}

const promptIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter the intern's name",
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
            type: 'input',
            name: 'id',
            message: 'Please enter the employee ID',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter a valid employee ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter  the employee's email",
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
            name: 'college',
            message: "Please enter the intern's college",
            validate: collegeInput => {
            if (collegeInput) {
                    return true;
                } else {
                    console.log("Please enter a college name!");
                    return false;
                }
            }
        }
    ])
}

function startManager() {
    promptManager().then(function(data){
        const leader = new Manager(data.name, data.id, data.email, data.officeNumber)
        if(data.additional === "Intern") {
            team.push(manager)
            startIntern()
        } else if (data.additional === "Engineer") {
            team.push(manager)
            startEngineer()
        } else if (data.additional === "None") {
            team.push(manager)
        }
        })
};

function startEngineer() {
    promptEngineer().then(function(data){
        const engineer = new Engineer (data.name, data.id, data.email, data.github)
        if(data.additional === "Intern") {
            team.push(engineer)
            startIntern()
        } else if (data.additional === "Engineer") {
            team.push(engineer)
            startEngineer()
        } else if (data.additional === "None") {
            team.push(engineer)
        }
    })
};

function startIntern() {
    promptIntern().then(function(data){
        const engineer = new Engineer (data.name, data.id, data.email, data.college)
        if(data.additional === "Intern") {
            team.push(intern)
            startIntern()
        } else if (data.additional === "Engineer") {
            team.push(intern)
            startEngineer()
        } else if (data.additional === "None") {
            team.push(intern)
        }
    })
}
startManager();


/*
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

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err =>{
        if (err) {
            throw err;
        }
        else {
            console.log('Website generated!')
        }
    });
}

function init() {
    promptUser().then(data => {
        const response = generateHTML(data);
        writeToFile('./dist/index.html', response)
    })
}

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

init()
*/