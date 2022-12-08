//exercicios feitos pela profa aqui
const { move1, move2, move5 } = require('./move');
const { pokemon1 } = require('./pokemon');
const { ability6 } = require('./abilities');

console.log(pokemon1);
/* POKEMON INICIALMENTE
Pokemon {
  name: 'Baleia',
  number: 1,
  types: [
    Type {
      name: 'Água',
      damages_dealt: [Array],
      damages_taken: [Array]
    }
  ],
  abilities: [
    Abilities {
      name: 'Super água',
      summary: 'Serve para causar danos na energia',
      effect: 'Causa o dobro de dano'
    }
  ],
  hidden_ability: Abilities {
    name: 'Cura',
    summary: 'Ajuda a recuperar parte do HP',
    effect: 'Recupera 10 pontos no HP'
  },
  stats: {
    hp: 45,
    attack: 49,
    defense: 49,
    's-attack': 65,
    's-defense': 65,
    speed: 45
  },
  moves: [
    Move {
      name: 'Molhar',
      type: [Type],
      summary: 'Causa dano no inimigo',
      power: 12,
      accuracy: 'selected',
      target: 100,
      priority: 1
    }
  ],
  evolution_stage: 'baby',
  level: 1,
  evolution_level: 3,
  exp: 0,
  nickname: 'baleinha'
}
*/

pokemon1.move(move1); //Baleia usou o ataque Molhar
pokemon1.move(move2); //Baleia não pode usar Aterrar

pokemon1.train(30); //A nova experiência do seu Pokemon é 30
pokemon1.train(40); //A nova experiência do seu Pokemon é 70
pokemon1.train(30); //Seu Pokemon subiu de nível. Agora ele é nível 2
pokemon1.train(50); //A nova experiência do seu Pokemon é 50

pokemon1.evolute(
	'Baleia Azul',
	ability6,
	{
		hp: 90,
		attack: 60,
		defense: 60,
		's-attack': 85,
		's-defense': 85,
		speed: 70,
	},
	move5,
	7
); //Esse Pokemon ainda não atingiu o nível necessário para evolução. O nível para a próxima evolução é 3

pokemon1.train(50); //Seu Pokemon subiu de nível. Agora ele é nível 2

pokemon1.evolute(
	'Baleia Azul',
	ability6,
	{
		hp: 90,
		attack: 60,
		defense: 60,
		's-attack': 85,
		's-defense': 85,
		speed: 70,
	},
	move5,
	7
); //Seu Pokemon evoluiu ⏫

console.log(pokemon1);
/* POKEMON EVOLUÍDO
Pokemon {
  name: 'Baleia Azul',
  number: 2,
  types: [
    Type {
      name: 'Água',
      damages_dealt: [Array],
      damages_taken: [Array]
    }
  ],
  abilities: [
    Abilities {
      name: 'Super água',
      summary: 'Serve para causar danos na energia',
      effect: 'Causa o dobro de dano'
    },
    Abilities {
      name: 'Cura total',
      summary: 'Ajuda a recuperar o HP',
      effect: 'Recupera todo o HP'
    }
  ],
  hidden_ability: Abilities {
    name: 'Cura',
    summary: 'Ajuda a recuperar parte do HP',
    effect: 'Recupera 10 pontos no HP'
  },
  stats: {
    hp: 90,
    attack: 60,
    defense: 60,
    's-attack': 85,
    's-defense': 85,
    speed: 70
  },
  moves: [
    Move {
      name: 'Molhar',
      type: [Type],
      summary: 'Causa dano no inimigo',
      power: 12,
      accuracy: 'selected',
      target: 100,
      priority: 1
    },
    Move {
      name: 'Espirrar Água',
      type: [Type],
      summary: 'Causa dano no inimigo',
      power: 16,
      accuracy: 'selected',
      target: 87,
      priority: 2
    }
  ],
  evolution_stage: 'basic',
  level: 3,
  evolution_level: 7,
  exp: 0,
  nickname: 'baleinha'
}
*/
