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
        message: "Would you like to add additional collaborators?",
        name: "collab",
      },
    {
      type: "list",
      message: "Which License does your project you use?",
      name: "license",
      choices: ["MIT", " ", " "],
    },
    {
        type: "list",
        message: "Which badge would you like to add?",
        name: "badge",
        choices: [" ", " "],
      },
];


//functions========================================
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
let markDown = generateMarkdown(data)

fs.writeFile(fileName, markDown, (err)=>
err ? console.log (err) : console.log('success!!!'))
}

// TODO: Create a function to initialize app
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

// Function call to initialize app
init();



//notes 
//from mini project 
//write the file
///pull out object that's passed into the function with object destructuring !!!!
//useful to move the long file writing function to a new page because it's a lot of lines of code-- how to lonk - "module.exports = generateHTML;""
//then add a const generateHTML =  require('./utils/generateHTML.js'); to the other page to link them

//break up the chunks of generated content into render funcitons like the guide says, break up sections and put the funtion in the template literal, 
///if statements == if !github retune '' empy string, else return `~actual code~`/// 
//support functions 

//licensing , you don't need it in the readme , just say what kind of license it is- standard types. 
//should be a link in the table of contents to link down - function to check if there is a licence, then if so add the link to jump down to it 
//option for none perhaps!!!

//badges are images,  


// make a codeblock in markdown ```npm i``` markdown language , but if adding inside of a backtic string you gotta do \`\`\`npm i \`\`\`