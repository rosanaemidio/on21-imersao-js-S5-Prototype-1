const parent = {
    name: 'Maria',
    age: 50,
    nationality: 'brasileira',
}

const child = Object.create(parent)
child.name = 'Rosana'
child.age = 29


console.log(parent);
