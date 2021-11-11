// Employee is the parent class
const employee = require("./employee");

// Extends "employee" class to create a new object
class intern extends employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  getRole() {
    return "Intern";
  }

  getSchool() {
    return this.school;
  }
    
}

module.exports = intern;
