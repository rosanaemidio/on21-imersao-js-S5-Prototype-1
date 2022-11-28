const abilitiesByType = {
	overgrow:
	{
	  name: 'Overgrow',
	  summary: 'Strengthens Grass moves to inflict 1.5× damage at 1/3 max HP or less.',
	  effect: 'When this Pokémon has 1/3 or less of its HP remaining, its Grass-type moves inflict 1.5× as much regular damage.'
	}
	,
	chlorophyll:
	{
	  name: 'Chlorophyll',
	  summary: 'Doubles Speed during strong sunlight.',
	  effect: "This Pokémon's Speed is doubled during strong sunlight."
	}
  }


function Ability(name, summary , effect){

    this.name = name;
    this.summary = summary;
    this.effect = effect;
}

const ability1 = new Ability('Criando Habilidade', 'Criando Summary', 'Criando effect')

console.log(ability1);

module.exports = Ability

