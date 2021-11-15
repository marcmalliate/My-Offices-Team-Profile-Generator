const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// lib.js files required
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Generates HTML
const render = require("./src/template");

const team = []

// Function to generate entire team profile
async function teamProfileGenerator() {


    // Function to choose a team member
    function whichMember() {
        inquirer.prompt([{
            type: "list",
            message: "Select your employee",
            name: "role",
            choices: [
                "Manager",
                "Engineer",
                "Intern"
            ]
        }]).then(data => {
            if (data.role === "Manager") {
                manager();
            } else if (data.role === "Engineer") {
                engineer();
            } else if (data.role === "Intern") {
                intern();
            }
        })
    };

    //function to choose more team members
    function moreMembers() {
        inquirer.prompt([{
            type: "list",
            message: "Choose another employee to add to your team.",
            name: "role",
            choices: [
                "Manager",
                "Engineer",
                "Intern",
                "My team is complete"
            ]
        }]).then(data => {
            if (data.role === "Manger") {
                manager();
            } else if (data.role === "Engineer") {
                engineer();
            } else if (data.role === "Intern") {
                intern();
            } else if (data.role === "My team is complete") {
                getHTML()
            }
        }).catch(error => {
            return error;
        });


    };


    //Manager questions
    async function manager() {
        inquirer.prompt([{
                type: "input",
                name: "name",
                message: "What is the name of the manager?"
            },
            {
                type: "number",
                name: "id",
                message: "What is their ID number?"
            },
            {
                type: "input",
                name: 'email',
                message: "What is the managers email address?"
            },
            {
                type: "number",
                name: "office",
                message: "What is the managers office number?"
            },
        ]).then(managerData => {
            const managerInfo = new Manager(managerData.name, managerData.id, managerData.email, managerData.office);
            team.push(managerInfo);
            moreMembers();

        }).catch(error => {
            console.log(error);
        })
    }


    //Engineer questions
    async function engineer() {
        inquirer.prompt([{
                type: "input",
                name: "name",
                message: "What is the name of the engineer?"
            },
            {
                type: "number",
                name: "id",
                message: "What is the engineers ID number?"
            },
            {
                type: "input",
                name: "email",
                message: "What is the engineers email address?"
            },
            {
                type: "input",
                name: "github",
                message: "What is the engineers github username?"
            }
        ]).then(engineerData => {
            const engineerInfo = new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.github);
            team.push(engineerInfo);
            moreMembers();

        }).catch(error => {
            console.log(error);
        })
    }


    //Intern questions 
    async function intern() {
        inquirer.prompt([{
                type: "input",
                name: "name",
                message: "What is the name of the intern?"
            },
            {
                type: "number",
                name: "id",
                message: "What is the interns ID number?"
            },
            {
                type: "input",
                name: "email",
                message: "What is the interns email address?"
            },
            {
                type: "input",
                name: "school",
                message: "What school does the intern attend?"
            }
        ]).then(internData => {
            const internInfo = new Intern(internData.name, internData.id, internData.email, internData.school);
            team.push(internInfo);
            moreMembers();

        }).catch(error => {
            console.log(error);
        });
    };


    async function startQuestions() {
        whichMember();
    };
    startQuestions();


    // Gets object and write to HTML
    async function getHTML() {
        console.log(team)
        const myHTML = render(team);


        fs.writeFileSync('./dist/team.html', myHTML, function(err) {
            if (err) return err;
            console.log("Success! You made a team.html file!")
        });
    };

}

//calls create team profile function 
teamProfileGenerator();