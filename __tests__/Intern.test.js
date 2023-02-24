const Intern = require('../lib/Intern.js');
const Employee = require('../lib/Employee.js');

test('should create Intern object', () => {
    const expected = new Intern('1', '2', '3', '4');
    expect(expected instanceof Intern).toBe(true);
})

test('should create Intern object which is also Employee', () => {
    const expected = new Intern('1', '2', '3', '4');
    expect(expected instanceof Employee).toBe(true);
})

test('should create obj with Name', () => {
    const testValue = 'Adam'
    const expected = new Intern('testValue', '', '', '');
    expect(expected.name).toBe('testValue');
})

test('should create obj with Id', () => {
    const testValue = '1'
    const expected = new Intern('', 'testValue', '', '');
    expect(expected.id).toBe('testValue');
})

test('should create obj with Email', () => {
    const testValue = 'email@email.com'
    const expected = new Intern('', '', 'testValue', '');
    expect(expected.email).toBe('testValue');
})

test('should create obj with School', () => {
    const testValue = 'UC Davis'
    const expected = new Intern('', '', '', 'testValue');
    expect(expected.school).toBe('testValue');
})

test('should create obj with Role', () => {
    const expected = new Intern('', '', '', '');
    expect(expected.getRole()).toBe('Intern');
})