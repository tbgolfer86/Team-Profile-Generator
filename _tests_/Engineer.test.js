const Engineer = require('../lib/Engineer.js');

describe('Engineer', () => {
    it('should create a new engineer', () => {
        const newEngineer = new Engineer();
        expect(typeof newEngineer).toBe('object');
    });
    it('should have a name', () => {
        const name = 'Tony';
        const newEngineer = new Engineer('Tony');
        expect(newEngineer.name).toBe(name);
    });
    it('should have an ID', () => {
        const id = 7;
        const newEngineer = new Engineer('Tony', 7);
        expect(newEngineer.id).toBe(id);
    });
    it('should have an email address', () => {
        const email = 'tbj86@outlook.com';
        const newEngineer = new Engineer('Tony', 7, 'tbj86@outlook.com');
        expect(newEngineer.email).toBe(email);
    });
    it('should have a github', () => {
        const gitHub = 'tbgolfer86';
        const newEngineer = new Engineer('Tony', 7, 'tbj86@outlook.com', 'tbgolfer86');
        expect(newEngineer.gitHub).toBe(gitHub);
    });
    it('should be able to get github', () => {
        const newEngineer = new Engineer('Tony', 7, 'tbj86@outlook.com', 'tbgolfer86');
        expect(newEngineer.getGithub()).toBe(newEngineer.gitHub);
    });
    it('should be able to get role', () => {
        const newEngineer = new Engineer('Tony');
        expect(newEngineer.getRole()).toBe('Engineer');
    });
});