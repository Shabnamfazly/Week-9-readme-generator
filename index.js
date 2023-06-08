// TODO: Include packages needed for this application
const fs = require ('fs');
const inquirer = require ('inquirer');
const path = require('path');
const generateMarkdown = require ('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a descripton of your project:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license does your project use?',
        choices: ['MIT','APACHE 2.0', 'MPL_2.0' , 'BSD 3' , 'None'],
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How is the project is used?',
    },
    {
        type: 'input',
        name: 'fileName',
        message: 'What do you want to call this readme?',

    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installlation instructions of your project?',
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(inquirerResponses => {
        console.log('Generating README...');
        console.log(inquirerResponses)
        console.log({...inquirerResponses})

        const markdown = generateMarkdown({...inquirerResponses});

        writeToFile('/output/README.md', markdown);
    });
    }

// Function call to initialize app
init();
