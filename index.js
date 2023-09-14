//dependencies=====================================
const inquirer = require("inquirer");

//data=============================================
// TODO: Create an array of questions for user input
const questions = [
//questions that ask title of project, purpose of project, ... rest of readme

    {
      type: "input",
      message: "What is the name of your project?",
      name: "title",
    },
    {
      type: "input", //can use different ones, like checkbox
      message: "What is the tag line of the project?",
      name: "tagline",
    },
    {
      type: "list",
      message: "Which License will you use?",
      name: "license",
      choices: ["MIT", " "],
    },
];


//functions========================================
// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt(questions)
  .then((answers) => {
    console.log(answers);
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
