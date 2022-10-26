function Type(name, damages_dealt, damages_taken) {
	this.name = name;
	this.damages_dealt = damages_dealt;
	this.damages_taken = damages_taken;
}

const typeWater = new Type(
	'Água',
	[
		{ name: 'Fogo', value: 2 },
		{ name: 'Terra', value: 1 },
	],
	[
		{ name: 'Terra', value: 2 },
		{ name: 'Ar', value: 1 },
	]
);
const typeEarth = new Type(
	'Terra',
	[
		{ name: 'Água', value: 2 },
		{ name: 'Fogo', value: 1 },
	],
	[
		{ name: 'Ar', value: 2 },
		{ name: 'Água', value: 1 },
	]
);
const typeFire = new Type(
	'Fogo',
	[{ name: 'Ar', value: 2 }],
	[
		{ name: 'Água', value: 2 },
		{ name: 'Terra', value: 1 },
	]
);
const typeAir = new Type(
	'Ar',
	[
		{ name: 'Terra', value: 2 },
		{ name: 'Água', value: 1 },
	],
	[{ name: 'Fogo', value: 2 }]
);

module.exports = { Type, typeWater, typeEarth, typeFire, typeAir };
