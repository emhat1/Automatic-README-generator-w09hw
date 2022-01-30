// Automatic README generator

// Call up required packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require(".generateMarkdown.js");


// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            name: 'projectTitle',
            message: 'What is the name of your project?',
        },
        {
            type: 'input',
            name: 'projectDescription',
            message: 'Please describe the purpose of the project',
        },
        {
            type: 'input',
            name: 'projectRequirements',
            message: 'Please describe what is required to run the project, eg packages',
        },
        {
            type: 'input',
            name: 'projectUsage',
            message: 'What does the user need to know about running the project?',
        },
        {
            type: 'list',
            name: 'projectLicense',
            message: 'What license does this project fall under?',
            choices: ['Apache', 'MIT', 'BSD', 'Unlicensed'],
        },
        {
            type: 'input',
            name: 'projectContribution',
            message: 'Please describe how to contribute to this project',
            default: 'Please contribute'
        },
        {
            type: 'input',
            name: 'projectUsername',
            message: 'What is your github username?',
        },
        {
            type: 'input',
            name: 'projectEmail',
            message: 'What is your preferred email address?',
        },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(fileName);
    console.log(data);
    var data = generateMD(data);
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log('You have created a new README.md file')
    })
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) =>
    writeToFile("README.md", generateMarkdown(answers))
  );
}

// Function call to initialize app
init();
