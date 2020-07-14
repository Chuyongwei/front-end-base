// 代理

// let o = {
//   name: 'xiaoming',
//   price: 190
// }
// let d = new Proxy(o, {
//   get (target, key) {
//     if (key === 'price') {
//       return target[key] + 20
//     } else {
//       return target[key]
//     }
//   }
// })
// console.log(d.price, d.name)

let o = {
  name: 'xiaoming',
  price: 190
}

/* let d = new Proxy(o, {
  get (target, key) {
    return target[key]
  },
  set (target, key, value) { // o price 300 类 属性 值
    return false
  }
})
d.price = 300 // 因为set为false无法改变
console.log(d.price, d.name) */

/* for (const [key] of Object.entries(o)) { // entries将对象变为键值对
  // 属性描述符
  Object.defineProperty(o, key, {
    writable: false // 是否可写
  })
}
o.price = 300
console.log(o.name, o.price) */

// window.addEventListener('error', (e) => {
//   console.log(e.message)
//   // report('./')
// }, true)

// let validator = (target, key, value) => {
//   if (Reflect.has(target, key)) {
//     if (key === 'price') {
//       if (value > 300) {
//         throw new TypeError("price exceed 300")
//         // return false
//       } else {
//         target[key] = value
//       }
//     }
//   } else {
//     return false
//   }
// }
// let d = new Proxy(o, {
//   get (target, key) {
//     return target[key] || ''
//   },
//   set: validator
// })
// d.price = 543
// d.age = 'fdsf'
// console.log(d.price, d.name, d.age)

/*
// 如何将id随即赋值还不被改变
class Component {
  constructor () {
    this.proxy = new Proxy({
      id: Math.random().toString(36).slice(-8) // 36进制截取后8位
    }, {})
  }

  get id () {
    return this.proxy.id
  }
}

let com = new Component()
let com2 = new Component()
com.id = 43242
for (let i = 0; i < 10; i++) {
  console.log(com.id, com2.id)
}
*/

// 撤销 使用revoke将代理撤销
let d = Proxy.revocable(o, {
  get (target, key) {
    if (key === 'price') {
      return target[key] + 20
    } else {
      return target[key]
    }
  }
})
console.log(d.proxy.price, d)
setTimeout(function () {
  d.revoke()
  setTimeout(function () {
    console.log(d.proxy.price)
  }, 100)
}, 1000)
