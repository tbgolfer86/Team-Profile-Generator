const Employee = require('./Employee');

class Manager extends Employee {
    constructor(officeNumber) {
        this.officeNumber = officeNumber;
        super(name, id, email);
    }
}

const manager = new Manager();
manager.getRole();