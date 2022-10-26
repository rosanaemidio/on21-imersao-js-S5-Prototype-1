function Abilities(name, summary, effect) {
	this.name = name;
	this.summary = summary;
	this.effect = effect;
}

const ability1 = new Abilities(
	'Super água',
	'Serve para causar danos na energia',
	'Causa o dobro de dano'
);

const ability2 = new Abilities(
	'Super fogo',
	'Serve para causar danos na energia',
	'Causa o dobro de dano'
);

const ability3 = new Abilities(
	'Super terra',
	'Serve para causar danos na energia',
	'Causa o dobro de dano'
);

const ability4 = new Abilities(
	'Super ar',
	'Serve para causar danos na energia',
	'Causa o dobro de dano'
);

const ability5 = new Abilities(
	'Cura',
	'Ajuda a recuperar parte do HP',
	'Recupera 10 pontos no HP'
);

const ability6 = new Abilities(
	'Cura total',
	'Ajuda a recuperar o HP',
	'Recupera todo o HP'
);

module.exports = {
	Abilities,
	ability1,
	ability2,
	ability3,
	ability4,
	ability5,
	ability6,
};
