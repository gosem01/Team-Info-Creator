const Employee = require('../lib/Employee.js');

test('should create Employee object', () => {

})

test('should create obj with prop name', () => {
    const testValue = 'Adam'
    const expected = new Employee('testValue', '', '', '');
    expect(expected.name).toBe('testValue');
})

test('should create obj with prop name', () => {
    const testValue = 'Adam'
    const expected = new Employee('testValue', '', '', '');
    expect(expected.name).toBe('testValue');
})