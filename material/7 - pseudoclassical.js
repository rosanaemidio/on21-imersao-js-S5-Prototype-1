function Animal(type, name, age) {
	// let animal = Object.create(Animal.prototype); //Criação do objeto

	this.type = type;
	this.name = name;
	this.age = age;
	this.energy = 0;

	// return animal; //Retorno do objeto
}

Animal.prototype.eat = function eat() {
  
}

const animal1 = new Animal('cachorro', 'Aslam', 3);
console.log(animal1)
