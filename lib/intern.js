// Employee is the parent class
const Employee = require("./Employee");

// Extends "Employee" class to create a new object
class Intern extends Employee {
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

module.exports = Intern;
