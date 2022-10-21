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
	employee.benefits = [];

	employee.raiseSalary = function raiseSalary(percent) {
		this.salary += (this.salary * percent) / 100;
		return `O salário com o aumento totaliza R$ ${this.salary}`;
	};

	employee.addBenefits = function addBenefits(benefit) {
		this.benefits.push(benefit);
		console.log(`${benefit} adicionado aos benefícios`);
	};

	employee.removeBenefits = function removeBenefits(benefit) {
		this.benefits = this.benefits.filter(function (element) {
			return element !== benefit;
		});
		console.log(`${benefit} removido dos benefícios`);
	};

	employee.listBenefits = function listBenefits() {
		this.benefits.forEach((benefit) => console.log(`- ${benefit}`));
	};

	return employee;
}

const employee1 = Employee('Luara', 'Kerlen', 10000);
employee1.addBenefits('VR');
employee1.addBenefits('VA');
employee1.addBenefits('Zenklub');
employee1.removeBenefits('VA');
employee1.listBenefits();
