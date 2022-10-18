const animalMethods = {
	eat: function eat() {
		console.log(`O animal chamado ${this.name} está comendo`);
	},
	sleep: function sleep(hours) {
		this.energy += hours;
	},
};

function Animal(type, name, age) {
	const animal = {};

	animal.type = type;
	animal.name = name;
	animal.age = age;
	animal.energy = 0;

	animal.eat = animalMethods.eat;
	animal.sleep = animalMethods.sleep;

	return animal;
}

const animal1 = Animal('cachorro', 'Aslam', 3);
const animal2 = Animal('gato', 'Caju', 1);

animal1.eat()
animal2.eat()

// console.log(animal1);
// console.log(animal2);

// console.log(animal2.energy);
// animal2.sleep(12);
// console.log(animal2.energy);

animalMethods.eat = function eat() {
	console.log('Agora estou executando esse método')
}

const animal3 = Animal('leão', 'Alex', 6)
animal3.eat()
