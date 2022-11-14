const inquirer = require('inquirer');
const fs = require('fs');

const generate = require('generateIt');

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
const writeToFile = (data) => {
    fs.writeFile('./filea/README.md', data, (err) => {
        if (err) {
            return console.log('ERROR DETECTED')
        } else {
            console.log('Check in the files folder, ya filthy animal')
        }
    })
}

// TODO: Create a function to initialize app
const init = () => {
    return inquirer.prompt(questions)
}

// Function call to initialize app
init()
.then((userInput) => {
    return generateIt(userInput)
})
.then((mdInfo) => {
    return writeToFile(mdInfo)
})
.catch((err) => {
    console.log(err)
})
