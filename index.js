const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const managerQuestions = [
    {
        type: 'input',
        name: 'employeeName',
        message: "What is the manager name?"
    },
    {
        type: 'input',
        name: 'managerId',
        message: "What is the manager employee id?",
    },
    {
        type: 'input',
        name: 'employeeEmail',
        message: "What is the manager email address?",
    },
    {
        type: 'input',
        name: 'managerOffice',
        message: "What is the manager office number?",
    },
];

const employeeQuestions = [
    {
        type: 'list',
        name: 'employeeType',
        message: "Add another employee",
        choices: ['Engineer', 'Intern', 'Done'],
    },
    {
        type: 'input',
        name: 'employeeName',
        message: "What is the employee's name?",
        when: (answers) => answers.employeeType !== 'Done'
    },
    {
        type: 'input',
        name: 'employeeId',
        message: "What is the employee's id?",
        when: (answers) => answers.employeeType !== 'Done'
    },
    {
        type: 'input',
        name: 'employeeEmail',
        message: "What is the employee's email?",
        when: (answers) => answers.employeeType !== 'Done'
    },
    {
        type: 'input',
        name: 'employeeGithub',
        message: "What is the employee's github?",
        when: (answers) => answers.employeeType === 'Engineer'
    },
    {
        type: 'input',
        name: 'employeeSchool',
        message: "What is the intern's school?",
        when: (answers) => answers.employeeType === 'Intern'
    }
];

const questionAnswers = [];

async function promptManagerQuestions() {
    //surroundin try catch
    try {
    const answers = await inquirer.prompt(managerQuestions);
    questionAnswers.push(new Manager(answers.employeeName, answers.managerId, answers.employeeEmail, answers.managerOffice));
    } catch (error) {

    }
    // questionAnswers.push(answers);
    // questionAnswers.push(new Manager(answers.employeeName, answers.managerId, answers.employeeEmail, answers.managerOffice));

}


async function promptEmployeeQuestions() {
    const answers = await inquirer.prompt(employeeQuestions);
    return answers;
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Successfully created index.html!')
    );
};

async function init() {
    await promptManagerQuestions();

    let keepAsking = true;
    while(keepAsking) {
        const answers = await promptEmployeeQuestions();

        if(await answers.employeeType !== 'Done') {
            // questionAnswers.push(answers);
            if(answers.employeeType === 'Engineer') {
                questionAnswers.push(new Engineer(answers.employeeName, answers.employeeId, answers.employeeEmail, answers.employeeGithub));
            }
            if(answers.employeeType === 'Intern') {
                questionAnswers.push(new Intern(answers.employeeName, answers.employeeId, answers.employeeEmail, answers.employeeSchool));
            }
        } else {
            keepAsking = false;
        }
    }
    console.log(questionAnswers);
        const HTMLContent = generateHTML(questionAnswers);
        writeToFile('./dist/index.html', HTMLContent);
};

// Function call to initialize app
init();