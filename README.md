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
    - [Objetos Literais](#objetos-literais)
    - [Pensando além](#indo-alem)
  - [Função Construtora](#funcao-construtora)
  - [Prototype](#prototype)

  - [Exercícios](#exercícios)
  - [Material da aula](#material-da-aula)
  - [Links Úteis](#links-úteis)

# Conteúdo

## Recaptulando...
### Objetos Literais
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

ou

```
let animal = {};

animal.type = "cachorro",
animal.name = "Marco Antônio",
animal.age = 3,
animal.hobbies = ["brincar com bolinha", "latir pras motos", "comer"],
animal["can I have"] = true,
```

As duas maneiras de criar um objeto são válidas.

É possível acessar as propriedades de um objeto usando a notação de ponto: `console.log(animal.name)` ou a notação de colchetes: `console.log(animal["can I have"])`.

Caso eu tente acessar uma propriedade inexistente, o programa retorna *undefined*.

```
console.log(animal.email); //undefined
```

Lembrando que apesar de variáveis normalmente não poderem ser nomeadas com palavras reservadas, as propriedades de objetos não possuem essa restrição.
Também não há restrições quanto a tipos, é possível ter tipos primitivos, objetos ou até mesmo funções como valores de uma propriedade.

_Como propriedade:_
```
let animal = {
  type: "cachorro",
  //...
  eat: function eat() {
    return "O animal está comendo";
  }
};
```

ou

```
let animal = {
  type: "cachorro",
  //...
  eat() {
    return "O animal está comendo";
  }
};
```

_Expressão de Função:_
```
let animal = {};

animal.type = "cachorro",
//...
animal.eat = function eat() {
  return "O animal está comendo";
}
```

_Funções pré-existentes:_
```
function eat() {
  return "O animal está comendo";
}

let animal = {};

animal.type = "cachorro",
//...
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
    return `O ${this.type} chamado ${this.name} está comendo`;
  }
};
```

No JavaScript, `this` se comporta de maneira diferente da maioria das outras linguagens de programação.
Ele pode ser usado em qualquer função, mesmo que não seja um método de um objeto.
O valor de `this` é avaliado durante o tempo de execução, dependendo do contexto. Se não houver valor, `undefined` será retornado.

**Vamos aplicar?**
[Exercício 1](/exercicios/para-sala/exercicio-1)

### Pensando além
Da maneira que criamos o objeto animal acima, toda vez que eu quiser criar um novo animal, será necessário repetir todo esse código, o que pode ser completamente inviável a depender do tamanho e complexidade do nosso código.

Então, vamos pensar um pouco além...

Como vocês acham que é possível reutilizar o código de um objeto literal, como o escrito anteriormente, para criar outros animais sem precisar reescrever tudo novamente?

Nós podemos colocar todo esse código dentro de uma função, para que seja possível criar outros objetos semelhantes:

```
function Animal() {
  let animal = {
    type: 'cachorro',
    name: 'Marco Antônio,
    age: 3,

    eat: function eat() {
      return `O ${this.type} chamado ${this.name} está comendo`;
    }
  }

  return animal;
}
```
ou
```
function Animal() {
  let animal = {}

  animal.type = 'cachorro';
  animal.name = 'Marco Antônio';
  animal.age = 3;
  
  animal.eat = function eat() {
    return `O ${this.type} chamado ${this.name} está comendo`;
  };

  return animal;
}
```
```
const animal1 = Animal();
const animal2 = Animal();
```

Porém, dessa maneira, todos os objetos criados a partir da função Animal têm os mesmos dados, pois eles estão fixos dentro da função.

Portanto, precisamos receber os valores das propriedades dinamicamente, para cada animal que for criado.

## Função Construtora
Nós temos então o que chamamos de *Função Construtora*, que são funções que "constroem" um novo objeto a partir das propriedades que ela, obrigatoriamente, deve receber de qualquer instância de objeto que a invocar.

Vocês aprenderam em orientação a objetos, que uma classe possui um constructor, responsável por receber parâmetros e associá-los ao objeto que está sendo criado.
A ideia de uma função construtora é muito semelhante.
Ela recebe parâmetros para construir um objeto com esses valores.

```
function Animal(type, name, age) {
  let animal = {}

  animal.type = type;
  animal.name = name;
  animal.age = age;
  
  animal.eat = function eat() {
    return `O ${this.type} chamado ${this.name} está comendo`;
  };

  return animal;
}
```
ou
```
function Animal(type, name, age) {
  let animal = {
    type: type,
    name: name,
    age: age,

    eat: function eat() {
      return `O ${this.type} chamado ${this.name} está comendo`;
    }
  }

  return animal;
}
```
ou ainda
```
function Animal(type, name, age) {
  let animal = {
    type,
    name,
    age,

    eat: function eat() {
      return `O ${this.type} chamado ${this.name} está comendo`;
    }
  }

  return animal;
}
```
```
const animal1 = Animal("cachorro", "Marco Antônio", 3);
const animal2 = Animal("gato", "Frida", 1);
```

**Nos exemplos acima, estamos criando uma função que recebe parâmetros, cria um objeto utilizando os parâmetros recebidos como valores das propriedades desse objeto e, por fim, retorna esse objeto criado para quem chamou a função.**

**Vamos aplicar?**
[Exercício 2](/exercicios/para-sala/exercici-2)
## Prototype

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

