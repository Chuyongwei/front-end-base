/* let x = 1; let y = 2; let z = 3
let obj = {
  x,
  y,
  [z + y]: 6,
  * hello () {
    console.log('hello')
  }
}

console.log(obj)
obj.hello() */

/* // Set
// 无序不重复
let s = new Set()
// let s = new Set([1, 2, 3, 4, 5])
// s.add('hello')
// s.add('goodbye')
s.add('hello').add('goodbye')
// s.delete('hello')
// s.clear()
console.log(s.has('hello3'), s.size)
// console.log(s.keys()) // 遍历器
// console.log(s.values())
// console.log(s.entries())
s.forEach(item => { // 遍历
  console.log(item)
}) */

/* // map
let map = new Map([[1, 'value-3'], [3, 'value-4']])
// map.set(1,4)
// map.delete(1)
console.log(map.get(1))// 获取键的值
console.log(map.has(2))// 检查是否存在该键

console.log(map)
console.log(map.keys(), map.values(), map.entries()) // 各种的遍历

// map.forEach((value, key) => {
//   console.log(value, key)
// })

for (let [key, value] of map) {
  console.log(key, value)
}
// 键可以是function
let o = function () {
  console.log("0")
}
map.set(o, 4)
console.log(map.get(o))
 */

const target = {
  a: {
    b: {
      c: {
        d: 5
      }
    },
    e: 35,
    f: 5,
    h: 10
  }
}
// const source = { b: 4, c: 5 }
const source = {
  a: {
    b: {
      c: {
        d: 1
      }
    },
    e: 3,
    f: 4
  }

}
Object.assign(target, source) // 拷贝 现在
console.log(target, source)
