const Engineer = require('../lib/Engineer.js');

describe('Engineer', () => {
    it('should create a new engineer', () => {
        const newEngineer = new Engineer();
        expect(typeof newEngineer).toBe('object');
    });
    it('should have a name', () => {
        const newEngineer = new Engineer('Tony');
        expect(newEngineer.name).toBe('Tony');
    });
    it('should have an ID', () => {
        const newEngineer = new Engineer('Tony', 7);
        expect(newEngineer.id).toBe(7);
    });
    it('should have an email address', () => {
        const newEngineer = new Engineer('Tony', 7, 'tbj86@outlook.com');
        expect(newEngineer.email).toBe('tbj86@outlook.com');
    });
    it('should have a github', () => {
        const newEngineer = new Engineer('Tony', 7, 'tbj86@outlook.com', 'tbgolfer86');
        expect(newEngineer.gitHub).toBe('tbgolfer86');
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