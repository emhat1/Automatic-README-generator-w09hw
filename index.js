// Automatic README generator

// Call up required packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    .prompt([
        {
          name: 'projectTitle',
          message: 'What is the name of your project?',
          default: 'New project'
        },
        {
          name: 'projectDescription',
          message: 'Please describe the purpose of the project',
          default: 'To make something easier'
        },
        {
            name: 'projectRequirements',
            message: 'Please describe what is required to run the project, eg packages',
            default: 'No additional packages needed'
        },
        {
            name: 'projectUsage',
            message: 'What does the user need to know about running the project?',
            default: 'Run from terminal using nodejs'
        },
        {
            name: 'projectLicense',
            message: 'What license does this project fall under?',
            default: 'OpenSource'
        },
        {
            name: 'projectContribution',
            message: 'Please describe how to contribute to this project',
            default: 'To contrubute please email E.Hatherell@gmail.com'
        },
        {
            name: 'projectUsername',
            message: 'What is your github username?',
            default: 'emhat1'
        },
      ])

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
