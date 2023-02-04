const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(gitHub) {
        this.gitHub = gitHub;
        super(name, id, email);
    }

    getGithub() {
        console.log(`GitHub: ${this.gitHub}`);
    }
}

const engineer = new Engineer();
engineer.getRole();

