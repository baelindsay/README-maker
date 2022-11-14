const inquirer = require('inquirer');
const fs = require('fs');

// const generate = require('generate');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Well, hello there. Initiating README Maker. What is your name?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter GitHub username'
    },
    {
        type: 'input',
        name: 'name',
        message: 'Enter email'
    },
    {
        type: 'input',
        name: 'name',
        message: 'Enter title of application'
    },
    {
        type: 'input',
        name: 'name',
        message: 'Description of app'
    },
    {
        type: 'input',
        name: 'name',
        message: 'Enter installation instructions'
    },
    {
        type: 'input',
        name: 'name',
        message: 'Contributions'
    },
    {
        type: 'input',
        name: 'name',
        message: 'tests'
    },
    {
        type: 'input',
        name: 'name',
        message: 'licenses',
        choices: ['Apache','GNU', 'ISC', 'MIT', 'Mozilla', 'Perl', 'SIL', 'WTFPL', 'None']
    },
];


// TODO: Create a function to write README file
const writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
