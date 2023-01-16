// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdownFile = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions =
    [
    {
      type: 'input',
      message: 'What is the title of the application?',
      name: 'title',
      validate: (value) => { 
        if(value){
            return true;
        } else {
            console.log("input value to move to next question")
        }
    }
},
{
      type: 'input',
      message: 'How would you best decribe this application?',
      name: 'description',
      validate: (value) => { 
        if(value){
            return true;
        } else {
            console.log("input value to move to next question")
        }
    }
},
{
      type: 'input',
      message: 'Do you have to install anything?',
      name: 'installation',
      validate: (value) => { 
        if(value){
            return true;
        } else {
            console.log("input value to move to next question")
        }
    }
},
{
        type: 'input',
        message: 'What is the usage?',
        name: 'usage',
        validate: (value) => { 
            if(value){
                return true;
            } else {
                console.log("input value to move to next question")
        }
    }
},
{
        type: 'list',
        message: 'What License did you use?',
        name: 'license',
        choices:['MIT License', 'Eclipse', 'Apache', 'Boost', 'N/A'],
        validate: (value) => { 
            if(value){
                return true;
            } else {
                console.log("input value to move to next question")
            }
        }
},
{
        type: 'input',
        message: 'What is the applications link?',
        name: 'contributions',
        validate: (value) => { 
            if(value){
                return true;
            } else {
                console.log("input value to move to next question")
            }
        }
      },
      {
        name: "tests",
        type: "input",
        message: "Are there any tests for your project?",
        validate: (value) => {
            if(value) {
                return true;
            } else {
                console.log("input value to move to next question")
            }
        }
    },
    {
        name: "github",
        type: "input",
        message: "Please enter your github username.",
        validate: (value) => {
            if(value) {
                return true;
            } else {
                console.log("input value to move onto next question")
            }
        }
    },
    {
        name: "email",
        type: "input",
        message: "Please enter your email.",
        validate: (value) => {
            if(value) {
                return true;
            } else {
                console.log("input value to finish generating readme")
            }
        }
    },
    ]
   

function writeToFile(data) {
    fs.writeFile('generatedReadMe.md', data, (err) => {
        if(err) {
            console.log(err)
        } else {
            console.log('Success! Your README has been generated!')
        }
    })
}


// // TODO: Create a function to initialize app
 function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        console.log(data);
    let fileName = generateMarkdownFile(data);
    writeToFile(fileName);
    })
 }

// // Function call to initialize app
init();

module.exports = questions
