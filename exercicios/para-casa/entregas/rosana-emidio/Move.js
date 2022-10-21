const Type = require('./Type')

function Move(name, type, summary, power, target, accuracy, priority ) {

    this.name = name;
    this.type = type;
    this.summary= summary;
    this.power = power;
    this.target = target;
    this.accuracy = accuracy;
    this.priority = priority;
}

const move1 = new Move('Aromatherapy', new Type('fogo', [{name: 'bug', value: 1}], [{name: 'dark', value: 2}]), 
'Strengthens Grass moves to inflict 1.5× damage at 1/3 max HP or less.', null, ['self', 'allies'], null, 0)

const move2 = new Move('Whine ', new Type('fogo', [{name: 'bug', value: 1}], [{name: 'dark', value: 2}]), 
'Strengthens Grass moves to inflict 1.5× damage at 1/3 max HP or less.', null, ['self', 'allies'], null, 0)

console.log(move1)
console.log(move2)