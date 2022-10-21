function Type(name, demage_dealt, damage_taken){
    this.name = name;
    this.demage_dealt = demage_dealt;
    this.damage_taken= damage_taken;
}


const type2 = new Type('eletric',[{name: 'bug', value:1 },{name: 'dark', value:1 }],[{name: 'bug', value: 2}, {name: 'dark', value: 1}])

module.exports = Type;