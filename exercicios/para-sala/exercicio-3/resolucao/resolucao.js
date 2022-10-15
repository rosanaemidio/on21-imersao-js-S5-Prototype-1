// Resolução da Bárbara
// function Employee(firstName, lastName, salary){
//   const employee = {};
  
//   employee.id = "id" + new Date().getTime();
//   employee.firstName = firstName;
//   employee.lastName = lastName;
//   employee.salary = salary;
//   employee.benefit = [" convênio ", " VA "];
//   employee.raiseSalary = function raiseSalary(percent){
//       let newSalary = this.salary + this.salary * ( percent/100 );
//       return `O novo salário é ${newSalary}`
//   }
//   employee.addBenefits = function addBenefits(benefit){
//       this.benefit.push(benefit);
//       return benefit;
//   }
//   employee.removeBenefits = function removeBenefits(){
//       return this.benefit.pop();

//   }
//   employee.listBenefits = function listBenefits(){
//       return this.benefit;
//   }
//   return employee;
// }

// let barbara = Employee('Bárbara', 'Pereira', 10000);
// console.log(barbara);
// console.log("list" + barbara.listBenefits());
// console.log("Add: " + barbara.addBenefits(" gympass "));
// console.log("Add: " + barbara.addBenefits(" VR "));
// console.log("Add: " + barbara.addBenefits(" PLR "));
// console.log("remove: " + barbara.removeBenefits());
// console.log("list" + barbara.listBenefits());


// Resolução da Evelin
// function createEmployee(firstname, lastname, salary){
//   const employee = {};
//   employee.id = Math.floor(Math.random() * 100);
//   employee.firstName = firstname;
//   employee.lastname = lastname;
//   employee.salary = salary;

//   employee.raiseSalary = function raiseSalary(percent){
//       const newSalary = (this.salary * percent) + this.salary;
//       return newSalary;
//   }

//   employee.listBenefits = [];
//   employee.addBenefits = function addBenefits(benefit){
//       this.listBenefits.push(benefit);
//       return this.listBenefits;
//   }
//   employee.removeBenefits = function removeBenefits(benefit){
//       return this.listBenefits.pop();
//   } 

//   return employee;

// }

// const employee1 = createEmployee('Yoshi', 'Mario', 10000);
// console.log(employee1.addBenefits("Vale refeição"));
// console.log(employee1.addBenefits("Vale alimentação"));

// console.log(employee1.removeBenefits("Vale refeição"));

// Resolução da Claudia
function Employee(firstName, lastName, salary, benefits) {
  const employee = {};

  employee.id = Math.floor(Math.random() * 100);
  employee.firstName = firstName;
  employee.lastName = lastName;
  employee.salary = salary;
  employee.benefits = benefits;

  employee.raiseSalary = function raiseSalary(percent) {
    const aumento = this.salary * (percent / 100);
    this.salary = this.salary + aumento;
    return `O novo salário de ${this.firstName} é de: R$ ${this.salary}`;
  };
  employee.addBenefits = function addBenefit(benefit) {
    return this.benefits.push(benefit);
  };
  employee.removeBenefits = function removeBenefits(benefit) {
    return (this.benefits = this.benefits.filter((b) => b != benefit));
  };

  employee.listBenefits = function listBenefits() {
    return `O funcionário possui estes benefícios: ${this.benefits}`;
  };

  return employee;
}

const employee1 = Employee("Cláudia Maria", "Prudente", 10_000, [
  "VR",
  "VT",
  "gympass",
  "auxílio creche",
]);

console.log(employee1.listBenefits());
employee1.removeBenefits("VR");
console.log(employee1.listBenefits());