const Engineer = require('../lib/Engineer.js');
const Employee = require('../lib/Employee.js');


test('should create Engineer object', () => {
    const expected = new Engineer('1', '2', '3', '4');
    expect(expected instanceof Engineer).toBe(true);
})

test('should create Engineer object which is also Employee', () => {
    const expected = new Engineer('1', '2', '3', '4');
    expect(expected instanceof Employee).toBe(true);
})

test('should create obj with Name', () => {
    const testValue = 'Adam'
    const expected = new Engineer('testValue', '', '', '');
    expect(expected.name).toBe('testValue');
})

test('should create obj with Id', () => {
    const testValue = '1'
    const expected = new Engineer('', 'testValue', '', '');
    expect(expected.id).toBe('testValue');
})

test('should create obj with Email', () => {
    const testValue = 'email@email.com'
    const expected = new Engineer('', '', 'testValue', '');
    expect(expected.email).toBe('testValue');
})

test('should create obj with Github', () => {
    const testValue = 'gitgit-01'
    const expected = new Engineer('', '', '', 'testValue');
    expect(expected.github).toBe('testValue');
})

test('should create obj with Role', () => {
    const expected = new Engineer('', '', '', '');
    expect(expected.getRole()).toBe('Engineer');
})