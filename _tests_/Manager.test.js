const Manager = require('../lib/Manager.js');

describe('Manager', () => {
    it('should create a new Manager object', () => {
        const newManager = new Manager();
        expect(typeof newManager).toBe('object');
    });
    it('should have a name', () => {
        const newManager = new Manager('Tony');
        expect(newManager.name).toBe('Tony');
    });
    it('should have an ID', () => {
        const newManager = new Manager('Tony', 7);
        expect(newManager.id).toBe(7);
    });
    it('should have an email address', () => {
        const newManager = new Manager('Tony', 7, 'tbj86@outlook.com');
        expect(newManager.email).toBe('tbj86@outlook.com');
    });
    it('should have an office number', () => {
        const newManager = new Manager('Tony', 7, 'tbj86@outlook.com', 100);
        expect(newManager.officeNumber).toBe(100);
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