// Write your solution in this file!
// Assume employee object is defined somewhere in your code
let employee = {};

function updateEmployeeWithKeyAndValue(employee, key, value) {
  // Create a new object by spreading the original employee and adding the new key/value pair
  const updatedEmployee = {
    ...employee,
    [key]: value
  };
  return updatedEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  // Modify the original employee and return it
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  // Create a new object by spreading the original employee and excluding the specified key
  const newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  // Modify the original employee by deleting the specified key
  delete employee[key];
  return employee;
}
