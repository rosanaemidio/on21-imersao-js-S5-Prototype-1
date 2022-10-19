# Exercício de Casa 🏠

Você foi escalada como estagiária para fazer todo o trabalho duro de criação de uma Pokedex (uma Poke Agenda virtual para guardar os Pokemons que você viu e capturou)!

Para isso vamos precisar de funções construtoras para 4 objetos diferentes:

- Type: deve possuir:
  - [ ] um nome
  - [ ] um array para taxa de dano recebido por tipos
  - [ ] um array para danos aplicados por tipos.

Ex.:
```javascript
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
```

- Abilities: deve possuir:
  - [ ] um nome
  - [ ] uma descrição breve da habilidade
  - [ ] o efeito dela.
  
Ex.:
```javascript
const ability = {
	name: 'Overgrow',
	summary:
		'Strengthens Grass moves to inflict 1.5× damage at 1/3 max HP or less.',
	effect:
		'When this Pokémon has 1/3 or less of its HP remaining, its Grass-type moves inflict 1.5× as much regular damage.',
};
```

- Move: deve possui:
  - [ ] nome
  - [ ] tipo
  - [ ] descrição
  - [ ] poder
  - [ ] alvo ('self', 'allies', 'selected')
  - [ ] precisão
  - [ ] prioridade.
  
Ex.:
```javascript
const move = {
    name: 'Aromatherapy',
    type: {
        name: 'Grass',
        damage_dealt: [{name: 'bug', value: 0.5}, {name: 'dark', value: 1}],
        damage_taken: [{name: 'bug', value: 2}, {name: 'dark', value: 1}]
    }
    summary: 'Cures the entire party of major status effects.',
    power: null,
    target: ['self', 'allies'],
    accuracy: null,
    priority: 0
}
```

```javascript
const another_move = {
    name: 'Vine Whip',
    type: {
        name: 'Grass',
        damage_dealt: [{name: 'bug', value: 0.5}, {name: 'dark', value: 1}],
        damage_taken: [{name: 'bug', value: 2}, {name: 'dark', value: 1}]
    },
    summary: 'Inflicts regular damage with no additional effect.',
    power: 45,
    accuracy: 100,
    target: ['selected'],
    priority: 0
}
```

- Pokemon: deve possuir
  - [ ] nome
  - [ ] número
  - [ ] tipo(s)
  - [ ] habilidades
  - [ ] habilidade oculta
  - [ ] status - contendo:
    - [ ] saúde
    - [ ] ataque
    - [ ] defesa
    - [ ] ataque especial
    - [ ] defesa especial
    - [ ] velocidade
  - moves
  - [ ] estágio de evolução ('baby', 'basic', 'stage-1', 'stage-2')
  - [ ] nível
  - [ ] nível de evolução
  - [ ] pontos de experiência
  - [ ] apelido.
  
Ex.:
```javascript
const pokemon = {
    name: 'Bulbasaur',
    number: 1,
    types: [
        {
            name: 'Grass',
            damage_dealt: [{name: 'bug', value: 0.5}, {name: 'dark', value: 1}],
            damage_taken: [{name: 'bug', value: 2}, {name: 'dark', value: 1}]
        },
        {
            name: 'Poison',
            damage_dealt: [{name: 'bug', value: 1}, {name: 'dark', value: 1}],
            damage_taken: [{name: 'bug', value: 0.5}, {name: 'dark', value: 1}]
        }
    ]
    abilities: [
        {
            name: 'Overgrow',
            summary: 'Strengthens Grass moves to inflict 1.5× damage at 1/3 max HP or less.',
            effect: 'When this Pokémon has 1/3 or less of its HP remaining, its Grass-type moves inflict 1.5× as much regular damage.'
        }
    ],
    hidden_ability: {
        name: 'Chlorophyll',
        summary: 'Doubles Speed during strong sunlight.',
        effect: 'This Pokémon's Speed is doubled during strong sunlight.'
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
        {
            name: 'Synthesis',
            type: {
                name: 'Grass',
                damage_dealt: [{name: 'bug', value: 0.5}, {name: 'dark', value: 1}],
                damage_taken: [{name: 'bug', value: 2}, {name: 'dark', value: 1}]
            },
            summary: 'Heals the user by half its max HP. Affected by weather.',
            power: null,
            accuracy: null,
            target: ['self'],
            priority: 0
        },
        {
            name: 'Vine Whip',
            type: {
                name: 'Grass',
                damage_dealt: [{name: 'bug', value: 0.5}, {name: 'dark', value: 1}],
                damage_taken: [{name: 'bug', value: 2}, {name: 'dark', value: 1}]
            },
            summary: 'Inflicts regular damage with no additional effect.',
            power: 45,
            accuracy: 100,
            target: ['selected'],
            priority: 0
        }
    ],
    evolution_stage: 'basic',
    level: 1,
    evolution_level: 16,
    exp: 0,
    nickname: 'Robertinho'
}
```

