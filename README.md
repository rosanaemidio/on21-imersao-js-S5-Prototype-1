<h1 align="center">
  <img src="assets/reprograma-fundos-claros.png" alt="logo reprograma" width="500">
</h1>

# Tema da Aula

Turma Online 21 - Imersão JavaScript | Semana 5 | 2022 | Professora: [Luara Kerlen](https://github.com/luarakerlen)

### Instruções

Antes de começar, vamos organizar nosso setup.

- Fork esse repositório
- Clone o fork na sua máquina (Para isso basta abrir o seu terminal e digitar `git clone url-do-seu-repositorio-forkado`)
- Entre na pasta do seu repositório (Para isso basta abrir o seu terminal e digitar `cd nome-do-seu-repositorio-forkado`)
- [Add outras intrucoes caso necessario]

### Objetivo

- Relembrar os conceitos relacionados a objeto em Javascript;
- Aprender conceitos de função construtora e tipos de instanciação;
- Aprender utilização de prototype em JS.

### Resumo

O que veremos na aula de hoje?

- [Tema da Aula](#tema-da-aula)

  - [Instruções](#instruções)
  - [Objetivo](#objetivo)
  - [Resumo](#resumo)

- [Conteúdo](#conteúdo)

  - [Recaptulando](#recaptulando)
    - [Objetos Literais](#objetos-literais)
    - [Pensando além](#pensando-além)
  - [Função Construtora](#função-construtora)
    - [Functional Instantiation](#functional-instantiation)
    - [Functional Instantiation with Shared Methods](#functional-instantiation-with-shared-methods)
    - [Prototypal Instantiation](#prototypal-instantiation)
    - [Pseudoclassical Instantiation](#pseudoclassical-instantiation)
    - [ES6 Instantiation](#es6-instantiation)
  - [Prototype](#prototype)

- [Exercícios](#exercícios)
- [Material da aula](#material-da-aula)
- [Links Úteis](#links-úteis)

# Conteúdo

## Recaptulando...

### Objetos Literais

O objeto JavaScript é um tipo de dados _não primitivo_ que permite armazenar várias coleções de dados.
Normalmente, são usados chaves `{...}`. Essa declaração é chamada de _objeto literal_.
Dessa maneira nós podemos simplesmente criar um objeto por colocar propriedades (cada par chave-valor) dentro das chaves:

```javascript
let animal = {
	type: 'cachorro',
	name: 'Marco Antônio',
	age: 3,
	hobbies: ['brincar com bolinha', 'latir pras motos', 'comer'],
	'can I have': true,
};
```

ou

```javascript
let animal = {};

animal.type = 'cachorro';
animal.name = 'Marco Antônio';
animal.age = 3;
animal.hobbies = ['brincar com bolinha', 'latir pras motos', 'comer'];
animal['can I have'] = true;
```

As duas maneiras de criar um objeto são válidas. Nós vamos utilizar como está na segunda maneira, que é a maneira que mais encontramos pela internet quando falamos de protótipos com JavaScript, mas ambas estão corretas.

É possível acessar as propriedades de um objeto usando a notação de ponto: `console.log(animal.name)` ou a notação de colchetes: `console.log(animal["can I have"])`.

Caso eu tente acessar uma propriedade inexistente, o programa retorna _undefined_.

```javascript
console.log(animal.email); //undefined
```

Lembrando que apesar de variáveis normalmente não poderem ser nomeadas com palavras reservadas, as propriedades de objetos não possuem essa restrição.
Também não há restrições quanto a tipos, é possível ter tipos primitivos, objetos ou até mesmo funções como valores de uma propriedade.

_Como propriedade:_

```javascript
let animal = {
	type: 'cachorro',
	//...
	eat: function eat() {
		console.log('O animal está comendo');
	},
};
```

ou

```javascript
let animal = {
	type: 'cachorro',
	//...
	eat() {
		console.log('O animal está comendo');
	},
};
```

_Expressão de Função:_

```javascript
let animal = {};

(animal.type = 'cachorro'),
	//...
	(animal.eat = function eat() {
		console.log('O animal está comendo');
	});
```

_Funções pré-existentes:_

```javascript
function eat() {
	console.log('O animal está comendo');
}

let animal = {};

(animal.type = 'cachorro'),
	//...
	(animal.eat = eat);
```

É comum que métodos precisem acessar informações que estão armazenadas em outras propriedades do objeto.
Para acessar o objeto (suas propriedades), o método pode usar a palavra `this`:

```javascript
let animal = {
	type: 'cachorro',
	name: 'Marco Antônio',
	age: 3,
	hobbies: ['brincar com bolinha', 'latir pras motos', 'comer'],
	'can I have': true,
	eat: function eat() {
		console.log(`O ${this.type} chamado ${this.name} está comendo`);
	},
};
```

ou

```javascript
let animal = {};

animal.type = 'cachorro';
animal.name = 'Marco Antônio';
animal.age = 3;
animal.hobbies = ['brincar com bolinha', 'latir pras motos', 'comer'];
animal['can I have'] = true;

animal.eat = function eat() {
	console.log(`O ${this.type} chamado ${this.name} está comendo`);
};
```

No JavaScript, `this` se comporta de maneira diferente da maioria das outras linguagens de programação.
Ele pode ser usado em qualquer função, mesmo que não seja um método de um objeto.
O valor de `this` é avaliado durante o tempo de execução, dependendo do contexto. Se não houver valor, `undefined` será retornado.

#### → Vamos aplicar? [Exercício 1](/exercicios/para-sala/exercicio-1)

### Pensando além

Da maneira que criamos o objeto animal acima, toda vez que eu quiser criar um novo animal, será necessário repetir todo esse código, o que pode ser completamente inviável a depender do tamanho e complexidade do nosso código.

Então, vamos pensar um pouco além...

**Pergunta:**
Como vocês acham que é possível reutilizar o código de um objeto literal, como o escrito anteriormente, para criar outros animais sem precisar reescrever tudo novamente?

**Resposta**
Nós podemos colocar todo esse código dentro de uma função, para que seja possível criar outros objetos semelhantes:

```javascript
function Animal() {
	let animal = {};

	animal.type = 'cachorro';
	animal.name = 'Marco Antônio';
	animal.age = 3;

	animal.eat = function eat() {
		console.log(`O ${this.type} chamado ${this.name} está comendo`);
	};

	return animal;
}

const animal1 = Animal();
const animal2 = Animal();

console.log('Animal 1: ', animal1);
console.log('Animal 2: ', animal2);
```

Porém, dessa maneira, todos os objetos criados a partir da função Animal têm os mesmos dados, pois eles estão fixos dentro da função.

**Pergunta:**
Como fazer para criar diferentes objetos de uma maneira dinâmica?

**Resposta:**
Precisamos receber os valores das propriedades dinamicamente, para cada animal que for criado.

## Função Construtora

Nós temos então o que chamamos de _Função Construtora_, que são funções que "constroem" um novo objeto a partir das propriedades que ela, obrigatoriamente, deve receber de qualquer instância de objeto que a invocar.

Vocês aprenderam em orientação a objetos, que uma classe possui um _constructor_, responsável por receber parâmetros e associá-los ao objeto que está sendo criado.
A ideia de uma função construtora é muito semelhante.
Ela recebe parâmetros para construir um objeto com esses valores.

```javascript
function Animal(type, name, age) {
	let animal = {};

	animal.type = type;
	animal.name = name;
	animal.age = age;

	animal.eat = function eat() {
		console.log(`O ${this.type} chamado ${this.name} está comendo`);
	};

	return animal;
}

const animal1 = Animal('cachorro', 'Marco Antônio', 3);
const animal2 = Animal('gato', 'Frida', 1);

console.log('Animal 1: ', animal1);
console.log('Animal 2: ', animal2);

animal1.eat(); //O cachorro chamado Marco Antônio está comendo
animal2.eat(); //O gato chamado Frida está comendo
```

**Nos exemplos acima, estamos criando uma função que recebe parâmetros, cria um objeto utilizando os parâmetros recebidos como valores das propriedades desse objeto e, por fim, retorna esse objeto criado para quem chamou a função.**

Em resumo:
Uma função construtora é função especial que cria e inicializa uma instância de um objeto.
O propósito de um construtor é criar um novo objeto a partir das propriedades existentes de outro objeto, sem que haja repetição de código.

#### → Vamos aplicar? [Exercício 2](/exercicios/para-sala/exercicio-2)

Existem diversos modos ou tipos de instanciação, os que serão abordados ao longo do curso são:

- [ ] Functional Instantiation (Instanciação Funcional)
- [ ] Functional Instantiation with Shared Methods (Instanciação Funcional com métodos compartilhados)
- [ ] Prototypal Instantiation (Instanciação Prototípica)
- [ ] Pseudoclassical Instantiation (Instanciação Pseudoclássica)
- [ ] ES6 Instantiation (Instanciação ES6)

### Functional Instantiation

Uma função construtora do tipo _Functional_ é a que estamos utilizando até o momento:

```javascript
function Animal(type, name, age) {
	let animal = {};

	animal.type = type;
	animal.name = name;
	animal.age = age;

	animal.eat = function eat() {
		console.log(`O ${this.type} chamado ${this.name} está comendo`);
	};

	return animal;
}
```

Essa é a maneira mais simples e intuitiva de criar uma função construtora.
Nesse caso, primeiro criamos uma função. Dentro da função criamos um objeto e adicionamos propriedades e métodos a ele. Em seguida, retornamos esse objeto.

Toda vez que a função for chamada teremos acesso às propriedades e métodos que foram criados.

```javascript
const animal1 = Animal('cachorro', 'Marco Antônio', 3);
const animal2 = Animal('gato', 'Frida', 1);

console.log('Animal 1: ', animal1);
console.log('Animal 2: ', animal2);

animal1.eat(); //O cachorro chamado Marco Antônio está comendo
animal2.eat(); //O gato chamado Frida está comendo
```

#### → Vamos aplicar? [Exercício 3](/exercicios/para-sala/exercicio-3)

#### Vantagens da Functional Instantiation:

- Fácil de aprender e de aplicar;
- Fácil de ler.

#### Desvantagens da Functional Instantiation:

- Os métodos estão contidos na função, então toda vez que se cria uma nova instância desse objeto, todas as propriedades e métodos na memória são recriados;
  - Cada um desses métodos não é apenas dinâmico, mas também completamente genérico. O que isso significa é que não há razão para recriar esses métodos como estamos fazendo atualmente sempre que criamos um novo animal. Estamos apenas desperdiçando memória e tornando cada objeto animal maior do que precisa ser.

<p align="center">
  <img width="700px" src="https://user-images.githubusercontent.com/26902816/195221636-40492884-30af-427b-81f9-34a3dc2ba873.png" />
</p>

- Se você criar um novo objeto usando esta função, alterar um métodos da função e criar uma nova instância, os dois objetos criados farão referência a métodos diferentes.

```javascript
function Animal(type, name, age) {
	let animal = {};

	animal.type = type;
	animal.name = name;
	animal.age = age;

	animal.eat = function eat() {
		console.log(`O ${this.type} chamado ${this.name} está comendo`);
	};

	return animal;
}

const animal1 = Animal('cachorro', 'Marco Antônio', 3);
animal1.eat(); //O cachorro chamado Marco Antônio está comendo

Animal = (type, name, age) => {
	let animal = {};

	animal.type = type;
	animal.name = name;
	animal.age = age;

	animal.eat = function eat() {
		console.log(`${this.name} é um animal do tipo ${this.type} e está comendo`);
	};

	return animal;
};

const animal2 = Animal('gato', 'Frida', 1);
animal2.eat(); //Frida é um animal do tipo gato está comendo
```

### Functional Instantiation with Shared Methods

Ou apenas Functional Shared Instantiation.

A função construtora do tipo _Functional Shared_ busca sanar a limitação de memória da instanciação funcional, tornando os métodos compartilhados entre todos os objetos.

```javascript
const animalMethods = {
	eat: function eat() {
		console.log(`O ${this.type} chamado ${this.name} está comendo`);
		this.energy += 5;
		console.log(`Energia atual: ${this.energy}`);
	},

	sleep: function sleep(amount) {
		console.log(`O ${this.type} chamado ${this.name} está dormindo`);
		this.energy += amount;
		console.log(`Energia atual: ${this.energy}`);
	},
};

function Animal(type, name, age) {
	let animal = {};

	animal.type = type;
	animal.name = name;
	animal.age = age;
	animal.energy = 0;

	animal.eat = animalMethods.eat;
	animal.sleep = animalMethods.sleep;

	return animal;
}
```

1. Começamos criando uma função construtora com um objeto para o qual definimos suas propriedades dentro dessa função.
2. Os métodos são definidos em **outro objeto**.
3. Em seguida, estendemos nosso objeto com esses métodos.
4. No final, retornamos o objeto.

Cada objeto criado por instanciação compartilhada funcional terá um ponteiro para os mesmos métodos sem duplicação.

```javascript
const animal1 = Animal('cachorro', 'Marco Antônio', 3);
console.log(animal1);
animal1.eat();
animal1.sleep(10);

const animal2 = Animal('gato', 'Frida', 1);
console.log(animal2);
animal2.eat();
animal2.sleep(10);
```

#### → Vamos aplicar? [Exercício 4](/exercicios/para-sala/exercicio-4)

#### Vantagens da Functional Instantiation with Shared Methods:

- Remove a duplicação de métodos encontrados na instanciação funcional, o que melhora o gerenciamento de memória.

<p align="center">
  <img width="700px" src="https://user-images.githubusercontent.com/26902816/195227607-8aaf867d-13ec-40d3-953f-366241a339a8.png" />
</p>

#### Desvantagens da Functional Instantiation with Shared Methods:

- Os ponteiros para os métodos compartilhados são criados quando o objeto é instanciado. Se você modificar os métodos e depois criar novos objetos, o objeto original e o novo objeto farão referência a métodos diferentes.

```javascript
const animalMethods = {
	eat: function eat() {
		console.log(`O ${this.type} chamado ${this.name} está comendo`);
	},
};

function Animal(type, name, age) {
	let animal = {};

	animal.type = type;
	animal.name = name;
	animal.age = age;

	animal.eat = animalMethods.eat;

	return animal;
}

const animal1 = Animal('cachorro', 'Marco Antônio', 3);
animal1.eat(); //O cachorro chamado Marco Antônio está comendo

animalMethods.eat = function eat() {
	console.log(`${this.name} é um animal do tipo ${this.type} e está comendo`);
};

const animal2 = Animal('gato', 'Frida', 1);
animal2.eat(); //Frida é um animal do tipo gato está comendo
```

### Prototypal Instantiation

### Pseudoclassical Instantiation

### ES6 Instantiation

## Prototype

---

### Exercícios

- [Exercicio para sala](/exercicios/para-sala/)
- [Exercicio para casa](/exercicios/para-casa/)

### Material da aula

- [Material](/material)

### Links Úteis

-

<p align="center">
Desenvolvido com :purple_heart:  
</p>
