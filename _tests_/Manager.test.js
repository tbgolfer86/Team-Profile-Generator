const Manager = require('../lib/Manager.js');

describe('Manager', () => {
    it('should create a new Manager', () => {
        const newManager = new Manager();
        expect(typeof newManager).toBe('object');
    });
    it('should have a name', () => {
        const name = 'Tony';
        const newManager = new Manager('Tony');
        expect(newManager.name).toBe(name);
    });
    it('should have an ID', () => {
        const id = 7;
        const newManager = new Manager('Tony', 7);
        expect(newManager.id).toBe(id);
    });
    it('should have an email address', () => {
        const email = 'tbj86@outlook.com';
        const newManager = new Manager('Tony', 7, 'tbj86@outlook.com');
        expect(newManager.email).toBe(email);
    });
    it('should have an office number', () => {
        const officeNumber = 100;
        const newManager = new Manager('Tony', 7, 'tbj86@outlook.com', 100);
        expect(newManager.officeNumber).toBe(officeNumber);
    });
    it('should be able to get office number', () => {
        const newManager = new Manager('Tony', 7, 'tbj86@outlook.com', 100);
        expect(newManager.getOfficeNumber()).toBe(newManager.officeNumber);
    });
    it('should be able to get role', () => {
        const newManager = new Manager('Tony');
        expect(newManager.getRole()).toBe('Manager');
    });
});