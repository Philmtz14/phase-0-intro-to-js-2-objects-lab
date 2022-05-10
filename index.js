// Write your solution in this file!
const employee = {
    name: 'Philip',
    streetAddress: '14 Broadway'
};

function updateEmployeeWithKeyAndValue (employee, key, value) {
    const newEmployee = { ...employee};
    newEmployee[key] = value;
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {
    employee[key] = value;
    return employee
}

// `destructivelyUpdateEmployeeWithKeyAndValue()`: this function should work the
//same as `updateEmployeeWithKeyAndValue()` but it _should_ mutate the
//`employee` `Object` passed in.

function deleteFromEmployeeByKey (employee, key, value) {
    const newEmployee = {...employee};
    newEmployee [key] = value;
    return newEmployee;
}

delete deleteFromEmployeeByKey.key;

function destructivelyDeleteFromEmployeeByKey (employee, key) {
    delete employee[key];
    return employee;
}
