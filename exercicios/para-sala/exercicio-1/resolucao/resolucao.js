const employee = {}
employee.id = 25;
employee.firstname = 'Rosana';
employee.lastname  = 'Emidio';
employee.salary = 10_000;

employee.raiseSalary = function raiseSalary(percent) {
    const newSalary = (this.salary * percent) + this.salary;
    this.salary = newSalary;
    return newSalary
}

console.log(employee.raiseSalary(0.20))