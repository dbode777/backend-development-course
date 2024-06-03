/* Employee object structure
{
    id: Number,
    employee_name: String,
    position: String,
    salary: Number,
    department: {
        department_name: String,
        location: String
    }
}
*/
// TODO: create an employee class to create the employee objects and place the function within that.

class Employee {

    constructor(id, employee_name, position, salary, department_name, location) {
        this.id = id;
        this.employee_name = employee_name;
        this.position = position;
        this.salary = salary;
        this.department = {
            department_name,
            location
        };
    };
};

/**
 * Updates an employee's salary. Checks an array (employees) to see if the employee id exists. If it does not, null is returned. 
 * @param {Array.<Object>} employees An array of objects representing employee data.
 * @param {Number} employeeId employee's id whose salary you would like to update.
 * @param {Number} newSalary The new salary to apply for the specified employee
 * @returns {Object} Either returns the new Employee object or null if the employee doesn't exist in the array of employees.
 */
const updateEmployeeSalary = (employees, employeeId, newSalary) => {
    // TODO: update the salary of the employee with the specified id to the newSalary. If the ID doesn't exist, return null. Return the updated employee object after updating the salary
    for (employee of employees) {
        if (employee.id === employeeId) {
            employee.salary = newSalary;
            console.log("Salary updated.")
            return employee;
        }
    }

    console.log("That employee does not exist.")
    // Null if the id isn't in employees
    return null;
};

// Test Cases, comments show the expected results
const employees1 = [
    new Employee(1, "John Doe", "Developer", 60000, "Development", "New York"),
    new Employee(2, "Jane Smith", "Designer", 65000, "Design", "San Francisco")
];
console.log(updateEmployeeSalary(employees1, 1, 65000)); // Employee { id: 1, name: "John Doe", position: "Developer", salary: 65000, department: { name: "Development", location: "New York" } }

const employees2 = [
    new Employee(1, "Alice Brown", "Manager", 75000, "Management", "London")
];

console.log(updateEmployeeSalary(employees2, 3, 80000)); // null

const employees3 = [
    new Employee(1, "Bob Green", "Analyst", 50000, "Analytics", "Berlin")
];
console.log(updateEmployeeSalary(employees3, 1, 48000)); // Employee { id: 1, name: "Bob Green", position: "Analyst", salary: 48000, department: { name: "Analytics", location: "Berlin" } }

const employees4 = [];
console.log(updateEmployeeSalary(employees4, 1, 85000)); // null