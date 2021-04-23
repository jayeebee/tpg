const Employee = require('../lib/Employee.js');

test('creates an employee profile', () => {
    const employee = new Employee('Craig', 'Craig@test.com');

    expect(employee.name).toBe('Craig');
    expect(employee.email).toBe('Craig@test.com')
})