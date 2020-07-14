/*
let Animal = function (type) {
  this.type = type
}

Animal.prototype.eat = function () {
  console.log('I am eat food')
}

let dog = new Animal('dog')
let monkey = new Animal('Monkey')
console.log(dog)
console.log(monkey)
// dog.eat = function () {
//   console.log('error')
// }

dog.constructor.prototype.eat = function () {
  console.log('error')
}
dog.eat()
monkey.eat()
*/

/*
// ES6创建
class Animal {
  constructor (type) {
    this.type = type
  }

  eat () {
    console.log('I am eat food')
  }
}

let dog = new Animal('dog')
let monkey = new Animal('Monkey')

// eslint-disable-next-line no-irregular-whitespace
console.log(dog) // Animal{type: "dog"}
console.log(monkey)
dog.eat()
monkey.eat()

console.log(typeof Animal) // function
*/

// eslint-disable-next-line no-unused-vars
/* let _age = 4
class Animal {
  constructor (type) {
    this.type = type
  }
  get age () {
    return _age
  }
  set age (val) {
    if (val < 7 && val > 4) {
      _age = val
    }
  }

  eat () {
    console.log('I am eat food')
  }
}
let dog = new Animal('dog')
console.log(dog.age)
dog.age = 6
console.log(dog.age) */

/* 
// 类的调用方法
let Animal = function (type) {
  this.type = type
}

Animal.prototype.eat = function () {
  Animal.walk()
  console.log('i am eat food hello')
}

Animal.walk = function () {
  console.log('i am walk')
}

let dog = new Animal('dog')
dog.eat()
 */

/* class Animal {
  constructor (type) {
    this.type = type
  }
  eat () {
    Animal.walk()
    console.log('i am eat food')
  }
  static walk () { // 静态方法属于类的
    console.log('i am waling')
  }
}

let dog = new Animal('dog')
dog.eat() */

/* let Animal = function (type) {
  this.type = type
}

Animal.prototype.eat = function () {
  Animal.walk()
  console.log('i am eat food hello')
}

Animal.walk = function () {
  console.log('i am walk')
}

let Dog = function () {
  // 初始化父类的构造函数
  Animal.call(this, 'dog')
  this.run = function () {
    console.log('i can run')
  }
}
// 引用
Dog.prototype = Animal.prototype

let dog = new Dog()
dog.run()
console.log(dog.type) */

class Animal {
  constructor (type) {
    this.type = type
  }
  eat () {
    Animal.walk()
    console.log('i am eat food')
  }
  static walk () { // 静态方法属于类的
    console.log('i am waling')
  }
}

class Dog extends Animal {
  constructor (type) {
    super('dog')// 不管如何参数要与父类的一样
    this.age = 2
  }
}
let dog = new Dog()
dog.eat()
console.log(dog.type)
