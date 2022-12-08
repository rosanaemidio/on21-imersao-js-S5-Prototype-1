const { typeWater, typeEarth, typeAir, typeFire } = require('./type');

function Move(name, type, summary, power, accuracy, target, priority) {
	this.name = name;
	this.type = type;
	this.summary = summary;
	this.power = power;
	this.accuracy = accuracy;
	this.target = target;
	this.priority = priority;
}

const move1 = new Move(
	'Molhar',
	typeWater,
	'Causa dano no inimigo',
	12,
	'selected',
	100,
	1
);

const move2 = new Move(
	'Aterrar',
	typeEarth,
	'Causa dano no inimigo',
	12,
	'selected',
	100,
	1
);

const move3 = new Move(
	'Furação',
	typeAir,
	'Causa dano no inimigo',
	12,
	'selected',
	100,
	1
);

const move4 = new Move(
	'Queimar',
	typeFire,
	'Causa dano no inimigo',
	12,
	'selected',
	100,
	1
);

const move5 = new Move(
	'Espirrar Água',
	typeWater,
	'Causa dano no inimigo',
	16,
	'selected',
	87,
	2
);

module.exports = {
	Move,
	move1,
	move2,
	move3,
	move4,
	move5,
};
