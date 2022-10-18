// function qualquerFuncao() {}

// console.log(qualquerFuncao.prototype) //{}

function Animal(type, name, age) {
	const animal = Object.create(Animal.prototype);

	animal.name = name;
	animal.type = type;
	animal.age = age;

  return animal
}
