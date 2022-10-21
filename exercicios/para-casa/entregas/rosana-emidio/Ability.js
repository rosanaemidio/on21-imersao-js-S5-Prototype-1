function Ability(name, sumary, effect){
    this.name = name;
    this.sumary = sumary;
    this.effect = effect;
}

const newAbility = new Ability('Static','The Pokémon is charged with static electricity, so contact with it may cause paralysis.', 'Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.'
)

module.exports = Ability;
console.log()
