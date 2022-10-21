//exercicios feitos pela profa aqui

//Resolução da Michele
const employeeMetodos = {
  raiseSalary: function raiseSalary(percent) {
      return `O novo salário é: ${(this.salary * percent) + this.salary}`;
  },
  addBenefits: function addBenefits(benefit) {
      this.beneficio.push(benefit);
  },
  removeBenefits: function removeBenefits(benefit) {
      return (this.beneficio = this.beneficio.filter(item => item != benefit
      ))
  },
  listBenefits: function listBenefits() {
      return this.beneficio;
  }
}

//função construtora
function employee(firstname, lastName, salary) {

  const employee = {}

  employee.id = Math.floor(Math.random() * 1000);
  employee.firstname = firstname;
  employee.lastName = lastName;
  employee.salary = salary;
  employee.beneficio = [];

  employee.raiseSalary = employeeMetodos.raiseSalary;
  employee.addBenefits = employeeMetodos.addBenefits;
  employee.removeBenefits = employeeMetodos.removeBenefits;
  employee.listBenefits = employeeMetodos.listBenefits;

  return employee;
}

const funcionario2 = employee("Sarah", "Torres", 5300);
console.log(funcionario2);
funcionario2.addBenefits("vt");
funcionario2.addBenefits("vA");
funcionario2.addBenefits("vale");
funcionario2.removeBenefits("vale");
console.log(funcionario2.listBenefits());
console.log(funcionario2.raiseSalary(0.4));