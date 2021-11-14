// Employee is the parent class
const employee = require("./employee");

// Extending constructor "employee"
class manager extends employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = engineer;