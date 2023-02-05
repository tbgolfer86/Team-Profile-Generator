const Intern = require('../lib/Intern.js');

describe('Intern', () => {
    it('should create a new intern', () => {
        const newIntern = new Intern();
        expect(typeof newIntern).toBe('object');
    });
    it('should have a name', () => {
        const name = 'Tony';
        const newIntern = new Intern('Tony');
        expect(newIntern.name).toBe(name);
    });
    it('should have an ID', () => {
        const id = 7;
        const newIntern = new Intern('Tony', 7);
        expect(newIntern.id).toBe(id);
    });
    it('should have an email address', () => {
        const email = 'tbj86@outlook.com';
        const newIntern = new Intern('Tony', 7, 'tbj86@outlook.com');
        expect(newIntern.email).toBe(email);
    });
    it('should have a school', () => {
        const school = 'UCONN';
        const newIntern = new Intern('Tony', 7, 'tbj86@outlook.com', 'UCONN');
        expect(newIntern.school).toBe(school);
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