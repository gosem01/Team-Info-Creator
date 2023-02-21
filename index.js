const inquirer = require('inquirer');
const fs = require('fs');
// const generateMarkdown = require('./src/generateHTML')

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data, (err) =>
//     err ? console.log(err) : console.log('Successfully created README.md!')
//     );
// };

const managerQuestions = [
    {
        type: 'input',
        name: 'managerName',
        message: "What is the manager name?"
    },
    {
        type: 'input',
        name: 'managerId',
        message: "What is the manager employee id?",
    },
    {
        type: 'input',
        name: 'managerEmail',
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
    const answers = await inquirer.prompt(managerQuestions);
    questionAnswers.push(answers);
}


async function promptEmployeeQuestions() {
    const answers = await inquirer.prompt(employeeQuestions);
    return answers;
}

async function init() {
    await promptManagerQuestions();

    let keepAsking = true;
    while(keepAsking) {
        const answers = await promptEmployeeQuestions();

        if(await answers.employeeType !== 'Done') {
            questionAnswers.push(answers);
        } else {
            keepAsking = false;
        }
    }
    console.log(questionAnswers);
    //     // const readMeContent = generateMarkdown(answers);
    //     // writeToFile('README.md', readMeContent);
    // });
};

// Function call to initialize app
init();