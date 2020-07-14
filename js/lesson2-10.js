/* console.log(Math.floor.apply(null, [3.72]))
console.log(Reflect.apply(Math.floor, null, [3.72]))
let price = 91.5
// if (price > 100) {
//   price = Math.floor.apply(null, [price]) // 先制定方法
// } else {
//   price = Math.ceil.apply(null, [price])
// }
price = price > 100 ? Math.floor.apply(null, [price]) : Math.ceil.apply(null, [price])
console.log(price)
console.log(Reflect.apply(price > 100 ? Math.floor : Math.ceil, null, [price])) // 执行时根据条件调用什么方法
 */

// let d = Reflect.construct(Date, [])
// console.log(d.getTime(), d instanceof Date)

// Reflact和object差不多，但是Reflact返回ture
const studen = {}
let r = Reflect.defineProperty(studen, 'name', { value: 'Mike' })// 修改属性
console.log(studen, r)
const obj = { x: 1, y: 2 }
// Reflect.deleteProperty(obj, 'x') // 删除属性
// console.log(obj)
// console.log(Reflect.get(obj, 'x'))

// console.log(Reflect.getOwnPropertyDescriptor(obj, 'x'))// 静态反射方法
// console.log(Reflect.has(obj, 'ds3')) // 该属性是否存在 objact没有
// Object.freeze(obj) // 冻结
console.log(Reflect.isExtensible(obj)) // 是否为可扩展

console.log(Reflect.ownKeys(obj)) // 返回所有的键

// Symbol es6没有用过
// Reflect.preventExtensions(obj) // 阻止扩展
// console.log(Reflect.isExtensible(obj))
Reflect.set(obj, 'z', 4)
console.log(obj)
const arr = ['duck', 'duck', 'duck']
// Reflect.set(arr, 2, 'goose')
// console.log(arr)
// console.log(Reflect.getPrototypeOf(arr)) // 获取原型对象
Reflect.setPrototypeOf(arr, String.prototype)
// arr.sort()
console.log(Reflect.getPrototypeOf(arr))
