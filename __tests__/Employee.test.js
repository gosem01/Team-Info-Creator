const Employee = require('../lib/Employee.js');
const Engineer = require('../lib/Engineer.js');
const Intern = require('../lib/Intern.js');
const Manager = require('../lib/Manager.js');


test('should create Employee object', () => {
    const expected = new Employee('1', '2', '3');
    expect(expected instanceof Employee).toBe(true);
})

test('should create Employee object but is not child of Engineer', () => {
    const expected = new Employee('1', '2', '3');
    expect(expected instanceof Engineer).toBe(false);
})

test('should create Employee object but is not child of Manager', () => {
    const expected = new Employee('1', '2', '3');
    expect(expected instanceof Manager).toBe(false);
})

test('should create Employee object but is not child of Intern', () => {
    const expected = new Employee('1', '2', '3');
    expect(expected instanceof Intern).toBe(false);
})

test('should create obj with Name', () => {
    const testValue = 'Adam'
    const expected = new Employee('testValue', '', '');
    expect(expected.name).toBe('testValue');
})

test('should create obj with Id', () => {
    const testValue = '1'
    const expected = new Employee('', 'testValue', '');
    expect(expected.id).toBe('testValue');
})

test('should create obj with Email', () => {
    const testValue = 'email@email.com'
    const expected = new Employee('', '', 'testValue');
    expect(expected.email).toBe('testValue');
})

test('should create obj with Role', () => {
    const expected = new Employee('', '', '', '');
    expect(expected.getRole()).toBe('Employee');
})