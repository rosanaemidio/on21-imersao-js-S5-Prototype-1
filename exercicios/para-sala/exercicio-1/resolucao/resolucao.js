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

//Função construtora =  Uma função que constroi outros objetos
// é o como funciona o construtor da classe por baixo dos panos
function Animal (type, name, age) {
    let animal = {};

    animal.type = type;
    animal.name = name;
    animal.age = age;

    animal.eat = function eat() {
        console.log(`${this.type} chamado ${this.name} está comendo`)
    };

    return animal;
}

const animal1 = Animal('Gato', 'Adora', 1)
const animal2 = Animal('Cachorro', 'Pongo', 3)