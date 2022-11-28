const pokemonMethods ={
    movee : function movee(){},
    training : function training(){},
    evolution : function evolution(){}
}

function pokemon ( name, number ,stats, evolution_stage,level,evolution_level,
    exp,nickname ){
    let pokemon = {};

    pokemon.name = name;
    pokemon.number = number;
    pokemon.type = type();
    pokemon.ability = ability();
    pokemon.hidden_ability = ability();
    pokemon.stats = function stats(hp, attack,sattack,sdefense,speed){
        stats.hp = hp;
        stats.attack = attack;
        stats.sattack = sattack;
        stats.sdefense = sdefense;
        stats.speed = speed;
    };
    pokemon.evolution_stage = evolution_stage;
    pokemon.level = level;
    pokemon.evolution_level = evolution_level;
    pokemon.exp = exp;
    pokemon.nickname = nickname;

    pokemon.movee =  pokemonMethods.movee;
    pokemon.training = pokemonMethods.training;
    pokemon.evolution = pokemonMethods.evolution;
    return pokemon;
}

const movimento = new move ('Aromatheapy','Cures the entire', null , ['self', 'alies'], null, 0);
console.log(movimento)
console.log(movimento.type = type('Grass' , type.damage_dealt =['bug',5], type.damage_taken =['bug',6]));
console.log(movimento)
console.log(type.damage_dealt)
console.log(type.damage_taken)
console.log(type)