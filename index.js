// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('generate');

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
        message: 'Well, hello there. Initiating README Maker. What is your name?'
    },
    {
        type: 'input',
        name: 'name',
        message: 'Well, hello there. Initiating README Maker. What is your name?'
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
