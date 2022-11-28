// Type: deve possuir:
//  um nome
//  um array para taxa de dano recebido por tipos
//  um array para danos aplicados por tipos.
// Ex.:

const type = {
	name: 'Grass',
	damage_dealt: [
		{ name: 'bug', value: 0.5 },
		{ name: 'dark', value: 1 },
	],
	damage_taken: [
		{ name: 'bug', value: 2 },
		{ name: 'dark', value: 1 },
	],
};

function Type(name, damage_dealt, damage_taken){

    this.name = name;
    this.damage_dealt = damage_dealt;
    this.damage_taken =  damage_taken;
}

module.exports = Type;


// const waterType = new Type('Squirtle', 'Torrent', 'Electric');
// console.log(waterType)