/* function f (x, y, z) {
  if (y === undefined) {
    y = 7
  }
  if (z === undefined) {
    z = 42
  }
  return x + y + z
}

console.log(f(3))

function f6 (x, y = 7, z = x + y) {
  // console.log(Array.from(arguments)) // arguments: 当前函数的参数情况 es6 不允许使用
  console.log(f6.length) // 查看
  return x * 10 + z
}

console.log(f6(1, 4, 5, 6))
 */

/* function sum () {
  let num = 0
  Array.prototype.forEach.call(arguments, function (item) {
    num += item * 1
  })

  // Array.from(arguments).forEach(function (item) {
  //   num += item * 1
  // })
  return num
}

console.log(sum(1, 2, 3)) */

/*
// 函数不确定的情况
 function sum (base, ...nums) {
  // Rest paraameter
  let num = 0
  nums.forEach(function (item) {
    num += item * 1
  })
  return base * 2 + num
}

console.log(sum(1, 2, 3, 5)) */

/* function sum (x, y, z) {
  return x + y + z
}

let data = [4, 5, 6]

console.log(sum(...data))
console.log(sum.apply(this, data)) */

// 箭头函数
// () => {}

// let hello = (name, city) => {
//   console.log('hello world', name, city)
// }

// hello('immoc', '背景')

// let sum = (x, y, z) => x + y + z
// console.log(sum(1, 2, 4))

// let sum = (x, y, z) => ({
//   x: x,
//   y: y,
//   z: z
// })
// console.log(sum(1, 2, 4))

// let test = {
//   name: 'test',
//   say: () => {
//     console.log(this.name, this) 
//   }
// }
// test.say()
