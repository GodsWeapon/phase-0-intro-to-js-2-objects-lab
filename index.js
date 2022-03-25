const employee = {
    name: "Sam", 
    streetAddress: "11 Broadway"
};

function updateEmployeeWithKeyAndValue(copyEmployee, key, value) {
    copyEmployee = { name: "Sam" , streetAddress: "11 Broadway" };
    return copyEmployee;
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee.streetAddress = "12 Broadway";
    return employee
};

function deleteFromEmployeeByKey(secondCopyEmployee, key) {
    secondCopyEmployee = {...employee};
    delete secondCopyEmployee.name;
    return secondCopyEmployee;
};

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name;
    return employee
};
