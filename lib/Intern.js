const Employee = require('./Employee');

class Intern extends Employee {
    constructor(school) {
        this.school = school;
        super(name, id, email);
    }

    getSchool() {
        console.log(`School: ${this.school}`);
    }
}

const intern = new Intern();
intern.getRole();