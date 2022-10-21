//exercicios feitos pela profa aqui
function generateId() {
	const crypto = require('crypto');
	const id = crypto.randomUUID();
	return id;
}

function Employee(firstName, lastName, salary) {
	let employee = {};

	employee.id = generateId();
	employee.firstName = firstName;
	employee.lastName = lastName;
	employee.salary = salary;

	employee.raiseSalary = function raiseSalary(percent) {
		this.salary += (this.salary * percent) / 100;
		return `O salário com o aumento totaliza R$ ${this.salary}`;
	};

	return employee;
}

const employee1 = Employee('Luara', 'Kerlen', 10000);
console.log(employee1);
console.log(employee1.raiseSalary(10));

const employee2 = Employee('Maria', 'Santos', 20000);
console.log(employee2);
console.log(employee2.raiseSalary(5));
