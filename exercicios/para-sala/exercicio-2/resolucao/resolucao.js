function Employee(firstname, lastname, salary) {
    const employee = {}
    employee.id = "id" + Math.floor(Math.random() * 2000)
    employee.firstname = firstname
    employee.lastname = lastname
    employee.salary = salary

    return employee
}

const func1 = Employee("Rosana", "Emidio", 10_000)
const func2 = Employee("Melissa", "Gomes", 2_000)

console.log(func1)
console.log(func2)
