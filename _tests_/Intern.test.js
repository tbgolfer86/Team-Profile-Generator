const Intern = require('../lib/Intern.js');

describe('Intern', () => {
    it('should create a new intern', () => {
        const newIntern = new Intern();
        expect(typeof newIntern).toBe('object');
    });
    it('should have a name', () => {
        const newIntern = new Intern('Tony');
        expect(newIntern.name).toBe('Tony');
    });
    it('should have an ID', () => {
        const newIntern = new Intern('Tony', 7);
        expect(newIntern.id).toBe(7);
    });
    it('should have an email address', () => {
        const newIntern = new Intern('Tony', 7, 'tbj86@outlook.com');
        expect(newIntern.email).toBe('tbj86@outlook.com');
    });
    it('should have a school', () => {
        const newIntern = new Intern('Tony', 7, 'tbj86@outlook.com', 'UCONN');
        expect(newIntern.school).toBe('UCONN');
    });
    it('should be able to get school', () => {
        const newIntern = new Intern('Tony', 7, 'tbj86@outlook.com', 'UCONN');
        expect(newIntern.getSchool()).toBe(newIntern.school);
    });
    it('should be able to get role', () => {
        const newIntern = new Intern('Tony');
        expect(newIntern.getRole()).toBe('Intern');
    });
});