const animalMethods = {
	eat: function eat() {
		console.log(`O animal chamado ${this.name} está comendo`);
	},
	sleep: function sleep(hours) {
		this.energy += hours;
	},
};

const outrosMetodos = {
	teste: function teste() {
		console.log('testando');
	},
};

function Animal(type, name, age) {
	const animal = Object.create(animalMethods);

	animal.type = type;
	animal.name = name;
	animal.age = age;
	animal.energy = 0;

	return animal;
}

const animal1 = Animal('cachorro', 'Aslam', 3);
console.log(animal1);
animal1.eat();
