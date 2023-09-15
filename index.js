//dependencies=====================================
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");


//data=============================================
// TODO: Create an array of questions for user input
const questions = [
//questions that ask title of project, purpose of project, ... rest of readme
{
    type: "input",
    message: "What is your GitHub username?",
    name: "username",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your LinkedIn?",
    name: "linkedIn",
  },
    {
      type: "input",
      message: "What is the name of your project?",
      name: "title",
    },
    {
      type: "input", 
      message: "What does your project do? Why did you make this?",
      name: "description",
    },
    {
        type: "input", 
        message: "How do you install your project?",
        name: "installation",
      },
      {
        type: "input", 
        message: "What are the instructions to use the project?",
        name: "instructions",
      },
      {
        type: "input",
        message: "Who were your additional collaborators? If none, hit enter",
        name: "collab",
      },
      {
        type: "input",
        message: "Who would you like to give a shout out to?",
        name: "shoutout",
      },
    {
      type: "list",
      message: "Which License does your project you use?",
      name: "license",
      choices: ["MIT", "Apache", "GNU", "No License"],
    }
];


//functions========================================
// Creates a function to write README file
function writeToFile(fileName, data) {
let markDown = generateMarkdown(data)

fs.writeFile(fileName, markDown, (err)=>
err ? console.log (err) : console.log('success!!!'))
}

//Creates a function to initialize app
function init() {
    inquirer
  inquirer.prompt(questions)
  .then((data) => {
    console.log(data);
    writeToFile('README.md', data);
  })
  .catch((error) => {
    if (error.isTtyError) {
        console.log("error!")
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
      console.log("something else is wrong...")
    }
  });
}

//calls to initialize app
init();
