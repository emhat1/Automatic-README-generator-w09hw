// Automatic README generator

// Call up required packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    .prompt([
        {
            type: 'input',
            name: 'projectTitle',
            message: 'What is the name of your project?',
            default: 'New project'
        },
        {
            type: 'input',
            name: 'projectDescription',
            message: 'Please describe the purpose of the project',
            default: 'To make something easier'
        },
        {
            type: 'input',
            name: 'projectRequirements',
            message: 'Please describe what is required to run the project, eg packages',
            default: 'No additional packages needed'
        },
        {
            type: 'input',
            name: 'projectUsage',
            message: 'What does the user need to know about running the project?',
            default: 'Run from terminal using nodejs'
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
            default: 'emhat1'
        },
        {
            type: 'input',
            name: 'projectEmail',
            message: 'What is your preferred email address?',
            default: 'e.hatherell@gmail.com'
        },
      ])

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
