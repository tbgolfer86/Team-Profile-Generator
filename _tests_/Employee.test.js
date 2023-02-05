const Employee = require('../lib/Employee.js');

describe('Employee', () => {
    it('should create a new employee object', () => {
        const newEmployee = new Employee();
        expect(typeof newEmployee).toBe('object');
    });
    it('should have a name', () => {
        const newEmployee = new Employee('Tony');
        expect(newEmployee.name).toBe('Tony');
    });
    it('should have an ID', () => {
        const newEmployee = new Employee('Tony', 7);
        expect(newEmployee.id).toBe(7);
    });
    it('should have an email address', () => {
        const newEmployee = new Employee('Tony', 7, 'tbj86@outlook.com');
        expect(newEmployee.email).toBe('tbj86@outlook.com');
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