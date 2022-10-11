<h1 align="center">
  <img src="assets/reprograma-fundos-claros.png" alt="logo reprograma" width="500">
</h1>

# Tema da Aula

Turma Online 21 - Imersão JavaScript | Semana 5 | 2022 | Professora: [Luara Kerlen](https://github.com/luarakerlen)

### Instruções
Antes de começar, vamos organizar nosso setup.
* Fork esse repositório 
* Clone o fork na sua máquina (Para isso basta abrir o seu terminal e digitar `git clone url-do-seu-repositorio-forkado`)
* Entre na pasta do seu repositório (Para isso basta abrir o seu terminal e digitar `cd nome-do-seu-repositorio-forkado`)
* [Add outras intrucoes caso necessario]

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
    - [Objetos](#objetos)
      - [Conceito](#conceito)
      - [Getters e Setters](#getters-e-setters)
    - [Abordagens](#abordagens)
    - [Implementação](#implementação)
  
  - [Outro Exemplo](#outro-exemplo)
    - [ETCETC](#etcetc)

  - [Exercícios](#exercícios)
  - [Material da aula](#material-da-aula)
  - [Links Úteis](#links-úteis)

# Conteúdo

## Recaptulando...
### Objetos
#### Conceito
O objeto JavaScript é um tipo de dados *não primitivo* que permite armazenar várias coleções de dados. 
Normalmente, são usados chaves `{...}`. Essa declaração é chamada de *objeto literal*.
Dessa maneira nós podemos simplesmente criar um objeto por colocar propriedades (cada par chave-valor) dentro das chaves:
  
```
let animal = {
  type: "cachorro",
  name: "Marco Antônio",
  age: 3,
  hobbies: ["brincar com bolinha", "latir pras motos", "comer"],
  "can I have": true,
};
```

Quando criamos um objeto literal, definimos no modelo chave-valor, ou seja, não é possível definir uma chave sem, necessariamente, passar um valor.

É possível acessar as propriedades de um objeto usando a notação de ponto: `console.log(animal.name)` ou a notação de colchetes: `console.log(animal["can I have"])`.
Lembrando que apesar de variáveis normalmente não poderem ser nomeadas com palavras reservadas, as propriedades de objetos não possuem essa restrição.
Também não há restrições quanto a tipos, é possível ter tipos primitivos, objetos ou até mesmo funções como valores de uma propriedade.

Como propriedade:
```
let animal = {
  type: "cachorro",
  //...
  eat: function eat() {
    console.log("O animal está comendo");
  }
};

//ou

let animal = {
  type: "cachorro",
  //...
  eat() {
    console.log("O animal está comendo");
  }
};
```

Expressão de Função:
```
animal.eat() {
  console.log("O animal está comendo");
}
```

Funções pré-existentes:
```
function eat() {
  console.log("O animal está comendo");
}

animal.eat = eat;
```

É comum que métodos precisem acessar informações que estão armazenadas em outras propriedades do objeto. 
Para acessar o objeto (suas propriedades), o método pode usar a palavra `this`:

```
let animal = {
  type: "cachorro",
  name: "Marco Antônio",
  age: 3,
  hobbies: ["brincar com bolinha", "latir pras motos", "comer"],
  "can I have": true,
  eat: function eat() {
    console.log(`O ${this.type} chamado ${this.name} está comendo");
  }
};
```

No JavaScript, `this` se comporta de maneira diferente da maioria das outras linguagens de programação.
Ele pode ser usado em qualquer função, mesmo que não seja um método de um objeto.
O valor de `this` é avaliado durante o tempo de execução, dependendo do contexto. Se não houver valor, `undefined` será retornado.

#### Getters e Setters
As propriedades de acesso são representadas pelos métodos "getter" e "setter".

`get` – uma função sem argumentos, que possui retorno e é utilizada para ler uma propriedade do objeto.

```
const animal = {
  type: "cachorro",
  name: "Marco Antônio",
  age: 3,
  hobbies: ["brincar com bolinha", "latir pras motos", "comer"],
  "can I have": true,
  
  eat: function eat() {
    console.log(`O ${this.type} chamado ${this.name} está comendo");
  }
  
  get name() {
    return this.name;
  }
  
  get presentation() {
    return `${this.name}, é um ${this.type} e tem ${this.age} anos`;
  }
}

console.log(animal.name);
console.log(animal.presentation);
```

`set` – uma função com um argumento, sem retorno, que é chamada para dar um valor pra uma propriedade do objeto.

```
const animal = {
  type: "cachorro",
  name: "Marco Antônio",
  age: 3,
  hobbies: ["brincar com bolinha", "latir pras motos", "comer"],
  "can I have": true,
  
  eat: function eat() {
    console.log(`O ${this.type} chamado ${this.name} está comendo");
  }

  get name() {
    return this.name;
  }

  set name(newName) {
    this.name = newName;
  }
};

console.log(animal.name);
animal.name = "João Paulo";
console.log(animal.name);
```

A utilização de objetos literais é simples, mas a medida que o código fica complexo, muitas vezes é inviável utilizar dessa maneira.
Quando olhamos pra Orientação a Objetos, vemos um paradigma que é muito útil na estruturação do código em diversos momentos.

Como já sabemos, na Orientação a Objetos, nós temos as chamadas *CLASSES*, que *modelam* um *OBJETO*:

```
class Animal {
  type;
  name;
  age;
}
```
Diferente do objeto literal, quando criamos uma classe, geralmente não definimos os vallores das suas propriedades dentro dela, mas sim no objeto que criamos a partir dela.

No exemplo acima, a classe *Animal* modela como devem ser os objetos animais que fforem *instanciados*, ou seja, criados a partir dela.
Vemos então que um animal criado a partir da classe *Animal*, a princício, possui um type, um name e uma age.

```
const animal1 = new Animal();
animal1.type = cachorro;
animal1.name = "Marco Antônio";
animal1.age = 3;

console.log(animal1);
```

Mas ao instanciar um objeto do tipo Animal, eu não sou obrigada a definir nenhum desses parâmetros, então é  possível criar um animal sem type, por exemplo.

```
const animal2 = new Animal();
animal2.name = "Josefa";
animal2.age = 1;

console.log(animal2);
console.log(animal2.type); //undefined
```

## Função Construtora
Para garantir que o meu objeto tenha todas as propriedades obrigatórias para a sua existência, existem os `constructors`, ou construtores.



## Prototype

## Exemplo  
  #### O que são e para que servem
  [CONTEUDO]

  #### Benefícios
  [CONTEUDO]

  #### Abordagens
  [CONTEUDO]

  #### Implementação
  [CONTEUDO]

## Outro Exemplo
   #### ETCETC
   [CONTEUDO]


***
### Exercícios 
* [Exercicio para sala](/exercicios/para-sala/)
* [Exercicio para casa](/exercicios/para-casa/)

### Material da aula 
* [Material](/material)

### Links Úteis
* 

<p align="center">
Desenvolvido com :purple_heart:  
</p>

