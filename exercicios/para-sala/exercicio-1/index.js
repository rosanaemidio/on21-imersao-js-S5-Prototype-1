//exercicios feitos pela profa aqui
const employee = {};

employee.id = 1;
employee.firstName = 'Luara';
employee.lastName = 'Rangel';
employee.salary = 50000;

employee.raiseSalary = function raiseSalary(percent) {
	const newSalary = this.salary * percent + this.salary;
	this.salary = newSalary;
	return `O novo salário é ${newSalary}`;
};

console.log(employee.raiseSalary(0.1));
