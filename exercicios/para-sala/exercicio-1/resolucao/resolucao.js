const employee = {
  id: 1,
  firstname: 'Gabriela',
  lastName: 'Tavares ',
  salary: 10_000,
  raiseSalary(percent) {
      const newSalary = (this.salary * percent) + this.salary;
      return newSalary;
  }
}

console.log(employee.raiseSalary(0.12))

const employee2 = {
  id: 2,
  firstname: 'Vinicius',
  lastName: 'Pereira ',
  salary: 5_000,
  raiseSalary(percent) {
      const newSalary = (this.salary * percent) + this.salary;
      return newSalary;
  }
}

console.log(employee2.raiseSalary(0.10))