Para o nosso pokemon crie alguns métodos:
- [ ] Usar um movimento - O treinador deve escolher um dos movimentos da lista de seu Pokemon. O método deve retornar uma string contendo `"Nome_do_Pokemon usou Nome_do_ataque"`. Se o movimento selecionado não existir deve retornar a string dizendo `"Nome_do_Pokemon não pode usar Nome_do_ataque"`;

- [ ] Treinar o pokemon - Esse método deve receber como parâmetro um número que irá ser adicionado aos pontos de experiência (`exp`) do pokemon. A cada 100 pontos seu pokemon sobe um nível (`level`) e os pontos de experiência são zerados;

- [ ] Evoluir o pokemon - Para evoluir seu pokemon, ele deve ter alcançado o nível mínimo necessário: `evolution_level`. Ao evoluir um pokemon, as propriedades do pokemon serão atualizadas de acordo com os valores recebidos como parâmetro.
Alterações:
	- O campo `name` será alterado conforme o parâmetro;
	- O campo `number` deve ser incrementado;
	- `type`, `abilities`, `hidden_ability`, `stats`, `moves` podem alterados (acrescentando ou removendo) ou permanecer os mesmos, conforme os parâmetros recebidos;
	- O campo `evolution_stage` deve seguir para o próximo de acordo com a lista no enunciado;
	- O `evolution_level` deve ser alterado conforme o parâmetro;
	- Pontos de experiência (`exp`) permanecem os mesmos;
	- O `nickname` não pode ser alterado.

O Professor Carvalho está esperando pelo seu trabalho! Divirta-se!

(Sugestão de alterações: caso não queira utilizar Pokemons, pense em alternativas que sigam a mesma linha de raciocínio, como um Tamagotchi ou animais da vida real, por exemplo. Mas as propriedades e métodos precisam ser os mesmos).

**Atividade de 15/10/2022:**
- Criar as funções construtoras com as propriedades, no modelo `Functional Instantiation with Shared Methods and Object.create()`.
- Criar alguns objetos para cada uma das funções construtoras criadas.
- Criar os métodos, mas ainda não precisa implementá-los ainda (só se quiser).

**Atividade de 18/10/2022:**
- Alterar funções construtoras para o modelo `Pseudoclassical Instantiation`.
- Implementar os métodos pedidos, caso ainda não tenha feito.
- Testar todas as funcionalidades.

---

Terminou o exercício? Dá uma olhada nessa checklist e confere se tá tudo certinho, combinado?!

- [ ] Fiz o fork do repositório.
- [ ] Clonei o fork na minha máquina (`git clone url-do-meu-fork`).
- [ ] Criei minha branch (`git checkout -b nome-sobrenome`)
- [ ] Criei a pasta com o meu nome dentro da pasta entregas (` mkdir nome-sobrenome`)
- [ ] Resolvi o exercício dentro da minha pasta. Como no [exemplo](/on21-imersao-js-S1-TDD/exercicios/para-casa/entregas/exemplo-nome-sobrenome/).
- [ ] Adicionei as mudanças. (`git add .` para adicionar todos os arquivos, ou `git add nome_do_arquivo` para adicionar um arquivo específico)
- [ ] Commitei a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
- [ ] Pushei os commits na minha branch (`git push origin nome-da-branch`)
- [ ] Criei um Pull Request seguindo as orientações que estao nesse [documento](/on21-imersao-js-S1-TDD/exercicios/para-casa/instrucoes-pull-request.md).
