const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./src/generateHTML');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

let team = [];

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

function buildTeam() {
    inquirer
        .prompt(managerQuestions)
        .then((managerData) => {
          manager = new Manager(managerData.name, managerData.id, managerData.email, managerData.officeNumber);
          team.push(manager);
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
          team.push(engineer);
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
          team.push(intern);
          addEmployee();
    });
};

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
                htmlContent = generateHTML(team);
                writeToFile('./dist/team.html', htmlContent);
                return;
            }
        });
};

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Successfully created your .html file!')
    );
};
  
function init() {
    buildTeam()
};
  
init();