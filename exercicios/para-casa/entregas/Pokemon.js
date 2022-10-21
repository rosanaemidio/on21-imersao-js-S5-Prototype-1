

function Pokemon ( name, number,type, ability, hidden_ability, evolution_stage, level, evolution_level,
    exp, nickname ){

    this.name = name;
    this.number = number;
    this.type = type;
    this.ability = ability;
    this.hidden_ability = function hidden_ability(name, summary, effect){
        this.name = name;
        this.summary = summary;
        this.effect = effect;
    };
    this.stats = function stats(hp, attack,sattack,defense,sdefense,speed){
        stats.hp = hp;
        stats.attack = attack;
        stats.sattack = sattack;
        stats.defense = defense;
        stats.sdefense = sdefense;
        stats.speed = speed;
    };
    this.level = level;
    this.evolution_level = evolution_level;
    this.exp = exp;
    this.nickname = nickname;
    this.evolution_stage = evolution_stage;

}

module.exports = Pokemon;