// function loop () {
//   for (let i = 0; i < 5; i++) {
//     console.log(i)
//   }
// }

// loop()

/* // function * 迭代器 使用yield打断点 next()方法继续进行
function * loop () {
  for (let i = 0; i < 5; i++) {
    yield console.log(i)
  }
}

const l = loop()

l.next()
l.next()
l.next() */

/* // 测试返回值
function* gen () {
  let val
  val = yield* [1, 2, 3] // 因为是个数不是输出所以没反应
  console.log(val)
}

const l = gen()

console.log(l)
console.log(l.next())// 找业务和函数结尾
// l.next()// 意思就是业务的返回值是undefined
console.log(l.next()) */

/* function * gen () {
  let val
  val = (yield [1, 2, 3]) + 7
  console.log(val)
}

const l = gen()
console.log(l.next(10)) // 业务的返回值为10 外部传到yield的点给val值
// console.log(l.return(100))
console.log(l.next(20))
 */

/*
// 报错
function * gen () {
  while (true) {
    try {
      yield 1
    } catch (e) {
      console.log(e.message)
    }
  }
}

const g = gen()
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())
g.throw(new Error('ss')) // 报错继续运行
console.log(g.next()) */

// function draw (first = 1, second = 3, third = 5) {
//   let firstPrize = ['1A', '1B', '1C', '1D']
//   let secondPrize = ['2A', '2B', '2C', '2D', '2E', '2F']
//   let thirdPrize = ['3A', '3B', '3C', '3D', '3E', '3F', '3E', '3F']
//   let result = []
//   let random
//   for (let i = 0; i < first; i++) {
//     random = Math.floor(Math.random() * firstPrize.length)
//     result = result.concat(firstPrize.splice(random, 1))
//   }
//   for (let i = 0; i < second; i++) {
//     random = Math.floor(Math.random() * secondPrize.length)
//     result = result.concat(secondPrize.splice(random, 1))
//   }
//   for (let i = 0; i < third; i++) {
//     random = Math.floor(Math.random() * thirdPrize.length)
//     result = result.concat(thirdPrize.splice(random, 1))
//   }
//   return result
// }
// let t = draw()
// for (let value of t) {
//   console.log(value)
// }

/* function * draw (first = 1, second = 3, third = 5) {
  let firstPrize = ['1A', '1B', '1C', '1D']
  let secondPrize = ['2A', '2B', '2C', '2D', '2E', '2F']
  let thirdPrize = ['3A', '3B', '3C', '3D', '3E', '3F', '3E', '3F']
  let count = 0
  let random
  while (1) {
    if (count < first) {
      random = Math.floor(Math.random() * firstPrize.length)
      yield firstPrize[random]
      count++
      firstPrize.splice(random, 1)
    } else if (count < first + second) {
      random = Math.floor(Math.random() * secondPrize.length)
      yield secondPrize[random]
      count++
      secondPrize.splice(random, 1)
    } else if (count < first + second + third) {
      random = Math.floor(Math.random() * thirdPrize.length)
      yield thirdPrize[random]
      count++
      thirdPrize.splice(random, 1)
    }
  }
}

let d = draw()

console.log(d.next().value)
console.log(d.next().value)
console.log(d.next().value)
console.log(d.next().value) */
