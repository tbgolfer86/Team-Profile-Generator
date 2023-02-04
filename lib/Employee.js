class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }
  
    getName() {
      console.log(`Name: ${this.name}`);
    }
    getID() {
      console.log(`ID: ${this.id}`);
    }
    getEmail() {
      console.log(`Email: ${this.email}`);
    }
    getRole() {
      console.log(`Role: ${this.Employee}`);
    }
}
  
module.exports = Employee;