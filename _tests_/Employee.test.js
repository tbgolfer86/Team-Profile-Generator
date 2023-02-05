const Employee = require('../lib/Employee.js');

describe('Employee', () => {
    it('should create a new employee', () => {
        const newEmployee = new Employee();
        expect(typeof newEmployee).toBe('object');
    });
    it('should have a name', () => {
        const name = 'Tony';
        const newEmployee = new Employee('Tony');
        expect(newEmployee.name).toBe(name);
    });
    it('should have an ID', () => {
        const id = 7;
        const newEmployee = new Employee('Tony', 7);
        expect(newEmployee.id).toBe(id);
    });
    it('should have an email address', () => {
        const email = 'tbj86@outlook.com'
        const newEmployee = new Employee('Tony', 7, 'tbj86@outlook.com');
        expect(newEmployee.email).toBe(email);
    });
    it('should be able to get name', () => {
        const newEmployee = new Employee('Tony');
        expect(newEmployee.getName()).toBe(newEmployee.name);
    });
    it('should be able to get ID', () => {
        const newEmployee = new Employee('Tony', 7);
        expect(newEmployee.getID()).toBe(newEmployee.id);
    });
    it('should be able to get email', () => {
        const newEmployee = new Employee('Tony', 7, 'tbj86@outlook.com');
        expect(newEmployee.getEmail()).toBe(newEmployee.email);
    });
    it('should be able to get role', () => {
        const newEmployee = new Employee('Tony');
        expect(newEmployee.getRole()).toBe('Employee');
    });
});