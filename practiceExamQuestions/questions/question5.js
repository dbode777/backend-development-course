/*
ABC corporation has many employees, some of which are managers, others which are employees. 
Each employee has a manager, and some managers have a manager who oversees them. 
Each employee knows who manages them but unfortunately the managers have lost their org chart 
making it difficult for them to remember which employees are below them in the hierarchy.

For this question you’ll be given an array of javascript objects representing employee information. 
Each employee has a unique “id” property, and every employee that has a manager has a “manager” property 
that stores the “id” of their manager. 

Your job is to return a new javascript object that contains the ids of managers as properties, 
where each property stores an array of the unique ids of all employees beneath that manager in the hierarchy. 
You may assume any manager referenced will always exist in the array.
*/

function getOrgChart(employees) {
    let orgChart = {}

    for (let employee of employees) {

        if (!employee || !employee.id) {
            console.log("Invalid employee data.")
            continue
        }

        let updatedToUpperManager = false
        while (updatedToUpperManager === false) {
            if (!employee.manager) {
                console.log("Employee with id: " + employee.id + " has no manager.")
                updatedToUpperManager = true
            } else if (orgChart[employee.manager]) {
                console.log("Manager with id: " + employee.manager + " was found in the orgChart. Adding employee with id: " + employee.id + " to the manager's array of employees.")
                orgChart[employee.manager].push(employee.id)
                employee = { id: employee.id, manager: employees.find(e => e.id === employee.manager).manager } // Update employee object's manager id to the next manager
            } else {
                console.log("Manager with id: " + employee.manager + " was not found in the orgChart. Adding the manager and employee with id: " + employee.id + " to the orgChart.")
                orgChart[employee.manager] = [employee.id]
                employee = { id: employee.id, manager: employees.find(e => e.id === employee.manager).manager } // Update employee object's manager id to the next manager
            }
        }
    }

    return orgChart
}

module.exports = { getOrgChart }