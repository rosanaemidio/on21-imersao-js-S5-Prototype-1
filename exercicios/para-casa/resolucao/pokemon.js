const { typeWater, typeEarth, typeAir, typeFire } = require('./type');
const {
	ability1,
	ability2,
	ability3,
	ability4,
	ability5,
} = require('./abilities');
const { move1, move2, move3, move4 } = require('./move');

const evolutionStages = ['baby', 'basic', 'stage-1', 'stage-2'];

function Pokemon(
	name,
	number,
	types,
	abilities,
	hidden_ability,
	stats,
	moves,
	evolution_stage,
	level,
	evolution_level,
	exp,
	nickname
) {
	this.name = name;
	this.number = number;
	this.types = types;
	this.abilities = abilities;
	this.hidden_ability = hidden_ability;
	this.stats = stats;
	this.moves = moves;
	this.evolution_stage = evolution_stage;
	this.level = level;
	this.evolution_level = evolution_level;
	this.exp = exp;
	this.nickname = nickname;

	Pokemon.prototype.move = function (move) {
		const foundMove = this.moves.find(
			(pokemonMove) => pokemonMove.name === move.name
		);
		if (foundMove !== undefined) {
			console.log(`${this.name} usou o ataque ${move.name}`);
		} else {
			console.log(`${this.name} não pode usar ${move.name}`);
		}
	};

	Pokemon.prototype.train = function (expToIncrease) {
		this.exp += expToIncrease;
		if (this.exp >= 100) {
			this.level++;
			this.exp -= 100;
			console.log(
				`Seu Pokemon subiu de nível. Agora ele é nível ${this.level}`
			);
		} else {
			console.log(`A nova experiência do seu Pokemon é ${this.exp}`);
		}
	};

	Pokemon.prototype.evolute = function (
		newName,
		newAbility,
		newStats,
		newMove,
		newEvolutionLevel
	) {
		if (this.level >= this.evolution_level) {
			this.name = newName;
			this.number++;
			this.abilities.push(newAbility);
			this.stats = newStats;
			this.moves.push(newMove);
			this.evolution_level = newEvolutionLevel;

			currentEvolutionStageIndex = evolutionStages.findIndex(
				(stage) => stage === this.evolution_stage
			);
			this.evolution_stage = evolutionStages[currentEvolutionStageIndex + 1];

			console.log(`Seu Pokemon evoluiu ⏫`);
		} else {
			console.log(
				`Esse Pokemon ainda não atingiu o nível necessário para evolução. O nível para a próxima evolução é ${this.evolution_level}`
			);
		}
	};
}

const pokemon1 = new Pokemon(
	'Baleia',
	1,
	[typeWater],
	[ability1],
	ability5,
	{
		hp: 45,
		attack: 49,
		defense: 49,
		's-attack': 65,
		's-defense': 65,
		speed: 45,
	},
	[move1],
	evolutionStages[0],
	1,
	3,
	0,
	'baleinha'
);

module.exports = { Pokemon, pokemon1 };
