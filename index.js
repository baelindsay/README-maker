const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

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
        message: 'Enter GitHub username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter email:'
    },
    {
        type: 'input',
        name: 'projectName',
        message: 'Enter title of application:'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of this project:'
    },
    {
        type: 'input',
        name: 'instillation',
        message: 'Enter installation instructions:'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Contributing:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter any teting information:'
    },
    {
        type: 'input',
        name: 'license',
        message: 'licenses:',
        choices: ['Apache','GNU', 'ISC', 'MIT', 'Mozilla', 'Perl', 'SIL', 'WTFPL', 'None']
    }
];


// TODO: Create a function to write README file
const writeToFile = (data) => {
    fs.writeFile('./files/README.md', data, (err) => {
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
    return generateMarkdown(userInput)
})
.then((mdInfo) => {
return writeToFile(mdInfo)
})
.catch((err) => {
    console.log(err)
})
