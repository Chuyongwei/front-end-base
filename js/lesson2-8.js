// let arr = ['hello', 'world']
// let firstName = arr[0]
// console.log(firstName)
// let surName = arr[1]
// console.log(firstName, surName)

/* let arr = ['hello', 'world']
let [firstName, surName] = arr // 解构赋值
console.log(firstName, surName) */

// let arr = ['a', 'b', 'c', 'd']
/* let arr = 'abcd'
let [firstName, , thridName] = arr
console.log(firstName, thridName) */

/* let [firstName, , thridName] = new Set([1, 2, 3, 4])
console.log(firstName, thridName)

let user = { name: 's', surname: 't' };// 对象要加分号
[user.name, user.surname] = [1, 2]
console.log(user)
 */

/* let user = { name: 's', surname: 't' }
for (let [k, v] of Object.entries(user)) {
  // 隐式赋值显示索引
  console.log(k, v)
} */

/* let arr = [1, 2, 3, 4, 5, 6, 7, 8]
let [firstName, curName, ...last] = arr
console.log(firstName, curName, last)
 */

/* let options = {
  title: 'menu',
  width: 100,
  height: 200
}

// let { title: title2, width = 130, height } = options
// console.log(title2, width, height)

let { title, ...last } = options
console.log(title, last) */

let options = {
  size: {
    width: {
      size: {
        width: 100
      }
    },
    height: 200
  },
  items: ['Cake', 'Donut']
}

let { size: { width: { size: { width: width2 } }, height }, items: [item1] } = options
console.log(width2, height, item1)
