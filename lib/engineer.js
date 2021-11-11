// Employee is the parent class
   
const employee = require("./employee");

// Extends "employee" class to create a new object
class engineer extends employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  getRole() {
    return "Engineer";
  }

  getGithub() {
    return this.github;
  }
    
}

module.exports = engineer;