const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./src/generateHTML');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


const managerQuestions = [{
    type: 'input',
    name: 'name',
    message: `Enter the team manager's name:`
  },
  {
    type: 'input',
    name: 'id',
    message: `Enter the team manager's employee ID:`
  },
  {
    type: 'input',
    name: 'email',
    message: `Enter the team manager's email address:`
  },
  {
    type: 'input',
    name: 'officeNumber',
    message: `Enter the team manager's office number:`
  },
];

function getManager() {
    inquirer
        .prompt(managerQuestions)
        .then((managerData) => {
          manager = new Manager(managerData.name, managerData.id, managerData.email, managerData.officeNumber);
          console.log(manager);
          addEmployee();
    });
};

const engineerQuestions = [{
    type: 'input',
    name: 'name',
    message: `Enter the engineer's name:`
  },
  {
    type: 'input',
    name: 'id',
    message: `Enter the engineer's employee ID:`
  },
  {
    type: 'input',
    name: 'email',
    message: `Enter the engineer's email address:`
  },
  {
    type: 'input',
    name: 'github',
    message: `Enter the engineer's GitHub:`
  },
];

function getEngineer() {
    inquirer
        .prompt(engineerQuestions)
        .then((engineerData) => {
          engineer = new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.github);
          console.log(engineer);
          addEmployee();
    });
};

const internQuestions = [{
    type: 'input',
    name: 'name',
    message: `Enter the intern's name:`
  },
  {
    type: 'input',
    name: 'id',
    message: `Enter the intern's employee ID:`
  },
  {
    type: 'input',
    name: 'email',
    message: `Enter the intern's email address:`
  },
  {
    type: 'input',
    name: 'school',
    message: `Enter the intern's school:`
  },
];

function getIntern() {
    inquirer
        .prompt(internQuestions)
        .then((internData) => {
          intern = new Intern(internData.name, internData.id, internData.email, internData.school);
          console.log(intern);
          addEmployee();
    });
}

function addEmployee () {
    inquirer
        .prompt({
          type: 'list',
          name: 'newMember',
          message: 'Select a member of the team:',
          choices: [
            "Engineer",
            "Intern",
            "Done",
          ]
        })
        .then((employeeData) => {
            if (employeeData.newMember == 'Engineer') {
                getEngineer();
            }
            if (employeeData.newMember == 'Intern') {
                getIntern();
            }
            if (employeeData.newMember == 'Done') {
                return;
            }
        });
};



function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Successfully created your .html file!')
    );
  }
  
  function init() {
    getManager()
  }
  
  init();




//   WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated